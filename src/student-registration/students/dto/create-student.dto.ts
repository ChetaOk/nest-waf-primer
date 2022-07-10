import { CreateUserDto } from "../../../student-registration/users/dto/create-user.dto";
import { ModeOfEntry } from "../../../student-registration/studentRegistration.types";

export class CreateStudentDto {

    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly email: string;
    readonly dateOfBirth: Date;
    readonly nationality: string
    readonly address: string
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
    readonly user: CreateUserDto; //In case you want to create a user along with student

}
