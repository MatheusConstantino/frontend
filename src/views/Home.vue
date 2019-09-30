<template>
  <div class="home">
    <h1 class="title">{{this.companyName}}</h1>
    <center>
     <div  style="align-content:center; margin-bottom:2%">
      <b>Capital: </b><button>R$ 40.000,00</button> | <b>Locação: </b><button>70%</button>
    </div>
    </center>
    <div>
    </div>
    <center>
      <div class="btn-group">
        <v-btn color="primary" @click="goToUser">Cadastrar Usuário</v-btn>
        <v-btn color="primary" @click="goToCompany">Cadastrar Empresa</v-btn>
      </div>
    </center>

    <div class="city">
      <img src="../assets/img/Cidade.png" style="width:30%;height:30%;"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'Empresa X',
    };
  },
  methods: {
    goToCompany() {
      window.location.href = 'http://localhost:8080/companies/new';
    },
    goToUser() {
      window.location.href = 'http://localhost:8080/users/new';
    },
  },
};
</script>

<style>
.title {
  text-align: center;
  padding: 3%;
  border-radius: 10;
  border-radius: 50%;
}

  .btn-group button {
  background-color: #468CCB;
  border: 1px solid #4684B2;
  color: white;
  padding: 10px 24px;
  margin-top: 10px;
  cursor: pointer;
  width: 20%;
  display: block;
  border-radius: 30px;
}

.btn-group button:not(:last-child) {
  border-bottom: none;
}

  .btn-group-side button {
  background-color: #468CCB;
  border: 1px solid #4684B2;
  color: white;
  margin-top: 2%;
  padding: 10px 24px;
  cursor: pointer;
  width: 15%;
  border-radius: 10px;

  border-radius: 30px;
}

.city{
  align-content: center;
  text-align: center;
  margin: 2%;
}

</style>
