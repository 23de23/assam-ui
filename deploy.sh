#!/bin/env bash   
# 使用环境变量中bash运行
npm version $1 && \
  git commit . -m "deploy" && \
  git push origin master:deploy
# $1 = arguments[0]
# \换行 但是是一行语句执行
# &&同js强断语句
# major 大版本
# minor 小版本
# patch 补丁