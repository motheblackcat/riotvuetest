<template>
  <div id="item">
    <div>
      <b class="name">{{ attack.employee.firstname }} {{ attack.employee.lastname }}</b>
      <div v-if="attack.campaign">
        Sent by <b class="underline">{{ attack.campaign.name }}</b> campaign
      </div>
      <div v-else>Sent individually</div>
    </div>
    <div class="result">
      <!-- FIX DURATION -->
      <div>{{ attack.created_at | duration("humanize") }}</div>
      <div class="state" v-bind:class="{ success: attack.status === 'success', fail: attack.status === 'failure' }">
        <!-- FIX SVG IMG -->
        <svg width="20" fill="currentColor" viewBox="0 0 20 20" v-if="attack.status === 'success'">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg width="20" fill="currentColor" viewBox="0 0 20 20" v-else>
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>{{ attack.status === "success" ? "Unsuccessful" : "Successful" }}</div>
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
  props: { attack: Object },
};
</script>

<style lang="scss">
#item {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 30px;
  color: gray;
  border-top: 1px solid lightgray;

  &:hover {
    background-color: #f9fafb;
    cursor: pointer;
  }

  .name {
    color: #584fec;
    margin-bottom: 5px;
  }

  .underline {
    text-decoration: underline dotted;
  }

  .result {
    min-width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
      margin-right: 5px;
    }

    .state {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 14px;
      font-weight: bold;
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
