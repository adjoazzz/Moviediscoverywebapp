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
  // 4 clear quadrants — no blending between them
  // Top-left: RED | Top-right: YELLOW
  // Bottom-left: GREEN | Bottom-right: BLUE

  const isTop  = row < ROWS / 2;
  const isLeft = col < COLS / 2;

  // Base hue per quadrant
  let hue: number;
  if (isTop && isLeft)   hue = 4;    // RED
  if (isTop && !isLeft)  hue = 46;   // YELLOW
  if (!isTop && isLeft)  hue = 130;  // GREEN
  if (!isTop && !isLeft) hue = 218;  // BLUE

  // Slight variation within each quadrant so circles aren't all identical
  const tx = col / (COLS - 1);
  const ty = row / (ROWS - 1);
  const localX = isLeft ? tx * 2 : (tx - 0.5) * 2;       // 0→1 within quadrant horizontally
  const localY = isTop  ? ty * 2 : (ty - 0.5) * 2;       // 0→1 within quadrant vertically
  hue! += localX * 8 + localY * 4;  // gentle shift within the quadrant only

  const saturation = 85;
  const lightness  = 50 + localX * 4 + localY * 4;

  return `hsl(${Math.round(hue!)}, ${saturation}%, ${Math.round(lightness)}%)`;
}

export function getMoodColorFromPosition(x: number, y: number): string {
  const col = colMap[String(x)] ?? 0;
  const row = rowMap[String(y)] ?? 0;
  return getMoodColor(col, row);
}