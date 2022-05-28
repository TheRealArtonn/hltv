<template>
    <div class="module">
        <div class="module__body">
            <h2 class="module__header">News</h2>
            <div class="body__unfocused-title">Relevant to you</div>
            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/poland-3.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">Ptak joins TEAM 3</h3>
                        <div class="news__comments">
                            999 comments - 6. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">
                    Keywords: Denmark, Astralis, PGL Majors Antwerpen
                </div>
            </div>

            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/vietnam.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">
                            ASIANBOI123 is dominating in ASIA CUP 2022
                        </h3>
                        <div class="news__comments">
                            250 comments - 6. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">
                    Keywords: Denmark, Astralis, PGL Majors Antwerpen
                </div>
            </div>
            <!-- Other news -->
            <div class="body__unfocused-title">Other news</div>

            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/albania.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">
                            AGRONI back in action on day 2 of HW
                        </h3>
                        <div class="news__comments">
                            420 comments - 5. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">Keywords: Albania, Blink, Vue Finals</div>
            </div>

            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/denmark.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">TEAM 3 wins UCL cs cup</h3>
                        <div class="news__comments">
                            69 comments - 4. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">Keywords: Denmark, Astralis, UCL Cup</div>
            </div>

            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/denmark.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">
                            PHONYCUBE DESTROYS ASIANBOI123 in 1v1
                        </h3>
                        <div class="news__comments">
                            450 comments - 4. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">
                    Keywords: Denmark, Vietnam, Heroic, PGL Majors Antwerpen
                </div>
            </div>

            <div class="news">
                <div class="news__item">
                    <img
                        class="news__img"
                        src="@/assets/img/flags/thailand.svg"
                        alt=""
                    />
                    <div class="news__info">
                        <h3 class="news__heading">
                            What has YAIs role been in Panang finals?
                        </h3>
                        <div class="news__comments">
                            13 comments - 3. May 2022
                        </div>
                    </div>
                </div>
                <div class="keywords">Keywords: Thailand, Natus Vincere</div>
            </div>

            <div class="module__footer">Show more</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/app.scss";

.news {
    width: 100%;
    // height: auto;
    padding: $general-padding;
    border-bottom: 1px solid $element-border-color;
    border-top: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: $list-select-bg;
        border-top: 1px solid $list-select-border;
        border-bottom: 1px solid $list-select-border;
    }

    .news__item {
        display: flex;
        padding-left: 10px;

        .news__img {
            height: 50px;
            width: 66px;
        }

        .news__info {
            padding-left: 25px;

            .news__heading {
                font-size: 2rem;
            }

            .news__comments {
                font-size: $secondary-font-size;
                font-style: italic;

                padding-top: 3px;
            }
        }
    }
    .keywords {
        padding: 10px 0 0 10px;
        font-size: $unfocused-font-size;
    }
}
</style>
