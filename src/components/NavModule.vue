<template>
    <header class="header">
        <div class="header__logo">
            <img
                class="header__logo-img-fluid"
                src="../assets/img/nav-logo.svg"
                alt="hltv logo"
            />
        </div>
        <nav class="header__nav">
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
        <div class="header__searchbar">
            <input
                class="header__searchbar-input"
                type="search"
                placeholder="Search..."
            />
            <button class="header__searchbar-btn">
                <img
                    class="header__searchbar-icon"
                    src="../assets/img/icons/search-icon.svg"
                    alt="searchbar icon"
                />
            </button>
        </div>
        <div class="header__login-btn">Login</div>
        <div class="header__settings">
            <img
                class="header__settings-icon"
                src="../assets/img/icons/profile-settings.svg"
                alt="youoyoyoyo"
            />
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

    .header__logo-img-fluid {
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
            border-right: 2px $element-border-color solid;
            padding: 30px 20px;

            font-size: 1rem;
            text-decoration: none;
            color: $secoundary-font-color;

            &:last-child {
                border-right: none;
            }
        }
    }

    .header__searchbar {
        display: flex;
        justify-content: center;
        align-items: center;

        .header__searchbar-input {
            height: 38px;
            width: 150px;

            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border: 2px $element-border-color solid;

            &::placeholder {
                padding: 10px;
            }
        }

        .header__searchbar-btn {
            height: 38px;
            width: 20px;

            background-color: $element-border-color;
            border: 2px $element-border-color solid;
            border-left: none;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    .header__login-btn {
        margin: 0 20px;

        height: 38px;
        width: 103px;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;

        border: 2px $header-gradient-background-color solid;
        border-radius: 5px;

        font-size: 1rem;
        color: $header-gradient-background-color;
    }

    .header__settings {
        .header__settings-icon {
            width: 34px;
            height: auto;
        }
    }
}
</style>
