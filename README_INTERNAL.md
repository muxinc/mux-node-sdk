## Releasing

1. Run `npm version` which will bump the version in package.json and make a tag
1. Push tags `git push --tags origin`
1. Open Pull Request, merge after approved
1. Create a new release in the Github UI, give the release a name and add release notes (creating the release will kick off npm publish)
