#!/usr/bin/env node

var fs = require('fs')
  , clean = require('semver').clean
  , cwd = process.cwd()
  , packageJson = require(cwd + '/package')
  , fromVersion = packageJson.version
  , arg = process.argv[2] || false

var toVersion = arg ? clean(arg) : patch(fromVersion)

console.log()
console.log('\033[33m %s:', packageJson.name)
console.log('\033[39m v%s => v%s', fromVersion, toVersion || arg)

if (!toVersion) {
  console.log('\033[31m ☠ "%s" is not a valid semver, exiting...\033[39m\n', arg)
  process.exit(1)
}

packageJson.version = toVersion
fs.writeFileSync(cwd + '/package.json', JSON.stringify(packageJson, null, '  '))

console.log('\033[32m ↑ bum bum bumped!\033[39m\n')

function patch(version) {
  return version.replace(/^([\d\.]+)([\-|\.])(\d+)$/, function () {
    return arguments[1] + arguments[2] + (Number(arguments[3]) + 1)
  })
}