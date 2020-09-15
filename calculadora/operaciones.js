// Operaciones matemáticas básicas

let sumar = (a, b) => {
    return a + b;
}

let restar = (a, b) => {
    return a - b;
}

let multiplicar = (a, b) => {
    return a * b;
}

let dividir = (a, b) => {
    if (b == 0) {
        console.log('No es posible dividir por Cero');
        return 'Indeterminado';
    } else {
        return a / b;
    }
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}