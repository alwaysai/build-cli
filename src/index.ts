#!/usr/bin/env node

import { CliLeaf, runCliAndExit } from '@alwaysai/alwayscli';
import { GitInfoFile } from '@alwaysai/build';

export const root = CliLeaf({
  name: 'alwaysai-build',
  description: 'Write a git info file to your current working directory',
  action() {
    const gitInfoFile = GitInfoFile(process.cwd());
    gitInfoFile.write();
    return `Wrote ${gitInfoFile.path}`;
  },
});

if (module === require.main) {
  runCliAndExit(root);
}
