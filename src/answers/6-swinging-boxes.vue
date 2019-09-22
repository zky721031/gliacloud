<template lang="pug">
div
  button(@click="move = !move") toggle
  .container
    - for(var j = 0; j < 5; j++)
      .box
        - for(var i = 0; i < 50; i++)
          .item(:class="{ move }")
</template>

<script>
export default {
  name: 'SwingingBoxes',
  data () {
    return {
      move: false
    }
  }
}
</script>

<style lang="scss" scoped>
// you work here
$boxW: 100px;
$itemW: 10px;

button {
  margin: 5px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
.box {
  margin-right: 2px;
  width: $boxW;
}
.item {
  width: $itemW * 5;
  height: $itemW;
  margin-bottom: 1px;
  background-color: #900;
  transition: all 1s ease;
}

@for $i from 0 through 1000 {
  .item:nth-child(#{$i + 1}n) {
    transition-delay: #{$i * 0.02}s;
  }
}

.item.move {
  margin-left: $boxW;
}
</style>
