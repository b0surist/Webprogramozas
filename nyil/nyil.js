const megfordit = () => {
    const bbe = document.getElementById('bbe').value;
    const ki = document.getElementById('ki');
    const vissza = bbe.split('').reverse().join('');
    ki.innerHTML = 'Megfordítva: ' + vissza;
};