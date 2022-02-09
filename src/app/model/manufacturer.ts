export class Manufacturer {

    mfgId:string;    
    name:string;
    address:string;
    city:string;
    state:string;
    country:string;
    zipcode:string;
    contactno:string;
    email:string;
    fax:string;

    constructor(
        mfgId:string,  
        name:string,
        address:string,
        city:string,
        state:string,
        country:string,
        zipcode:string,
        contactno:string,
        email:string,
        fax:string
    ){

        this.mfgId = mfgId;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipcode = zipcode;
        this.contactno = contactno;
        this.email = email;
        this.fax = fax;

    }


    getMfgId():string{return this.mfgId;}  
    getName():string{return this.name;}
    getAddress():string{return this.address;}
    getCity():string{return this.city;}
    getState():string{return this.state;}
    getCountry():string{return this.country;}
    getZipcode():string{return this.zipcode;}
    getContactno():string{return this.contactno;}
    getEmail():string{return this.email;}
    getFax():string { return this.fax;}
}
