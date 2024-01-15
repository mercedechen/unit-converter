// convert F to C
const fahren = document.getElementById("fahren");
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

// convert C to F
const celsius = document.getElementById("celsius");
const fahrenOutput = document.getElementById("fahrenOutput");

const convertToFahren = (celsiusValue) => {
  return ((celsiusValue * 9/5) + 32).toFixed(2);
}
convertToFahren();

const updateFahren = () => {
  const celsiusValue = parseFloat(celsius.value);
  if (!isNaN(celsiusValue)) {
    const fahrenValue = convertToFahren(celsiusValue);
    fahrenOutput.innerHTML = fahrenValue;
  } else {
    fahrenOutput.innerHTML = "32";
  }
}
updateFahren();

celsius.addEventListener("input", updateFahren);