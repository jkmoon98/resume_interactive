#!/usr/bin/env bash
# Build, commit (if there are changes), push, then Firebase Hosting deploy.
# Usage:
#   npm run deploy:all
#   npm run deploy:all -- "your commit message"

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

MSG="${1:-chore: deploy $(date +%Y-%m-%d)}"

echo "==> Building..."
npm run build

echo "==> Git: stage, commit (if needed), push..."
git add -A
if git diff --cached --quiet; then
  echo "    (nothing new to commit)"
else
  git commit -m "$MSG"
fi
git push

echo "==> Firebase Hosting..."
firebase deploy --only hosting

echo "==> Done."
