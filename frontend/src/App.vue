<template>
    <div class="wrapper">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/news">News</router-link>
            <router-link to="/matches">Matches</router-link>
            <router-link to="/results">Results</router-link>
            <router-link to="/events">Events</router-link>
            <router-link to="/stats">Stats</router-link>
            <router-link to="/galleries">Galleries</router-link>
            <router-link to="/forums">Forums</router-link>
            <router-link to="/bettings">Bettings</router-link>
            <router-link to="/live">Live</router-link>
            <router-link to="/fantasy">Fantasy</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
