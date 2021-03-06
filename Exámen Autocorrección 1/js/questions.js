var formElement=null;
var pregunta1=null;
var pregunta2=null;
var pregunta3=null;
var pregunta4=null;
var pregunta5=null;
var pregunta6=null;
var pregunta7 = [];
var pregunta8= [];
var pregunta9 = [];
var pregunta0= [];
var nota = 0;  //nota de la prueba sobre 10 puntos (tenemos 10  preguntas)


//****************************************************************************************************
//Después de cargar la página (onload) se definen los eventos sobre los checkbox7 entre otras acciones.
window.onload = function(){
formElement=document.getElementById("examen");

 //CORREGIR al apretar el botón
 formElement.onsubmit=function(){
    inicializar();
    //Corregir TEXT1
    corregirText(formElement.getElementsByClassName("texto")[0].value,
    pregunta1, "Pregunta 1: correcta", "Pregunta 1: Incorrecta, la respuesta es: " + pregunta1);

    //Corregir RADIO2
    corregirRadio(formElement.radio2,
    pregunta2, "Pregunta 2: correcta", "Pregunta 2: Incorrecta, la respuesta es: ", "radio2");

    //Corregir TEXT3
    corregirText(formElement.getElementsByClassName("texto")[1].value,
    pregunta3, "Pregunta 3: correcta", "Pregunta 3: Incorrecta, la respuesta es: " + pregunta3);

    //Corregir SELECT4
    corregirSelect(formElement.getElementsByTagName("select")[0],
    pregunta4, "Pregunta 4: correcta", "Pregunta 4: Incorrecta, la respuesta es: ");

    //Corregir RADIO5
    corregirRadio(formElement.radio5,
    pregunta5, "Pregunta 5: correcta", "Pregunta 5: Incorrecta, la respuesta es: ", "radio5");

    //Corregir SELECT6
    corregirSelect(formElement.getElementsByTagName("select")[1],
    pregunta6, "Pregunta 6: correcta", "Pregunta 6: Incorrecta, la respuesta es: ");

    //Corregir CHECKBOX7
    corregirCheckbox1(formElement.checkbox7,
    pregunta7, "Pregunta 7: correcto", "Pregunta 7: Incorrecta, las respuesta es: ", "checkbox7");

    //Corregir MULTIPLE8
    corregirMultiple(formElement.getElementsByTagName("select")[2],
    pregunta8, "Pregunta 8: correcta", "Pregunta 8: Incorrecta, la respuesta es: ");

    //Corregir CHECKBOX9
    corregirCheckbox2(formElement.checkbox9,
    pregunta9, "Pregunta 9: correcto", "Pregunta 9: Incorrecta, las respuesta es: BETA");

   //Corregir MULTIPLE0
    corregirMultiple(formElement.getElementsByTagName("select")[3],
    pregunta0, "Pregunta 10: correcta", "Pregunta 10: Incorrecta, las respuestas son: ");
    presentarNota();
    return false;
 }
}

