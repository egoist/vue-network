
# vue-network

[![NPM version](https://img.shields.io/npm/v/vue-network.svg?style=flat)](https://npmjs.com/package/vue-network) [![NPM downloads](https://img.shields.io/npm/dm/vue-network.svg?style=flat)](https://npmjs.com/package/vue-network) [![CircleCI](https://circleci.com/gh/egoist/vue-network/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-network/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add vue-network
```

CDN: [UNPKG](https://unpkg.com/vue-network/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-network/dist/) (available as `window.VueNetwork`)

## Usage

```vue
<template>
  <network>
    <span slot="online">network is fine</span>
    <span slot="offline">oops, lost network connection</span>
  </network>
</template>

<script>
import Network from 'vu-network'

export default {
  components: {
    Network
  }
}
</script>
```

## API

### Slots

- `online`: The slot to show when app is online.
- `offline`: The slot to show when app is offline.

### Props

- `changedOnly`: Only show slots after network status is changed, i.e. render nothing on the first render.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-network** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/vue-network/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
