<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <LeftNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import LeftNav from '@/components/LeftNav'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LeftNav,
  }
}
</script>
