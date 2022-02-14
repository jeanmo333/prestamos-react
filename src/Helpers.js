
export function calcularTotal(cantidad, plazo) {
    //cantidad
    //0 - 1000= 25%
    //1001 - 5000= 20%
    //5001 - 10000= 15%
    //+10000= 10%

    let cantidadTotal;
    let cantidadPlazo = 0;

    if (cantidad <= 1000) {
        cantidadTotal = (cantidad * 25) / 100;

    } else if (cantidad > 1000 && cantidad <= 5000) {
        cantidadTotal = (cantidad * 20) / 100;

    } else if (cantidad > 5000 && cantidad <= 10000) {
        cantidadTotal = (cantidad * 15) / 100;
    } else {
        cantidadTotal = (cantidad * 10) / 100;
    }



    //Calcular el plazo
    //3 meses = 5%
    //6 meses = 10%
    //12 meses = 15%
    //24 meses = 20%

    switch (plazo) {

        case 3:
            cantidadPlazo = cantidad * .05;
            break;
        case 6:
            cantidadPlazo = cantidad * .10;
            break;
        case 12:
            cantidadPlazo = cantidad * .15;
            break;
        case 24:
            cantidadPlazo = cantidad * .20;
            break;

        default:
            break;

    }

    return cantidadTotal + cantidadPlazo + cantidad;

}






