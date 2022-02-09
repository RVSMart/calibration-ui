export class Department {

    deptid:string;
    name:string;
    contact:string;
    email:string;
    hod:string;
    fax:string;

    constructor(
        deptid:string,
        name:string,
        contact:string,
        email:string,
        hod:string,
        fax:string,
    ){
        this.deptid = deptid;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.hod = hod;
        this.fax = fax;
    }


    getDeptid():string{ return this.deptid; }
    getName():string{ return this.name; }
    getContact():string{ return this.contact; }
    getEmail():string{ return this.email; }
    getHod():string{ return this.hod;}
    getFax():string{ return this.fax;}




}
