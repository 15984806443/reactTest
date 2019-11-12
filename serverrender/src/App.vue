<template>
  <div id="app">
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Foo from "./components/Foo.vue";
import Bar from "./components/Bar.vue";

@Component({
  components: {
    Foo,
    Bar
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus"></style>
