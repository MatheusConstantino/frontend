<template>
  <div class="page">
    <v-content>
      <h1 class="title">Criação de usuários</h1>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="name"
                  label="Nome"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="login"
                  label="Login"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="insertUser">Cadastrar</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://appdorodri.heroku.app',
});

export default {
  data() {
    return {
      login: '',
      password: '',
      name: '',
    };
  },
  methods: {
    insertUser() {
      request.post('/users/new', { name: this.name, email: this.login, password: this.password });
      window.location.href = 'http://localhost:8080/';
    },
  },
};
</script>

<style>
.page {
  margin-top: 60px;
}

.title {
  text-align: center;
}
</style>
