<script>
export default {
  props: {
    initialActiveTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeTab: this.initialActiveTab,
    }
  },
  render(h) {
    return h('div', this.$scopedSlots.default())
  },
  provide() {
    let tabState = {}
    Object.defineProperty(tabState, 'activeTab', {
      enumerable: true,
      get: () => this.activeTab,
    })

    return {
      tabState,
      activateTab: this.activateTab,
    }
  },
  methods: {
    activateTab(id) {
      console.log({ id })
      this.activeTab = id
    },
  },
}
</script>

<style module></style>
