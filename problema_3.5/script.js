function calcular() {
    const n1 = document.getElementById('nombre1').value.trim();
    const e1 = parseInt(document.getElementById('edad1').value);
    const n2 = document.getElementById('nombre2').value.trim();
    const e2 = parseInt(document.getElementById('edad2').value);
    const n3 = document.getElementById('nombre3').value.trim();
    const e3 = parseInt(document.getElementById('edad3').value);
    const resultado = document.getElementById('resultado');

    if (!n1 || !n2 || !n3 || isNaN(e1) || isNaN(e2) || isNaN(e3)) {
        resultado.innerHTML = '<span class="error">⚠️ Por favor completa todos los campos correctamente.</span>';
        resultado.classList.add('show');
        return;
    }

    const personas = [
        { nombre: n1, edad: e1 },
        { nombre: n2, edad: e2 },
        { nombre: n3, edad: e3 },
    ];

    let menor = personas[0];
    if (personas[1].edad < menor.edad) menor = personas[1];
    if (personas[2].edad < menor.edad) menor = personas[2];

    const lista = personas.map(p =>
        `<div class="row"><span>${p.nombre}</span><span>${p.edad} años ${p.nombre === menor.nombre ? '👈' : ''}</span></div>`
    ).join('');

    resultado.innerHTML = `
        <div class="label">Comparación</div>
        ${lista}
        <span class="big">🏆 ${menor.nombre}</span>
        <div class="label">Es la persona de menor edad con ${menor.edad} años</div>
    `;
    resultado.classList.add('show');
}
