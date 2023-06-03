

function shortening(value, desiredValueUnit) {
  const units = ['', 'K', 'M', 'bn', 'T'];
  const base = 1000;
  
  if (!Number.isFinite(value)) {
    return { value: value, valueUnit: desiredValueUnit ? desiredValueUnit : ''};
  }

  if (!units.includes(desiredValueUnit) && desiredValueUnit !== null && desiredValueUnit !== undefined) {
    return { value: value, valueUnit: desiredValueUnit };
  }
  
  let i = 0;
  while (value >= base && i < units.length - 1) {
    value /= base;
    i++;
  }
  
  if (desiredValueUnit !== null && desiredValueUnit !== undefined && units.includes(desiredValueUnit)) {
    const desiredIndex = units.indexOf(desiredValueUnit);
    if (desiredIndex < i) {
      while (units[i] !== desiredValueUnit) {
        value *= base;
        i--;
      }
    } else {
      value /= Math.pow(base, desiredIndex - i);
      i = desiredIndex;
    }
  }
  else {
    desiredValueUnit = units[i];
  }

  return { value: value, valueUnit: desiredValueUnit };
}

module.exports = shortening;
