function calcular() {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const costoPorKm  = parseFloat(document.getElementById('costo_km').value);
    const resultado   = document.getElementById('resultado');

    if (isNaN(presupuesto) || isNaN(costoPorKm) || presupuesto <= 0 || costoPorKm <= 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa valores válidos mayores a 0.</span>';
        resultado.classList.add('show');
        return;
    }

    const destinos = [
        { nombre: 'México',         emoji: '🏙️', km: 750 },
        { nombre: 'Puerto Vallarta', emoji: '🏖️', km: 800 },
        { nombre: 'Acapulco',       emoji: '🌊', km: 1200 },
        { nombre: 'Cancún',         emoji: '🦀', km: 1800 },
    ];

    let filas = '';
    let mejorDestino = null;

    destinos.forEach(d => {
        const costoTotal = d.km * 2 * costoPorKm; // ida y vuelta
        const alcanza = presupuesto >= costoTotal;
        if (alcanza) mejorDestino = d;
        filas += `
            <div class="row">
                <span>${d.emoji} ${d.nombre} (${d.km * 2} km ida/vuelta)</span>
                <span style="color: ${alcanza ? 'var(--green)' : 'var(--red)'}">
                    $${costoTotal.toFixed(2)} ${alcanza ? '✓' : '✗'}
                </span>
            </div>`;
    });

    if (mejorDestino) {
        resultado.innerHTML = `
            <div class="label">Costos por destino (ida + vuelta)</div>
            ${filas}
            <span class="big success">${mejorDestino.emoji} ${mejorDestino.nombre}</span>
            <div class="label">Mejor destino alcanzable con $${presupuesto.toFixed(2)}</div>
        `;
    } else {
        resultado.innerHTML = `
            <div class="label">Costos por destino (ida + vuelta)</div>
            ${filas}
            <span class="big error">🏠 Quedarse en casa</span>
            <div class="label">El presupuesto no alcanza para ningún destino</div>
        `;
    }
    resultado.classList.add('show');
}
