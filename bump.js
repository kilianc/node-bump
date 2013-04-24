#!/usr/bin/env node

var fs = require('fs'),
    cwd = process.cwd(),
    packageJson = require(cwd + '/package'),
    fromVersion = packageJson.version,
    toVersion = process.argv[2] || false;

if (!toVersion) {
  toVersion = fromVersion.replace(/^([\d\.]+)([\-|\.])(\d+)$/, function () {
  	return arguments[1] + arguments[2] + (Number(arguments[3]) + 1);
  });
} else {
  var tempVersion = fromVersion.split('-')[0].split('.');

  if (toVersion.toLowerCase() === 'major') {
    tempVersion[0]++;
    tempVersion[1] = 0;
    tempVersion[2] = 0;
    toVersion = tempVersion.join('.');
  } else if (toVersion.toLowerCase() === 'minor') {
    tempVersion[1]++;
    tempVersion[2] = 0;
    toVersion = tempVersion.join('.');
  } else if (toVersion.toLowerCase() === 'patch') {
    tempVersion[2]++;
    toVersion = tempVersion.join('.');
  }
}

packageJson.version = toVersion;

fs.writeFileSync(cwd + '/package.json', JSON.stringify(packageJson, null, '  '));

console.log('\n \033[33m%s:\n \033[39mv%s => v%s\n\033[32m ↑ bum bum bumped!\n', packageJson.name, fromVersion, toVersion);
