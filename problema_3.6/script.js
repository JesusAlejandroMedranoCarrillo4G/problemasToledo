function calcular() {
    const precio = parseFloat(document.getElementById('precio').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(precio) || precio <= 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa un precio válido mayor a 0.</span>';
        resultado.classList.add('show');
        return;
    }

    let pct, descuento, motivo;

    if (precio >= 200) {
        pct = 15; motivo = 'precio ≥ $200';
    } else if (precio > 100) {
        pct = 12; motivo = '$100 < precio < $200';
    } else {
        pct = 10; motivo = 'precio < $100';
    }

    descuento = precio * (pct / 100);
    const final = precio - descuento;

    resultado.innerHTML = `
        <div class="label">Desglose</div>
        <div class="row"><span>Precio original</span><span>$${precio.toFixed(2)}</span></div>
        <div class="row"><span>Descuento (${pct}%) — ${motivo}</span><span>−$${descuento.toFixed(2)}</span></div>
        <span class="big">$${final.toFixed(2)}</span>
        <div class="label">Precio final con descuento</div>
    `;
    resultado.classList.add('show');
}
