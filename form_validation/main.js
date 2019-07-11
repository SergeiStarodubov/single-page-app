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
    progress: "0",
    isForm: true,
    isData: false
  },
  computed: {

  },
  methods: {
    sendData() {
      this.isData = true;
      this.isForm = false;
    },
    checkAnswers() {
      const count = [
        this.isNameValid,
        this.isEmailValid,
        this.isSurnameValid
      ].filter((item) => item === true).length;

      this.progress = count === 3 ? "100" :
        count === 2 ? "66" :
        count === 1 ? "33" :
        "0"
      this.isButtonDisabled = count === 3 ? false : true;
    },

    checkName() {
      (/^[a-zA-z]+$/.test(this.name)) ?
      this.isNameValid = true:
        this.isNameValid = false
      this.checkAnswers()
    },
    checkEmail() {
      (/^\w+@\w+\.\w{2,3}$/.test(this.email)) ?
      this.isEmailValid = true:
        this.isEmailValid = false
      this.checkAnswers()
    },
    checkSurname() {
      (/^[a-zA-z]+$/.test(this.surname)) ?
      this.isSurnameValid = true:
        this.isSurnameValid = false
      this.checkAnswers()
    }
  },
})