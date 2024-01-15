// convert F to C
const fahren = document.getElementById("fahren");
const fahrenValue = fahren.value;
const celsiusOutput = document.getElementById("celsiusOutput")

const convertToCelsius = (fahrenValue) => {
  return ((fahrenValue - 32) * 5/9).toFixed(2);
}
convertToCelsius();

const updateCelsius = () => {
  const fahrenValue = parseFloat(fahren.value);
  if (!isNaN(fahrenValue)) {
    const celsiusValue = convertToCelsius(fahrenValue);
    celsiusOutput.innerHTML = celsiusValue;
  } else {
    celsiusOutput.innerHTML = "-17.78";
  }
}
updateCelsius();

fahren.addEventListener("input", updateCelsius);
