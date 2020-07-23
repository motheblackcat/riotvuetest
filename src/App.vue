<template>
  <!-- NOTE: Vuetify or another UI library should have been used but couldn't regarding time -->
  <div id="app">
    <Header v-bind:currentUser="currentUser"></Header>
    <AttacksList v-bind:currentPage="currentPage"></AttacksList>
  </div>
</template>

<script>
import Header from "./shared/Header.vue";
import AttacksList from "./components/Attacks/AttacksList.vue";

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
// NOTE: Styles can be moved to their own files https://cli.vuejs.org/guide/css.html#css-modules
body {
  margin: 0;
  background: linear-gradient(180deg, $blue 40%, white 40%) no-repeat;
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
