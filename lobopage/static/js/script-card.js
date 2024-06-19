$(document).ready(function(){
    const añadir1 = $("#añadir-1");
    const añadir2 = $("#añadir-2");
    const añadir3 = $("#añadir-3");
    const añadir4 = $("#añadir-4");
    const añadir5 = $("#añadir-5");
    const añadir6 = $("#añadir-6");
    const añadir7 = $("#añadir-7");
    const añadir8 = $("#añadir-8");
    const añadir9 = $("#añadir-9");

    const imagen      = $("#modal-img");
    const titulo      = $("#modal-titulo");
    const precio      = $("#modal-precio");
    const descripcion = $("#modal-descripcion");


    añadir1.click(function(){
        imagen.attr('src', 'img/a-collar-arbol.png')
        titulo.text("Collar Árbol Mundo")
        precio.text("$8.000")
        descripcion.text("Este increíble Collar Árbol Mundo está decorado con el magnífico Árbol cósmico, Yggdrasil. Simbolizando la conexión entre los nueve mundos de la mitología nórdica, Yggdrasil es el eje del cosmos y una fuente eterna de sabiduría y vida.")
    })

    añadir2.click(function(){
        imagen.attr('src', 'img/a-cuchillo.png')
        titulo.text("Cuchillito Seax")
        precio.text("$13.500")
        descripcion.text("El Cuchillito Seax es una pieza extraordinaria que evoca la esencia y el espíritu guerrero de los antiguos vikingos. Este cuchillo, inspirado en el tradicional Seax, era una herramienta fundamental y un arma versátil para los pueblos nórdicos.")
    })

    añadir3.click(function(){
        imagen.attr('src', 'img/a-martillo.png')
        titulo.text("Martillo Mjölnir")
        precio.text("$36.000")
        descripcion.text("Este imponente Martillo Mjölnir está decorado con intrincados grabados que reflejan el poder y la majestuosidad del dios nórdico Thor. Mjölnir, el arma sagrada de Thor, simboliza la protección, la fuerza divina y el orden en la mitología nórdica.")
    })
    
    añadir4.click(function(){
        imagen.attr('src', 'img/a-espada2.png')
        titulo.text("Filo de media noche")
        precio.text("$50.000")
        descripcion.text("El Filo de Media Noche es una espada legendaria envuelta en misterio y poder. Forjada en las sombras de la noche más oscura, esta espada resplandece con un brillo tenue y etéreo que parece absorber la luz circundante.")
    })

    añadir5.click(function(){
        imagen.attr('src', 'img/a-cascos.png')
        titulo.text("Casco de Hierro")
        precio.text("$64.000")
        descripcion.text("El Casco de Hierro Nórdico es una pieza emblemática de la armadura vikinga, diseñada para proporcionar una protección formidable y un aspecto imponente en el campo de batalla.")
    })

    añadir6.click(function(){
        imagen.attr('src', 'img/a-palo.png')
        titulo.text("Nudo de Vanaheim")
        precio.text("$36.000")
        descripcion.text("El Nudo de Vanaheim es un símbolo místico y antiguo, asociado con los dioses Vanir de la mitología nórdica. Este intrincado diseño de líneas entrelazadas representa la conexión y el equilibrio entre las fuerzas de la naturaleza, la magia y la fertilidad. Sin principio ni fin, simboliza la eternidad y la interconexión de todas las cosas en el universo.")
    })

    añadir7.click(function(){
        imagen.attr('src', 'img/a-colgantes.jpg')
        titulo.text("Colgante de metal")
        precio.text("$7.900")
        descripcion.text("El Colgante de Metal es una joya de gran belleza y misterio, forjada con precisión y maestría. Elaborado en plata o acero pulido, su diseño presenta un símbolo antiguo que representa la protección y el poder. ")
    })

    añadir8.click(function(){
        imagen.attr('src', 'img/a-escudos.jpg')
        titulo.text("Escudos Skyrim")
        precio.text("$20.000")
        descripcion.text("Los Escudos Skyrim son defensas robustas y ornamentadas, utilizadas por los guerreros en la fría y escarpada región de Skyrim. Fabricados con una combinación de madera resistente y metal reforzado, estos escudos están decorados con intrincados grabados y emblemas que representan los clanes y los héroes de Skyrim. ")
    })

    añadir9.click(function(){
        imagen.attr('src', 'img/a-espada.jpg')
        titulo.text("Espada de los Indignos")
        precio.text("$49.000")
        descripcion.text("La Espada de los Indignos es una arma legendaria, temida y respetada en igual medida. Forjada en una época oscura, esta espada lleva consigo una maldición: solo aquellos que no son dignos de su poder pueden empuñarla sin sufrir consecuencias fatales. La hoja, de un metal oscuro y opaco, está grabada con runas que cuentan la historia de su creación y su propósito.")
    })
})