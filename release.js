#!/usr/bin/env node
const { EOL } = require('os');
const path = require('path');
const { promisify } = require('util');
const packageJSON = require('./package.json');
const exec = promisify(require('child_process').exec);
const writeFile = promisify(require('fs').writeFile);

const packageJSONPath = path.resolve(__dirname, 'package.json');

function exit(message) {
  console.log(message);
  process.exit(1);
}

async function computeNextVersion() {
  let major = 0;
  let minor = 0;
  let patch = 0;
  try {
    const { stdout } = await exec('git describe --abbrev=0');
    [major, minor, patch] = stdout.split('.').map(s => parseInt(s, 10));
  } catch {}
  const date = new Date();
  const nextMajor = parseInt(date.getFullYear().toString().substring(2, 4), 10);
  const nextMinor = date.getMonth() + 1;
  const nextPatch = nextMajor === major && nextMinor === minor ? patch + 1 : 0;
  const parts = [nextMajor.toString().padStart(2, 0), nextMinor.toString().padStart(2, 0), nextPatch];
  return parts.join('.');
}

(async () => {
  try {
    // 1. Compute next version using calendar versioning
    const version = await computeNextVersion();

    // 2. Go on master branch & rebase on develop
    console.log('Checkout master branch');
    await exec('git checkout master');
    console.log('Rebase master branch on develop');
    await exec('git rebase develop');

    // 3. Bump package.json & update package-lock.json
    console.log('Bump package.json version');
    const newPackageJSON = `${JSON.stringify({ ...packageJSON, version }, undefined, 2)}${EOL}`;
    await writeFile(packageJSONPath, newPackageJSON);
    console.log('Update package-lock.json');
    await exec('npm install');

    // 4. Create release commit, tag it & push it to remote
    console.log('Create release commit');
    await exec('git add package.json package-lock.json');
    await exec(`git commit -m 'chore: release v${version}'`);
    console.log('Tag release commit');
    await exec(`git tag -a '${version}' -m 'release v${version}'`);
    console.log('Push new master version');
    await exec('git push --follow-tags');

    // 5. Go back to develop branch, rebase on released master & push it to remote
    console.log('Checkout develop branch');
    await exec('git checkout develop');
    console.log('Rebase develop branch on master');
    await exec('git rebase master');
    console.log('Push develop branch');
    await exec('git push');
  } catch (err) {
    exit(err.message);
  }
})();
