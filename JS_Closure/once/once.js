function dodajDva(n) {
    return n + 2;
}

function jednom(c) { 
    let rezultat; 
    let pozvano = false; 
    return function(m1) { 
        if (!pozvano) {
            rezultat = c(m1); 
            pozvano = true; 
        }
        return rezultat; 
    }; 
}

// Test kopiran s laba
const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija (4)); // treba ispisati 6
console.log(jednomFunkcija (10)); // treba ispisati 6
console.log(jednomFunkcija (9001)); // treba ispisati 6
