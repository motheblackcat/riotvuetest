<template>
  <div id="attacks">
    <h1>{{ currentPage.title }}</h1>
    <div class="list-container">
      <div class="list">
        <div class="title">Attacks</div>
        <AttacksListItem></AttacksListItem>
        <div class="load">
          <!-- FIX SVG IMG -->
          <svg width="20" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span>load more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Reshap folder
import AttacksListItem from "./AttacksListItem.vue";

export default {
  name: "AttacksList",
  props: ["currentPage"],
  components: {
    AttacksListItem,
  },
};
</script>

<style scoped lang="scss">
#attacks {
  width: 100%;

  // find better nesting
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
