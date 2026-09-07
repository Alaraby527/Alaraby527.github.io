#!/bin/bash
# 一键部署:构建静态站点并发布到 GitHub Pages(https://alaraby527.github.io)
# 用法:bash deploy.sh  (需要能访问 github.com,代理客户端开着)
set -e
cd "$(dirname "$0")"

echo "[1/4] 构建静态站点..."
pnpm build

echo "[2/4] 准备发布目录..."
cd out
touch .nojekyll
if [ ! -d .git ]; then
  git init -b main
  git remote add origin https://github.com/Alaraby527/Alaraby527.github.io.git
fi
git add -A
git commit -m "deploy $(date +%Y-%m-%d_%H:%M)" --allow-empty

echo "[3/4] 推送到 GitHub..."
git push -u origin main --force

echo "[4/4] 确保 Pages 已启用..."
TOKEN=$(printf "protocol=https\nhost=github.com\n\n" | git credential fill | grep "^password=" | cut -d= -f2)
curl -s -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/Alaraby527/Alaraby527.github.io/pages \
  -d '{"source":{"branch":"main","path":"/"}}' > /dev/null || true

echo "完成!1-2 分钟后访问:https://alaraby527.github.io"
