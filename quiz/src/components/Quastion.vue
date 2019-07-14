<template>
  <div class = "text-left">
    <h4>{{task.quas}}</h4>
    <hr>
    <p v-for="(item, index) in task.ans" :key="index">
    <input 
    :type="task.type" 
    :value = "item" 
    v-model= "selected"
    @change = "passDateToParent"
     > 
      {{item}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      selected: []
    }
  },
  methods: {
    passDateToParent() {
      this.$emit("passToParent", this.selected);
      this.openButton();
    },
    openButton() {
      this.$emit("openButton", false )
    },
  },
}
</script>