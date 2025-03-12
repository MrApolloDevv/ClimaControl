document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html") 
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; // Insere no HTML
        })
        .catch(error => console.error("Erro ao carregar a navbar:", error));
});

async function buscarClima() {

    const apiKey = '974a7e233470a29e37ab43fb50a78430';

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=goiania&appid=${apiKey}&units=metric&lang=pt_br`);
        let data = await response.json();

        let temperatura = data.main.temp;  
        let umidade = data.main.humidity;
        document.getElementById("temperatura").innerText = temperatura;
        document.getElementById("umidade").innerText = umidade;
    } catch (error) {
        console.error("Erro ao buscar o clima:", error);
    }
}

function alternarAr() {
    let statusElement = document.getElementById("status-ar");
    if (statusElement.innerText === "Ligado") {
        statusElement.innerText = "Desligado";
        statusElement.classList.add("off");
    } else {
        statusElement.innerText = "Ligado";
        statusElement.classList.remove("off");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    buscarClima(); 
});
