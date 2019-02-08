<template>
  <div>
    <router-view></router-view>
    <system-message ref="msg"></system-message>
  </div>
</template>

<script>
import SystemMessage from '@/views/components/systemMessage';
export default {
  name: 'app',
  components: {
      SystemMessage
  },
  data: () => ({
    serverURL: 'http://application.center',
    // serverURL: '',
    loginData: {}
  }),
  methods: {
    showMessage( msg ) {
      this.$refs.msg.message = msg
      this.$refs.msg.display = true
    },
    closeMessage() {
      this.$refs.msg.display = false
    },
    setLoginInfo(data) {
      this.loginData = data
    }
  }
}
</script>

<style lang="scss">
// CoreUI Icons Set
@import '~@coreui/icons/css/coreui-icons.min.css';
/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';
/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';
/* Import Flag Icons Set */
@import '~flag-icon-css/css/flag-icon.min.css';
/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
// Import Main styles for this application
@import 'assets/scss/style';
</style>
