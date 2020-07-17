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
        <img v-if="attack.status === 'success'" src="../assets/check.svg" alt="check" />
        <img v-else src="../assets/x.svg" alt="x" />
        <div>{{ attack.status === "success" ? "Unsuccessful" : "Successful" }}</div>
      </div>
      <img src="../assets/chevron-right.svg" alt="chevron right" />
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
