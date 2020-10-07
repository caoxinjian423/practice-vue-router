<template>
  <div>
    <div>
      <button @click="handleGoBack">go back</button>
    </div>
    <el-container>
      <el-header>{{ infoInfo.name }}</el-header>
      <el-main>
        <img
          :src="require(`@/assets/${infoInfo.image}`)"
          :alt="infoInfo.name"
        />
        <p>{{ infoInfo.description }}</p>
      </el-main>
      <el-footer>
        <router-link
          :to="{ name: 'secretDetails', params: { secret: infoInfo.secret } }"
          >点了我就告诉你
        </router-link >
        <router-view></router-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import store from "@/myDB.js";
export default {
  props: {
    infoId: String,
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },

  computed: {
    infoInfo() {
      return store.infos.find((info) => {
        return info.id === this.infoId;
      });
    },
  },
};
</script>

<style scoped></style>
