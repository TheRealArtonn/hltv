<template>
    <header class="header">
        <div class="header__logo">
            <!-- Hvad fuck er image fluid -->
            <img
                class="header__logo-img-fluid"
                src="../assets/img/nav-logo.svg"
                alt="hltv logo"
            />
        </div>
        <!-- Vi genbruger nav strukturen i footeren, så det ville være smart at gøre den general
         i stedet for "header__nav", så bare "nav" så kan styleing bare copy pastes -->
        <nav class="header__nav">
            <!-- I stedet for anchor ville jeg nok bare kalde det nav__link for den globale genbrug. Den samme struktur findes jo i footeren -->
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
        <!-- Ser rigtig godt ud, men siden i bruger både en input og en button ville jeg gøre parent til et <form class="header__searchbar"></form> element -->
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

        <!-- Jeg ville nok også lave en parent til alt interactables på højre side af headeren. F.eks <div class="header__interactables">knapper og ikoner..</div> -->
        <!-- Vi skal nok have sat nogle globale genbrugelige knapper, så de ikke blive så specifikke, med mindre de skal se meget specifik ud på et bestemt element. -->
        <div class="header__login-btn" @click="$emit('login', true)">Login</div>

        <!-- Personligt ville jeg gøre ikonet til et css element, som et background image. -->
        <div class="header__settings">
            <router-link to="/settings">
                <img
                    class="header__settings-icon"
                    src="../assets/img/icons/profile-settings.svg"
                    alt="youoyoyoyo"
                />
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "NavModule",
    emits: ["login"],
    props: ["value"],
    data: function () {
        return {};
    },
    methods: {
        Onclicklogin() {
            console.log("hej");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

//mangler nesting
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

            //Borders skal gerne være 1px, så det bliver ensformigt.
            border-right: 2px $element-border-color solid;
            padding: 30px 15px;

            font-size: 1.6rem;
            text-decoration: none;
            color: $primary-font-color;

            &:last-child {
                border-right: none;
            }
        }
    }

    //Pænt sat op
    .header__searchbar {
        display: flex;
        justify-content: center;
        align-items: center;

        .header__searchbar-input {
            height: 38px;
            width: 150px;
            //mellemrum????????? O_O
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
            // !!! O_O
            background-color: $element-border-color;
            border: 2px $element-border-color solid;
            border-left: none;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            cursor: pointer;
        }
    }

    // når vi laver generelle knapper, som også har ikoner ville jeg anbefalde at bruge background-image: url(). Så bliver ikonet mere end del af elementet, og kan kontrollers nemt.
    // Laver man det, som et img tag kan man nemlig højreklikke og tryk gem billede hehe.
    .header__login-btn {
        margin: 0 20px;
        // O
        height: 38px;
        width: 103px;
        // _
        display: flex;
        justify-content: center;
        align-items: center;
        // O
        text-align: center;
        // !!
        border: 2px $header-gradient-background-color solid;
        border-radius: 5px;

        font-size: 1.6rem;
        color: $header-gradient-background-color;
        cursor: pointer;

        &:hover {
            background-color: $header-gradient-background-color;
            color: $secondary-font-color;
        }
    }

    .header__settings {
        .header__settings-icon {
            width: 34px;
            height: auto;
            cursor: pointer;
        }
    }
}
</style>
