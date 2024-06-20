/*$(document).ready(function(){
    // Variables de los elementos
    const contador = $("#Contar");
    const valorSubTotal = $("#subtotalValor");
    const valorTotal = $("#totalPrecio");
    const btn_continuar = $("#btn-continuar-carrito");
    const code = $("#input-codpromo-carrito");
    const code_promo_txt = $("#txt-codpromo-carrito");
    
    // Variables extras
    let numero = 1;
    let valorInicial = parseInt(valorSubTotal.text());
    let descuentoActivo = false;
    let porcentajeDescuento = 0;
    
    // Inicializar valores con formato
    valorSubTotal.text("$" + formatNumber(valorInicial));
    valorTotal.text("$" + formatNumber(valorInicial));
    
    // Eventos de incremento y decremento
    $("#Incremento").click(function() {
        numero++;
        contador.text(numero);
        actualizarTotal();
    });

    $("#Decremento").click(function() {
        if (numero > 0) {
            numero--;
            contador.text(numero);
            actualizarTotal();
        }
    });

    // Evento de aplicación de código de promoción
    btn_continuar.click(function(){
        if (code.val() === 'NORDICO$2024$') {
            code_promo_txt.text("Código Válido");
            descuentoActivo = true;
            porcentajeDescuento = 0.25;
        } else {
            code_promo_txt.text("Este código no existe o ya no es válido");
            descuentoActivo = false;
            porcentajeDescuento = 0;
        }
        actualizarTotal();
    });

    // Función para actualizar el total
    function actualizarTotal() {
        const total = valorInicial * numero;
        const totalConDescuento = descuentoActivo ? total * (1 - porcentajeDescuento) : total;
        valorTotal.text("$" + formatNumber(Math.round(totalConDescuento)));
        valorSubTotal.text("$" + formatNumber(total));
    }

    // Función para formatear números con separadores de miles
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});*/


//API Indicador de UF, dolar, etc
$.getJSON('https://mindicador.cl/api', function(data) {
    let dailyIndicators = data;
    let fechaCompleta = dailyIndicators.uf.fecha.slice(0, 10); //Solo tomar la fecha del json y no la hora
    let fechaFormateada = fechaCompleta.split('-').reverse().join('/'); //Invertir fecha y agregar separacion
    $("<p/>", {
        html: 'Fecha: '+ fechaFormateada 
    }).appendTo("#indicadorDivisaFecha");

    $("<p/>", {
        html: 
              'Precio UF ⮕ $' + dailyIndicators.uf.valor  + '<br>' +
              'Precio Dolar  ⮕ $' + dailyIndicators.dolar.valor + '<br>' +
              'Precio UTM ⮕ $' + dailyIndicators.utm.valor
    }).appendTo("#indicadorDivisa");
}).fail(function() {
    console.log('Error al consumir la API!');
});


