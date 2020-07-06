#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build

# 进入生成的文件夹
# cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:yokefellow/yokefellow.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 在GitHub创建Repo时一定要勾上生成README.md文件的选项，否则执行下面这句话后没有master分支
git push -f git@github.com:yokefellow/yokefellow.github.io.git master:gh-pages-source