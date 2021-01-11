<template>
  <h1>{{ msg }}</h1>
  <a-button @click="count++">count is: {{ count }}</a-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style lang="scss" scoped>
a {
  color: $color-primary;
}
</style>
