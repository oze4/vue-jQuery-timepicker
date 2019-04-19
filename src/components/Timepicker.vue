<template>
  <div>
    <input type="text" :name="id" :id="id" value=" ">
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      // give the component a unique id/name
      return "time-picker-" + this._uid;
    }
  },
  mounted() {
    $("#" + this.id).timepicker({
      timeFormat: "HH:mm:ss:l"
    });
  }
};
</script>

<style>
</style>
