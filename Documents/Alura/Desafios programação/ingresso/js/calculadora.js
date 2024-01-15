
	//Função que definirá a visibilidade e placeholder
	function ControleDeSelecao(){
				
		var placeText;
		var visibilidade;
					
		document.getElementById("txtValor2").style.visibility = visibilidade;
		document.getElementById("txtValor1").placeholder = placeText;
	}		

	function Limpar(id1, id2){
		document.getElementById(id1).value = "";
		document.getElementById(id2).value = "";
        location.reload();
	}	

	function Calcular(id1, id2){
		//captura o valor do select(dropdown) selecionado
		var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;
		
		var num1 = document.getElementById(id1).value;
		var num2 = document.getElementById(id2).value;
		var resultado = new Number();		
    
		switch(operador)
		{
			case "+":
			case "-":
			case "/":
			case "*":
			var StrExpressao = num1 + operador + num2;
			//método eval realiza uma operaçao de strings e retorna do tipo number
			resultado = eval(StrExpressao); break;
			case "calc":
				resultado = eval(num1); break;
			default:
				break;				
			
		}	
		
		document.getElementById("saida").innerHTML = "Resultado: "+ resultado;
	}