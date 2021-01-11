## Releasing

1. Update version in package.json
1. Open Pull Request, merge after approved
1. Tag master: example: `git tag v2.6.0` and `git push --tags origin`
1. Create a new release in the Github UI, give the release a name and add release notes (creating the release will kick off npm publish)
