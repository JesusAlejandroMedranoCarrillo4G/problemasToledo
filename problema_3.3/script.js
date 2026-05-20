function calcular() {
    const p = parseFloat(document.getElementById('presupuesto').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(p) || p < 0) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa un presupuesto válido.</span>';
        resultado.classList.add('show');
        return;
    }

    let regalo, emoji, rango;

    if (p <= 10) {
        regalo = 'Tarjeta'; emoji = '💌'; rango = '$0 – $10';
    } else if (p <= 100) {
        regalo = 'Chocolates'; emoji = '🍫'; rango = '$11 – $100';
    } else if (p <= 250) {
        regalo = 'Flores'; emoji = '💐'; rango = '$101 – $250';
    } else {
        regalo = 'Anillo'; emoji = '💍'; rango = 'más de $251';
    }

    resultado.innerHTML = `
        <div class="label">Con $${p.toFixed(2)} de presupuesto...</div>
        <span class="big">${emoji} ${regalo}</span>
        Rango de precio: <strong>${rango}</strong>
    `;
    resultado.classList.add('show');
}
