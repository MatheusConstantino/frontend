<template>
  <div class="page">
    <v-content>
      <h1 class="title">Criação de empresa</h1>
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
                  v-model="justification"
                  label="Justificativa - Nome"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="mission"
                  label="Missão"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="vision"
                  label="Visão"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="values"
                  label="Valores"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="logoUrl"
                  label="URL do logo"
                  type="text"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="insertCompany">Cadastrar</v-btn>
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
      name: '',
      justification: '',
      mission: '',
      vision: '',
      values: '',
      logoUrl: '',
    };
  },
  methods: {
    insertCompany() {},
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
