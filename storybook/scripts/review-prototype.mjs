import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const index = (await readFile(new URL('../../index.html', import.meta.url), 'utf8')).replace(/\r\n/g, '\n');
const blob = createHash('sha1')
  .update('blob ' + Buffer.byteLength(index) + '\0')
  .update(index)
  .digest('hex');
const reviewFile = new URL('../prototype-review.json', import.meta.url);

if (process.argv.includes('--record')) {
  await writeFile(reviewFile, JSON.stringify({ prototypeBlob: blob }, null, 2) + '\n');
  console.log('Recorded the reviewed prototype blob ' + blob + '.');
} else {
  const review = JSON.parse(await readFile(reviewFile, 'utf8'));
  if (review.prototypeBlob !== blob) {
    throw new Error('index.html changed since the Storybook review. Review coverage and run pnpm record:prototype-review.');
  }
  console.log('Storybook coverage was reviewed against prototype blob ' + blob + '.');
}
