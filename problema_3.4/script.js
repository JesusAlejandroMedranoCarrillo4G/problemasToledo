function calcular() {
    const horas = parseFloat(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(horas) || horas <= 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa un número de horas válido mayor a 0.</span>';
        resultado.classList.add('show');
        return;
    }

    let cobro = 0;
    let detalle = '';

    if (horas <= 2) {
        cobro = horas * 5;
        detalle = `<div class="row"><span>${horas} h × $5.00</span><span>$${cobro.toFixed(2)}</span></div>`;
    } else if (horas <= 5) {
        const t1 = 2 * 5;
        const t2 = (horas - 2) * 4;
        cobro = t1 + t2;
        detalle = `
            <div class="row"><span>2 h × $5.00</span><span>$${t1.toFixed(2)}</span></div>
            <div class="row"><span>${(horas-2).toFixed(1)} h × $4.00</span><span>$${t2.toFixed(2)}</span></div>`;
    } else if (horas <= 10) {
        const t1 = 2 * 5;
        const t2 = 3 * 4;
        const t3 = (horas - 5) * 3;
        cobro = t1 + t2 + t3;
        detalle = `
            <div class="row"><span>2 h × $5.00</span><span>$${t1.toFixed(2)}</span></div>
            <div class="row"><span>3 h × $4.00</span><span>$${t2.toFixed(2)}</span></div>
            <div class="row"><span>${(horas-5).toFixed(1)} h × $3.00</span><span>$${t3.toFixed(2)}</span></div>`;
    } else {
        const t1 = 2 * 5;
        const t2 = 3 * 4;
        const t3 = 5 * 3;
        const t4 = (horas - 10) * 2;
        cobro = t1 + t2 + t3 + t4;
        detalle = `
            <div class="row"><span>2 h × $5.00</span><span>$${t1.toFixed(2)}</span></div>
            <div class="row"><span>3 h × $4.00</span><span>$${t2.toFixed(2)}</span></div>
            <div class="row"><span>5 h × $3.00</span><span>$${t3.toFixed(2)}</span></div>
            <div class="row"><span>${(horas-10).toFixed(1)} h × $2.00</span><span>$${t4.toFixed(2)}</span></div>`;
    }

    resultado.innerHTML = `
        <div class="label">Desglose</div>
        ${detalle}
        <span class="big">$${cobro.toFixed(2)}</span>
        <div class="label">Total a pagar por ${horas} hora${horas !== 1 ? 's' : ''}</div>
    `;
    resultado.classList.add('show');
}
