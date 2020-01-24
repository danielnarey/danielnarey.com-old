import path from 'path';
import test from 'ava';
import build from '@metamodern/static';
import config from '../metamodern.config';


const context = path.resolve(__dirname, '../');


test('build script generated the public files', async (t) => {
  const filesExpected = [
    'index.html',
    'index.css',
    'index.js',
    'media/favicon.png',
  ].map((file) => path.resolve(context, 'dist', file));

  const filesOut = await build(context, config);

  t.true(
    filesExpected.every((fp) => filesOut.includes(fp)),
  );
});
