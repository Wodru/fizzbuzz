<script setup>
function renderText(number) {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}
function renderText2(number) {
  let text = "";
  if (number % 3 === 0) text += "Fizz";
  if (number % 5 === 0) text += "Buzz";

  return !text ? number : text;
}
</script>

<template>
  <ul>
    <li v-for="i in 100" :key="i">
      {{ renderText2(i) }}
    </li>
  </ul>
</template>

<style>
@import "./assets/base.css";
</style>
