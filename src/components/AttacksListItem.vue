<template>
  <div id="item">
    <div>
      <div class="name">name</div>
      <div>sent by</div>
    </div>
    <div class="result">
      <div>time</div>
      <div class="state success">
        <!-- FIX SVG IMG -->
        <svg width="20" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>state</div>
      </div>
      <svg width="20" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttacksListItem",
};
</script>

<style lang="scss">
#item {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 30px;
  color: gray;
  border-top: 1px solid lightgray;

  .name {
    color: #584fec;
  }

  .result {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .state {
      display: flex;
      padding: 5px 10px;
      border-radius: 15px;
    }

    .success {
      background-color: #def7ec;
      color: #2f715e;
    }

    .fail {
      background-color: #fce8e8;
      color: #9b1d1c;
    }
  }
}
</style>
