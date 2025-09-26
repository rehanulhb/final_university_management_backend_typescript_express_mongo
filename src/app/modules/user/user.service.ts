import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //Create a User object

  const userData: Partial<TUser> = {};

  //if password is not given, use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //Year SemesterCode 4 Digit Number
  const generateStudentId = (payload: TAcademicSemester) =>{

  }



  //set auto generated id
  userData.id = generateStudentId();

  //create a user

  const newUser = await User.create(userData); //Built in static method

  // create a student
  if (Object.keys(newUser).length) {
    //set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //Reference_id

    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
