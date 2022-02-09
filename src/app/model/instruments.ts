export class Instruments {

    category:string;	
    name:string;
    instID:string;
    mfg:string;
    model:string;	
    supplier:string;	
    serialNo:string;
    installedAt:string;
    department:string;
    installeddt:String;
    expiryDt:string;
    status:boolean;

    constructor(
        category:string,
        name:string,
        instID:string,
        mfg:string,
        model:string,	
        supplier:string,	
        serialNo:string,
        installedAt:string,
        department:string,
        installeddt:String,
        expiryDt:string,
        status:boolean
    ){
        this.category =  category;	
        this.name = name;
        this.instID = instID;
        this.mfg = mfg;
        this.model = model;	
        this.supplier = supplier;	
        this.serialNo = serialNo;
        this.installedAt = installedAt;
        this.department = department;
        this.installeddt = installeddt;
        this.expiryDt = expiryDt;
        this.status = status;
    }


    getCategory():string{ return this.category;}
    getName():string { return this.name;}
    getInstID():string{ return this.instID;}
    getMfg():string{ return this.mfg;}
    getModel():string{ return this.model;}
    getSupplier():string{ return this.supplier;}	
    getSerialNo():string{ return this.serialNo;}
    getInstalledAt():string{ return this.installedAt;}
    getDepartment():string{ return this.department;}
    getInstalleddt():String{ return this.installeddt}
    getExpiryDt():string{ return this.expiryDt;}
    getStatus():boolean{ return this.status;}












}
