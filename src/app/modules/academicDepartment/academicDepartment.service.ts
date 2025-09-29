import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";




const createAcademicDepartmentIntoDB = async(payload: TAcademicDepartment) =>{
    const result = await AcademicDepartment.create(payload)

    return result;

}

const getAllAcademicDepartmentsFromDB = async()=>{
    const result = await AcademicDepartment.find();
    return result;
}

const getSingleAcademicFacultyFromDB = async(id: string)=>{
    const result = await AcademicDepartment.findById(id);
    return result; 
}

const updateAcademicFacultyIntoDB = async(
    id: string,
    payload: Partial<TAcademicDepartment>,
)=>{
    
    const result = await AcademicDepartment.findOneAndUpdate({_id: id}, payload, {
        new: true,
    });
    return result;
}

export const AcademicFacultyServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentsFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyIntoDB,
}