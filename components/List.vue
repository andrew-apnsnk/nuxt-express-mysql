<template>
  <section>
    <div v-if="users.length">
      <h1>Current users</h1>
      <ul>
        <li v-for="user of users" :key="user.id">
          <strong>ID:</strong> {{ user.id }} 
          <strong>Name:</strong> {{ user.first_name }} {{ user.last_name }} 
          <strong>Email:</strong> {{ user.email }} 
          <strong>Phone:</strong> {{ user.phone }}
        </li>
      </ul>
    </div>
    <h3 v-else>There are no users added yet!</h3>
  </section>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
};
</script>

<style scoped>
section {
  width: 600px;
  margin: 10px auto;
}

h1 {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
}
</style>