<template>
  <button
    :class="[$style.tabBtn, tabState.activeTab === id && $style.tabActive]"
    @click.prevent="activateTab(id)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  inject: ['activateTab', 'tabState'],
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
