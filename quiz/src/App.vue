<template>
  <div id="app" class = "container mt-5 text-center">
    <Quastion :task="tasks[index]"
      @passToParent="getDataFromChildren"
      @openButton = "changeDisableButton"
      v-if="index < tasks.length"
     />
     <Answers
      v-else
      :data = "response"
      :quiz = "tasks"
     />
    <button 
      v-show= "index < tasks.length" 
      type="button" 
      class="btn btn-secondary" 
      :disabled = "buttonDisabled" 
      @click="setNext"
      >Next
    </button>
  </div>
</template>

<script>

  import Quastion from './components/Quastion.vue'
  import Answers from './components/Answers.vue'

export default {
  data() {
    return{
      index: 0,
      buttonDisabled: true,
      tasks: [
        {
          quas: "What kind of programming paradigm do you use?",
          ans: ["OOP", "Functional paradigm", "declorative paradigm", "imperative paradigm"],
          type: "checkbox"
        },
        {
          quas: "What kind of language is more popular in web development?",
          ans: ["visual basic", "javascript", "c++", "assambler"],
          type: "radio"
        },
      ],
      response: [],
      curRes: ""
    }
  },
  components: {
    Quastion,
    Answers
  },
  methods: {
    setNext() {
      this.index++;
      this.buttonDisabled = true;
      this.response.push(this.curRes);
    },
    getDataFromChildren(data) {
      this.curRes = data;
    },
    changeDisableButton(bool) {
      this.buttonDisabled = bool
    }
  }
}
</script>

<style>
</style>
