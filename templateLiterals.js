let productName = "laptop";
let quantity = 2;
let statuss = "pending";

function estimatedDelivery(){
    return "01-05-2021";
}   


let productstatus = "Status of the product is";
productstatus +=  (statuss === "delivered") ? 'green' : 'red';

let description = "I have ordered " + quantity + " " + productName + " from \"amazon\"";
console.log(description);

let productStat =  `Status of the product is ${statuss === 'deilvered' ? 'green' : 'red'}`;
let description2 =`I have ordered 
 ${quantity} ${productName} from "amazon" last week and
 the estimatedDelivery is ${estimatedDelivery()} and following is the status: ${productStat}.`;
console.log(description2);
