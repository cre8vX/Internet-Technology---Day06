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

// function changeHeading() {
//     console.log("Hii");

//     let inputText = document.getElementById("inputText");
//     console.log(inputText.value);
//     document.getElementById("heading").innerText = inputText.value;
// }     

//---------------------------------------------------------------------

// function btnSumOnAction() {
//     let input01 = document.getElementById("txtInput01").value;
//     let input02 = document.getElementById("txtInput02").value;
    
//     let sum = parseInt(input01) + parseInt(input02);

//     document.getElementById("heading").innerText = "SUM: " + sum;

//     console.log(input01); 
//     console.log(input02);
//     console.log(sum);
// }  

//(MEKE HADALA THINNE SUM BUTTON EKATA WITHARAI, ANITH BUTTON EKATA OYA HADANNA.)

//----------------------------------------------------------------------

let customerList = [];

function btnAddCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    // console.log(txtName);
    // console.log(txtAddress);
    // console.log(txtAge);
    // console.log(txtEmail);
    // console.log(txtSalary);

    let customer = {
        name: txtName,
        Address: txtAddress,
        age: txtAge,
        email: txtEmail,
        salary: txtSalary
    }

    // console.log(customer);

    customerList.push(customer);
    loadTable();

    console.log(customerList);
}

function loadTable() {
    let tblCustomers = document.getElementById("tblCustomers");

    let body = "";

    for(let i = 0; i < customerList.length; i++){
            body+=`<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].Address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
    }

    tblCustomers.innerHTML = body; 
        
    
    console.log(tblCustomers);
}
