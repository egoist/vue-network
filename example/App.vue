<template>
  <div id="app">
    <network>
      <h2 slot="online">Try turning off your network in devtools or system network settings.</h2>
      <h2 slot="offline">
        Your app just lost network connection
      </h2>
    </network>
  </div>
</template>

<script>
import Network from '../src'

export default {
  components: {
    Network
  }
}
</script>
