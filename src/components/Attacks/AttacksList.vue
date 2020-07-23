<template>
  <div id="attacks">
    <h1>{{ currentPage.title }}</h1>
    <div class="list-container">
      <div class="list">
        <div class="title">Attacks</div>
        <AttacksListItem v-for="attack in attacks" :key="attack.id" v-bind:attack="attack"></AttacksListItem>
        <div class="load">
          <img src="../../assets/chevron-down-purple.svg" alt="chevron down purple" />
          <div v-if="$apollo.loading">Loading...</div>
          <div v-else v-on:click="loadMore()">load more</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import AttacksListItem from "./AttacksListItem.vue";

// NOTE: The Vue Apollo components can also be used to acheive the same results
const order = JSON.parse('{ "created_at": "desc" }');

const GET_ATTACKS = gql`
  query attacks($limit: Int!, $offset: Int!, $order_by: [attacks_order_by!]) {
    attacks(limit: $limit, offset: $offset, order_by: $order_by) {
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

// NOTE: Missing interface / model / typing for returned data (TS starter)
export default {
  name: "AttacksList",
  props: { currentPage: Object },
  components: {
    AttacksListItem,
  },
  apollo: {
    attacks: {
      query: GET_ATTACKS,
      variables: {
        limit: 5,
        offset: 0,
        order_by: order,
      },
    },
  },
  methods: {
    loadMore() {
      this.offset += 5;
      this.$apollo.queries.attacks.fetchMore({
        variables: {
          offset: this.offset,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newAttacks = fetchMoreResult.attacks;
          // NOTE: __typename: previousResult.attacks.__typename, is missing since it's not the query object that is returned?
          return {
            attacks: [...previousResult.attacks, ...newAttacks],
          };
        },
      });
    },
  },
  data: () => {
    return {
      offset: 0,
      attacks: [],
    };
  },
};
</script>

<style scoped lang="scss">
#attacks {
  width: 100%;

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
      box-shadow: rgba($color: black, $alpha: 0.1) 1px 1px 3px;

      .title {
        padding: 25px;
        font-size: 20px;
      }

      .load {
        display: flex;
        justify-content: center;
        padding: 20px;
        color: $purple;
        border-top: 1px solid lightgray;
        cursor: pointer;
      }
    }
  }
}
</style>
