function numberOneTriangle(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
        output += "*";
        }
        output += "<br>";
    }
    document.getElementById("output").innerHTML = output;
}