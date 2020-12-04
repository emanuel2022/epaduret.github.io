

var uNames = []
var pWords = []

//Populate uNames and pWords with the JSON file
//This requires that I use something called a fetch
//A fetch is used to tell your webpage to go out and get something
//This takes time and the code keeps running
//BIG IDEA: Asyncronous processing and the funny things that happen
//Keep in mind promises - a fetch returns a promise

//Link to JSON file
var url = "https://raw.githubusercontent.com/emanuel2022/epaduret.github.io/main/Fake%20Login/logindata.json"

fetch(url, {})
.then(response => response.json()) //Arrow function, Abstraction, easier way of writing functions
.then(result => {
    console.log(result)

    for (i = 0; i < result.length; i++){
        uNames.push(result[i]['id'])
        pWords.push(result[i]['password'])

        console.log(uNames,pWords)
    }
})

function a(result){

    console.log(result)

    for (i = 0; i < result.length; i++){
        uNames.push(result[i]['id'])
        pWords.push(result[i]['password'])

        console.log(uNames,pWords)
    }

}




// How do I check the login
// Step 1: Grab the form

var mlogin = document.getElementById("modal-login")
var loginForm = document.getElementById("login-form");
var homePage = document.getElementById("home");
var loginPage = document.getElementById("landing");
var logOut = document.getElementById("btn");

homePage.style.display = "none"
logOut.style.display= "none"
// Step 2: Bind an event listener

loginForm.addEventListener("submit", function(e) {

    //console.log(e)

    
    e.preventDefault() // stops the reloading of the form

    //Can you access the information the user has entered
    email = document.getElementById("login-email").value;
    pword = document.getElementById("login-password").value;

    result = checkLogin(email,pword)

    if (result == true){

        homePage.style.display = "block"
        loginPage.style.display = "none"
        logOut.style.display  = "block"

    }
    
    


    console.log(result)
    console.log(email)
    console.log("clicked")

    $(mlogin).modal("close")

});

logOut.addEventListener('click', function(){

    logOut.style.display = "none"
    homePage.style.display = "none"
    loginPage.style.display= "block"
    //location.reload()

})




function checkLogin(u,p){

    //The below loop is a linear search: We are just checking
    //to see if u exists in the list
    for (i = 0; i < uNames.length; i = i+1){
        if (uNames[i] === u){
            if (pWords[i] == p){
                return true;
            }
            else{
                return false;
            }
        }
    } 

    return false;
            
}

console.log(checkLogin("user1","pword1"))
console.log(checkLogin("user2","pword2"))
console.log(checkLogin("user1","pword2"))
