<template>
  <nav id="nav">
    <p class="logo">Vue-Router小练习</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-for="info in infos" :key="info.name" class="links">
        <router-link
          :to="{ name: 'InfoDetails', params: { infoId: info.id } }"
        >
          {{ info.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/myDB.js";
export default {
  data() {
    return {
      infos: store.infos,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.vue-school-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>

