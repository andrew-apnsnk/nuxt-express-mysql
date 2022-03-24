<template>
  <section>
    <AddUser @add-user="addUser" />
    <ShowUsers :users="users" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      api:
        process.env.NODE_ENV === "production"
          ? "http://api.production.io"
          : "http://localhost:3000",
    };
  },
  mounted() {
    fetch(`${this.api}/api/users`)
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
      });
  },
  methods: {
    async addUser(user) {
      this.users.push(user);
    },
  },
};
</script>