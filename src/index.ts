#!/usr/bin/env node

import { createBranch, createCli, runAndExit } from '@alwaysai/always-cli';

import { gitInfoFile } from './git-info-file';

const root = createBranch({
  name: 'alwaysai-build',
  description: 'An alwaysAI CLI build tool',
  subcommands: [gitInfoFile],
});

export const cli = createCli(root);

if (module === require.main) {
  runAndExit(cli, ...process.argv.slice(2));
}
