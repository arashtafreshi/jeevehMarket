export class User {
    _id:string;
    _rev:string;
    readonly type:string = "user";
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    password:string;
    created_date: Date;
    active:boolean;
    gender: string;
    role: string;
    phone: Number;
    birthDate: Date;
    address: {
        street_1: String,
        street_2: String,
        unit: String,
        city: String,
        country: String,
        zipcode: String
    };
    profilePicture: string;
    _attachments:any;

    constructor() {
        this.firstName = "";
        this.middleName = null;
        this.lastName = "";
        this.email = null;
        this.password=null;
        this.created_date = new Date(Date.now());
        this.gender = null;
        this.role = null;
        this.active=true;
        this.phone = null;
        this.birthDate = null;
        this.address = {
            street_1: "",
            street_2: "",
            unit: "",
            city: "",
            country: "",
            zipcode: ""
        };
        this.profilePicture = null;
    }
}
