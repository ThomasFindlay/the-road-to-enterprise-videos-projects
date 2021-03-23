<template>
  <button
    :class="[$style.tabBtn, activeTab === id && $style.tabActive]"
    :id="`tab-${id}`"
    @click.prevent="activateTab(id)"
  >
    <slot />
  </button>
</template>

<script>
import { useTabs } from './Tabs.vue'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { activateTab, activeTab } = useTabs()

    return {
      activateTab,
      activeTab,
    }
  },
}
</script>

<style module>
.tabBtn {
  cursor: pointer;
  background: transparent;
  outline: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.4rem 0.6rem;
  &:hover {
    background-color: #eee;
  }
}

.tabActive {
  border-bottom: 2px solid indigo;
}
</style>
