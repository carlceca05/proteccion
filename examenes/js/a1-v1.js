//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"En la evaluación del lesionado, A se refiere:",
        op0:"A) Abrir vía aérea",
        op1:"B) Buscar que respire",
        op2:"C) Que tenga pulso",
        op3:"D) Controlar hemorragias",
        correcta:"3"
    },
    {
        id:1,
        pregunta:"En la evaluación del lesionado, B se refiere:",
        op0:"A) Abrir vía aérea",
        op1:"B) Buscar que respire",
        op2:"C) Que tenga pulso",
        op3:"D) Controlar hemorragias",
        correcta:"0"
    },
    {
        id:2,
        pregunta:"La maniobra de Heimlich se realiza a personas que se atragantaron totalmente y se presiona con las dos manos arriba del ombligo:",
        op0:"A) Cierto ",
        op1:"B) Falso",
        op2:"C) ",
        op3:"D) ",
        correcta:"1"
    },
    {
        id:3,
        pregunta:"Siempre debo cuidar la integridad;",
        op0:"A) Del lesionado",
        op1:"B) Primeramente, la mía",
        op2:"C) De los curiosos ya que le puede pasar algo",
        op3:"D) ",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"VOS se refiere a:",
        op0:"A) Ver, oír y sentir la respiración del lesionado",
        op1:"B) Que hable",
        op2:"C) Que esta alerta y orientado",
        op3:"D) Que este vivo",
        correcta:"2",
        /* a:"recuerdos.html"*/
    },
    {
        id:5,
        pregunta:"¿Qué significan las siglas RCP?",
        op0:"A) Reactivación Cardiopulmonar.",
        op1:"B) Rescate Cardiopulmonar.",
        op2:"C) Reanimación Cardiopulmonar.",
        op3:"D) ",
        correcta:"2",
        a:"recuerdos.html"
    },
    {
        id:6,
        pregunta:"Con estas maniobras haces la función del corazón de bombear sangre hacia todo el cuerpo, hacia los tejidos.",
        op0:"A) RCP",
        op1:"B) ABC",
        op2:"C) VOS",
        op3:"D) ",
        correcta:"1",
        /*a:"recuerdos.html"*/
    },
    {
        id:7,
        pregunta:"En la OVACE (Obstrucción de la vía aérea por un cuerpo extraño), cuando la persona queda inconsciente se realizan:",
        op0:"A) Compresiones torácicas",
        op1:"B) Compresiones abdominales",
        op2:"C) ABC",
        op3:"D) Barrido de gancho",
        correcta:"1",
        /*a:"unritualsolarprehispanica.html"*/
    },
    {
        id:8,
        pregunta:"Los borrados para realizar la Judea utilizan",
        op0:"A) Olote, varas de otate, sables de madera y cúpula.",
        op1:"B) Olote, varas de otate, sables de madera y máscaras.",
        op2:"C) Tocados, olote, varas de otate, máscaras y sables de madera.",
        op3:"D) Varas de otate, olote, sables de madera y peyote.",
        correcta:"3",
        a:"unritualsolarprehispanica.html"
    },
    {
        id:9,
        pregunta:"Es la cantidad de compresiones que realizas en RCP",
        op0:"A) 100 a 120 por minuto dos veces, revisas si respira y continuas con el RCP",
        op1:"B) 100 por minuto",
        op2:"C) Hasta que reaccione",
        op3:"D)  Hasta que te canses",
        correcta:"2",
        a:"unritualsolarprehispanica.html"
    },
    {
        id:10,
        pregunta:"Son los métodos más efectivos para detener una hemorragia:",
        op0:"A) Presión directa sobre la herida",
        op1:"B) Empaquetamiento",
        op2:"C) Vendaje compresivo",
        op3:"D) Torniquete",
        correcta:"0"
    }
]
//para guardar las respuestas elegidas

let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;

//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");
    if (pregunta.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src = pregunta.img;
        contenedor.appendChild(img);
    }
    
    else if(pregunta.hasOwnProperty("a")){
        const br = document.createElement("br");
        const br2 = document.createElement("br");
        const a = document.createElement("a");
        const textA = document.createTextNode("Ver el texto")
        a.href = pregunta.a;
        a.setAttribute('target', '_blank')
        contenedor.appendChild(a);
        contenedor.appendChild(br2)
        a.appendChild(textA)
    }
    
    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funcií²n.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);
    const label4 = crearLabel("3",pregunta.op3);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funcií²n que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.required = true
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
    if (numPregunta == 12){
       const tema = document.createElement("div")
    }
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}



//botón corregir
let corregir = document.getElementById("corregir");
function corregirxd(){
    stop();
    const result = document.querySelector(".result-box");
    const buttonxd = document.getElementById("corregir");
    buttonxd.classList.add("hide")
    result.classList.remove("hide")
    const afterButton = document.querySelector(".buttonfinal");
    afterButton.classList.remove("hide")
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    //colocamos la cantidad que acerto y las que no acertó

    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }

        else if(respuestas[i] == null){
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(idCorreccion).className = "acierto";
        }

        else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }
    const resultadoP = document.getElementById("homeTitle");
    parrafoxd = document.createElement("h1");
    parrafoxd.textContent = '¡Obtuviste ' + cantiCorrectas + '/120!'
    resultadoP.appendChild(parrafoxd);
}

const containerMain = document.querySelector(".containerMain");
const homeContainer = document.querySelector(".home-box")
const overheader = document.querySelector(".overheader")
const containerFoo = document.querySelector(".containerFoo")

function testStart(){
    overheader.classList.remove("hide");
    containerMain.classList.remove("hide");
    containerFoo.classList.remove("hide")
    homeContainer.classList.add("hide");
    write();
    timeStarted = setInterval(write, 10);
}

function verRespuesta(){
    const result = document.querySelector(".result-box");
    result.classList.add("hide")
}

//clock

window.onload = () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
 };
 
 function write() {
    let ht, mt, st, mlst;
    mls++;
    if (mls > 60) {
       s++;
       mls = 0;
    }
    if (s > 59) {
       m++;
       s = 0;
    }
    if (m > 59) {
       h++;
       m = 0;
    }
    if (h > 24) h = 0;
    if (h == 3){
        corregirxd();
        reset();
    }
 
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    time.innerHTML = `${ht}:${mt}:${st}`;
    /*time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;*/
 };
 function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "03:00:00" /*   */
    /*time.innerHTML = "03:00:00.00"*/
    h = 3;
    m = 0;
    s = 0;
    /*mls = 0;*/
 }
 function stop() {
    clearInterval(timeStarted);
 }
