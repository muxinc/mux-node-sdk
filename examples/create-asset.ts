#!/usr/bin/env -S npm run tsn -T
import Mux from '@mux/mux-node';

const mux = new Mux({
  // These are dev env values
  tokenId: 'b5a8e345-c160-4481-8d83-cf32d0ed1683',
  tokenSecret: 'DVCYh4ijEQDob+5ZW6BOweLvyDDpCi+r4T/6dcf+K8YylZduiOAK2eS6vdTfauFXg6rldRKSofe',
});

async function main() {
  const asset = await mux.video.assets.create({
    input: [{ url: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' }],
    playback_policy: ['public'],
  });
  console.log(asset);

  const assets = [];
  for await (const asset of mux.video.assets.list()) {
    console.log(asset.id);
    assets.push(asset);
  }
  console.log(assets.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
