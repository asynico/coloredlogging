function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToAnsi(r, g, b) {
  return `\x1b[38;2;${r};${g};${b}m`;
}

function toAnsi(color) {
  if (color.startsWith('#')) {
    const { r, g, b } = hexToRgb(color);
    return rgbToAnsi(r, g, b);
  }
  if (color.startsWith('rgb')) {
    const [r, g, b] = color.match(/\d+/g).map(Number);
    return rgbToAnsi(r, g, b);
  }
  return color;
}

module.exports = { toAnsi };