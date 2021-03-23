<template>
  <Tabs initial-active-tab="home">
    <div class="tabs-header">
      <Tab id="home">Home</Tab>
      <Tab id="profile">Profile</Tab>
      <Tab id="about">About</Tab>
    </div>
    <div class="tabs-content">
      <TabPanel id="home">
        <HomeComponent />
      </TabPanel>
      <TabPanel id="profile">
        <ProfileComponent />
      </TabPanel>
      <TabPanel id="about">
        <AboutComponent />
      </TabPanel>
    </div>
  </Tabs>
</template>

<script>
export default {}
</script>

<style module></style>
