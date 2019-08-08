<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { userSession } from 'boot/blockstack'

export default {
  name: 'App',
  mounted() {
    console.log('app mounted')
    console.log('user session', userSession)
  }
}
</script>

<style>
</style>
