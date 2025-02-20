let a = document.getElementById("value");
let b = document.querySelectorAll("button");

let string = "";

let arr = Array.from(b)
arr.forEach(e => {
    e.addEventListener("click", (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string)
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";       
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, length-1);
        }
        else{
            string+= e.target.innerHTML
        }
        a.value = string
    })
});