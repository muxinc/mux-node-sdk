## Releasing

1. Update CHANGELOG.md
1. Update version in package.json
1. Open Pull Request, merge after approved
1. Tag master: example: `git tag v2.6.0` and `git push --tags origin`
1. Run `npm publish`

If releaseing a beta tag, run `npm publish --tag beta`
