function showWantedCar() {
    // get from url via GET offer
    const urlParams = new URLSearchParams(window.location.search);
    const offer = urlParams.get('offer');

    const wantedCar = document.getElementById('car');
    const hiddenCarField = document.getElementById('car-field');

    if (offer == '8168638206') {
        wantedCar.innerHTML = `
        <h2>Ihr gewünschtes Fahrzeug</h2>
        <div class="offer">
            <div class="pictures">
                <img src="../offers/8168638206.png" alt="Audi A4">
            </div>
            <div class="information">
                <span>Audi A4</span>
                <span><i class="fas fa-road"></i> 311.000 km</span>
                <span><i class="fas fa-gas-pump"></i> Benzin</span>
                <span><i class="fas fa-calendar"></i> 11/1997</span>
                <span><i class="fas fa-tachometer-alt"></i> 92 kW/125 PS</span>
            </div>
        </div>`;
    }
    else if (offer == '4891509612') {
        wantedCar.innerHTML = `
        <h2>Ihr gewünschtes Fahrzeug</h2>
        <div class="offer">
            <div class="pictures">
                <img src="../offers/4891509612.png" alt="VW Golf">
            </div>
            <div class="information">
                <span>VW Golf</span>
                <span><i class="fas fa-road"></i> 275.000 km</span>
                <span><i class="fas fa-gas-pump"></i> Benzin</span>
                <span><i class="fas fa-calendar"></i> 12/2001</span>
                <span><i class="fas fa-tachometer-alt"></i> 55 kW/75 PS</span>
            </div>
        </div>`;
    }
    else {
        wantedCar.innerHTML = `
        <h2>Interner Fehler</h2>
        <p>Ihr gewünschtes Fahrzeug konnte nicht gefunden werden. Bitte wählen Sie es hier aus: <a href='offers.html'>Angebote</a></p>`;
    }
    hiddenCarField.value = offer;
}

showWantedCar();