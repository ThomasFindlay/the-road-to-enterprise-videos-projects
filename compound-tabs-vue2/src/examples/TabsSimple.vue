<template>
  <Tabs :items="items" />
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          header: 'Home',
          content: HomeComponent,
        },
        {
          header: 'Profile',
          content: ProfileComponent,
        },
        {
          header: 'About',
          content: AboutComponent,
        },
      ],
    }
  },
}
</script>
