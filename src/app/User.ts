import { Vehicle } from "./Vehicle";


export class User {
    u_name!:   string;
    u_email!:  string;
    mob_no!:   number;
    status!:   string;
    gender!:   string;
    age!:      number;
    city!:     string;
    state!:    string;
    pincode!:  number;
    address!:  string;
    password!: string;
    //Vehicle!:Vehicle[];
    Vehicle=Object.assign({},Vehicle);
}



