const form = new Vue({
  el: ".wrapper",
  data: {
    name: "",
    surname: "",
    email: "",
    guests: [],
    isTableShowed: false,
    isFormShowed: true
  },
  methods: {
    setTableVisibility() {
      this.isTableShowed = !this.isTableShowed;
    },
    setFormVisibility() {
      this.isFormShowed = !this.isFormShowed;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.setTableVisibility();
      this.setFormVisibility();

    },
    addGuest() {
      this.guests.push("");
    },
    removeGuest(indexToRemove) {
      this.guests = this.guests.filter((item, index) => index !== indexToRemove);
    }
  },
});