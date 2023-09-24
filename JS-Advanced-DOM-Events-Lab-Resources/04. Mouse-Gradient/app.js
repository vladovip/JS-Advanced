function attachGradientEvents() {
    
    let gradientElement = document.getElementById("gradient");
    gradientElement.addEventListener("mousemove", onMove);
    let resultBox = document.getElementById("result");

    function onMove (event) {
        resultBox.textContent = Math.floor(event.offsetX / gradientElement.clientWidth * 100) + "%";
    }
}