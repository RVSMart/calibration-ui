export class Employee {

    userid:string;
    firstname:string;
    lastname:string;
    middlename:string;
    joiningDate:Date;
    leadid:string;
    roleid:number;
    completeDate:Date;
    mobile:string;
    email:string;
    active:boolean;
    departmentId:number;
    locationId:number;

    constructor(
        userid:string,
        firstname:string,
        lastname:string,
        middlename:string,
        joiningDate:Date,
        leadid:string,
        roleid:number,
        completeDate:Date,
        mobile:string,
        email:string,
        active:boolean,
        departmentId:number,
        locationId:number
    ){
        this.userid = userid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.joiningDate = joiningDate;
        this.leadid = leadid;
        this.roleid = roleid;
        this.completeDate = completeDate;
        this.mobile = mobile;
        this.email = email;
        this.active = active;
        this.departmentId = departmentId;
        this.locationId = locationId;
    }


    getLocationId():number{
        return this.locationId;
    }

    getDepartmentId() : number{
        return this.departmentId;
    }

    getUserId() : string{
        return this.userid;
    }

    getLastname():String{
        return this.lastname;
    }

    getFirstname():String{
        return this.firstname;
    }

    getMiddlename():String{
        return this.middlename;
    }

    getJoiningDate():Date{
        return this.joiningDate;
    }
    getLeadid():string{
        return this.leadid;
    }
    getRoleid(): number{
        return this.roleid;
    }
    getCompleteDate():Date{
        return this.completeDate;
    };

    getMobile():string{
        return this.mobile;
    }
    
    getEmail():string{
        return this.email;
    }

    getActive():boolean{
        return this.active;
    }










}
