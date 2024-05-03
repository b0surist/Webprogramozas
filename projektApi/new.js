const url = "https://vvri.pythonanywhere.com/api/courses";
function megjelenites(){
fetch(url, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
})
    .then(response => response.json())
    .then(json => {
        let ki = `<tr><th>Kurzus nev</th><th>ID</th><th colspan="40">Kurzus résztvevői</th></tr>`;
        json.forEach(courses => {
            ki += `<tr>
                <td>${courses.name}</td>
                <td>${courses.id}</td>`;
            courses.students.forEach(student => {
                ki+=`<td>${student.id}: <br>${student.name}`
             })
        });
        document.getElementById("ki").innerHTML = ki;
    });
}
function felvetelDiak() {
    let feldiak = document.getElementById("beDiak").value;
    let kivdiak = document.getElementById("beKurzus").value;
    fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: "POST",
            body: JSON.stringify({
                name: feldiak,
                course_id:kivdiak,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        .then(response => response.json())
        .then(json => {
            console.log("Új diák hozzáadva", json);
            megjelenites()
        })
        .catch(hiba => console.hiba('Hiba a diák létrehozásánál:', hiba));
}
function felvetel() {
    let fel = document.getElementById("be").value;
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: fel
            }),
        })
        .then(response => response.json())
        .then(json => {
            console.log("Kurzus sikeresen létrehozva", json);
            megjelenites()
        })
        .catch(hiba => console.hiba('Hiba a kurzus létrehozásánál:', hiba));
}
function kereses() {
    let id = document.getElementById("kuid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => {
            if (!response.ok) {
                throw new hiba("A megadott kurzus nem található.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("kurzusadat").innerHTML = `
                <p>Kurzus ID-ja: ${data.id}</p>
                <p>Név: ${data.name}</p>`;
        })
        .catch(hiba => {
            document.getElementById("kurzusadat").innerHTML = `<p>${hiba.message}</p>`;
        });
}

function keresesdiak() {
    let id = document.getElementById("diakid").value;
    fetch(`https://vvri.pythonanywhere.com/api/students/` + id)
        .then(response => {
            if (!response.ok) {
                throw new hiba("A megadott diák nem található.");
            }
            return response.json();
        })
        .then(student => {
            let diakID=student.id
            document.getElementById("diakadat").innerHTML = `
            <p>Diák nevének szerkesztése(kurzus ID)</p><input type="text" id="kurzus"><p>Új név</p><input type="text" id="nev">  
            <button onclick="ujdiaknev(${diakID})">Változtatás!</button><br>
            <p></p>
            <button onclick="deleteStudent(${diakID})">Törlés!</button>
            <p>Diák ID-ja: ${diakID}</p>
            <p>Név: ${student.name}</p>`;
        })
        .catch(hiba => {
            document.getElementById("diakadat").innerHTML = `<p>${hiba.message}</p>`;
        });
}
function ujdiaknev(diaID) {
    let ujnev = document.getElementById("nev").value;
    let kurzId=document.getElementById("kurzus").value;
    fetch(`https://vvri.pythonanywhere.com/api/students/` + diaID, {
        method: "PUT",
        body: JSON.stringify({
            name: ujnev,
            course_id: kurzId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new hiba('Hiba');
        }
        return response.json();
    })
    .then(json => {
        console.log("A név sikeresen meg lett változtatva", json);
        megjelenites();
    })
    .catch(hiba => console.hiba('Hiba a diák frissítésekor:', hiba));
}
document.getElementById("ki").innerHTML = ki;
function deleteStudent(diaID) {
        fetch(`https://vvri.pythonanywhere.com/api/students/${diaID}`, {
            method: 'DELETE'
        })
        .then(() => megjelenites())
        .catch(hiba => console.log('Hiba történt a diák törlésekor: ' + hiba));
        console.log("A törlés sikeres")
}