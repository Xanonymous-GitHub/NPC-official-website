#!/bin/bash
rm -rf ../NPC-official-website-Preview
git clone git@github.com:Xanonymous-GitHub/NPC-official-website-Preview.git ../NPC-official-website-Preview
rm -rf ../preview-server-public
mkdir ../preview-server-public
cp ../NPC-official-website-Preview/public/* ../preview-server-public/
rm -rf ../NPC-official-website-Preview/*
rsync -vrh --exclude 'node_modules' --exclude 'dist' --exclude 'public' --exclude 'LICENSE' --exclude '*.md' --exclude '*.sh' ./* ../NPC-official-website-Preview/
cd ../NPC-official-website-Preview || exit
mkdir public
mv ../preview-server-public/* ./public/
rm -rf ../preview-server-public
git add . && git commit -m "snap-shot-$(date +"%s")" && git push -f
cd ..
rm -rf ./NPC-official-website-Preview
exit 0
