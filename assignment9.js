let arry =[23,34,"apple",56,"mango" ]
for (let index = 0; index < arry.length; index++) {
    const element = arry[index];
    if (typeof arry[index] === "string") {
        console.log("Found the First String =" + arry[index]);
        
    }
}