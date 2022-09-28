import { Loan } from "./Loan";

export class Vehicle {
    vid!:             number;
    vname!:           string;
    vmodel!:          string;
    showroomprice!:   number;
    onroadprice!:     number;
    aadharcardno!:    number;
    pancardno!:       string;
    photo!:           boolean;
    employmenttypes!: string;
    salaryslip!:      boolean;
    annualsalary!:    number;
    existingemi!:     boolean;
    loan!:            Loan;

}