<template>
  <div id="attacks">
    <h1>{{ currentPage.title }}</h1>
    <div class="list-container">
      <div class="list">
        <div class="title">Attacks</div>
        <AttacksListItem v-for="attack in attacks" :key="attack.id" v-bind:attack="attack"></AttacksListItem>
        <div class="load">
          <img src="../assets/chevron-down-purple.svg" alt="chevron down purple" />
          <div v-if="$apollo.loading">Loading...</div>
          <div v-else v-on:click="loadMore()">load more</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Reshape archi
import gql from "graphql-tag";
import AttacksListItem from "./AttacksListItem.vue";

// Use variables in query for fetchMore
const GET_ATTACKS = gql`
  query {
    attacks(limit: 5, order_by: { created_at: desc }) {
      id
      campaign {
        name
      }
      created_at
      employee {
        firstname
        lastname
      }
      status
    }
  }
`;

export default {
  name: "AttacksList",
  props: { currentPage: Object },
  components: {
    AttacksListItem,
  },
  apollo: {
    attacks: {
      query: GET_ATTACKS,
    },
  },
  methods: {
    loadMore() {
      // TODO
    },
  },
  data: function() {
    return {
      attacks: [],
    };
  },
};
</script>

<style scoped lang="scss">
#attacks {
  width: 100%;

  // find better nesting?
  h1 {
    margin: 50px 10% 160px 8.5%;
    font-size: 36px;
  }

  .list-container {
    display: flex;
    justify-content: center;
    color: black;

    .list {
      width: 83%;
      margin-top: -90px;
      background-color: white;
      border: 1px solid lightgray;
      border-radius: 10px;
      box-shadow: rgba($color: #000000, $alpha: 0.1) 1px 1px 3px;

      .title {
        padding: 25px;
        font-size: 20px;
      }

      .load {
        display: flex;
        justify-content: center;
        padding: 20px;
        color: #584fec;
        border-top: 1px solid lightgray;
        cursor: pointer;
      }
    }
  }
}
</style>
