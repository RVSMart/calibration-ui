
export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;

    constructor( id: number,
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        token: string){

            this.id = id;
            this.username  = username;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.token = token;
            


        }


        getId(): number { return this.id;}
        getUsername(): string { return this.username; };
        getPassword(): string { return this.password;}
        getFirstName(): string { return this.firstName; }
        getLastName(): string {return this.lastName; }
        getToken(): string { return this.token }






}
