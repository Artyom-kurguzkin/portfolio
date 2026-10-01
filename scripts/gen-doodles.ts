// Generates src/components/doodles.json, the saved background doodle layout.
// Run after adding shapes or changing the grid:  node scripts/gen-doodles.ts
import { writeFileSync } from 'node:fs';
import { shapes } from '../src/components/doodle-shapes.ts';

const CELL = 120; // px per grid cell, one doodle each
const COLS = 22; // 22×12 cells covers 2560×1440
const ROWS = 12;
const MIN_GAP = 2; // same shape never within this many cells (any direction)

const names = Object.keys(shapes);
const grid: string[][] = [];
const r = (min: number, max: number) => +(min + Math.random() * (max - min)).toFixed(2);

const doodles = [];
for (let row = 0; row < ROWS; row++) {
	grid[row] = [];
	for (let col = 0; col < COLS; col++) {
		// cells already filled within MIN_GAP: everything above, and to the left on this row
		const near = new Set<string>();
		for (let y = row - MIN_GAP; y <= row; y++)
			for (let x = col - MIN_GAP; x <= col + MIN_GAP; x++)
				if (grid[y]?.[x] && (y < row || x < col)) near.add(grid[y][x]);
		const allowed = names.filter((n) => !near.has(n));
		const shape = allowed[Math.floor(Math.random() * allowed.length)];
		grid[row][col] = shape;
		const t = r(8, 14);
		doodles.push({
			shape,
			left: Math.round((col + r(0.1, 0.4)) * CELL),
			top: Math.round((row + r(0.1, 0.4)) * CELL),
			size: r(3.25, 5),
			rotate: r(-20, 20),
			dx: r(-60, 60),
			dy: r(-80, 80),
			t,
			delay: r(-t, 0),
		});
	}
}

// self-check: no shape repeats within MIN_GAP cells
for (let i = 0; i < doodles.length; i++)
	for (let j = i + 1; j < doodles.length; j++) {
		const [ri, ci, rj, cj] = [Math.floor(i / COLS), i % COLS, Math.floor(j / COLS), j % COLS];
		if (doodles[i].shape === doodles[j].shape && Math.abs(ri - rj) <= MIN_GAP && Math.abs(ci - cj) <= MIN_GAP)
			throw new Error(`${doodles[i].shape} repeats at cells ${i} and ${j}`);
	}

writeFileSync(new URL('../src/components/doodles.json', import.meta.url), JSON.stringify(doodles, null, '\t') + '\n');
console.log(`wrote ${doodles.length} doodles, ${names.length} shapes`);
