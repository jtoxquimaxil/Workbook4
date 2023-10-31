"use strict";

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city + (myInfo.state) + (myInfo.zip));
}
let myInfo = {
    name: "Jakelin",
    address: "123 Main Street",
    city: "Brooklyn",
    state: "New York",
    zip: "11235"
};

printContact(myInfo);


