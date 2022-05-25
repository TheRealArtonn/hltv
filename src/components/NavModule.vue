<template>
    <header class="header">
        <div class="header__logo">
            <!-- Hvad fuck er image fluid -->
            <img
                class="header__img-fluid"
                src="../assets/img/nav-logo.svg"
                alt=""
            />
        </div>
        <!-- Vi genbruger nav strukturen i footeren, så det ville være smart at gøre den general
         i stedet for "header__nav", så bare "nav" så kan styleing bare copy pastes -->
        <nav class="header__nav">
            <!-- I stedet for anchor ville jeg nok bare kalde det nav__link -->
            <router-link class="header__nav-anchor" to="/">Home</router-link>
            <router-link class="header__nav-anchor" to="/news"
                >News</router-link
            >
            <router-link class="header__nav-anchor" to="/results"
                >Results</router-link
            >
            <router-link class="header__nav-anchor" to="/matches"
                >Matches</router-link
            >
            <router-link class="header__nav-anchor" to="/events"
                >Events</router-link
            >
            <router-link class="header__nav-anchor" to="/stats"
                >Stats</router-link
            >
            <router-link class="header__nav-anchor" to="/galleries">
                Galleries
            </router-link>
            <router-link class="header__nav-anchor" to="/forums"
                >Forums</router-link
            >
            <router-link class="header__nav-anchor" to="/bettings"
                >Bettings</router-link
            >
            <router-link class="header__nav-anchor" to="/live"
                >Live</router-link
            >
            <router-link class="header__nav-anchor" to="/fantasy"
                >Fantasy</router-link
            >
        </nav>
        <div class="searchbar">
            <input type="search" placeholder="Search..." />
        </div>
    </header>
</template>

<script>
export default {
    name: "NavModule",
    props: ["value"],
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    background-color: $element-background-color;
}

.header__img-fluid {
    width: 100%;
    height: auto;
}

.header__logo {
    background: $header-gradient-background-color;
    padding: 28px 17px;
    width: 105px;
    height: 80px;
}

.header__nav {
    // height: 80px;
    .header__nav-anchor {
        // change to 1.6 when root is 10 px instead of 16 in font size

        //Vi bruger kun 1px på borderes, i projektet.
        border-right: 2px $element-border-color solid;

        //Ville bruge flex til at centrere teksen vertikalt
        // display: flex
        // align-items: center
        //meget fint med padding 20px på begge sider.
        padding: 30px 20px;

        font-size: 1rem;
        text-decoration: none;
        color: $secoundary-font-color;

        &:last-child {
            border-right: none;
        }
    }
}
</style>
