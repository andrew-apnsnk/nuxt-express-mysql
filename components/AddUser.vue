<template>
  <form @submit.prevent="submit">
    <h1>Add user</h1>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="First name"
        v-model="first_name"
        required
      />
      <input
        type="text"
        class="form-control"
        placeholder="Last name"
        v-model="last_name"
        required
      />
      <input
        type="email"
        class="form-control"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        type="tel"
        class="form-control"
        placeholder="Phone (+123456789123)"
        v-model="phone"
        pattern="[+0-9]{3}[0-9]{3}[0-9]{4}[0-9]{3}"
        required
      />
      <input
        type="text"
        class="form-control"
        placeholder="Password"
        v-model="password"
        minlength="4"
        required
      />
      <input
        type="text"
        class="form-control"
        placeholder="Confirm password"
        v-model="second_password"
        minlength="4"
        required
      />
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      api:
        process.env.NODE_ENV === "production"
          ? "http://api.production.io"
          : "http://localhost:3000",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      second_password: "",
    };
  },
  methods: {
    async submit() {
      const newUser = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        second_password: this.second_password,
      };

      const res = await this.$axios.post(`${this.api}/api/users`, newUser);
      if (res.data.status === "error") {
        this.$swal(res.data.message);
      } else {
        this.$emit("add-user", res.data);
      }

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