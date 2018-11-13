// Generate random password
function generate(){
    
    // Set password length complexity
    let complexity = document.getElementById("slider").value;

    // Possible password values
    let values = "";

    let password = "";

    // Check if checkbox is checked
    if(upper.checked == true){
        values = values + document.querySelector("#upper").value;
    }

    if(lower.checked == true){
        values = values + document.querySelector("#lower").value;
    }

    if(num.checked == true){
        values = values + document.querySelector("#num").value;
    }

    if(specialChar.checked == true){
        values = values + document.querySelector("#specialChar").value;
        //if(password != specialChar){
        //    generate();
        //}
    }

    // Create for loop to choose password characters
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }

    // Add password to textbox/display area
    document.getElementById("display").value = password;

    // Add password to previously generated password section
    //document.getElementById("lastNums").innerHTML += password + "<br />";

}

// Set default length display of 10
document.getElementById("length").innerHTML = "Length: 10";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){
    
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 0";
    }

}

// Function to copy password to clipboard
function copyPassword(){
    
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard.");

}