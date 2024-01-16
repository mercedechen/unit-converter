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
  const inch = inchInput.value;
  if(!isNaN(inch)) {
    const cmValue = convertToCm(inch).toFixed(2);
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
  return x * 0.393701;
};
const updateInch = () => {
  const cm = cmInput.value;
  if(!isNaN(cm)) {
    const inchValue = convertToInch(cm).toFixed(2);
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
  return x * 0.3048;
};
const updateM = () => {
  const ft = ftInput.value;
  if(!isNaN(ft)) {
    const mValue = convertToM(ft).toFixed(2);
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
  return x * 3.28084;
};
const updateFt = () => {
  const m = mInput.value;
  if(!isNaN(m)) {
    const ftValue = convertToFt(m).toFixed(2);
    ftOutput.textContent = ftValue;
  } else {
    ftOutput.textContent = "0";
  };
};
updateFt();
mInput.addEventListener("input", updateFt);

// convert y to m
const yardInput = document.getElementById("yardInput");
const meterOutput = document.getElementById("meterOutput");
const convertToMeter = (x) => {
  return x * 0.9144;
};
const updateMeter = () => {
  const y = yardInput.value;
  if(!isNaN(y)) {
    const meterValue = convertToMeter(y).toFixed(2);
    meterOutput.textContent = meterValue;
  } else {
    meterOutput.textContent = "0";
  };
};
updateMeter();
yardInput.addEventListener("input", updateMeter);

// convert m to y
const meterInput = document.getElementById("meterInput");
const yardOutput = document.getElementById("yardOutput");
const convertToYards = (x) => {
  return x * 3.28084;
}
const updateYards = () => {
  const meter = meterInput.value;
  if(!isNaN(meter)) {
    const yardValue = convertToYards(meter).toFixed(2);
    yardOutput.textContent = yardValue;
  } else {
    yardOutput.textContent = "0";
  };
};
updateYards();
meterInput.addEventListener("input", updateYards);

// convert mi to km
const miInput = document.getElementById("miInput");
const kmOutput = document.getElementById("kmOutput");
const convertToKm = (x) => {
  return x * 1.60934;
}
const updateKm = () => {
  const mi = miInput.value;
  if(!isNaN(mi)) {
    const kmValue = convertToKm(mi).toFixed(2);
    kmOutput.textContent = kmValue;
  } else {
    kmOutput.textContent = "0";
  };
};
updateKm();
miInput.addEventListener("input", updateKm);

// convert km to mi
const kmInput = document.getElementById("kmInput");
const miOutput = document.getElementById("miOutput");
const convertToMi = (x) => {
  return x * 0.621371;
}
const updateMi = () => {
  const km = kmInput.value;
  if(!isNaN(km)) {
    const miValue = convertToMi(km).toFixed(2);
    miOutput.textContent = miValue;
  } else {
    miOutput.textContent = "0";
  };
};
updateMi();
kmInput.addEventListener("input", updateMi)

// convert oz to g
const ozInput = document.getElementById("ozInput");
const gOutput = document.getElementById("gOutput");
const convertToG = (x) => {
  return x * 28.3495;
}
const updateGrams = () => {
  const oz = ozInput.value;
  if(!isNaN(oz)) {
    const gValue = convertToG(oz).toFixed(2);
    gOutput.textContent = gValue;
  } else {
    gOutput.textContent = "0";
  };
};
updateGrams();
ozInput.addEventListener("input", updateGrams);

// convert g to oz
const gInput = document.getElementById("gInput");
const ozOutput = document.getElementById("ozOutput");
const convertToOz = (x) => {
  return x * 0.035274;
};
const updateOz = () => {
  const g = gInput.value;
  if(!isNaN(g)) {
    const ozValue = convertToOz(g).toFixed(2);
    ozOutput.textContent = ozValue;
  } else {
    ozOutput.textContent = "0";
  };
};
updateOz();
gInput.addEventListener("input", updateOz);

// convert lb to kg
const lbInput = document.getElementById("lbInput");
const kgOutput = document.getElementById("kgOutput");
const convertToKg = (x) => {
  return x * 0.453592;
};
const updateKg = () => {
  const lb = lbInput.value;
  if(!isNaN(lb)) {
    const kgValue = convertToKg(lb).toFixed(2);
    kgOutput.textContent = kgValue;
  } else {
    kgOutput.textContent = "0";
  };
};
updateKg();
lbInput.addEventListener("input", updateKg);

// convert kg to lb
const kgInput = document.getElementById("kgInput");
const lbOutput = document.getElementById("lbOutput");
const convertToLb = (x) => {
  return x * 2.20462;
};
const updateLb = () => {
  const kg = kgInput.value;
  if(!isNaN(kg)) {
    const lbValue = convertToLb(kg).toFixed(2);
    lbOutput.textContent = lbValue;
  } else {
    lbOutput.textContent = "0";
  };
};
updateLb();
kgInput.addEventListener("input", updateLb);

// convert fl oz to ml
const flOzInput = document.getElementById("flOzInput");
const mlOutput = document.getElementById("mlOutput");
const convertToMl = (x) => {
  return x * 29.5735;
};
const updateMl = () => {
  const floz = flOzInput.value;
  if(!isNaN(floz)) {
    const mlValue = convertToMl(floz).toFixed(2);
    mlOutput.textContent = mlValue;
  } else {
    mlOutput.textContent = "0";
  };
};
updateMl();
flOzInput.addEventListener("input", updateMl);

// convert ml to fl oz
const mlInput = document.getElementById("mlInput");
const flOzOutput = document.getElementById("flOzOutput");
const convertToFlOz = (x) => {
  return x * 0.033814;
};
const updateFlOz = () => {
  const ml = mlInput.value;
  if(!isNaN(ml)) {
    const flOzValue = convertToFlOz(ml).toFixed(2);
    flOzOutput.textContent = flOzValue;
  } else {
    flOzOutput.textContent = "0";
  };
};
updateFlOz();
mlInput.addEventListener("input", updateFlOz);

// convert gal to liters
const galInput = document.getElementById("galInput");
const litersOutput = document.getElementById("litersOutput");
const convertToLiters = (x) => {
  return x * 3.78541;
};
const updateLiters = () => {
  const gal = galInput.value;
  if(!isNaN(gal)) {
    const litersValue = convertToLiters(gal).toFixed(2);
    litersOutput.textContent = litersValue;
  } else {
    litersOutput.textContent = "0";
  };
};
updateLiters();
galInput.addEventListener("input", updateLiters);

// convert liters to gal
const litersInput = document.getElementById("litersInput");
const galOutput = document.getElementById("galOutput");
const convertToGals = (x) => {
  return x * 0.264172;
};
const updateGals = () => {
  const liters = litersInput.value;
  if(!isNaN(liters)) {
    const galValue = convertToGals(liters).toFixed(2);
    galOutput.textContent = galValue;
  } else {
    galOutput.textContent = "0";
  };
};
updateGals();
litersInput.addEventListener("input", updateGals);