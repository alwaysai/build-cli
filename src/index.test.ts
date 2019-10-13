import { CliArgvInterface, CLI_USAGE_ERROR } from '@alwaysai/alwayscli';
import { runAndCatch } from '@carnesen/run-and-catch';
import { GitInfoFile } from '@alwaysai/build';

import { root } from './index';

const argvInterface = CliArgvInterface(root);

describe('index file', () => {
  it('write the git info file', async () => {
    const gitInfoFile = GitInfoFile(process.cwd());
    gitInfoFile.remove();
    const result = await argvInterface();
    expect(result).toMatch(/wrote/i);
    expect(gitInfoFile.exists()).toBe(true);
  });

  it('shows usage', async () => {
    const exception = await runAndCatch(argvInterface, '--help');
    expect(exception.code).toBe(CLI_USAGE_ERROR);
  });
});