//LEER XML de xml/preguntas.xml
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    gestionarXml(this);
   }
};
xhttp.open("GET", "xml/questions.xml", true);
xhttp.send();

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML.
function gestionarXml(datosXml){
  var xmlDoc = datosXml.responseXML;
  var profe_XML;
  var profe_HTML;
  var radio_HTML;
  var select_HTML;
  var checkbox_HTML;
  var opciones;
  var select_multi_opciones = [];
  var checkbox_radio_opciones = [];
  var res_checkbox;
  var res_multi;

 //TEXT1
  profe_XML = xmlDoc.getElementsByTagName("title")[0].innerHTML;
  profe_HTML = document.getElementById("profe_001");
  ponerdatosTXT(profe_HTML, profe_XML);
  pregunta1 = xmlDoc.getElementById("profe_001").getElementsByTagName("answer")[0].innerHTML;

 //RADIO2
  profe_XML = xmlDoc.getElementsByTagName("title")[1].innerHTML;
  profe_HTML = document.getElementById("profe_002");
  radio_HTML = document.getElementsByClassName("radio")[0];
  opciones = xmlDoc.getElementById("profe_002").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++)  {
    checkbox_radio_opciones[i] = xmlDoc.getElementById("profe_002").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosCheckboxHtml(profe_HTML, profe_XML, radio_HTML, checkbox_radio_opciones, "radio2", "radio");
  pregunta2 = parseInt(xmlDoc.getElementById("profe_002").getElementsByTagName("answer")[0].innerHTML);
  checkbox_radio_opciones = [];

 //TEXT3
  profe_XML = xmlDoc.getElementsByTagName("title")[2].innerHTML;
  profe_HTML = document.getElementById("profe_003");
  ponerdatosTXT(profe_HTML, profe_XML);
  pregunta3 = xmlDoc.getElementById("profe_003").getElementsByTagName("answer")[0].innerHTML;

  //SELECT4
  profe_XML = xmlDoc.getElementsByTagName("title")[3].innerHTML;
  profe_HTML = document.getElementById("profe_004");
  select_HTML = document.getElementsByTagName("select")[0];
  opciones = xmlDoc.getElementById("profe_004").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++) {
    select_multi_opciones[i] = xmlDoc.getElementById("profe_004").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosSelectHtml(profe_HTML, profe_XML, select_HTML, select_multi_opciones);
  pregunta4 = parseInt(xmlDoc.getElementById("profe_004").getElementsByTagName("answer")[0].innerHTML);

 //RADIO5
  profe_XML = xmlDoc.getElementsByTagName("title")[4].innerHTML;
  profe_HTML = document.getElementById("profe_005");
  radio_HTML = document.getElementsByClassName("radio")[1];
  opciones = xmlDoc.getElementById("profe_005").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++)  {
    checkbox_radio_opciones[i] = xmlDoc.getElementById("profe_005").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosCheckboxHtml(profe_HTML, profe_XML, radio_HTML, checkbox_radio_opciones, "radio5", "radio");
  pregunta5 = parseInt(xmlDoc.getElementById("profe_005").getElementsByTagName("answer")[0].innerHTML);
  checkbox_radio_opciones = [];

  //SELECT6
  profe_XML = xmlDoc.getElementsByTagName("title")[5].innerHTML;
  profe_HTML = document.getElementById("profe_006");
  select_HTML = document.getElementsByTagName("select")[1];
  opciones = xmlDoc.getElementById("profe_006").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++) {
    select_multi_opciones[i] = xmlDoc.getElementById("profe_006").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosSelectHtml(profe_HTML, profe_XML, select_HTML, select_multi_opciones);
  pregunta6 = parseInt(xmlDoc.getElementById("profe_006").getElementsByTagName("answer")[0].innerHTML);

  //CHECKBOX7
  profe_XML = xmlDoc.getElementsByTagName("title")[6].innerHTML;
  profe_HTML = document.getElementById("profe_007");
  checkbox_HTML = document.getElementsByClassName("checkbox")[0];
  opciones = xmlDoc.getElementById("profe_007").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++) {
    checkbox_radio_opciones[i] = xmlDoc.getElementById("profe_007").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosCheckboxHtml(profe_HTML, profe_XML, checkbox_HTML, checkbox_radio_opciones, "checkbox7", "checkbox");
  res_checkbox = xmlDoc.getElementById("profe_007").getElementsByTagName("answer").length;
  for(i = 0; i < res_checkbox; i++)  {
    pregunta7[i] = parseInt(xmlDoc.getElementById("profe_007").getElementsByTagName("answer")[i].innerHTML);
  }
  checkbox_radio_opciones = [];

 //MULTIPLE8
  profe_XML = xmlDoc.getElementsByTagName("title")[7].innerHTML;
  profe_HTML = document.getElementById("profe_008");
  select_HTML = document.getElementsByTagName("select")[2];
  opciones = xmlDoc.getElementById("profe_008").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++)  {
    select_multi_opciones[i] = xmlDoc.getElementById("profe_008").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosSelectHtml(profe_HTML, profe_XML, select_HTML, select_multi_opciones);
  res_multi = xmlDoc.getElementById("profe_008").getElementsByTagName("answer").length;
  for(i = 0; i < res_multi; i++)
  {
    pregunta8[i] = parseInt(xmlDoc.getElementById("profe_008").getElementsByTagName("answer")[i].innerHTML);
  }

  //CHECKBOX9
  profe_XML = xmlDoc.getElementsByTagName("title")[8].innerHTML;
  profe_HTML = document.getElementById("profe_009");
  checkbox_HTML = document.getElementsByClassName("checkbox")[1];
  opciones = xmlDoc.getElementById("profe_009").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++) {
    checkbox_radio_opciones[i] = xmlDoc.getElementById("profe_009").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosCheckboxHtml(profe_HTML, profe_XML, checkbox_HTML, checkbox_radio_opciones, "checkbox9", "checkbox");
  res_checkbox = xmlDoc.getElementById("profe_009").getElementsByTagName("answer").length;
  for(i = 0; i < res_checkbox; i++)  {
    pregunta9[i] = parseInt(xmlDoc.getElementById("profe_009").getElementsByTagName("answer")[i].innerHTML);
  }
  checkbox_radio_opciones = [];

 //MULTIPLE0
  profe_XML = xmlDoc.getElementsByTagName("title")[9].innerHTML;
  profe_HTML = document.getElementById("profe_000");
  select_HTML = document.getElementsByTagName("select")[3];
  opciones = xmlDoc.getElementById("profe_000").getElementsByTagName("option").length;
  for(i = 0; i < opciones; i++)  {
    select_multi_opciones[i] = xmlDoc.getElementById("profe_000").getElementsByTagName("option")[i].innerHTML;
  }
  ponerDatosSelectHtml(profe_HTML, profe_XML, select_HTML, select_multi_opciones);
  res_multi = xmlDoc.getElementById("profe_000").getElementsByTagName("answer").length;
  for(i = 0; i < res_multi; i++)
  {
    pregunta0[i] = parseInt(xmlDoc.getElementById("profe_000").getElementsByTagName("answer")[i].innerHTML);
  }
}


