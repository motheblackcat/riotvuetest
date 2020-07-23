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
      <div>{{ time }} ago</div>
      <div class="state" v-bind:class="{ success: attack.status === 'success', fail: attack.status === 'failure' }">
        <img v-if="attack.status === 'success'" src="../../assets/check.svg" alt="check" />
        <img v-else src="../../assets/x.svg" alt="x" />
        <div>{{ attack.status === "success" ? "Unsuccessful" : "Successful" }}</div>
      </div>
      <img src="../../assets/chevron-right.svg" alt="chevron right" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

// NOTE: Missing type for attack (TS Starter)
export default {
  name: "AttacksListItem",
  props: { attack: Object },
  data: function() {
    return {
      time: moment(this.attack.created_at).fromNow(),
    };
  },
};
</script>

<style lang="scss">
#item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0 30px 30px;
  color: gray;
  border-top: 1px solid lightgray;

  &:hover {
    background-color: $hover-gray;
    cursor: pointer;
  }

  .name {
    color: $purple;
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
      margin-left: 5px;
    }

    .success {
      background-color: $light-green;
      color: $green;
    }

    .fail {
      background-color: $light-red;
      color: $red;
    }
  }
}
</style>
