let btns = document.querySelector(".calculadora__btns");
export function mostrarHTML(respuesta) {
    let btnsNumber = ""
    respuesta.data.forEach(element => {
        const { n0, n1, n2, n3, n4, n5, n6, n7, n8, n9 } = element
        btnsNumber += `
        <input type="button" value="${n7}">
        <input type="button" value="${n8}">
        <input type="button" value="${n9}">
        <input class="del" type="button" value="DEL">

        <input type="button" value="${n4}">
        <input type="button" value="${n5}">
        <input type="button" value="${n6}">
        <input type="button" value="+">

        <input type="button" value="${n1}">
        <input type="button" value="${n2}">
        <input type="button" value="${n3}">
        <input type="button" value="-">

        <input type="button" value=".">
        <input type="button" value="${n0}">
        <input type="button" value="/">
        <input type="button" value="x">

        <input class="reset" type="button" value="RESET">
        <input class="igual" type="button" value="=">
        `
    });
    btns.innerHTML = btnsNumber

    //funcionalidad cambio color
    let tema1 = document.querySelector(".tema1")
    let tema2 = document.querySelector(".tema2")
    let tema3 = document.querySelector(".tema3")

    let screen = document.querySelector(".screen")
    let contanier = document.querySelector(".container-btns")

    let title = document.querySelector(".title")
    let title2 = document.querySelector(".title2")

    let btnsCalculadora = document.querySelectorAll("input[type=button]");
    let inputDel = document.querySelector("input.del")
    let reset = document.querySelector(".reset")
    let igual = document.querySelector("input.igual")

    tema1.addEventListener("click", () => {
        document.body.style.backgroundColor = "#3B4664"
        screen.style.backgroundColor = "#181F32"
        screen.style.color = "#FCFEFF"
        contanier.style.backgroundColor = "#252D46"
        title.style.color = "#EAE3DB"
        title2.style.color = "#EAE3DB"
        btnsCalculadora.forEach(element => {
            element.style.backgroundColor = "#EAE3DB"
            element.style.color = "#424657"
            element.style.borderBottom = "2px solid #B1A49E"
        })
        inputDel.style.backgroundColor = "#3B4664"
        inputDel.style.color = "#EAE3DB"
        inputDel.style.borderBottom = "2px solid #B1A49E"
        reset.style.backgroundColor = "#3B4664"
        reset.style.color = "#EAE3DB"
        reset.style.borderBottom = "2px solid #3B4664"
        igual.style.backgroundColor = "#D13F30"
        igual.style.color = "#EAE3DB"
    })

    tema2.addEventListener("click", () => {
        document.body.style.backgroundColor = " hsl(0, 0%, 90%)"
        screen.style.backgroundColor = "hsl(0, 0%, 93%)"
        screen.style.color = "hsl(60, 10%, 19%)"
        contanier.style.backgroundColor = "hsl(0, 5%, 81%)"
        title.style.color = "hsl(60, 10%, 19%)"
        title2.style.color = "hsl(60, 10%, 19%)"
        btnsCalculadora.forEach(element => {
            element.style.backgroundColor = "hsl(0, 0%, 90%)"
            element.style.color = "hsl(60, 10%, 19%)"
            element.style.borderBottom = "2px solid #B1A49E"
        })
        inputDel.style.backgroundColor = "hsl(185, 42%, 37%)"
        inputDel.style.borderBottom = "2px solid hsl(185, 58%, 25%)"
        inputDel.style.color = "#EAE3DB"
        reset.style.backgroundColor = "hsl(185, 42%, 37%)"
        reset.style.color = "#EAE3DB"
        reset.style.borderBottom = "2px solid hsl(185, 58%, 25%)"
        igual.style.backgroundColor = "hsl(25, 98%, 40%)"
        igual.style.color = "#EAE3DB"
    })

    tema3.addEventListener("click", () => {
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
        screen.style.backgroundColor = "hsl(268, 71%, 12%)"
        screen.style.color = "hsl(52, 100%, 62%)"
        contanier.style.backgroundColor = "hsl(268, 71%, 12%)"
        title.style.color = "hsl(52, 100%, 62%)"
        title2.style.color = "hsl(52, 100%, 62%)"
        btnsCalculadora.forEach(element => {
            element.style.backgroundColor = "hsl(268, 75%, 9%)"
            element.style.color = "hsl(52, 100%, 62%)"
            element.style.borderBottom = "2px solid hsl(285, 91%, 52%)"
        })
        inputDel.style.backgroundColor = "hsl(281, 89%, 26%)"
        inputDel.style.color = "#EAE3DB"
        inputDel.style.borderBottom = "2px solid hsl(285, 91%, 52%)"
        reset.style.backgroundColor = "hsl(281, 89%, 26%)"
        reset.style.color = "#EAE3DB"
        reset.style.borderBottom = "2px solid hsl(285, 91%, 52%)"
        igual.style.backgroundColor = "hsl(176, 100%, 44%)"
        igual.style.borderBottom = "2px solid hsl(177, 92%, 70%)"
        igual.style.color = "hsl(268, 71%, 12%)"
    })
}




/**********calculadora******************/
let operando1;
let operando2;
let resultado;

let screen = document.querySelector(".screen");

btns.addEventListener("click", (e) => {
    if (e.target.value !== undefined && e.target.value !== "+" && e.target.value !== "-" && e.target.value !== "/" && e.target.value !== "x" && e.target.value !== "=" && e.target.value !== "DEL" && e.target.value !== "RESET") {
        screen.value = e.target.value
    } if (e.target.value === "+") {
        operando1 = screen.value
        resultado = "+"
    } if (e.target.value === "-") {
        operando1 = screen.value
        resultado = "-"
    } if (e.target.value === "x") {
        operando1 = screen.value
        resultado = "x"
    } if (e.target.value === "/") {
        operando1 = screen.value
        resultado = "/"
    } if (e.target.value === "=") {
        operando2 = screen.value
        resolver();
    }
    if (e.target.value === "RESET") {
        limpiar();
    }
})

function resolver() {
    let respOperacion = 0;
    switch (resultado) {
        case "+":
            respOperacion = parseFloat(operando1) + parseFloat(operando2);
            break;

        case "-":
            respOperacion = parseFloat(operando1) - parseFloat(operando2);
            break;

        case "x":
            respOperacion = parseFloat(operando1) * parseFloat(operando2);
            break;

        case "/":
            respOperacion = parseFloat(operando1) / parseFloat(operando2);
            break;
    }
    screen.value = respOperacion;
}

//eliminar
function limpiar() {
    screen.value = 0;
}

