import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ModeOfEntry } from "../../../student-registration/studentRegistration.types";

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    department?: string;
    matriculationNumber?: string;
    modeOfEntry?: ModeOfEntry;
    programOfStudy?: string;
    yearOfEntry?: number;
}
