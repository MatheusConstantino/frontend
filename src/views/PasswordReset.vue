<template>
  <div class="page">
    <v-content>
      <h1 class="title">Redefinir senha</h1>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirmation"
                  label="Confirmação de senha"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="resetPassword">Redefinir senha</v-btn>
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
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    resetPassword() {
    },
  },
};
</script>

<style>
.title {
  text-align: center;
}
</style>
