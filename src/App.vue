<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <body>
    <div id="nav">
      <nav class="container navbar navbar-expand-xl navbar-light bg-light rounded-bottom">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
          <img src="src/assets/globe.png" width="100" alt="">
        </a>
      </nav>
        <!-- Dropdown menu -->
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button> -->

        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Arkivariens hem</router-link>
          <router-link to="/About" class="nav-item nav-link">About us</router-link>
        </div>
        <form class="d-flex">
        </form>
      </nav>
    </div>
    <router-view />
  </body>
</template>
    

<style scoped></style>
