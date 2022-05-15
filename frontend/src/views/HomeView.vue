<template>
    <div class="home grid">
        <event-module
            :itemList="itemList"
            class="grid__item grid__item--events"
        />
        <Try-module :value="value" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import TryModule from "@/components/TryModule.vue";

export default {
    name: "HomeView",
    data: function () {
        return {
            value: "pis",
            itemList: {
                ongoing: [
                    {
                        id: 1,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 1",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: true,
                    },
                    {
                        id: 2,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 1",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: true,
                    },
                    {
                        id: 3,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                    {
                        id: 4,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                    {
                        id: 5,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                ],
                upcoming: [
                    {
                        id: 6,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: true,
                    },
                    {
                        id: 7,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                    {
                        id: 8,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                    {
                        id: 9,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                    },
                ],
            },
        };
    },
    components: { EventModule, TryModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 9;
}
</style>
