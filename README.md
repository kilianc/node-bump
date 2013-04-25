# node-bump

[![Build Status](https://secure.travis-ci.org/kilianc/node-bump.png)](https://travis-ci.org/kilianc/node-bump)

nodejs version bumper

## Install

`npm install -g bump`

## Usage
    Original package version
    'package': 'v1.2.3'

    Bump major number
    bump major // v2.0.0

    Bump minor number
    bump minor // v1.3.0

    Bump patch number
    bump patch // v1.2.4

    Defaults to bumping patch number
    bump // v1.2.4

    You can even specify your own!
    bump 1.2.3-4 // v1.2.3-4
