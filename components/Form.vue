<template>
  <form @submit.prevent="submit" lang="eng">
    <h1>Add user</h1>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="First name"
        v-model="first_name"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Last name"
        v-model="last_name"
      />
      <input
        type="email"
        class="form-control"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="tel"
        class="form-control"
        placeholder="Phone"
        v-model="phone"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Password"
        v-model="password"
        minlength="1"
      />
      <input
        type="text"
        class="form-control"
        placeholder="Second password"
        v-model="second_password"
        minlength="1"
      />
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    second_password: "",
  }),
  methods: {
    submit() {
      this.$store
        .dispatch("users/addUser", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          second_password: this.second_password,
        })
        .then((res) => {
          if (res.data.status === "error") {
            this.$swal(res.data.message);
          }
        });

      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.phone = "";
      this.password = "";
      this.second_password = "";
    },
  },
};
</script>

<style scoped>
form {
  width: 600px;
  margin: 10px auto;
}

h1 {
  text-align: center;
}

button {
  margin-top: 10px;
}

input {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 5px;
}
</style>