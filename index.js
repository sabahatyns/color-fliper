const colors = ["blue", "red", "green", "brown", "yellow", "rgba(134, 156, 45)", "pink"]
var color = document.querySelector(".color");
var colorchangebtn = document.getElementById("btn")


colorchangebtn.addEventListener("click",function(){
    let randomNumber = colors[getrandomNumber()];
    let main = document.querySelector("main")
    main.style.backgroundColor = randomNumber;
    color.style.color = randomNumber
    color.innerText = randomNumber


})


function getrandomNumber(){
    return Math.floor(Math.random()* colors.length);
}
