<template>
  <div class="animated fadeIn">
    <b-row v-if="list.length > 0">
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>輸入表單</strong>
          </div>
          <b-form>
            <div v-for="(item, index) in list">
              <b-form-group
                v-if="item.type === 1"
                :class="item.attrClass"
                :description="item.desc"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3"
                :horizontal="true">
                <b-form-input :id="item.key" :name="item.key" :value="item.value" type="text" :placeholder="item.placeholder" required></b-form-input>
              </b-form-group>

              <b-form-group
                v-if="item.type === 2"
                :class="item.attrClass"
                :description="item.desc"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3"
                :horizontal="true">
                <b-form-select :id="item.key"
                               :plain="true"
                               :options="item.data"
                               value="null">
                </b-form-select>
              </b-form-group>

              <b-form-group
                v-if="item.type === 3"
                :class="item.attrClass"
                :description="item.desc"
                :label="item.title"
                :label-for="item.key"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group :id="item.key"
                                    :plain="true"
                                    :options="item.data"
                                    checked=""
                                    stacked>
                </b-form-radio-group>
              </b-form-group>

              <b-form-group
                v-if="item.type === 5"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :description="item.desc"
                :label-cols="3"
                :horizontal="true">
                <b-form-input plaintext :id="item.key" :name="item.key" :value="item.value" type="text"></b-form-input>
              </b-form-group>

              <b-form-group
                v-if="item.type === 6"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :description="item.desc"
                :label-cols="3"
                horizontal>
                <b-form-checkbox-group stacked :id="item.key" :name="item.key" :plain="true" :checked="[]">
                  <b-form-checkbox v-for="dataItem in item.data" :value="dataItem.value">{{ dataItem.text }}</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-form-group
                v-if="item.type === 7"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :description="item.desc"
                :label-cols="3"
                :horizontal="true">
                <b-form-input :id="item.key" :name="item.key" :value="item.value" type="password" :placeholder="item.placeholder" required></b-form-input>
              </b-form-group>

              <b-form-group
                v-if="item.type === 8"
                :class="item.attrClass"
                :label="item.title"
                :label-for="item.key"
                :description="item.desc"
                :label-cols="3"
                :horizontal="true">
                <b-form-file :id="item.key" :plain="true"></b-form-file>
              </b-form-group>

            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <div class="alert alert-danger" v-if="list.length < 1">未設定欄位資料</div>
  </div>
</template>

<script>
    export default {
        props: ["txt", "list"],
        methods: {

        }
    }
</script>
