<template>
  <div>
    <h1>
      All Info
    </h1>
    <div class="destinations">
      <div v-for="info in infos" :key="info.name">
        <router-link
          :to="{ name: 'InfoDetails', params: { infoId: info.id } }"
        >
          <h2>{{ info.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'InfoDetails', params: { infoId: info.id } }"
          >
            <img :src="require(`@/assets/${info.image}`)" :alt="info.name" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
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
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 400px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
