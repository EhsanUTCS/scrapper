<template>
    <vs-col>
        <vs-row vs-justify="center">
            <vs-col class="title" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <h1> *Variations* </h1>
            </vs-col>
        </vs-row>
        <vs-row vs-justify="center">
            <vs-col vs-w="10">
                <vs-card>
                    <vs-table striped :data="users">
                        <vs-th>
                            Variant
                        </vs-th>
                        <vs-th>
                            Allele Count
                        </vs-th>
                        <vs-th>
                            Allele Frequency
                        </vs-th>
                        <vs-tr :key="indextr" v-for="(tr, indextr) in users">
                            <vs-td :data="users[indextr].email">
                                <router-link to="/">{{users[indextr].name}}</router-link>
                            </vs-td>

                            <vs-td :data="users[indextr].email">
                                <router-link to="/">{{users[indextr].email}}</router-link>
                            </vs-td>

                            <vs-td :data="users[indextr].website">
                                <router-link to="/">{{users[indextr].website}}</router-link>
                            </vs-td>
                        </vs-tr>
                    </vs-table>
                </vs-card>
            </vs-col>
        </vs-row>
    </vs-col>
</template>

<script>
export default {
    props: ['title'],
    data: function() {
        return {
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
            ]
        }
    }

}
</script>

<style scoped>
.title {
    margin: 30px 0;
}
</style>