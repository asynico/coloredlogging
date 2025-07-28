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

export function toAnsi(color: string): string {
  if (color.startsWith('#')) {
    const bigint = parseInt(color.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `\x1b[38;2;${r};${g};${b}m`;
  }
  return color;
}