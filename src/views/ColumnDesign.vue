<template>
  <b-row>
    <b-col md="6" v-for="(itemID, index) in list">
      <b-card>
        <div slot="header">
          <strong>欄位</strong> {{ itemID }}
          <b-button type="button" size="sm" variant="primary" @click="addColumn()" style="margin-left: 5px;"><i class="fa fa-plus"></i> 新增欄位</b-button>
          <b-button type="reset" size="sm" variant="danger" @click="deleteColumn(index)" style="margin-left: 5px;"><i class="fa fa-times"></i> 移除欄位</b-button>
        </div>
        <b-form>
          <b-form-group
            description="請輸入中文欄位名稱"
            label="欄位名稱"
            label-for="ZH-Name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" id="ZH-Name" v-model="nameZH[index]"></b-form-input>
          </b-form-group>
          <b-form-group
            description="請輸入英文欄位名稱"
            label="英文欄位名稱"
            label-for="EN-Name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" id="EN-Name" v-model="nameEN[index]"></b-form-input>
          </b-form-group>
          <b-form-group
            label="欄位類型"
            label-for="typeSelect"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="typeSelect"
                           :plain="true"
                           :options="optionContent()"
                           value="null"
                           v-model="columnType[index]">
            </b-form-select>
          </b-form-group>
          <b-form-group
            description="請輸入此欄位範例資料"
            label="範例資料"
            label-for="sampleData"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" id="sampleData" v-model="data[index]"></b-form-input>
          </b-form-group>
          <b-form-group
            label="欄位說明"
            label-for="Description"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="Description" :textarea="true" :rows="9" placeholder="請輸入說明..." v-model="Description[index]"></b-form-input>
          </b-form-group>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'ColumnDesign',
    props: ["type"],
    data () {
      return {
        list: [1],
        nameZH: [],
        nameEN: [],
        columnType: [],
        data: [],
        Description: [],
        listOption: [{
          text: '請選擇欄位類型',
          value: null
        },
        {
          text: '一般純文字欄位',
          value: 1
        },
        {
          text: '勾選框',
          value: 2
        },
        {
          text: '單選圓框',
          value: 3
        }],
        inputOption: [{
          text: '請選擇欄位類型',
          value: null
        },
        {
          text: '單行輸入框',
          value: 1
        },
        {
          text: '下拉式選單',
          value: 2
        },
        {
          text: '單選圓框',
          value: 3
        },
        {
          text: '純文字顯示',
          value: 5
        },
        {
          text: '多選勾選框',
          value: 6
        },
        {
          text: '密碼輸入框',
          value: 7
        },
        {
          text: '檔案上傳',
          value: 8
        }]
      }
    },
    methods: {
      addColumn: function () {
        this.list.push(this.list.length + 1)
      },
      deleteColumn: function (index) {
        if (this.list.length > 1) {
          this.list.splice(index, 1)
        } else {
          this.clear()
        }
        this.resort()
      },
      resort: function () {
        this.list.forEach(function(value, index) {
          this.list.splice(index, 1, index + 1)
        }.bind(this))
      },
      clear: function() {
        this.nameZH = []
        this.nameEN = []
        this.columnType = []
        this.data = []
        this.Description = []
      },
      optionContent: function() {
        return this.type === 1 ? this.listOption : this.inputOption
      },
      getListData: function () {
        let listData = {
          header: {},
          data: [{
            id: 1
          }],
          listSchema: {
            id: {
              type: 2,
              display: true
            }
          }
        }
        this.list.forEach(function (value, index) {
          let key = this.nameEN[index]
          listData.header[key] = this.nameZH[index]
          listData.listSchema[key] = {
            type: parseInt(this.columnType[index]),
            display: true
          }
          listData.data[0][key] = this.data[index]
        }.bind(this))
        return listData
      },
      getInputData: function () {
        let listData, option1, option2
        listData = []
        option1 = [{
          text: '請選擇',
          value: null
        },{
          text: '選項1',
          value: 1
        },{
          text: '選項2',
          value: 2
        },{
          text: '選項3',
          value: 3
        }]
        option2 = [{
          text: '選項1',
          value: 1
        },{
          text: '選項2',
          value: 2
        },{
          text: '選項3',
          value: 3
        }]
        this.list.forEach(function (value, index) {
          listData.push({
            type: parseInt(this.columnType[index]),
            key: this.nameEN[index],
            title: this.nameZH[index],
            placeHolder: '',
            desc: '',
            require: true,
            display: true,
            data: parseInt(this.columnType[index]) === 2 ? option1 : option2
          })
        }.bind(this))
        return listData
      }
    }
  }
</script>
