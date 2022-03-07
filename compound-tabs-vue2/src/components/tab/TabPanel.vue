<template>
  <div :id="`tab-panel-${id}`" v-show="tabState.activeTab === id">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  inject: ['tabState'],
}
</script>

<style module></style>
