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
                  v-model="email"
                  label="Email"
                  type="email"
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
              <v-btn color="primary" @click="inserUser">Cadastrar</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    inserUser() {},
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
