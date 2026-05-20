function calcular() {
    const plan       = document.querySelector('input[name="plan"]:checked').value;
    const edad       = parseInt(document.getElementById('edad').value);
    const alcohol    = document.getElementById('alcohol').checked;
    const lentes     = document.getElementById('lentes').checked;
    const enfermedad = document.getElementById('enfermedad').checked;
    const resultado  = document.getElementById('resultado');

    if (isNaN(edad) || edad < 16) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa una edad válida (mínimo 16).</span>';
        resultado.classList.add('show');
        return;
    }

    const base = plan === 'A' ? 1200 : 950;
    let cargos = 0;
    let detalles = '';

    if (alcohol) {
        const c = base * 0.10;
        cargos += c;
        detalles += `<div class="row"><span>🍺 Hábito de alcohol (+10%)</span><span>+$${c.toFixed(2)}</span></div>`;
    }
    if (lentes) {
        const c = base * 0.05;
        cargos += c;
        detalles += `<div class="row"><span>👓 Usa lentes (+5%)</span><span>+$${c.toFixed(2)}</span></div>`;
    }
    if (enfermedad) {
        const c = base * 0.05;
        cargos += c;
        detalles += `<div class="row"><span>🏥 Enfermedad (+5%)</span><span>+$${c.toFixed(2)}</span></div>`;
    }

    const pctEdad = edad > 40 ? 20 : 10;
    const cEdad   = base * (pctEdad / 100);
    cargos += cEdad;
    detalles += `<div class="row"><span>${edad > 40 ? '🎂 Mayor de 40 años (+20%)' : '🙂 40 años o menos (+10%)'}</span><span>+$${cEdad.toFixed(2)}</span></div>`;

    const total = base + cargos;

    resultado.innerHTML = `
        <div class="label">Desglose de la póliza Plan ${plan}</div>
        <div class="row"><span>Cuota base Plan ${plan}</span><span>$${base.toFixed(2)}</span></div>
        ${detalles}
        <span class="big">$${total.toFixed(2)}</span>
        <div class="label">Costo total de la póliza</div>
    `;
    resultado.classList.add('show');
}
