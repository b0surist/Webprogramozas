let userData = null;
        async function fetchUserData() {
            const username = document.getElementById('username').value;
            const outputDiv = document.getElementById('output');

            if (!username) {
                outputDiv.innerHTML = '<p class="error">Kérlek adj meg egy felhasználónevet!</p>';
                return;
            }
            try {
                const response = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
                if (!response.ok) {
                    throw new Error(response.status);
                }
                userData = await response.json();
                outputDiv.innerHTML = '<p>Sikeres lekérdezés! Válassz a menüből egy opciót.</p>';
            } catch (error) {
                if (error.message == 404) {
                    outputDiv.innerHTML = '<p class="error">Hiba: A megadott felhasználó nem található!</p>';
                } else {
                    outputDiv.innerHTML = '<p class="error">Hiba történt a lekérdezés során!</p>';
                }
                userData = null;
            }
        }

        function showTotalPoints() {
            const outputDiv = document.getElementById('output');
            const user = userData.overall;
            let adatok = '<h2>Felhasználó adatai:</h2>'
            for(let adat in user){
                adatok += `<li>${user[adat].name}</li>`;
            }
            outputDiv.innerHTML = adatok;
        }
        function showLanguagePoints() {
            const outputDiv = document.getElementById('output');
            const languages = userData.ranks.languages;
            let languagePoints = '<h2>Pontok nyelvek szerint:</h2><ul>';
            for (let language in languages) {
                languagePoints += `<li>${language}: ${languages[language].score} pont</li>
                                   <li>szín: ${languages[language].color}</li>
                                   <li>rank: ${languages[language].rank} 
                                   <li>rank: ${languages[language].name}`;
            }
            languagePoints += '</ul>';
            outputDiv.innerHTML = languagePoints;
        }
