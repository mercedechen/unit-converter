// convert F to C
const fahrenInput = document.getElementById("fahrenInput");
const celsiusOutput = document.getElementById("celsiusOutput")
const convertToCelsius = (x) => {
  return ((x - 32) * 5/9).toFixed(2);
};
const updateCelsius = () => {
  const fahren = parseFloat(fahrenInput.value);
  if (!isNaN(fahren)) {
    const celsiusValue = convertToCelsius(fahren);
    celsiusOutput.textContent = celsiusValue;
  } else {
    celsiusOutput.textContent = "-17.78";
  };
};
updateCelsius();
fahrenInput.addEventListener("input", updateCelsius);

// convert C to F
const celsiusInput = document.getElementById("celsiusInput");
const fahrenOutput = document.getElementById("fahrenOutput");
const convertToFahren = (x) => {
  return ((x * 9/5) + 32).toFixed(2);
};
const updateFahren = () => {
  const celsius = parseFloat(celsiusInput.value);
  if(!isNaN(celsius)) {
    const fahrenValue = convertToFahren(celsius);
    fahrenOutput.textContent = fahrenValue;
  } else {
    fahrenOutput.textContent = "32";
  };
};
updateFahren();
celsiusInput.addEventListener("input", updateFahren);

// convert in to cm
const inchInput = document.getElementById("inchInput");
const cmOutput = document.getElementById("cmOutput");
const convertToCm = (x) => {
  return x * 2.54;
};
const updateCm = () => {
  const cm = inchInput.value;
  if(!isNaN(cm)) {
    const cmValue = convertToCm(cm).toFixed(2);
    cmOutput.textContent = cmValue;
  } else {
    cmOutput.textContent = "0";
  };
};
updateCm();
inchInput.addEventListener("input", updateCm);

// convert cm to in
const cmInput = document.getElementById("cmInput");
const inchOutput = document.getElementById("inchOutput");
const convertToInch = (x) => {
  return x * 0.39;
};
const updateInch = () => {
  const inch = cmInput.value;
  if(!isNaN(inch)) {
    const inchValue = convertToInch(inch).toFixed(2);
    inchOutput.textContent = inchValue;
  } else {
    inchOutput.textContent = "0";
  };
};
updateInch();
cmInput.addEventListener("input", updateInch);

// convert ft to m
const ftInput = document.getElementById("ftInput");
const mOutput = document.getElementById("mOutput");
const convertToM = (x) => {
  return x * 0.33;
};
const updateM = () => {
  const m = ftInput.value;
  if(!isNaN(m)) {
    const mValue = convertToM(m).toFixed(2);
    mOutput.textContent = mValue;
  } else {
    mOutput.textContent = "0";
  };
};
updateM();
ftInput.addEventListener("input", updateM);

// convert m to ft
const mInput = document.getElementById("mInput");
const ftOutput = document.getElementById("ftOutput");
const convertToFt = (x) => {
  return x * 3.28;
};
const updateFt = () => {
  const ft = mInput.value;
  if(!isNaN(ft)) {
    const ftValue = convertToFt(ft).toFixed(2);
    ftOutput.textContent = ftValue;
  } else {
    ftOutput.textContent = "0";
  };
};
updateFt();
mInput.addEventListener("input", updateFt);