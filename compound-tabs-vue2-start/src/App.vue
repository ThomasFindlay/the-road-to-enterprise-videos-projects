<template>
  <div id="app">
    <Tabs initial-active-tab="profile">
      <div :class="$style.section">
        <Tab id="home">Home</Tab>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
        <Tab id="about">About </Tab>
      </div>
      <div :class="$style.section">
        <TabPanel id="home">Home panel</TabPanel>
        <TabPanel id="profile">Profile panel</TabPanel>
        <TabPanel id="settings">Settings panel</TabPanel>
        <TabPanel id="about">About panel</TabPanel>
      </div>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, Tab, TabPanel } from '@/components/tab'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab,
    TabPanel,
  },
}
</script>

<style module>
.section {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
</style>
