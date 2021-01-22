<template>
  <div class="about">
    <h1>This is graph page page</h1>
    <ChartOne />
  </div>
</template>

<script>
// @ is an alias to /src
import ChartOne from '@/components/ChartOne.vue';

export default {
  name: 'Graph Research',
  components: {
    ChartOne,
  },
};
</script>
