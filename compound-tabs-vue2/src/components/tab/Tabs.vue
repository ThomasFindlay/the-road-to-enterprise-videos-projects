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
  render(h) {
    return h('div', this.$scopedSlots.default())
  },
  methods: {
    activateTab(id) {
      this.activeTab = id
    },
  },
}
</script>

<style module></style>
