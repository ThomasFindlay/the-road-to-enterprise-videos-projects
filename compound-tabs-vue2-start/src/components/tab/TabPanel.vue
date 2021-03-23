<template>
  <div v-if="tabState.activeTab === id">
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
