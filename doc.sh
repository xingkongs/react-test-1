#!/bin/env bash
yarn doc
git checkout gh-pages
git pull
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -