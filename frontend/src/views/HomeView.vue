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
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 2,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 1",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: true,
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 3,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 4,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 5,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier 2",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
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
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 7,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 8,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
                    },
                    {
                        id: 9,
                        img: "republic-league-small.jpg",
                        title: "Republeague Season 3 Closed Qualifier",
                        text: "Europe (Online) | May 23rd - Jun 25th",
                        flag: "",
                        relevant: false,
                        teams: ["Astrali", "Bøvse"],
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
