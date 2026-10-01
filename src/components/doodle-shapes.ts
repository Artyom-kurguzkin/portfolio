// Doodle line drawings, each in a 48×48 box. Keyed by name so the saved layout
// (doodles.json) survives adding or reordering shapes.
const circle = (cx: number, cy: number, r: number) =>
	`M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;

export const shapes: Record<string, string> = {
	star: 'M24 4 L29 18 L44 18 L32 27 L37 42 L24 33 L11 42 L16 27 L4 18 L19 18 Z',
	lightning: 'M28 4 L12 26 H24 L18 44 L36 20 H24 Z',
	spiral: 'M24 24 a2 2 0 0 1 4 0 a4 4 0 0 1 -8 0 a6 6 0 0 1 12 0 a8 8 0 0 1 -16 0 a10 10 0 0 1 20 0',
	squiggle: 'M4 24 q5 -10 10 0 t10 0 t10 0 t10 0',
	heart: 'M24 40 C10 30 4 22 8 14 C12 6 22 8 24 16 C26 8 36 6 40 14 C44 22 38 30 24 40 Z',
	sun: `${circle(24, 24, 8)} M24 4 V10 M24 38 V44 M4 24 H10 M38 24 H44 M10 10 L14 14 M34 34 L38 38 M38 10 L34 14 M10 38 L14 34`,
	flower: `${circle(24, 24, 4)} ${circle(24, 13, 6)} ${circle(34.5, 20.6, 6)} ${circle(30.5, 33, 6)} ${circle(17.5, 33, 6)} ${circle(13.5, 20.6, 6)}`,
	cloud: 'M12 34 a8 8 0 0 1 2 -15 a10 10 0 0 1 19 -2 a7 7 0 0 1 3 17 Z',
	house: 'M8 22 L24 8 L40 22 M12 19 V40 H36 V19 M20 40 V30 H28 V40',
	moon: 'M30 6 a18 18 0 1 0 12 30 a14 14 0 1 1 -12 -30 Z',
	sparkle: 'M24 6 Q26 22 42 24 Q26 26 24 42 Q22 26 6 24 Q22 22 24 6 Z',
	code: 'M16 14 L6 24 L16 34 M32 14 L42 24 L32 34 M27 10 L21 38',
	zigzag: 'M4 30 L12 18 L20 30 L28 18 L36 30 L44 18',
	gem: 'M14 8 H34 L42 18 L24 42 L6 18 Z M6 18 H42 M18 8 L14 18 L24 42 L34 18 L30 8',
	microchip:
		'M14 14 H34 V34 H14 Z M18 14 V8 M24 14 V8 M30 14 V8 M18 34 V40 M24 34 V40 M30 34 V40 M14 18 H8 M14 24 H8 M14 30 H8 M34 18 H40 M34 24 H40 M34 30 H40',
	cactus: 'M20 44 V12 a4 4 0 0 1 8 0 V44 M20 28 H14 a4 4 0 0 1 -4 -4 V18 M28 24 H34 a4 4 0 0 0 4 -4 V14 M12 44 H36',
	eye: `M4 24 Q24 6 44 24 Q24 42 4 24 Z ${circle(24, 24, 6)}`,
	mug: 'M10 16 H32 V34 a6 6 0 0 1 -6 6 H16 a6 6 0 0 1 -6 -6 Z M32 20 h4 a5 5 0 0 1 0 10 h-4 M16 6 q3 4 0 8 M24 6 q3 4 0 8',
	fish: `M6 24 Q20 8 36 24 Q20 40 6 24 Z M36 24 L44 16 V32 Z ${circle(16, 22, 1.5)}`,
	leaf: 'M8 40 Q8 8 40 8 Q40 40 8 40 Z M8 40 L30 18',
	mushroom: 'M6 24 Q6 6 24 6 Q42 6 42 24 Z M18 24 V40 H30 V24',
	note: `M18 36 V10 L38 6 V32 ${circle(14, 36, 4)} ${circle(34, 32, 4)}`,
	planet: `${circle(24, 24, 10)} M4 30 C4 22 44 14 44 22 C44 30 4 38 4 30`,
	arrow: 'M6 36 Q14 8 30 20 Q38 26 42 12 M36 14 L42 12 L42 18',
	icecream: 'M15 22 L24 44 L33 22 Z M15 22 a9 9 0 1 1 18 0',
	smiley: `${circle(24, 24, 16)} M17 28 q7 7 14 0 ${circle(18, 19, 1)} ${circle(30, 19, 1)}`,
	pizza: `M24 44 L6 10 Q24 2 42 10 Z M8 14 Q24 7 40 14 ${circle(22, 20, 2)} ${circle(28, 30, 2)}`,
	plane: 'M4 22 L44 6 L32 42 L22 28 Z M22 28 L44 6',
	dots: `${circle(10, 24, 2)} ${circle(24, 24, 2)} ${circle(38, 24, 2)}`,
	cursor: 'M10 6 L10 38 L18 30 L24 42 L29 40 L23 28 L34 28 Z',
};
