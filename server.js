const nadpis = document.getElementsByTagName("h1") [0] ;
nadpis.addEventListener("click", (e) => {
    e.target.innerHTML = "WE ARE HERE TO HELP";
})
alert("ahoj")




















































// Define the sum function
function sum(cislo1, cislo2) {
    const finalnicislo = cislo1 + cislo2;
    return finalnicislo;
}

// Example usage of sum function
console.log(sum(1, 2));

// Define the vypisdatum function
function vypisdatum() {
    const datum = new Date();
    const den = datum.getDate() + 1; // Get current day and add 1
    const mesic = datum.getMonth() + 1; // Get current month (months are zero-indexed, so add 1)
    const rok = datum.getFullYear(); // Get current year
    const zobrazdatum = `Datum: ${den}.${mesic}.${rok}`; // Construct the date string
    const casovyelement = document.getElementById("cas");
    casovyelement.innerHTML = zobrazdatum;
}

// Call the vypisdatum function
vypisdatum(2024);







































