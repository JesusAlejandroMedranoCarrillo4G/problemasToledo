function calcular() {
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(edad) || edad < 0 || edad > 120) {
        resultado.innerHTML = '<span class="error">⚠️ Por favor ingresa una edad válida (0–120).</span>';
        resultado.classList.add('show');
        return;
    }

    if (edad >= 18) {
        resultado.innerHTML = `
            <div class="label">Resultado</div>
            <span class="big success">✅ Puede votar</span>
            Con <strong>${edad} años</strong>, esta persona cumple el requisito de ser mayor o igual a 18 años.
        `;
    } else {
        const faltan = 18 - edad;
        resultado.innerHTML = `
            <div class="label">Resultado</div>
            <span class="big error">❌ No puede votar</span>
            Con <strong>${edad} años</strong>, aún le faltan <strong>${faltan} año${faltan !== 1 ? 's' : ''}</strong> para poder votar.
        `;
    }

    resultado.classList.add('show');
}
