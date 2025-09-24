import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester, TAcademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async(payload: TAcademicSemester) =>{

    //Semester name --> Semester code

    

    
    //
    if(academicSemesterNameCodeMapper[payload.name]!==payload.code){
        throw new Error('Invalid Semster Code')
    }

    
    const result = await AcademicSemester.create(payload)

    return result;

}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
}