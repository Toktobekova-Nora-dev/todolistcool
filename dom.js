
let tion = document.querySelector(".tion")
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
console.log();
readContact();

btn.addEventListener("click", () => {
    if (input.value === '') {
        alert("Добавить задачу ")
    }else{
         let date = {
            input_name: input.value
        };
        let result = JSON.parse(localStorage.getItem("result")) || [];
        result.push(date);
        localStorage.setItem("result", JSON.stringify(result));
        readContact();
        input.value = ""; 
    }
});

function readContact() {
    ul.innerHTML = ""; 
    let result = JSON.parse(localStorage.getItem("result")) || [];
    result.forEach((el, index) => { 
        let li = document.createElement("li");
        let btn1 = document.createElement("button");
        li.innerText = el.input_name; 
        btn1.innerText = "delete";
        btn1.addEventListener("click", () => {
            deleteProduct(index);
        });
        li.append(btn1); 
        ul.append(li); 
        btn1.style.width = "90px"
        btn1.style.height = "36px";
        btn1.style.color = "black";
        btn1.style.fontFamily = "Racing Sans One"
        btn1.style.backgroundradius = "20px"
    });
}


function deleteProduct(id) {
    let result = JSON.parse(localStorage.getItem("result")) || [];
    result.splice(id, 1); 
    localStorage.setItem("result", JSON.stringify(result));
    readContact(); 
}     