const root = new Vue({
  el: ".root",
  data: {
    name: "",
    some: "hello",
    properties : {
      color: "",
      backgroundColor: "" 
    }
  },
  methods: {
    show() {
      console.log("hello");

    }
  },
  computed: {
    className() {
      return "alert-" + this.some
    }
  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
})