class Address {
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    email;

    get getFirstName() {
        return this.firstName;
    }

    set setFirstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        try {
            if (nameRegex.test(firstName)) {
                this.firstName = firstName
            }
            else throw new Error();
        } catch (e) {
            console.log('firstName is incorrect');
        }
    }
    set setLastName(lastName) {
        let lastnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        try {
            if (lastnameRegex.test(lastName)) {
                this.lastName = lastName
            }
            else throw new Error();
        } catch (e) {
            console.log('lastName is incorrect');
        }
    }
    get getLastName() {
        return this.lastName;
    }

    set setAddress(address) {
        let addressRegex = RegExp('^[a-z]{3,}$');
        try {
            if (addressRegex.test(address)) {
                this.address = address
            }
            else throw new Error();
        } catch (e) {
            console.log('address is incorrect');
        }
    }
    get getAddress() {
        return this.address;
    }
    set setCity(city) {
        let cityRegex = RegExp('^[a-z]{3,}$');
        try {
            if (cityRegex.test(city)) {
                this.city = city
            }
            else throw new Error();
        } catch (e) {
            console.log('city is incorrect');
        }
    }
    get getCity() {
        return this.city;
    }
    set setState(state) {
        let stateRegex = RegExp('^[a-z]{3,}$');
        try {
            if (stateRegex.test(state)) {
                this.state = state
            }
            else throw new Error();
        } catch (e) {
            console.log('state is incorrect');
        }
    }
    get getState() {
        return this.state;
    }
    set setZipCode(zipCode) {
        let zipRegex = RegExp('^[0-9]{4,}$');
        try {
            if (zipRegex.test(zipCode)) {
                this.zipCode = zipCode
            }
            else throw new Error();
        } catch (e) {
            console.log('zipCode is incorrect');
        }
    }
    get getZipCode() {
        return this.zipCode;
    }
    set setPhoneNumber(phoneNumber) {
        let mobileRegex = RegExp('^[0-9]{10}$');
        try {
            if (mobileRegex.test(phoneNumber)) {
                this.phoneNumber = phoneNumber
            }
            else throw new Error();
        } catch (e) {
            console.log('phoneNumber is incorrect');
        }
    }

    get getPhoneNumber() {
        return this.phoneNumber;
    }
    set setEmail(email) {
        let emailRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        try {
            if (emailRegex.test(email)) {
                this.email = email
            }
            else throw new Error();
        } catch (e) {
            console.log('email is incorrect');
        }
    }
    get getEmail() {
        return this.email;
    }
}

let addressBook = new Array();

let person = new Address();
person.setFirstName = "Naresh";
person.setLastName = "Pusarla";
person.setAddress = "inni";
person.setCity = "rajahmundry";
person.setState = "andhra";
person.setZipCode = '533101';
person.setPhoneNumber = 9502574183;
person.setEmail = "naresh@gmail.com";
addressBook.push(person);


let person2 = new Address();
person2.setFirstName = "Vijay";
person2.setLastName = "Vasanth";
person2.setAddress = "hbsb";
person2.setCity = "tadepalligudem";
person2.setState = "andhra";
person2.setZipCode = '533101';
person2.setPhoneNumber = 9502574181;
person2.setEmail = "vijay@gmail.com";
addressBook.push(person2);

//console.log(addressBook);

editContactWithName = (name, nameTobeChangedTo) => {
    let val = addressBook.filter(value => {
        if (value.firstName === name)
            return value.setFirstName = nameTobeChangedTo;
    });
    if (!val.length)
        console.log(`contact with ${name} doesnt exist`);
}
//editContactWithName('sadgha', 'Testname');

deleteContactWithName = (name) => {
    addressBook = addressBook.filter(value => {
        if (value.firstName !== name)
            return value;
    });
}
//deleteContactWithName('Naresh');

getNumberofContactsInAddressBook = () => {
    return addressBook.length;
}
//console.log('number of contacts :', getNumberofContactsInAddressBook());

isContactAvailable = (name) => {
    let duplicateContacts = addressBook.filter(value => {
        if (value.firstName === name)
            return value;
    });
    console.log('dup ', duplicateContacts);
    if (duplicateContacts.length)
        return true;
    else
        return false;
}
// console.log('is contact available :' + isContactAvailable('Naresh'));
// console.log('is contact available :' + isContactAvailable('test'));

getContactswithCityOrState = (city, state) => {
    let contacts = addressBook.filter(value => {
        if (value.city === city || value.state === state)
            return value;
    })
    contacts.forEach(value => {
        console.log(value);
    })
}
//getContactswithCityOrState('rajahmundry', "andhra");

getNumberOfContactswithCityOrState = (city, state) => {
    return addressBook.filter(value => {
        if (value.city === city || value.state === state)
            return value;
    }).length;
}
//console.log('number of contacts :',getNumberOfContactswithCityOrState('rajahmundry', 'tamilnadu'));

sortContactsWithFirstName = () => {
    addressBook = addressBook.sort((val1, val2) => {
        console.log('in loop');
        (val1.city < val2.city) ? -1 : 1;
    })
}
sortContactsWithFirstName();
console.log(addressBook);