//****************************************************************************************************
//implementación de la corrección

function corregirText(valor, correcto, correct, incorrect) {
  if(valor.toLowerCase() == correcto.toLowerCase()) {
    darRespuestaHTML(correct);
    nota += 1;
  }
  else {
    darRespuestaHTML(incorrect);
  }
}


function corregirRadio(radio, correcto, correct, incorrect, atributo) {
  var value = -1;
  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      value = i;
      break;
    }
  }
  if(value == correcto) {
    darRespuestaHTML(correct);
    nota += 1;
  }
  else {
    darRespuestaHTML(incorrect + document.getElementById(atributo+correcto).innerHTML);
  }
}


function corregirMultiple(multi, correcto, correct, incorrect) {
  var respuestas = [];
  var acertadas = [];
  for(i = 0; i < correcto.length; i++) {
    acertadas[i] = multi[correcto[i]].innerHTML;
  }
  for(j = 0; j < multi.length; j++) {
    if(multi[j].selected) {
      respuestas[respuestas.length] = j;
    }
  }
  if(respuestas.length == correcto.length) {
    for(k = 0; k < respuestas.length; k++) {
      if(respuestas[k] != correcto[k]) {
        darRespuestaHTML(incorrect + acertadas.join(", "));
        break;
      }
      darRespuestaHTML(correct);
    }
  }
  else {
    darRespuestaHTML(incorrect + acertadas.join(", "));
  }
}


function corregirSelect(select, correcto, correct, incorrect) {
  if(select.value == correcto) {
    darRespuestaHTML(correct);
    nota += 1;
  }
  else {
    darRespuestaHTML(incorrect + select[correcto].innerHTML);
  }
}


