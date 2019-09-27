<template>
  <div class="home">
    <h1 class="title">{{this.companyName}}</h1>
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
    inserUser() {},
  },
};
</script>

<style>
.title {
  text-align: center;
}
</style>
