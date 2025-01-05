var wagaInput = document.getElementById("waga");
var wzrostInput = document.getElementById("wzrost");
var obliczBtn = document.getElementById("oblicz");
var wynikDiv = document.getElementById("wynik");
var bmiWart = document.getElementById("bmi-wart");
var bmiKat = document.getElementById("bmi-kat");
//funkcja do obliczenia bmi
function obliczBmi(waga, wzrost) {
    var wzrostMetry = wzrost / 100;
    return waga / (wzrostMetry * wzrostMetry);
}
//funckja do kategorii bmi
function kategoriaBmi(bmi) {
    if (bmi < 18.5) {
        return 'niedowaga';
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        return 'waga normalna';
    }
    else if (bmi >= 25 && bmi < 29.9) {
        return 'nadwaga';
    }
    else {
        return 'otyłość';
    }
}
//przycisk do obliczania
obliczBtn.addEventListener('click', function () {
    var waga = parseFloat(wagaInput.value);
    var wzrost = parseFloat(wzrostInput.value);
    if (isNaN(waga) || isNaN(wzrost) || waga <= 0 || wzrost <= 0) {
        alert('Proszę podać prawidłowe wartości dla wagi i wzrostu.');
        return;
    }
    var bmi = obliczBmi(waga, wzrost);
    var kategoria = kategoriaBmi(bmi);
    bmiWart.textContent = "Twoje BMI: ".concat(bmi.toFixed(2));
    bmiKat.textContent = "Kategoria: ".concat(kategoria);
    wynikDiv.style.display = 'block';
});
