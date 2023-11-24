let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Anakin", lastName: "Skywalker", job: "jedi"},
    {firstName: "Yoda", lastName: "Y", job: "jedi"}
]

function objToString(obj) { return `${obj.firstName} ${obj.lastName} : ${obj.job}`; }




function kiiras() {
    for(let i = 0; i < heroes.length; i++)
        document.getElementById("kii").innerHTML += objToString(heroes[i]) + "<br>";
        document.getElementById("kii").style.backgroundColor = "lightblue";
        document.getElementById("kii").style.width = "20%";
        document.getElementById("kii").style.border = "5px blue solid";
        document.getElementById("kii").style.margin = "10px";
}