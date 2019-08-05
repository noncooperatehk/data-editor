<template>
    <div>
        <md-card>
            <md-card-media>
                <img v-bind:src="preview.imageUrl" crossorigin="">
            </md-card-media>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{preview.title}}</div>
                    <div class="md-subhead">{{preview.shortSummary}}</div>
                    <div class="md-subhead">{{preview.address}}</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-actions>
                <md-button>詳情</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
export default {
  name: 'CompanyPreview',
  props: {
    preview: Object
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
