function calcular() {
    const horas = parseFloat(document.getElementById('horas').value);
    const pago  = parseFloat(document.getElementById('pago').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || isNaN(pago) || horas < 0 || pago <= 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa valores válidos mayores a 0.</span>';
        resultado.classList.add('show');
        return;
    }

    let sueldoNormal, sueldoExtra = 0, horasExtra = 0;

    if (horas <= 40) {
        sueldoNormal = horas * pago;
    } else {
        horasExtra   = horas - 40;
        sueldoNormal = 40 * pago;
        sueldoExtra  = horasExtra * pago * 2;
    }

    const total = sueldoNormal + sueldoExtra;
    const fmt = (n) => `$${n.toFixed(2)}`;

    resultado.innerHTML = `
        <div class="label">Desglose del Sueldo</div>
        <div class="row"><span>Horas normales (máx 40)</span><span>${Math.min(horas, 40)} h × ${fmt(pago)} = ${fmt(sueldoNormal)}</span></div>
        ${horasExtra > 0 ? `<div class="row"><span>Horas extra (doble)</span><span>${horasExtra} h × ${fmt(pago * 2)} = ${fmt(sueldoExtra)}</span></div>` : ''}
        <span class="big">${fmt(total)}</span>
        <div class="label">Sueldo semanal total</div>
    `;
    resultado.classList.add('show');
}
