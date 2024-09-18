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
            const totalPoints = userData.ranks.overall.score;
            outputDiv.innerHTML = `<h2>Összesített pontok: ${totalPoints}</h2>`;
        }
        function showLanguagePoints() {
            const outputDiv = document.getElementById('output');
            const languages = userData.ranks.languages;
            let languagePoints = '<h2>Pontok nyelvek szerint:</h2><ul>';
            for (let language in languages) {
                languagePoints += `<li>${language}: ${languages[language].score} pont</li>`;
            }
            languagePoints += '</ul>';
            outputDiv.innerHTML = languagePoints;
        }