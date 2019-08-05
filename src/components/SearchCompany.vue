<template>
  <div class="md-layout md-alignment-top-center">
    <h1 class="md-layout-item md-large-size-80 md-xlarge-size-80 md-medium-size-85 md-small-size-90 md-xsmall-size-95">
      {{ msg }}</h1>
    <div
      class="md-layout md-layout-item md-large-size-80 md-xlarge-size-80 md-medium-size-85 md-small-size-90 md-xsmall-size-95 md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-75">
        <md-field>
          <label>搜尋商家</label>
          <md-input v-model="searchValue" placeholder="搜尋現有商家以作更改" v-on:keyup.enter="doSearch($event)"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-5 hd-center-text">
        或
      </div>
      <div class="md-layout-item md-size-20 hd-left-text">
        <md-button class="md-primary md-dense md-raised">新增商家</md-button>
      </div>
    </div>
    <div
      class="md-layout-item md-alignment-top-left md-large-size-80 md-xlarge-size-80 md-medium-size-85 md-small-size-90 md-xsmall-size-95 md-layout md-gutter">
      <CompanyPreview class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                      v-for="(companyPreview,index) in companyPreviews" v-bind:preview="companyPreview"
                      v-bind:key="index"/>
    </div>
  </div>
</template>

<script>
    import CompanyPreview from './CompanyPreview.vue'

    export default {
        name: 'SearchCompany',
        props: {
            msg: {
                type: String,
                default: "更新香港指南文件"
            }
        },
        data: () => ({
            searchValue: null,
            companyPreviews: []
        }),
        methods: {
            doSearch: function (event) {
                if (event) event.preventDefault();
                this.companyPreviews = this.$compDb.find(this.searchValue)
            }
        },
        components: {
            CompanyPreview
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .md-layout-item {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .hd-left-text {
    text-align:left
  }
</style>
