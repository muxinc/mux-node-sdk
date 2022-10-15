// This script requires an asset to be created first.
// Assets seem to disappear from the account after a day or two.

const Mux = require('mux');

const mux = new Mux({
  // These are dev env values
  tokenId: 'b5a8e345-c160-4481-8d83-cf32d0ed1683',
  tokenSecret: 'DVCYh4ijEQDob+5ZW6BOweLvyDDpCi+r4T/6dcf+K8YylZduiOAK2eS6vdTfauFXg6rldRKSofe',
});

mux.video.assets
  .retrieve('L9W02j00h9YRursyQXzSlEpteet3ApcqFQWDnRtXAC801g')
  .then((asset) => {
    console.log(asset);
  })
  .catch((err) => {
    console.log(err);
  });
