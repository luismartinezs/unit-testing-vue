<template>
  <div>
    <button v-show="loggedIn">Logout</button> <!-- Output -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false, // INput
    };
  },
};
</script>