<template>
  <div>
    <div>
      <span>Timepicker 1</span>
      <vue-timepicker/>
    </div>
    <div style="margin-top: 20px;">
      <span>Timepicker 2</span>
      <vue-timepicker/>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "./components/Timepicker.vue";

export default {
  name: "app",
  components: {
    VueTimepicker
  }
};
</script>
