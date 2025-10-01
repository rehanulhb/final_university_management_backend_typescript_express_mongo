import status from "http-status";
import AppError from "../../errors/AppError";
import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester, TAcademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async(payload: TAcademicSemester) =>{

    //Semester name --> Semester code

    //
    if(academicSemesterNameCodeMapper[payload.name]!==payload.code){
        throw new AppError(status.NOT_FOUND,'Invalid Semster Code')
    }

    
    const result = await AcademicSemester.create(payload)

    return result;

}

const getAllAcademicSemestersFromDB = async()=>{
    const result = await AcademicSemester.find();
    return result;
}

const getSingleAcademicSemesterFromDB = async(id: string)=>{
    const result = await AcademicSemester.findById(id);
    return result; 
}

const updateAcademicSemesterIntoDB = async(
    id: string,
    payload: Partial<TAcademicSemester>,
)=>{
    if(payload.name && payload.code && academicSemesterNameCodeMapper[payload.name]!== payload.code){
        throw new AppError (status.NOT_FOUND,'Invalid Semester Code');
    }

    const result = await AcademicSemester.findOneAndUpdate({_id: id}, payload, {
        new: true,
    });
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB,
}