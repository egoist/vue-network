const Network = {
  name: 'network',

  props: {
    changedOnly: Boolean
  },

  data() {
    return {
      isOnline: typeof window === 'undefined' ? true : navigator.onLine
    }
  },

  mounted() {
    window.addEventListener('online', this.whenOnline)
    window.addEventListener('offline', this.whenOffline)
  },

  beforeDestroy() {
    window.removeEventListener('online', this.whenOnline)
    window.removeEventListener('online', this.whenOffline)
  },

  methods: {
    whenOnline() {
      this.$emit('changed', true)
      this.isOnline = true
    },

    whenOffline() {
      this.$emit('changed', false)
      this.isOnline = false
    }
  },

  render() {
    if (this.changedOnly && !this._isMounted) return

    const { online, offline } = this.$slots

    return this.isOnline ? online && online[0] : offline && offline[0]
  }
}

export default Network
