function calcular() {
    const alumnos   = parseInt(document.getElementById('alumnos').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(alumnos) || alumnos < 1) {
        resultado.innerHTML = '<span class="error">⚠️ Ingresa un número de alumnos válido (mínimo 1).</span>';
        resultado.classList.add('show');
        return;
    }

    let costoAlumno, rango;

    if (alumnos > 100) {
        costoAlumno = 20; rango = 'más de 100 alumnos';
    } else if (alumnos >= 50) {
        costoAlumno = 35; rango = '50 a 100 alumnos';
    } else if (alumnos >= 20) {
        costoAlumno = 40; rango = '20 a 49 alumnos';
    } else {
        costoAlumno = 70; rango = 'menos de 20 alumnos';
    }

    const total = costoAlumno * alumnos;

    resultado.innerHTML = `
        <div class="label">Desglose del viaje</div>
        <div class="row"><span>Número de alumnos</span><span>${alumnos}</span></div>
        <div class="row"><span>Rango aplicado</span><span>${rango}</span></div>
        <div class="row"><span>Costo por alumno</span><span>$${costoAlumno}.00</span></div>
        <span class="big">$${total.toFixed(2)}</span>
        <div class="label">Costo total del grupo</div>
    `;
    resultado.classList.add('show');
}
