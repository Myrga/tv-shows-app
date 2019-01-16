export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;

    constructor(id: number, 
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date, 
        nationality: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
    }
}