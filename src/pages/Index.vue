<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <div class="col">
        <img
          alt="Quasar logo"
          height="180px"
          style="padding-right: 48px;"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1tv86NH_noQot_igb-mQq3Vvz8tVfJy868VWPKjZYkpjgstz4w"
        >
        <img alt="Quasar logo" height="180px" src="~assets/quasar-logo-full.svg">
      </div>
      <div class="col self-center q-pt-xl">
        <q-btn outline color="#211F6D" unelevated rounded>
          <img src="/statics/blockstack-login.png">
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import userSession from 'boot/blockstack'

export default {
  name: 'PageIndex',
  methods: {
    signIn() {
      userSession.redirectToSignIn()
    }
  }
}
</script>
