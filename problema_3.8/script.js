function calcular() {
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const sueldo     = parseFloat(document.getElementById('sueldo').value);
    const resultado  = document.getElementById('resultado');

    if (isNaN(antiguedad) || isNaN(sueldo) || antiguedad < 0 || sueldo <= 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa valores válidos.</span>';
        resultado.classList.add('show');
        return;
    }

    // Bono por antigüedad
    let pctAntig = 0, descAntig = 'Sin bono (menos de 2 años)';
    if (antiguedad >= 5) {
        pctAntig = 30; descAntig = '≥ 5 años → 30%';
    } else if (antiguedad > 2) {
        pctAntig = 20; descAntig = '2–4 años → 20%';
    }
    const bonoAntig = sueldo * (pctAntig / 100);

    // Bono por sueldo
    let pctSueldo, descSueldo;
    if (sueldo < 1000) {
        pctSueldo = 25; descSueldo = 'Sueldo < $1000 → 25%';
    } else if (sueldo <= 3500) {
        pctSueldo = 15; descSueldo = 'Sueldo $1000–$3500 → 15%';
    } else {
        pctSueldo = 10; descSueldo = 'Sueldo > $3500 → 10%';
    }
    const bonoSueldo = sueldo * (pctSueldo / 100);

    const bonoFinal = Math.max(bonoAntig, bonoSueldo);
    const ganador   = bonoAntig >= bonoSueldo ? 'Antigüedad' : 'Sueldo';

    resultado.innerHTML = `
        <div class="label">Comparación de bonos</div>
        <div class="row"><span>Bono por antigüedad (${descAntig})</span><span>$${bonoAntig.toFixed(2)}</span></div>
        <div class="row"><span>Bono por sueldo (${descSueldo})</span><span>$${bonoSueldo.toFixed(2)}</span></div>
        <div class="row"><span>Bono aplicado</span><span>Por ${ganador}</span></div>
        <span class="big success">$${bonoFinal.toFixed(2)}</span>
        <div class="label">Bono mensual asignado</div>
    `;
    resultado.classList.add('show');
}
