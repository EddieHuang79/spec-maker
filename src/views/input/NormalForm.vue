<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <div class="card">
          <div class="card-header">
            <strong>即時預覽</strong>
            <b-button type="button" size="sm" variant="primary" @click="getPreviewData()" style="margin-left: 10px;"><i class="fa fa-refresh"></i> 更新</b-button>
          </div>
          <div class="card-body">
            <basicForm :txt="txt" :list="list"></basicForm>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <ColumnDesign ref="columnDesignComponent" type="2"></ColumnDesign>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import basicForm from '../BasicForm.vue'
import ColumnDesign from '../ColumnDesign.vue'

export default {
  name: 'NormalForm',
  components: {
    basicForm,
    ColumnDesign
  },
  data () {
    return {
      list: [],
      txt: []
    }
  },
  methods: {
    getPreviewData: function () {
      this.list = this.$refs.columnDesignComponent.getInputData()
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
