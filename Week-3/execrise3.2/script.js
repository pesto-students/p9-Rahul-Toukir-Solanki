// This is the variable (form)
let form = {
    name: "Toukir",
    lastName: "Solanki",
}

//This is the function which we use
let fullName = function(state,fun){
    return(this.name + " " + this.lastName +" " + state + " " +fun);
}


// Using Call function
var call = fullName.call(form,"Raipur", "Call");
console.log(call);

//using Apply function
let apply  = fullName.apply(form, ["raipur", "Apply"])
console.log(apply);

//using Bind function
let bind = fullName.bind(form,"Raipur", "Bind");
console.log(bind);