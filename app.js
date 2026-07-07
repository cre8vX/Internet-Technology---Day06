// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("John Doe", 30, "123 Main St");
// console.log(customer1);

//----------------------------------------------------------------------------------------------------

// let customer2 = {
//     name: "Jane Smith",
//     age: 25,
//     address: "456 Elm St",
//     salary: 50000,
//     items: ["item1", "item2", "item3"],
//     father: {
//         name: "Robert Smith",
//         age: 55,
//         address: "789 Oak St"
//     }
// };
// console.log(customer2);
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items);
// console.log(customer2.father);

// console.log(customer2.father.name);
// console.log(customer2.items[2]);

//-----------------------------------------------------------------------------------------------------

// let customer2 = {
//     name: "Jane Smith",
//     age: 25,
//     address: "456 Elm St",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20
//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200,
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300,
//         }
//     ],
//     father: {
//         name: "Robert Smith",
//         age: 55,
//         address: "789 Oak St"
//     }
// };
// console.log(customer2.items[0].variants[1].price );

//-----------------------------------------------------------------------------------------------------

// DOM (Document Object Model) Manipulation

// console.log(document);
// console.log(document.title);
// document.write("<h1>Hiiii</h1>");

// let heading = document.getElementById("heading");

// heading.innerText = "iCET";

// console.log(heading);

// let number = 0;
// function increaseCounter() {
//     heading.innerText = "iCET" + (++number);
//     console.log("Clicked");
// }

// function decreaseCounter() {
//     heading.innerText = "iCET" + (--number);
//     console.log("Clicked");
// }

function changeHeading() {
    console.log("Hii");

    let inputText = document.getElementById("inputText");
    console.log(inputText.value);
    document.getElementById("heading").innerText = inputText.value;
}     