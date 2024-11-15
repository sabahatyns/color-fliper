const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D' , 'E' ,'F']
var color = document.querySelector(".color");
var colorchangebtn = document.getElementById("btn")



colorchangebtn.addEventListener("click",function(){
var hexcolor = "#"
let main = document.querySelector("main")
for (var i = 0 ; i<6 ; i++ ){

    hexcolor = hexcolor + hex[getrandomNumber()]
    console.log(hexcolor)
}
   main.style.backgroundColor = hexcolor;
   color.innerText = hexcolor;
   


})


function getrandomNumber(){
    return Math.floor(Math.random()* hex.length);
}
