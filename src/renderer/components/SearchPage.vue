<template>
  <div class="search">
    <vs-card actionable>
        <vs-input size="large" label-placeholder="Genome Name" v-model="searchValue"/>
        <vs-button color="danger" class="search-button" type="border" >Search Genome</vs-button>
    </vs-card>
  </div>
</template>

<script>
export default {
    name: 'search-page',
    data () {
        return {
            searchValue: ''
        }
    },
    methods: {
        logger: function () {
            console.log(this.searchValue)
        }
    }
}
</script>

<style scoped>
.search {
    position: absolute;
    top:0;
	bottom: 0;
	left: 0;
	right: 0;
  	
	margin: auto;
    width: 220px;
    height: 150px;
}

.search-button {
    margin-top: 20px;
    width: 100%;
}


</style>