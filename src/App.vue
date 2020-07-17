<template>
  <div id="app">
    <Header v-bind:currentUser="currentUser"></Header>
    <AttacksList v-bind:currentPage="currentPage"></AttacksList>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AttacksList from "./components/AttacksList.vue";

export default {
  name: "App",
  data() {
    return {
      currentPage: { title: "Attacks", option: 0 },
      currentUser: { name: "Louis Cibot", id: 1 },
    };
  },
  components: {
    Header,
    AttacksList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

// scss variables should be used accross the app
// Try gradient
body {
  margin: 0;
  background: linear-gradient(180deg, rgba(37, 47, 63, 1) 70%, rgba(255, 255, 255, 1) 70%) no-repeat;
  color: white;
  font-family: "Roboto", sans-serif;

  #app {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }
}
</style>
