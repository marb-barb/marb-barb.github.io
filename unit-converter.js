const button = document.getElementById("convert");
const input = document.getElementById("inputUnit");

button.addEventListener("click", () => { 
    const inputUnit = document.getElementById("inputUnit").value;
    if (!inputUnit) {
        document.getElementById("output").innerHTML = "try again bro"
        setTimeout(() => {
        document.getElementById("output").innerHTML = "";
    }, 2000);
    } else {
    document.getElementById("output").innerHTML = '';
    input.value = ''
    }
});
input.addEventListener("output", computeConversion);