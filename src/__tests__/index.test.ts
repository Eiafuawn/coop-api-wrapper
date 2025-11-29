import { expect, test } from 'vitest';

import { search } from '../api/client.ts';

// Needs to be changed for something stable
test('Search for tofu', async () => {
  const result = await search("tofu");

  expect(result).toHaveLength(18);
});
