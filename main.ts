// news-image-20261118 entry (Node 22, standard library only).
// The image is drawn once, checked, and shipped in this repository as
// entry.png; the program copies it to /output/entry.png. The copy is
// byte-for-byte, so two runs always write identical bytes. No network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
