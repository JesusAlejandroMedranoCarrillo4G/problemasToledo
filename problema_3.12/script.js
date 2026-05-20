function calcular() {
    const horas = parseFloat(document.getElementById('horas').value);
    const pago  = parseFloat(document.getElementById('pago').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || isNaN(pago) || pago <= 0 || horas < 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa valores válidos.</span>';
        resultado.classList.add('show');
        return;
    }

    if (horas > 50) {
        resultado.innerHTML = '<span class="error">🚫 Trabajar más de 50 horas no está permitido.</span>';
        resultado.classList.add('show');
        return;
    }

    let t1 = 0, t2 = 0, t3 = 0;
    let d1 = '', d2 = '', d3 = '';

    // Normal (1-40)
    const h1 = Math.min(horas, 40);
    t1 = h1 * pago;
    d1 = `<div class="row"><span>Horas normales (${h1} h × $${pago.toFixed(2)})</span><span>$${t1.toFixed(2)}</span></div>`;

    // Doble (41-45)
    if (horas > 40) {
        const h2 = Math.min(horas - 40, 5);
        t2 = h2 * pago * 2;
        d2 = `<div class="row"><span>Horas doble (${h2} h × $${(pago*2).toFixed(2)})</span><span>$${t2.toFixed(2)}</span></div>`;
    }

    // Triple (46-50)
    if (horas > 45) {
        const h3 = horas - 45;
        t3 = h3 * pago * 3;
        d3 = `<div class="row"><span>Horas triple (${h3} h × $${(pago*3).toFixed(2)})</span><span>$${t3.toFixed(2)}</span></div>`;
    }

    const total = t1 + t2 + t3;

    resultado.innerHTML = `
        <div class="label">Desglose del Sueldo</div>
        ${d1}${d2}${d3}
        <span class="big">$${total.toFixed(2)}</span>
        <div class="label">Sueldo semanal total (${horas} horas trabajadas)</div>
    `;
    resultado.classList.add('show');
}
