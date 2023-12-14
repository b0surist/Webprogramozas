const kartyas = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    let kiválaszottK = [];
    let ugyanazK = [];

    function random(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function kartyaCsinal(value) {
      const kartya = document.createElement('div');
      kartya.classList.add('kartya');
      kartya.textContent = value;
      kartya.addEventListener('click', () => megfordul(kartya, value));
      return kartya;
    }

    function Jatek() {
      random(kartyas);
      const felulet = document.getElementById('memória');
      felulet.innerHTML = '';

      kartyas.forEach((value) => {
        const kartya = kartyaCsinal(value);
        felulet.appendChild(kartya);
      });

      setTimeout(() => {
        document.querySelectorAll('.kartya').forEach((kartya) => {
          kartya.textContent = '';
          kartya.style.backgroundColor = '#00ffff';
        });
      }, 5000);
    }

    function megfordul(kartya, value) {
      if (kiválaszottK.length < 2 && !ugyanazK.includes(kartya)) {
        kartya.textContent = value;
        kiválaszottK.push({ kartya, value });

        if (kiválaszottK.length === 2) {
          setTimeout(veg, 500);
        }
      }
    }

    function veg() {
      const [kartya1, kartya2] = kiválaszottK;
      if (kartya1.value === kartya2.value) {
        ugyanazK.push(kartya1.kartya, kartya2.kartya);
        if (ugyanazK.length === kartyas.length) {
          alert('Gratulálok győztél!');
          Jatek();
        }
      } else {
        setTimeout(() => {
          kartya1.kartya.textContent = '';
          kartya2.kartya.textContent = '';
        }, 500);
      }

      kiválaszottK = [];
    }

    Jatek();