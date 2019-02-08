<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>登入</h1>
                  <p class="text-muted">登入你的帳號</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="帳號" autocomplete="username email" v-model="account"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="密碼" autocomplete="current-password" v-model="password"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" @click="login">登入</b-button>
                    </b-col>
                    <!--
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">忘記密碼</b-button>
                    </b-col>
                    -->
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: () => ({
    account: '',
    password: '',
    token: ''
  }),
  methods: {
    login() {
      let formData = new FormData()
      formData.append('account', this.account)
      formData.append('password', this.password)
      axios.post(this.$root.$refs.app.serverURL + '/login', formData).then((response) => {
        if ( response.data.error === true ) {
          this.$root.$refs.app.showMessage( response.data.msg )
        } else {
          this.$root.$refs.app.setLoginInfo( response.data.data )
          this.$router.push('/dashboard')
        }
      })
    }
  }
}
</script>
