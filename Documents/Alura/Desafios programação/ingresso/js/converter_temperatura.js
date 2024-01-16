
function converterTemperatura() {
    var tnum = document.getElementById("tnum").value;
    var esc = document.getElementById("esc").options[document.getElementById("esc").selectedIndex].value;
    var fahr = (tnum * 9/5) + 32;
    var cels = (tnum - 32) * 5/9;  
    
    if (esc.toLowerCase() === 'celsius') {
        document.getElementById("saida").innerHTML = "Convesão de " + tnum + " Celsius para Fahrenheit = " + fahr + " Graus";
        //alert(fahr + " Graus em Fahrenheit");
        document.getElementById("tnum").value = "";
        tnum = 0;
        // Celsius para Fahrenheit        
    } else if (esc.toLowerCase() === 'fahrenheit') {
        document.getElementById("saida").innerHTML = "Convesão de " + tnum + " Fahrenheit para Celsius = " + cels + " Graus";
        //alert(cels + " Graus em Celsius");        
        document.getElementById("tnum").value = "";
        tnum = 0;
        // Fahrenheit para Celsius
    }
}
