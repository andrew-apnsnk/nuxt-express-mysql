<template>
  <div class="container">
    <Form />
    <List />
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
};
</script>
