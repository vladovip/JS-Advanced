function attachEventsListeners() {
  let buttonRef = document.getElementById("convert");
  buttonRef.addEventListener("click", converterFn);

  let metricsObject = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  function converterFn(event) {
    let fromCurrentMeasure = document.getElementById("inputUnits").value;
    let toDesiredMeasure = document.getElementById("outputUnits").value;
    let inputDistance = Number(document.getElementById("inputDistance").value);
    let outputDistanceElement = document.getElementById("outputDistance");

    let valueInMeters = inputDistance * metricsObject[fromCurrentMeasure];
    let convetedValue = valueInMeters / metricsObject[toDesiredMeasure];
    outputDistanceElement.value = convetedValue;
  }
}
