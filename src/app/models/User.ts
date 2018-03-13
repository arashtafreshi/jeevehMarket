export class User {
    externalId:String;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    created_date: Date;
    gender: string;
    role: string;
    phone: Number;
    age: Number;
    address: {
        street_1: String,
        street_2: String,
        unit: String,
        city: String,
        country: String,
        zipcode: String
    };

    constructor() {
        this.externalId = "";
        this.firstName = "";
        this.middleName = "";
        this.lastName = "";
        this.email = null;
        this.created_date = null;
        this.gender = null;
        this.role = null;
        this.phone = null;
        this.age = null;
        this.address = {
            street_1: "",
            street_2: "",
            unit: "",
            city: "",
            country: "",
            zipcode: ""
        };
    }

    toString(): string {
        var str = {
            externalId:String,
            firstName: String,
            middleName: String,
            lastName: String,
            email: String,
            age: Number,
            gender: String,
            phone: Number,
            role: String,
            created_date: { type: Date, default: Date.now },
            address: {
                street_1: String,
                street_2: String,
                unit: String,
                city: String,
                country: String,
                zipcode: String
            }
        }
        return JSON.stringify(str);
    }
}
