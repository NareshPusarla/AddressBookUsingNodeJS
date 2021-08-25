class AddressBook {
firstName;
lastName;
address;
city;
state;
zipCode;
phoneNumber;
email;

constructor(...params){
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zipCode = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
}
toString(){
    return "firstName: = "+this.firstName+", lastName: = "+this.lastName+", address: = "+this.address+", city: = "+this.city+", state: = "+this.state+", zipCode: = "+this.lastName+", phoneNumber: = "+this.phoneNumber+", email: = "+this.email;
}
}
let addressBook = new AddressBook("Naresh","Pusarla","Innispeta","Rajahmundry","A.P",53311,9502585296,"naresh@gmail.com");
console.log(addressBook.toString());