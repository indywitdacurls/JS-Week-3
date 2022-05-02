// Hard //
// let security= function() {
//     let pii = {
//         name: "India";
//         ssn: 123-45-6789
//     }
//     return pii.name


class School {
    // Initializes Properties
    constructor(name, age){
        // This is used as a Placeholder for object to be created. Allows us to access Properties.
        this.name=name;
        this.age=age;
    }
}


class SSN {
    #privatefield;
    constructor(){
        this.ssn=1234567689;
    }
}
let redSchool= new School("Jordon", 24)
console.log(redSchool.name);