#!/usr/bin/env node

var fs = require('fs'),
    packageJson = require('./package'),
    fromVersion = packageJson.version,
    toVersion = process.argv[2] || false

if (!toVersion) {
  var fromVersionParts = fromVersion.split('.')
  fromVersionParts[2] = Number(fromVersionParts[2]) + 1
  toVersion = fromVersionParts.join('.')
}

packageJson.version = toVersion

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '  '))

console.log('\n \033[33m%s:\n \033[39mv%s => v%s\n\033[32m ↑ bum bum bumped!\n', packageJson.name, fromVersion, toVersion)