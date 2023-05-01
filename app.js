let operandoA, operandoB, operacion, input

$(document).ready(() => {

    // Permitir caracteres permitidos
  $("#inputData").on("keypress", function(event) {
    var caracter = String.fromCharCode(event.which);
    var inputData = $("#inputData");
    var ultimoCaracter = inputData.val().slice(-1);
    
    if (!/^[0-9+\-*/.\b\t\n\r]+$/.test(caracter)) {
      event.preventDefault();
      return;
    }

    if (ultimoCaracter === caracter && (caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/')) {
      event.preventDefault();
      return;
    }

    inputData.val(inputData.val() + caracter);
    event.preventDefault();
  });

  // Permitir caracteres especiales
  $("#inputData").on("keydown", function(event) {
    var inputData = $("#inputData");
    var ultimoCaracter = inputData.val().slice(-1);

    if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 27 || event.keyCode == 46 ||
      event.keyCode == 110 || event.keyCode == 190) {
      return;
    }

    if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
      if (event.keyCode == 107) {
        event.preventDefault();
        return;
      } else if (event.keyCode == 109) {
        inputData.val(inputData.val().slice(0, -1) + '-');
        event.preventDefault();
        return;
      } else if (event.keyCode == 106) {
        inputData.val(inputData.val().slice(0, -1) + '*');
        event.preventDefault();
        return;
      } else if (event.keyCode == 111 || event.keyCode == 191) {
        inputData.val(inputData.val().slice(0, -1) + '/');
        event.preventDefault();
        return;
      }
    }
  });

    /* input de botones numeros */
    $("#0").on("click", () => $("#inputData").val($("#inputData").val() + "0"))
    $("#1").on("click", () => $("#inputData").val($("#inputData").val() + "1"))
    $("#2").on("click", () => $("#inputData").val($("#inputData").val() + "2"))
    $("#3").on("click", () => $("#inputData").val($("#inputData").val() + "3"))
    $("#4").on("click", () => $("#inputData").val($("#inputData").val() + "4"))
    $("#5").on("click", () => $("#inputData").val($("#inputData").val() + "5"))
    $("#6").on("click", () => $("#inputData").val($("#inputData").val() + "6"))
    $("#7").on("click", () => $("#inputData").val($("#inputData").val() + "7"))
    $("#8").on("click", () => $("#inputData").val($("#inputData").val() + "8"))
    $("#9").on("click", () => $("#inputData").val($("#inputData").val() + "9"))

    /* input de operadores numericos y "."*/
    $("#sumar").on("click", function() {
        let inputData = $("#inputData");
        let ultimoCaracter = inputData.val().slice(-1);
        if (ultimoCaracter === "+") {
          return;
        } else if (ultimoCaracter === "*" || ultimoCaracter === "/" || ultimoCaracter === "-" ) {
          inputData.val(inputData.val().slice(0, -1) + "+");  
        } 
        else {
          inputData.val(inputData.val() + "+");
        }
      });
    
      $("#restar").on("click", function() {
        let inputData = $("#inputData");
        let ultimoCaracter = inputData.val().slice(-1);
        if (ultimoCaracter === "-") {
          return;
        } else if (ultimoCaracter === "*" || ultimoCaracter === "/" || ultimoCaracter === "+" || ultimoCaracter === ".") {
          inputData.val(inputData.val().slice(0, -1) + "-");
        } else {
          inputData.val(inputData.val() + "-");
        }
      });

      $("#multiplicar").on("click", function() {
        let inputData = $("#inputData");
        let ultimoCaracter = inputData.val().slice(-1);
        if (ultimoCaracter === "*") {
          return;
        } else if (ultimoCaracter === "-" || ultimoCaracter === "/" || ultimoCaracter === "+" || ultimoCaracter === ".") {
          inputData.val(inputData.val().slice(0, -1) + "*");
        } else {
          inputData.val(inputData.val() + "*");
        }
      });

      $("#dividir").on("click", function() {
        let inputData = $("#inputData");
        let ultimoCaracter = inputData.val().slice(-1);
        if (ultimoCaracter === "/") {
          return;
        } else if (ultimoCaracter === "*" || ultimoCaracter === "-" || ultimoCaracter === "+" || ultimoCaracter === ".") {
          inputData.val(inputData.val().slice(0, -1) + "/");
        } else {
          inputData.val(inputData.val() + "/");
        }
      });

      $("#punto").on("click", function() {
        let inputData = $("#inputData");
        let ultimoCaracter = inputData.val().slice(-1);
         if (ultimoCaracter === ".") {
          return;
        } else {
          inputData.val(inputData.val() + ".");
        }
      });

      /* limpiar input*/
    $("#delete").on("click", () => $("#inputData").val(""))

    /*resultado al clikear el botón "=" */
  $('#resultado').click(function() {
    calcularResultado();
  });

  /* resultado al presionar enter*/
  $('#inputData').keypress(function(e) {
    if (e.which == 13) {
      calcularResultado();
      return false;
    }
  });

  // Función para calcular el resultado y mostrarlo en el input
  function calcularResultado() {
    var inputText = $('#inputData').val();
    try {
      var result = eval(inputText);
    } catch (error) {
      alert("No se puede terminar la operación con el símbolo " + inputText.slice(-1));
    }
    $('#inputData').val(result);
  }

}  )
