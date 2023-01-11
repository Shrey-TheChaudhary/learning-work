// let dudo = document.querySelector('button');
// dudo.addEventListener('click', showMsg);

// function showMsg() {
//     alert("HELLO DUDO ")
// }

let dudo = document.querySelector('button');
dudo.addEventListener('click', inputmsg);

function inputmsg() {
    let name = prompt("enter name of your bff");
    dudo.textContent = "My Best Friend " + name;
}