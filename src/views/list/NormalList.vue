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
            <basicList modelName="" :txt="txt" :list="list"></basicList>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <ColumnDesign ref="columnDesignComponent" type="1"></ColumnDesign>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import basicList from '../basicList.vue'
import ColumnDesign from '../ColumnDesign.vue'

export default {
  name: 'NormalList',
  components: {
    basicList,
    ColumnDesign
  },
  data: () => {
    return {
      txt: {
        select_item: '選項',
        find_nothing: '查無資料！'
      },
      list: {
        header: [],
        data: [],
        listSchema: [],
      }
    }
  },
  methods: {
    getPreviewData: function () {
      this.list = this.$refs.columnDesignComponent.getListData()
    }
  }
}
</script>
