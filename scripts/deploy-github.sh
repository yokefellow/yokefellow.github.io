#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git add -A
git commit -m '🚀Update Blog Information'


# 本地 master -> 远程 gh-page-source。出发 Github Action
# 在GitHub创建Repo时一定要勾上生成README.md文件的选项，否则执行下面这句话后没有master分支
git push -f git@github.com:yokefellow/yokefellow.github.io.git master:gh-page-source
