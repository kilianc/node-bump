#!/usr/bin/env node

var fs = require('fs'),
    cwd = process.cwd(),
    packageJson = require(cwd + '/package'),
    fromVersion = packageJson.version,
    toVersion = process.argv[2] || false

if (!toVersion) {
  toVersion = fromVersion.replace(/^([\d\.]+)([\-|\.])(\d+)$/, function () {
  	return arguments[1] + arguments[2] + (Number(arguments[3]) + 1)
  })
}

packageJson.version = toVersion

fs.writeFileSync(cwd + '/package.json', JSON.stringify(packageJson, null, '  '))

console.log('\n \033[33m%s:\n \033[39mv%s => v%s\n\033[32m ↑ bum bum bumped!\033[39m\n', packageJson.name, fromVersion, toVersion)