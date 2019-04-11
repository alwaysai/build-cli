#!/usr/bin/env node

import { createCli, runAndExit, createLeaf } from '@alwaysai/always-cli';
import { GitInfoFile } from '@alwaysai/build';

const root = createLeaf({
  name: 'alwaysai-build',
  description: 'An alwaysAI CLI build tool',
  action() {
    const gitInfoFile = GitInfoFile(process.cwd());
    gitInfoFile.write();
  },
});

export const cli = createCli(root);

if (module === require.main) {
  runAndExit(cli, ...process.argv.slice(2));
}
