<template>
  <div class="home">
    <Index/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'

export default {
  name: 'home',
  currentPage: 1,

  components: {
    Index
  }
}
</script>
