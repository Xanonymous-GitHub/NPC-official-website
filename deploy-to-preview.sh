#!/bin/bash
git clone git@github.com:Xanonymous-GitHub/NPC-official-website-Preview.git ../NPC-official-website-Preview
rm -rf ../NPC-official-website-Preview/*
rsync -vrh --exclude 'node_modules' --exclude 'dist' --exclude 'LICENSE' --exclude '*.md' --exclude '*.sh' ./* ../NPC-official-website-Preview/
cd ../NPC-official-website-Preview || exit
git add . && git commit -m "snap-shot-$(date +"%s")" && git push -f
cd ..
rm -rf ./NPC-official-website-Preview
exit 0
