<template>
    <vs-card class="details">
        <vs-col>
            <vs-row>
                <vs-col vs-type="flex">
                    <h1>Variant Name</h1>
                </vs-col>
            </vs-row>
        </vs-col>
        <vs-table class="table" :data="variant.predictions">
            <vs-tr>
                <vs-td>
                    CADDScore
                </vs-td>
                <vs-td>
                    {{variant.CADDScore}}
                </vs-td>
            </vs-tr>
            <vs-tr>
                <vs-td>
                    SIFTPred
                </vs-td>
                <vs-td>
                    {{variant.SIFTPred}}
                </vs-td>
            </vs-tr>
            <vs-tr>
                <vs-td>
                    Population
                </vs-td>
                <vs-td>
                    {{variant.population}}
                </vs-td>
            </vs-tr>
            <vs-tr :key="indextr" v-for="(prediction, indextr) in variant.predictions">
                <vs-td :data="prediction.name">
                    {{ prediction.name }} 
                </vs-td>
                <vs-td :data="prediction.frequency">
                    {{ prediction.frequency }} 
                </vs-td>
            </vs-tr>
            <vs-tr :state="variant.damaging ? 'danger' : 'success'">
                <vs-td>
                    Damaging
                </vs-td>
                <vs-td>
                    {{(variant.damaging ? "Yes" : "No")}}
                </vs-td>
            </vs-tr>
        </vs-table>
    </vs-card>
</template>

<script>
export default {
    data: function () {
        return {
            variant: {
                CADDScore: 0.657,
                SIFTPred: "?",
                population: 102,
                damaging: true,
                predictions: [
                    {
                        name: "TOPMED",
                        frequency: 0.05026
                    },
                    {
                        name: "GnomAD",
                        frequency: 0.0524
                    },
                    {
                        name: "1000G",
                        frequency: 0.032
                    },
                    {
                        name: "TWINSUK",
                        frequency: 0.085
                    }
                ] 
            }
        }
    }

}
</script>

<style scoped>
.details {
    position: absolute;
    top:0;
	bottom: 0;
	left: 0;
	right: 0;
  	
	margin: auto;
    width: 850px;
    height: 500px;
}
</style>