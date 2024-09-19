let username = "rahul"
let email = "rahul8758gmail.com"
let age = 13
let isvalid = true
if (typeof username !== "string") {
    console.log("name should be string"); 
    isvalid = false;

}
    if (typeof email !== "string") {
        console.log("email should be string");
        isvalid = false;
    }  
    if (typeof age !== "number") {
        console.log("age should be number");
        isvalid = false;   
    }  
    if (isvalid) {
        console.log("all field are valid");
    }
