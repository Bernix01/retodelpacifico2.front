<template>
<b-container>
  <h1 class="text-center">Login</h1>
  <hr>
  <b-alert v-if="error" show variant="danger">{{ error + '' }}</b-alert>
  <b-alert show v-if="$auth.$state.redirect">
    Debes iniciar sesión antes de acceder a <strong>{{ $auth.$state.redirect }}</strong>
  </b-alert>
  <b-row align-h="center" align-v="center">
    <b-col md="4">
      <b-card>
        <busy-overlay />
        <form @keydown.enter="login">
        <b-form-group label="Username">
          <b-input v-model="username" placeholder="anything" ref="username" />
        </b-form-group>

        <b-form-group label="Password">
          <b-input type="password" v-model="password" placeholder="123" />
        </b-form-group>

        <div class="text-center">
          <b-btn @click="login" variant="primary" block>Login</b-btn>
        </div>
        </form>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

<style scoped>
</style>

<script>
import busyOverlay from '~/components/busy-overlay'
export default {
  components: { busyOverlay },
  data() {
    return {
      username: '',
      password: '123',
      error: null
    }
  },
  computed: {
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    }
  },
  methods: {
    async login() {
      this.error = null
      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          this.error = e + ''
        })
    }
  }
}
</script>
