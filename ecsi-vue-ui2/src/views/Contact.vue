<template>
  <div class="contactpage"> 
    <Contactpage/>
  </div>
</template>

<script>
import Contactpage from '@/components/Contactpage'

export default {
  name: 'contact',
  components: {
    Contactpage,
  }
}
</script>

<style lang="scss" scoped>
.contactpage {
    margin: .5rem;
}

</style>

