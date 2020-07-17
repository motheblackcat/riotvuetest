<template>
  <header>
    <!-- NOTE: Should be a 'for' list for the sake of flexibility / linking to an admin page -->
    <!-- NOTE: Click interaction / styling would be provided by the router / logic -->
    <!-- NOTE: Select could be using a 'for'list (same reasons as above) and Vue Material for better style control / behavior customization -->
    <div class="left">
      <a href="https://tryriot.com/" target="_blank"><img src="../assets/logo-white.svg" alt="riot logo"/></a>
      <div>Dashboard</div>
      <div>Team</div>
      <div class="selected">Simulation</div>
    </div>
    <div class="right">
      <select>
        <option value="user">{{ currentUser.name }}</option>
        <option value="profil">My Profile</option>
        <option value="logout">Logout</option>
      </select>
      <img src="../assets/chevron-down.svg" alt="chevron down" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["currentUser"],
};
</script>

<style scoped lang="scss">
header {
  width: 83%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.1);
  cursor: pointer;

  .left {
    display: flex;
    align-items: center;

    a {
      margin-right: 20px;
    }

    div {
      margin-right: 20px;
      color: lightgray;
      padding: 10px 15px;
    }

    .selected {
      color: white;
      background-color: #171e2e;
      border-radius: 10px;
    }
  }

  .right {
    display: flex;
    color: lightgray;

    select {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: lightgray;
      outline: none;
      background: none;
      border: none;
      appearance: none;
      cursor: pointer;
    }

    option {
      background-color: #252f3f;
    }

    img {
      fill: currentColor;
    }
  }
}
</style>
