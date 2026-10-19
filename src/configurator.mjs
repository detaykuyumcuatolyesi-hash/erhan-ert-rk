export const SHAPES = Object.freeze(['Round','Oval','Emerald','Pear','Radiant','Princess','Marquise']);
export function matchingConfigurations(catalog, selection = {}) {
  return catalog.filter(row => row.verified === true && row.diamondType === 'lab-grown' &&
    SHAPES.includes(row.shape) && ['D','E','F'].includes(row.color) &&
    ['VS1','VS2'].includes(row.clarity) && ['14K','18K'].includes(row.purity) &&
    Object.entries(selection).every(([key,value]) => value === undefined || value === '' || row[key] === value));
}
export function availableOptions(catalog, selection, field) {
  const remaining = {...selection};
  delete remaining[field];
  return [...new Set(matchingConfigurations(catalog, remaining).map(row => row[field]))].filter(value => value !== undefined);
}
export function resolveConfiguration(catalog, selection) {
  const matches = matchingConfigurations(catalog, selection);
  if (matches.length !== 1) return null;
  const row = matches[0];
  if (!row.available || !/^[1-9][0-9]*$/.test(String(row.variantId)) ||
      !Number.isSafeInteger(row.priceMinor) || row.priceMinor < 0 ||
      !/^[A-Z]{3}$/.test(row.currency || '')) return null;
  return {...row};
}
