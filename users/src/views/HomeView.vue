<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Bienvenido a Doble 5</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6 d-flex justify-content-center">
        <button>
          <router-link to="/login" class="btn-home">Ingresar</router-link>
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <button>
          <router-link to="/register" class="btn-home">Registarme</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style src="../css/auth.css"> </style>
