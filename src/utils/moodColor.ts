const COLS = 10;
const ROWS = 10;

const colMap: Record<string, number> = {
  '-900': 0, '-700': 1, '-500': 2, '-300': 3, '-100': 4,
  '0': 4,
  '100': 5, '200': 5, '300': 6, '400': 6,
  '500': 7, '600': 7, '700': 8, '800': 8, '900': 9
};

const rowMap: Record<string, number> = {
  '-900': 0, '-700': 1, '-500': 2, '-300': 3, '-100': 4,
  '0': 4,
  '100': 5, '300': 6, '500': 7, '700': 8, '900': 9
};

export function getMoodColor(col: number, row: number): string {
  const isTop = row < ROWS / 2;
  const tx = col / (COLS - 1);
  const ty = isTop
    ? (row / (ROWS / 2 - 1))
    : ((row - ROWS / 2) / (ROWS / 2 - 1));

  let hue: number;
  let saturation: number;
  let lightness: number;

  if (isTop) {
    hue = 355 + tx * 33;
    if (hue > 360) hue -= 360;
    saturation = 75;
    lightness = 44 + tx * 14 + ty * 10;
  } else {
    hue = 242 - tx * 110;
    saturation = 68;
    lightness = 52 + tx * 18 + (1 - ty) * 10;
  }

  return `hsl(${Math.round(hue)}, ${saturation}%, ${Math.round(lightness)}%)`;
}

export function getMoodColorFromPosition(x: number, y: number): string {
  const col = colMap[String(x)] ?? 0;
  const row = rowMap[String(y)] ?? 0;
  return getMoodColor(col, row);
}