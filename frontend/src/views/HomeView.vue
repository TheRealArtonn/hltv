<template>
    <div class="home grid">
        <event-module
            :itemList="itemList"
            class="grid__item grid__item--events"
        />
        <ongoing-event-module class="grid__item grid__item--ongoingevent" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import OngoingEventModule from "@/components/OngoingEventModule.vue";

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
                        teams: [
                            {
                                id: 1,
                                name: "Astrali",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 2,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 1",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: true,
                        teams: [
                            {
                                id: 4,
                                name: "G2",
                            },
                            {
                                id: 1,
                                name: "Astrali",
                            },
                            {
                                id: 5,
                                name: "CatEvil",
                            },
                        ],
                    },
                    {
                        id: 3,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 4,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 5,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
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
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 7,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 8,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                    {
                        id: 9,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: [
                            {
                                id: 6,
                                name: "NKT",
                            },
                            {
                                id: 2,
                                name: "ENCE",
                            },
                            {
                                id: 3,
                                name: "Cloud9",
                            },
                        ],
                    },
                ],
            },
        };
    },
    components: { EventModule, OngoingEventModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 14;
}

.grid__item--ongoingevent {
    grid-column: 2 / span 2;
    grid-row: 1 / span 4;
}
</style>
