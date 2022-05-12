<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
