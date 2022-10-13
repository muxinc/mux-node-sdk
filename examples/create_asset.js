const Mux = require('mux');

const mux = new Mux({
  // These are dev env values
  tokenId: 'b5a8e345-c160-4481-8d83-cf32d0ed1683',
  tokenSecret: 'DVCYh4ijEQDob+5ZW6BOweLvyDDpCi+r4T/6dcf+K8YylZduiOAK2eS6vdTfauFXg6rldRKSofe',
});

mux.video.assets
  .create({
    input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4',
    playback_policy: 'public',
  })
  .then((asset) => {
    console.log(asset);
  })
  .catch((err) => {
    console.log(err);
  });
