const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User Already Exists');
  }
  const result = await Student.create(studentData); //Built in static method

  return result;
};

export const UserService = {
  createStudentIntoDB,
};
