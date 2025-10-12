import QueryBuilder from "../../builder/QueryBuilder";
import { CourseSearchableFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { Course } from "./course.model"

const createCourseIntoDB = async (payload: TCourse) =>{
    const result = await Course.create(payload)
    return result;
}

const getAllCoursesFromDB = async(query: Record<string, unknown>)=>{
    const courseQuery = new QueryBuilder(Course.find().populate('preRequisiteCourses.course'), query)
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

    const result = await courseQuery.modelQuery;
    return result;
}

const getSingleCourseFromDB = async(id: string)=>{
    const result = await Course.findById(id).populate('preRequisiteCourses.course');
    return result;
}

const updateCourseIntoDB = async(id: string, payload: Partial<TCourse>)=>{
    const {preRequisiteCourses, ...CourseRemainingData} = payload;

    //step 1: Basic Course info Update
    const updatedBasicCourseInfo = await Course.findByIdAndUpdate(id, CourseRemainingData,{
        new: true,
        runValidators: true,
    },
    ) 

    //check if there is any preRequisite courses to update
    if(preRequisiteCourses && preRequisiteCourses.length >0){
        //Filter out the deleted fields
        const deletedPreRequisites = preRequisiteCourses.filter(el=> el.course && el.isDeleted).map(el=> el.course)
        
        const deletedPreRequisiteCourses = await Course.findByIdAndUpdate(id, {
            $pull: {preRequisiteCourses: {course: {$in: deletedPreRequisites}}}
        });

        //Filter out the New Course fields
    const newPreRequisites = preRequisiteCourses?.filter(el=> el.course && !el.isDeleted)
    
    const newPreRequisiteCourses = await Course.findByIdAndUpdate(id,{
        $addToSet: {preRequisiteCourses: {$each: newPreRequisites}}
    })

    }

    const result = await Course.findById(id).populate('preRequisiteCourses.course')
    
    return result;
}

const deleteCourseFromDB = async(id: string)=>{
    const result = await Course.findByIdAndUpdate(id,
        {isDeleted: true },
        {new: true },
    );
    return result;
}

export const CourseServices = {
    createCourseIntoDB,
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    updateCourseIntoDB,
    deleteCourseFromDB,
}