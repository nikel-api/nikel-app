<template>
  <v-container v-if="item !== null" class="pb-16">
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
        <v-row>
          <v-card class="ma-2" width="100%">
            <v-card-text>
              <div class="subtitle-1 text--primary font-weight-bold">
                Meeting Sections
              </div>
            </v-card-text>
            <v-simple-table v-if="item.meeting_sections.length !== 0">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Code</th>
                    <th class="text-left">Instructors</th>
                    <th class="text-left">Times</th>
                    <th class="text-left">Size</th>
                    <th class="text-left">Wait List</th>
                    <th class="text-left">Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="section in item.meeting_sections"
                    :key="section.code"
                  >
                    <td>{{ section.code }}</td>
                    <td style="white-space: pre-line;">
                      {{
                        section.instructors.length !== 0
                          ? section.instructors.join(" jfalksjeg")
                          : "Not found"
                      }}
                    </td>
                    <td style="white-space: pre-line;">
                      {{ processTimes(section.times) }}
                    </td>
                    <td>{{ section.size }}</td>
                    <td>
                      {{ section.waitlist_option === true ? "Yes" : "No" }}
                    </td>
                    <td>{{ section.delivery }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div v-else>No meeting sections found.</div>
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
        <v-row>
          <v-card class="ma-2" width="100%">
            <v-card-text>
              <div v-if="item.prerequisites !== 'Unknown'">
                <div>Prerequisites</div>
                <p class="text--primary font-weight-bold">
                  {{ item.prerequisites }}
                </p>
              </div>
              <div v-if="item.corequisites !== 'Unknown'">
                <div>Co-requisites</div>
                <p class="text--primary font-weight-bold">
                  {{ item.corequisites }}
                </p>
              </div>
              <div v-if="item.recommended_preparation !== 'Unknown'">
                <div>Recommended Preparation</div>
                <p class="text--primary font-weight-bold">
                  {{ item.recommended_preparation }}
                </p>
              </div>
              <div v-if="item.arts_and_science_breadth !== 'Unknown'">
                <div>Arts and Science Breadth</div>
                <p class="text--primary font-weight-bold">
                  {{ item.arts_and_science_breadth }}
                </p>
              </div>
              <div v-if="item.arts_and_science_distribution !== 'Unknown'">
                <div>Arts and Science Distribution</div>
                <p class="text--primary font-weight-bold">
                  {{ item.arts_and_science_distribution }}
                </p>
              </div>
              <div v-if="item.utm_distribution !== 'Unknown'">
                <div>UTM Distribution</div>
                <p class="text--primary font-weight-bold">
                  {{ item.utm_distribution }}
                </p>
              </div>
              <div v-if="item.utsc_breadth !== 'Unknown'">
                <div>UTSC Breadth</div>
                <p class="text--primary font-weight-bold">
                  {{ item.utsc_breadth }}
                </p>
              </div>
              <div v-if="item.apsc_electives !== 'Unknown'">
                <div>APSC Electives</div>
                <p class="text--primary font-weight-bold">
                  {{ item.apsc_electives }}
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { capitalize, convertSecsToTime } from "@/utils/helpers";

export default {
  name: "AppCourse",
  computed: {
    item: function() {
      return this.$store.state.searchSelect;
    }
  },
  methods: {
    processTimes: function(times) {
      return times
        .map(
          time =>
            `${capitalize(time.day).slice(0, 3)} ${convertSecsToTime(
              time.start
            )} - ${convertSecsToTime(time.end)} ${
              time.location !== "Unknown" ? "@ " + time.location : ""
            }`
        )
        .join("\n");
    }
  }
};
</script>

<style scoped></style>
