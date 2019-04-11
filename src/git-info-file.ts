import { createLeaf, createBranch } from '@alwaysai/always-cli';
import { GitInfoFile } from '@alwaysai/build';

const create = createLeaf({
  name: 'create',
  action() {
    const gitInfoFile = GitInfoFile(process.cwd());
    gitInfoFile.write();
  },
});

export const gitInfoFile = createBranch({
  name: 'gitInfoFile',
  description: 'Create or delete the git info file in this directory',
  subcommands: [create],
});
