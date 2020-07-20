<template>
  <v-bottom-navigation v-model="bottomNav" color="primary" shift>
    <v-btn @click="setType('courses')" class="v-btn-custom">
      <span>Courses</span>
      <v-icon>fas fa-chalkboard-teacher</v-icon>
    </v-btn>
    <v-btn @click="setType('textbooks')">
      <span>Textbooks</span>
      <v-icon>fas fa-book</v-icon>
    </v-btn>
    <v-btn @click="setType('exams')">
      <span>Exams</span>
      <v-icon>fas fa-pen-alt</v-icon>
    </v-btn>
    <v-btn @click="setType('evals')">
      <span>Evals</span>
      <v-icon>fas fa-chart-bar</v-icon>
    </v-btn>
    <v-btn @click="setType('food')">
      <span>Food</span>
      <v-icon>fas fa-utensils</v-icon>
    </v-btn>
    <v-btn @click="setType('services')">
      <span>Services</span>
      <v-icon>fas fa-info</v-icon>
    </v-btn>
    <v-btn @click="setType('buildings')">
      <span>Buildings</span>
      <v-icon>fas fa-building</v-icon>
    </v-btn>
    <v-btn @click="setType('parking')">
      <span>Parking</span>
      <v-icon>fas fa-parking</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      bottomNav: "courses"
    };
  },
  methods: {
    setType(type) {
      this.$store.state.searchType = type;
    }
  }
};
</script>

<style scoped>
.v-btn--contained {
  padding: 15px !important;
  min-width: 0 !important;
}
</style>
