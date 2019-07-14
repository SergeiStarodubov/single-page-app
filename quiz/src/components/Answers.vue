<template>
<div>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Quastion</th>
      <th scope="col">Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{quiz[index]["quas"]}}</td>
      <td>{{showData(item)}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  props: {
    data: Array,
    quiz: Array
  },
  methods: {
    showData(item) {
      if (Array.isArray(item)) {
        const res = item.join(", ");
        return res
      }
      return item;
    }
  },
}
</script>