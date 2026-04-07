# Shared

Types:

- <code><a href="./src/resources/shared.ts">PlaybackId</a></code>
- <code><a href="./src/resources/shared.ts">PlaybackPolicy</a></code>

# [Video](src/resources/video/api.md)

# [Robots](src/resources/robots/api.md)

# [Data](src/resources/data/api.md)

# System

## SigningKeys

Types:

- <code><a href="./src/resources/system/signing-keys.ts">SigningKey</a></code>
- <code><a href="./src/resources/system/signing-keys.ts">SigningKeyResponse</a></code>

Methods:

- <code title="post /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">create</a>() -> SigningKey</code>
- <code title="get /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">retrieve</a>(signingKeyID) -> SigningKey</code>
- <code title="get /system/v1/signing-keys">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">list</a>({ ...params }) -> SigningKeysBasePage</code>
- <code title="delete /system/v1/signing-keys/{SIGNING_KEY_ID}">client.system.signingKeys.<a href="./src/resources/system/signing-keys.ts">delete</a>(signingKeyID) -> void</code>

## Utilities

Types:

- <code><a href="./src/resources/system/utilities.ts">WhoamiResponse</a></code>
- <code><a href="./src/resources/system/utilities.ts">UtilityWhoamiResponse</a></code>

Methods:

- <code title="get /system/v1/whoami">client.system.utilities.<a href="./src/resources/system/utilities.ts">whoami</a>() -> UtilityWhoamiResponse</code>

# [Webhooks](src/resources/webhooks/api.md)