function corregirCheckbox1(checkbox, correcto, correct, incorrect, atributo) {
  var respuestas = [];
  var acertadas = [];
  for(i = 0; i < correcto.length; i++) {
    acertadas[i] = document.getElementById(atributo+correcto[i]).innerHTML;
  }
  for(j = 0; j < checkbox.length; j++){
    if(checkbox[j].checked) {
      respuestas[respuestas.length] = j;
    }
  }
  if(respuestas.length == correcto.length) {
    for(k = 0; k < respuestas.length; k++) {
      if(respuestas[k] != correcto[k]) {
        darRespuestaHTML(incorrect + acertadas.join(", "));
        break;
      }
      darRespuestaHTML(correct);
    }
  }
  else {
    darRespuestaHTML(incorrect + acertadas.join(", "));
  }
}


function corregirCheckbox2(checkbox, correcto, correct, incorrect, atributo) {
  var respuestas = [];
  var acertadas = [];
  for(i = 0; i < correcto.length; i++) {
  }
  for(j = 0; j < checkbox.length; j++){
    if(checkbox[j].checked) {
      respuestas[respuestas.length] = j;
    }
  }
  if(respuestas.length == correcto.length) {
    for(k = 0; k < respuestas.length; k++) {
      if(respuestas[k] != correcto[k]) {
        darRespuestaHTML(incorrect + acertadas.join(", "));
        break;
      }
      darRespuestaHTML(correct);
    }
  }
  else {
    darRespuestaHTML(incorrect + acertadas.join(", "));
  }
}


//****************************************************************************************************
// poner los datos recibidos en el HTML


function ponerdatosTXT(elementoHTML, elementoXML) {
  elementoHTML.innerHTML = elementoXML;
}

function ponerDatosSelectHtml(elementoHTML, elementoXML, select_HTML, selectOpciones) {
  elementoHTML.innerHTML = elementoXML;
  var option;
  for (i = 0; i < selectOpciones.length; i++) {
    option = document.createElement("option");
    option.text = selectOpciones[i];
    option.value = i;
    select_HTML.options.add(option);
  }
}


function ponerDatosCheckboxHtml(elementoHTML, elementoXML, checkbox_HTML, checkboxOpciones, atributo, tipo) {
  elementoHTML.innerHTML = elementoXML;
  var input;
  var label;
  for (i = 0; i < checkboxOpciones.length; i++) {
    input = document.createElement("input");
    label = document.createElement("label");
    label.innerHTML = checkboxOpciones[i];
    label.setAttribute("id", atributo+i);
    input.type = tipo;
    input.name = atributo;
    checkbox_HTML.appendChild(input);
    checkbox_HTML.appendChild(label);
    checkbox_HTML.appendChild(document.createElement("br"));
  }
}


//****************************************************************************************************
//Gestionar la presentación de las respuestas


function darRespuestaHTML(texto)
{
  var parrafo = document.createElement("p");
  var contenido = document.createTextNode(texto);
  parrafo.appendChild(contenido);
  document.getElementById("resultados").appendChild(parrafo);
}

function presentarNota()
{
  darRespuestaHTML("Tu nota es de "+nota+" sobre 10 puntos.");
}
function inicializar()
{
  document.getElementById("resultados").innerHTML = "";
  nota = 0;
}

//Comprobar que se han introducido datos en el formulario
function comprobar(){
   var f=formElement;
   var checked=false;
   for (i = 0; i < f.checkbox.length; i++) {  //"checkbox" es el nombre asignado a todos los checkbox
      if (f.checkbox[i].checked) checked=true;
   }
   if (f.elements[0].value=="") {
    f.elements[0].focus();
    alert("Escribe un número");
    return false;
   } else if (f.elements[1].selectedIndex==0) {
    f.elements[1].focus();
    alert("Selecciona una opción");
    return false;
   } if (!checked) {
    document.getElementsByTagName("h3")[2].focus();
    alert("Selecciona una opción del checkbox");
    return false;
   } else  return true;
}
