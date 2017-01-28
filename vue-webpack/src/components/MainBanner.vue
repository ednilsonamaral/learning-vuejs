<template>
    <h1>{{ title }}</h1>
    <h2> {{ description }}</h2>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: String,
  },
};
</script>
