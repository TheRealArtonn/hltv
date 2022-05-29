<template>
    <footer class="footer">
        <section class="footer__primary">
            <nav class="footer__nav">
                <router-link class="footer__nav-link" to="/">Jobs</router-link>
                <router-link class="footer__nav-link" to="/contact"
                    >Contact</router-link
                >
                <router-link class="footer__nav-link" to="/terms"
                    >Terms</router-link
                >
                <router-link class="footer__nav-link" to="/privacy"
                    >Privacy Policy</router-link
                >
                <router-link class="footer__nav-link" to="/cookies"
                    >Cookie publicy</router-link
                >
                <router-link class="footer__nav-link" to="/disclosures"
                    >Disclosures</router-link
                >
                <router-link class="footer__nav-link" to="/rss"
                    >RSS</router-link
                >
                <router-link class="footer__nav-link" to="/majors"
                    >PGL Major</router-link
                >
                <section class="footer__some">
                    <div
                        class="footer__some-links footer__some-links--fb"
                    ></div>

                    <div
                        class="footer__some-links footer__some-links--twitch"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--yt"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--twitter"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--vk"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--ig"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--tiktok"
                    ></div>
                    <div
                        class="footer__some-links footer__some-links--copyright"
                    >
                        &#169; HLTV.org
                    </div>
                </section>
            </nav>
        </section>
        <section class="footer__secondary">
            <p class="footer__txt">18+ Bet Reponsibly</p>
            <p class="footer__txt"><b>Be</b>Gamble <b>Aware</b>.org</p>
        </section>
    </footer>
</template>

<script>
export default {
    name: "FooterModule",
    props: ["value"],
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.footer {
    background-color: $element-background-color;
    width: 100%;
    height: 202px;
    margin: 0px 80px;

    .footer__primary {
        border-bottom: 1px $element-border-color solid;
        .footer__nav {
            height: 80px;
            width: 1400px;
            display: flex;
            font-size: 1.6rem;

            align-items: center;
            justify-content: flex-start;

            margin: auto;
            background-color: $element-background-color;
            .footer__nav-link {
                text-decoration: none;
                color: $primary-font-color;
                border-right: 1px $element-border-color solid;
                padding: 20px;

                &:first-child {
                    border-left: 1px $element-border-color solid;
                }

                &:hover {
                    background-color: $list-select-bg;
                    border-top: 1px solid $list-select-border;
                    border-bottom: 1px solid $list-select-border;
                }
            }
        }

        .footer__some {
            display: flex;
            justify-content: flex-end;
            width: 100%;

            .footer__some-links {
                width: 50px;
                height: auto;

                &:hover {
                    transform: scale(1.2);
                }
                // Klart oplagt at gøre brug a mixins her, da koden bliver gentaget flere gange, med minimal ændring
                &--fb {
                    height: 35px;
                    background-image: url(../assets/img/icons/facebook.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--twitch {
                    height: 35px;
                    background-image: url(../assets/img/icons/twitch.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--yt {
                    height: 35px;
                    background-image: url(../assets/img/icons/youtube.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--twitter {
                    height: 35px;
                    background-image: url(../assets/img/icons/twitter.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--vk {
                    height: 35px;
                    background-image: url(../assets/img/icons/vk.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--ig {
                    height: 35px;
                    background-image: url(../assets/img/icons/instagram.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--tiktok {
                    height: 35px;
                    background-image: url(../assets/img/icons/tiktok.svg);
                    // background-size: 20px;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                }
                &--copyright {
                    display: flex;
                    width: 20%;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
            }
        }
    }

    .footer__secondary {
        padding: 50px 0 0 0;
        font-size: 1.6rem;

        display: flex;
        width: 1400px;

        align-items: center;
        justify-content: flex-start;

        margin: auto;
        background-color: $element-background-color;

        .footer__txt {
            padding-right: 20px;
        }
    }
}
</style>
