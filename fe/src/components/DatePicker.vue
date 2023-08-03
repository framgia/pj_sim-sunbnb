<template>
  <div>
    <div class="date-wrapper">
      <VueDatePicker
        class="date-picker"
        v-model="startDate"
        :min-date="currentDate"
        :max-date="endDate || null"
        placeholder="Start Date"
        @input="setStartDateTo2PM"
      />
      <VueDatePicker
        class="date-picker"
        v-model="endDate"
        :min-date="startDate ? getNextDay(startDate) : currentDate"
        :disabled="!startDate"
        placeholder="End Date"
        @input="setEndDateTo12PM"
      />
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },
  data() {
    return {
      startDate: null,
      endDate: null,
      currentDate: new Date().toISOString().substr(0, 10), // Get the current date in "YYYY-MM-DD" format
    };
  },
  methods: {
    setStartDateTo2PM() {
      if (this.startDate) {
        const updatedStartDate = new Date(this.startDate);
        updatedStartDate.setHours(14);
        updatedStartDate.setMinutes(0);
        this.startDate = updatedStartDate.toISOString().substr(0, 10);
      }
    },
    setEndDateTo12PM() {
      if (this.endDate) {
        const updatedEndDate = new Date(this.endDate);
        updatedEndDate.setHours(12);
        updatedEndDate.setMinutes(0);
        this.endDate = updatedEndDate.toISOString().substr(0, 10);
      }
    },
    getNextDay(date) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay.toISOString().substr(0, 10);
    },
  },
  watch: {
    startDate: {
      handler(newDate) {
        if (!newDate) {
          this.endDate = null; // Clear the endDate if startDate becomes empty
        } else {
          const updatedStartDate = new Date(newDate);
          updatedStartDate.setHours(14);
          updatedStartDate.setMinutes(0);
          this.startDate = updatedStartDate.toISOString().substr(0, 10);
        }
      },
    },
    endDate: {
      handler(newDate) {
        if (newDate) {
          const updatedEndDate = new Date(newDate);
          updatedEndDate.setHours(12);
          updatedEndDate.setMinutes(0);
          this.endDate = updatedEndDate.toISOString().substr(0, 10);
        }
      },
    },
  },
};
</script>

<style>
.v-app {
  margin: 0;
  padding: 0;
}

.date-wrapper {
  display: flex;
  height: 50px;
}

.date-picker {
  margin: 3px;
  padding-left: 10px;
}
</style>
