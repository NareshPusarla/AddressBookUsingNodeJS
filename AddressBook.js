class AddressBook {
    // firstName;
    // lastName;
    // address;
    // city;
    // state;
    // zipCode;
    // phoneNumber;
    // email;

    // constructor(...params) {
    //     this.firstName = params[0];
    //     this.lastName = params[1];
    //     this.address = params[2];
    //     this.city = params[3];
    //     this.state = params[4];
    //     this.zipCode = params[5];
    //     this.phoneNumber = params[6];
    //     this.email = params[7];
    // }

    get lastName() {
        return this._lastname;
    }

    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (nameRegex.test(lastName)) {
            this._lastname = lastName;
        }
        else throw 'LastName is incorrect';
    }

    get firstName() {
        return this._firstname;
    }

    set firstName(firstName) {
        console.log('came into set');
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (nameRegex.test(firstName)) {
            this.firstName = firstName;
        }
        else{ 
            throw 'FirstName is incorrect';
        }
    }

    toString() {
        return "firstName: = " + this.firstName + ", lastName: = " + this.lastName + ", address: = " + this.address + ", city: = " + this.city + ", state: = " + this.state + ", zipCode: = " + this.zipCode + ", phoneNumber: = " + this.phoneNumber + ", email: = " + this.email;
    }

}
//let addressBook = new AddressBook("naresh", "Pusarla", "Innispeta", "Rajahmundry", "A.P", 53311, 9502585296, "naresh@gmail.com");
let addressBook = new AddressBook();
addressBook.firstName = 'Naresh';
console.log(addressBook);
//console.log(addressBook.toString());

// try {
//     addressBook.firstName = "Raj";
//     console.log("priting address", addressBook.toString());
// } catch (e) {
//     console.error(e);
// }