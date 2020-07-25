<template>
  <v-container v-show="item">
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-card class="ma-2" width="100%">
            <v-card-text>
              <div class="subtitle-1">{{ item.code }}</div>
              <p class="display-1 text--primary font-weight-bold">
                {{ item.name }}
              </p>
              <p>{{ item.division }} | {{ item.department }}</p>
              <p class="text--primary">{{ item.description }}</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-card class="ma-2" width="100%">
            <v-card-text>
              <div>Level</div>
              <p class="text-h5 text--primary font-weight-bold">
                {{ item.level }}
              </p>
              <div>Term</div>
              <p class="text-h5 text--primary font-weight-bold">
                {{ item.term }}
              </p>
              <div>Campus</div>
              <p class="text-h5 text--primary font-weight-bold">
                {{ item.campus }}
              </p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppCourse",
  computed: {
    item: function() {
      return this.$store.state.searchSelect;
    }
  }
};
</script>

<style scoped></style>
