export class Unitlocation {
    unitId:string;
    name:string;
    plotno:string;
    city:string;
    state:string;
    country:string;
    pincode:string;
    contactno:string;
    email:string;
    fax:string;

    constructor(  
        unitId:string,
        name:string,
        plotno:string,
        city:string,
        state:string,
        country:string,
        pincode:string,
        contactno:string,
        email:string,
        fax:string){
            this.unitId=unitId;
            this.name = name;
            this.plotno = plotno;
            this.city = city;
            this.state = state;
            this.country = country;
            this.pincode = pincode;
            this.contactno = contactno;
            this.email = email;
            this.fax = fax;

        }

        getUnitId():string{
            return this.unitId;
        }

        getName():string{ return this.name;}
        getPlotno():string{ return this.plotno;}
        getCity():string { return this.city;}
        getState():string{ return this.state;}
        getCountry():string{ return this.country;}
        getPincode():string{ return this.pincode;}
        getContactno():string{ return this.contactno;}
        getEmail():string{ return this.email;}
        getFax():string{ return this.fax;}
}
