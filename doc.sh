#!/bin/env bash

npm run doc
git checkout gh-pages
mv  doc/* ./
git add .
git commit -m "update"
git push
git checkout -
# - 代表回到上一个分支