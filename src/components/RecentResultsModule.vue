<template>
    <div class="module">
        <h2 class="module__header">Recent Results</h2>
        <div class="module__body">
            <div class="body__unfocused-title body__border-above">
                Relevant to you
            </div>
            <div class="team-list">
                <h3 class="body__title">
                    PGL Major Antwerp 2022 challengers stage
                </h3>
                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/denmark.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">Astralis</h3>
                    </div>
                    <div class="score"><h2>8</h2></div>
                </div>
                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/poland.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">Skade</h3>
                    </div>
                    <div class="score"><h2>16</h2></div>
                </div>
                <div class="body__unfocused-title body__border-above">
                    Other
                </div>
                <h3 class="body__title">
                    PGL Major Antwerp 2022 challengers stage
                </h3>

                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/denmark.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">Estatic</h3>
                    </div>
                    <div class="score"><h2>8</h2></div>
                </div>
                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/france.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">Vitality</h3>
                    </div>
                    <div class="score"><h2>16</h2></div>
                </div>

                <h3 class="body__title">
                    PGL Major Antwerp 2022 challengers stage
                </h3>

                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/brazil.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">B4</h3>
                    </div>
                    <div class="score"><h2>8</h2></div>
                </div>
                <div class="list-item">
                    <div class="item_team">
                        <img
                            src="../assets/img/flags/sweden.svg"
                            alt="Danish Flag"
                        />
                        <h3 class="body__title">Finest</h3>
                    </div>
                    <div class="score"><h2>16</h2></div>
                </div>
            </div>
        </div>
        <div class="module__footer">SEE ALL RECENT RESULTS</div>
    </div>
</template>

<script>
export default {
    props: [],
    data: function () {
        return {
            moduleName: "RecentMatches",
        };
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.team-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    .item_team {
        display: flex;
        flex-direction: row;
    }
}

.list-item {
    padding: 0 $general-padding;
}
.score {
    margin-left: auto;
    padding-right: 5px;
}
</style>
