<template>
  <div class="table-responsive-sm">
    <table border="1" class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed">
      <thead>
        <tr>
          <th width="5%">{{ txt.select_item }}</th>
          <th v-for="(item, columnName) in list.header" v-if="isDisplay(columnName)">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list.data">
          <th v-for="(columnData, columnName) in item" :col="columnName" v-if="isDisplay(columnName)">
            <div v-if="typeMatch(columnName, 1)">{{ columnData }}</div>
            <div v-if="typeMatch(columnName, 2)" style="text-align: center;"><input type="checkbox" :value="columnData" v-model="isSelect"></div>
            <div v-if="typeMatch(columnName, 3)">
              <div v-for="row in columnData">{{ row }}</div>
            </div>
            <div v-if="typeMatch(columnName, 4)">{{ columnData.name }}</div>
            <div v-if="typeMatch(columnName, 5)">
                <div class="auth" v-for="row in columnData">
                  <h5 class="parent">{{ row.name }}</h5>
                  <ul class="child">
                    <li v-for="auth in row.auth"><icon name="check" :class="{ active: auth.active }"></icon>{{ auth.name }}</li>
                  </ul>
                </div>
            </div>
            <div v-if="typeMatch(columnName, 6)">
              <a :href="getLink(item)">{{ columnData }}</a>
            </div>
          </th>
        </tr>
        <tr v-if="list.data.length < 1"><th :colspan="countLength()">{{ txt.find_nothing }}</th></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'basicList',
    data () {
      return {
        isSelect: [],
        columnNumber: 0
      }
    },
    watch: {
      isSelect: 'selectItem',
      list: 'test'
    },
    props: ["list", "txt", "modelName"],
    methods: {
      selectItem: function () {
        if (this.isSelect.length > 1) {
          this.isSelect = this.isSelect.slice(1, 2)
        }
        this.$parent.isSelect( this.isSelect )
      },
      isDisplay: function (column) {
        return typeof this.list.listSchema[column] !== 'undefined' ? this.list.listSchema[column].display : false
      },
      typeMatch: function (column, type) {
        return this.list.listSchema[column].type === type
      },
      countLength: function () {
        let cnt = 1
        for (let item in this.list.header) {
          cnt++
        }
        return cnt
      },
      getItemStatus: function (id) {
        let result = ''
        for (let item in this.list.data) {
          if ( this.list.data[item].id === id ) {
            result = this.list.data[item].status
          }
        }
        return result
      },
      setItemStatus: function (id, data) {
        for (let item in this.list.data) {
          if ( this.list.data[item].id === id ) {
            this.list.data[item].status = data
            $("#basicList").find("[col='status']").eq(item).text(data.name)
          }
        }
      },
      getLink: function (item) {
        return '/' + this.modelName + '/' + item.id
      },
      test: function () {
        console.log(this.list)
      }
    }
  }
</script>
