//Validar codigo de promocion
$(document).ready(function(){
    const btn_continuar = $("#btn-continuar");
    const code = $("#code-promo"); 
    const code_promo_txt = $("#code-promo-txt");

    btn_continuar.click(function(){
        if(code.val() === 'NORDICO$2024$'){
            code_promo_txt.text("Código Válido");
            
        } else {
            code_promo_txt.text("Este código no existe o ya no es válido.");
        }
    });
});

//Contador mas reajuste de valores de precio
$(document).ready(function() {
    const contador = $("#Contar");
    const sumar = $("#Incremento");
    const restar = $("#Decremento");
    const valor1 = $("#totalPrecio");
    const valor2 = $("#subtotalValor");
    
    let numero = 1;
    let valorInicial = parseInt(valor1.text()); // Obtener el valor inicial y convertirlo a número
    valor1.text("$"+valor1.text()) //Incialiazo el valor 1 con el signo $
    valor2.text(valor1.text()) // El valor del subtotal toma el valor del producto cuando carga la pagina
    
    sumar.click(function() {
        numero++;
        contador.text(numero);
        actualizarTotal();
    });

    restar.click(function() {
        if(numero > 0) {
            numero--;
            contador.text(numero);
            actualizarTotal();
        }
    });

    function actualizarTotal() {
        const total = valorInicial * numero;
        valor1.text("$"+total);
        valor2.text(valor1.text()) //Cada vez que se actualiza el contador el subtotal tambien
    }
    
});


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


