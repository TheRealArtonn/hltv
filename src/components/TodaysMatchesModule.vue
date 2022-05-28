<template>
    <div class="module">
        <h2 class="module__header">Todays matches</h2>
        <div class="module__body">
            <h3 class="body__title">Relevant to you</h3>
            <div class="matches">
                <div class="matches__teams">
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/denmark.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Astralis</h3>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/poland.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Skade</h3>
                        </div>
                    </div>
                </div>
                <div class="matches__time">
                    <div class="time"><h2>12.10</h2></div>
                </div>
            </div>
            <div class="body__unfocused-title body__border-above">Other</div>
            <h3 class="body__title">PGL</h3>
            <div class="matches">
                <div class="matches__teams">
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/denmark.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Estatic</h3>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/france.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Vitality</h3>
                        </div>
                    </div>
                </div>
                <div class="matches__time">
                    <div class="time"><h2>12.10</h2></div>
                </div>
            </div>
            <h3 class="body__title">PGL</h3>
            <div class="matches">
                <div class="matches__teams">
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/brazil.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Astralis</h3>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/sweden.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Skade</h3>
                        </div>
                    </div>
                </div>
                <div class="matches__time">
                    <div class="time"><h2>12.10</h2></div>
                </div>
            </div>
        </div>
        <div class="module__footer">see all recent results</div>
    </div>
</template>
<script>
export default {
    props: [],
    data: function () {
        return {
            moduleName: "Sign up",
        };
    },
};
</script>

<style lang="scss">
.grid__item--todaymatch {
    grid-column: 3 / span 1;
    grid-row: 8 / span 9;
}

.matches {
    display: flex;
    flex-direction: row;
    align-items: center;

    .matches__teams {
        display: flex;
        flex-direction: column;
        .item_team {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
}

.matches__time {
    display: flex;
    align-items: center;

    margin-left: auto;
    padding-right: 15px;
}
</style>
