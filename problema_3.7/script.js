function calcular() {
    const edad     = parseInt(document.getElementById('edad').value);
    const promedio = parseFloat(document.getElementById('promedio').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(edad) || isNaN(promedio) || edad < 0 || promedio < 0 || promedio > 10) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa valores válidos. Promedio entre 0 y 10.</span>';
        resultado.classList.add('show');
        return;
    }

    let beca = 0;
    let descripcion = '';

    if (edad > 18) {
        if (promedio >= 9)        { beca = 2000; descripcion = 'Mayor de 18 años, promedio ≥ 9'; }
        else if (promedio >= 7.5) { beca = 1000; descripcion = 'Mayor de 18 años, promedio ≥ 7.5'; }
        else if (promedio >= 6)   { beca =  500; descripcion = 'Mayor de 18 años, promedio ≥ 6'; }
        else                       { beca =    0; descripcion = 'Mayor de 18 años, promedio < 6'; }
    } else {
        if (promedio >= 9)        { beca = 3000; descripcion = '18 años o menor, promedio ≥ 9'; }
        else if (promedio >= 8)   { beca = 2000; descripcion = '18 años o menor, promedio ≥ 8'; }
        else if (promedio >= 6)   { beca = 1000; descripcion = '18 años o menor, promedio ≥ 6'; }
        else                       { beca =    0; descripcion = '18 años o menor, promedio < 6'; }
    }

    if (beca > 0) {
        resultado.innerHTML = `
            <div class="label">Criterio aplicado</div>
            <div class="row"><span>Edad</span><span>${edad} años</span></div>
            <div class="row"><span>Promedio</span><span>${promedio}</span></div>
            <div class="row"><span>Categoría</span><span>${descripcion}</span></div>
            <span class="big success">$${beca.toFixed(2)}/mes</span>
            <div class="label">Beca mensual asignada</div>
        `;
    } else {
        resultado.innerHTML = `
            <div class="label">Criterio aplicado</div>
            <div class="row"><span>Edad</span><span>${edad} años</span></div>
            <div class="row"><span>Promedio</span><span>${promedio}</span></div>
            <span class="big error">✉️ Carta de invitación</span>
            Se enviará una carta invitándole a estudiar más en el próximo ciclo escolar.
        `;
    }
    resultado.classList.add('show');
}
