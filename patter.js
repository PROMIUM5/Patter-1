function addUser(){
    var User_Name = document.getElementById("user_name").value
    
    localStorage.setItem("user_name",user_name)
    window.location = "patter_room.html"
}