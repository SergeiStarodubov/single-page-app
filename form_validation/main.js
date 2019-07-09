const root = new Vue({
  el: "#root",
  data: {
    name: "",
    surname: "",
    email: "",
    isNameValid: false,
    isEmailValid: false,
    isSurnameValid: false,
    isButtonDisabled: true,
  },
  computed: {

  },
  methods: {
    checkName() {
      (/^[a-zA-z]+$/.test(this.name)) ?
      this.isNameValid = true:
        this.isNameValid = false
    },
    checkEmail() {
      (/^\w+@\w+\.\w{2,3}$/.test(this.email)) ?
      this.isEmailValid = true:
        this.isEmailValid = false
    },
    checkSurname() {
      (/^[a-zA-z]+$/.test(this.surname)) ?
      this.isSurnameValid = true:
        this.isSurnameValid = false
    }
  },
})