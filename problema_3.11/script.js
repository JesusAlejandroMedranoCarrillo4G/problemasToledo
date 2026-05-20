function calcular() {
    const anios     = parseInt(document.getElementById('anios').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(anios) || anios < 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa un número de años válido.</span>';
        resultado.classList.add('show');
        return;
    }

    let bono, descripcion;

    if (anios === 0) {
        bono = 0;
        descripcion = 'Menos de 1 año — sin bono aún.';
    } else if (anios <= 5) {
        bono = anios * 100;
        descripcion = `${anios} año${anios !== 1 ? 's' : ''} de antigüedad → $${anios * 100}`;
    } else {
        bono = 1000;
        descripcion = `Más de 5 años (${anios} años) → bono máximo`;
    }

    resultado.innerHTML = `
        <div class="label">Cálculo de bono</div>
        <div class="row"><span>Antigüedad</span><span>${anios} año${anios !== 1 ? 's' : ''}</span></div>
        <div class="row"><span>Criterio</span><span>${descripcion}</span></div>
        <span class="big ${bono > 0 ? 'success' : ''}">$${bono.toFixed(2)}</span>
        <div class="label">Bono asignado</div>
    `;
    resultado.classList.add('show');
}
