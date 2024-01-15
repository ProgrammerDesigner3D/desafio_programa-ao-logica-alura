
function converterTemperatura() {
    var tnum = document.getElementById("tnum").value;
    var esc = document.getElementById("esc").options[document.getElementById("esc").selectedIndex].value;
    
    if (esc.toLowerCase() === 'celsius') {
        alert((tnum * 9/5) + 32 + " Graus em Fahrenheit");
        document.getElementById("tnum").value = "";
        // Celsius para Fahrenheit        
    } else if (esc.toLowerCase() === 'fahrenheit') {
        alert((tnum - 32) * 5/9 + " Graus em Celsius");        
        document.getElementById("tnum").value = "";
        // Fahrenheit para Celsius
    }
}
