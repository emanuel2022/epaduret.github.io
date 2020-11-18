

var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]

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
            
}

console.log(checkLogin("user1","pword1"))
console.log(checkLogin("user2","pword2"))
console.log(checkLogin("user1","pword2"))
