<template>
  <div class="wrapper">
    <div>
      <b-modal title="系統訊息" class="modal-warning" v-model="display" @ok="display = false" ok-variant="warning">
        {{ message }}
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modals',
  data () {
    return {
      display: false,
      message: ''
    }
  }
}
</script>