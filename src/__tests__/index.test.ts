import { runAndCatch } from '@alwaysai/always-cli';

import { cli } from '..';

describe('index file', () => {
  it('shows usage', async () => {
    expect(await runAndCatch(cli, '--help')).toMatch(/usage/i);
  });
});
