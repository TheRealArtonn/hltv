<template>
    <div class="module grid__item--toprankings">
        <h2 class="module__header">TOP RANKINGS</h2>
        <div class="module__body">
            <div class="module__body__rank">
                <div class="places">
                    <div class="team">
                        <div class="rank"><h2>1.</h2></div>
                        <img
                            src="../assets/img/teams/teamsvg/sizzlle-thumbnail.svg"
                            alt="logo"
                        />
                        <div class="teamname">
                            <h3>FaZe</h3>
                            <span>United States</span>
                        </div>
                    </div>

                    <div class="move">
                        <img
                            src="../assets/img/icons/streg.svg"
                            alt="Streg icon"
                        />
                    </div>
                </div>
                <div class="places">
                    <div class="team">
                        <div class="rank"><h2>2.</h2></div>
                        <img
                            src="../assets/img/teams/teamsvg/natus-logo.svg"
                            alt="logo"
                        />
                        <div class="teamname">
                            <h3>Natus Vincere</h3>
                            <span>Ukraine</span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="../assets/img/icons/pilop.svg"
                            alt="Up icon"
                        />
                    </div>
                </div>
                <div class="places">
                    <div class="team">
                        <div class="rank"><h2>3.</h2></div>
                        <img
                            src="../assets/img/teams/teamsvg/cloud-9-emblem.svg"
                            alt="logo"
                        />
                        <div class="teamname">
                            <h3>Cloud 9</h3>
                            <span>United States</span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="../assets/img/icons/pilned.svg"
                            alt="Down icon"
                        />
                    </div>
                </div>
                <div class="places">
                    <div class="team">
                        <div class="rank"><h2>4.</h2></div>
                        <img
                            src="../assets/img/teams/teamsvg/ence.svg"
                            alt="logo"
                        />
                        <div class="teamname">
                            <h3>ENCE</h3>
                            <span>Finland</span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="../assets/img/icons/streg.svg"
                            alt="Streg icon"
                        />
                    </div>
                </div>
                <div class="places">
                    <div class="team">
                        <div class="rank"><h2>5.</h2></div>
                        <img
                            src="../assets/img/teams/teamsvg/heroic-logo.svg"
                            alt="logo"
                        />
                        <div class="teamname">
                            <h3>Heroic</h3>
                            <span>Denmark</span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="../assets/img/icons/pilop.svg"
                            alt="up icon"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="module__footer">see complete rankings</div>
    </div>
</template>

<script>
export default {
    name: "TopRankingsModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss">
.rank {
    margin-right: 50px;
}

.places {
    display: flex;
    justify-content: space-between;
    font: bold;

    padding: 20px;
}
.team {
    display: flex;
    align-items: center;
}
.teamname {
    padding: 4px;
}
.move {
    display: flex;
    align-items: center;
}

.grid__item--toprankings {
    grid-column: 3 / span 1;
    grid-row: 18 / span 20;
}
</style>
