const wagaInput = document.getElementById("waga") as HTMLInputElement;
const wzrostInput = document.getElementById("wzrost") as HTMLInputElement;
const obliczBtn = document.getElementById("oblicz") as HTMLButtonElement;
const wynikDiv = document.getElementById("wynik") as HTMLDivElement;
const bmiWart = document.getElementById("bmi-wart") as HTMLParagraphElement;
const bmiKat = document.getElementById("bmi-kat") as HTMLParagraphElement;

//funkcja do obliczenia bmi
function obliczBmi(waga: number, wzrost: number): number {
    const wzrostMetry = wzrost / 100;
    return waga / (wzrostMetry*wzrostMetry);
}

//funckja do kategorii bmi
function kategoriaBmi(bmi: number): string{
    if (bmi < 18.5) {
        return 'niedowaga';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'waga normalna';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'nadwaga';
    } else {
        return 'otyłość';
    }
}

//przycisk do obliczania
obliczBtn.addEventListener('click', () => {
    const waga = parseFloat(wagaInput.value);
    const wzrost = parseFloat(wzrostInput.value);

    if (isNaN(waga) || isNaN(wzrost) || waga <= 0 || wzrost <= 0) {
        alert('Proszę podać prawidłowe wartości dla wagi i wzrostu.');
        return;
    }

    const bmi = obliczBmi(waga, wzrost);
    const kategoria = kategoriaBmi(bmi);

    bmiWart.textContent = `Twoje BMI: ${bmi.toFixed(2)}`;
    bmiKat.textContent = `Kategoria: ${kategoria}`;

    wynikDiv.style.display = 'block';
})
