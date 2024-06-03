const lottoSzamok = [];
        while (lottoSzamok.length < 5) {
            const szam = Math.floor(Math.random() * 90) + 1;
            if (lottoSzamok.indexOf(szam) === -1) {
                lottoSzamok.push(szam);
            }
        }
        lottoSzamok.sort((a, b) => a - b);
        document.getElementById("szamoksorban").textContent = lottoSzamok.join(", ");