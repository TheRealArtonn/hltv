<template>
    <div class="module">
        <h2 class="module__header">Choose your personal preferences</h2>
        <div class="module__body module__body--no-more">
            <div class="signup__information">
                <p class="signup-process__text">
                    Thank you for signing to HLTV.org!
                </p>
                <p class="signup-process__text">
                    While you're here... What about choosing som personal
                    preferences for HLTV.org?
                </p>
                <h4 class="small-header">
                    You can always do this at a later time
                </h4>
                <router-link to="/" class="form__skipbutton">
                    Skip this part
                </router-link>
            </div>
            <div class="options">
                <h4 class="secondary">Choose your theme for HLTV.org</h4>
                <div class="options__theme">
                    <div class="list-item">
                        <img
                            class="mode"
                            src="../assets/img/light_dark/lightmode.svg"
                            alt=""
                        />
                    </div>
                    <div class="list-item">
                        <img
                            class="mode"
                            src="../assets/img/light_dark/darkmode.svg"
                            alt=""
                        />
                    </div>
                </div>
                <h4 class="secondary">Choose your layout for HLTV.org</h4>
                <div class="options__theme">
                    <div class="list-item">
                        <img
                            class="mode"
                            src="../assets/img/layout/event-layout.svg"
                            alt="event layout"
                        />
                    </div>
                    <div class="list-item">
                        <img
                            class="mode"
                            src="../assets/img/layout/news-layout.svg"
                            alt="news layout"
                        />
                    </div>
                </div>
                <div class="options__recommendation-text">
                    <h4 class="secondary">Become fan of teams and players</h4>
                    <p class="signup-process__text">
                        Choose between these recommendations
                    </p>
                </div>
                <div class="recommend-wrapper">
                    <div class="recommended_team">
                        <h4 class="small-header">Recommended teams</h4>
                        <div class="team__teams">
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-1.jpg"
                                    alt=""
                                />

                                <p signup-process__text>Faze</p>
                            </div>
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-3.jpg"
                                    alt=""
                                />
                                <p>ENCE</p>
                            </div>
                        </div>
                        <div class="team__teams">
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-2.jpg"
                                    alt=""
                                />

                                <p signup-process__text>Natus</p>
                            </div>
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-4.jpg"
                                    alt=""
                                />
                                <p>G2</p>
                            </div>
                        </div>
                    </div>
                    <div class="recommended_team">
                        <h4 class="small-header">Recommended players</h4>
                        <div class="team__teams">
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-1.jpg"
                                    alt=""
                                />

                                <p signup-process__text>Twistzz</p>
                            </div>
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-2.jpg"
                                    alt=""
                                />
                                <p>s1mple</p>
                            </div>
                        </div>

                        <div class="team__teams">
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-1.jpg"
                                    alt=""
                                />

                                <p signup-process__text>Faze</p>
                            </div>
                            <div class="teams_name">
                                <img
                                    class="team_img"
                                    src="../assets/img/teams/team-3.jpg"
                                    alt=""
                                />
                                <p>Spinx</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="signup-process__text margin">
                    You can change and add your favorite teams and players
                    anytime you want!
                </p>
                <router-link to="/" class="form__button signup-process__text">
                    Set up
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.signup__information {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
}
.small-header {
    font-size: $primary-font-size;
}
.secondary {
    font-size: $secondary-font-size;
}
.signup-process__text {
    font-size: $secondary-font-size;
}

.form__skipbutton {
    padding: 10px;
    border-radius: 5px;
    color: $main-color;
    border: 2px solid $main-color;
    transition: 0.2s;
    text-align: center;
    width: 165px;
    margin-top: 20px;
    display: block;
    text-decoration: none;
    font-size: $secondary-font-size;
    font-weight: bold;

    &:hover {
        background: $main-color;
        color: white;
    }
}
.form__button {
    background: $main-color;
    padding: 15px;
    border-radius: 5px;
    color: #ffffff;
    border: 0;
    transition: 0.2s;
    text-align: center;
    text-decoration: none;
    width: 165px;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background: $blue-hover-color;
    }
}
.options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;

    .options__theme {
        display: flex;

        flex-direction: row;
        justify-content: center;

        .list-item {
            display: flex;
            justify-content: center;
            padding: 15px 0;
            .mode {
                width: 80%;
            }
        }
    }
    .options__recommendation-text {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
.recommend-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.team__teams {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    .teams_name {
        display: flex;
        flex-direction: row;
        border: 1px solid $main-color;
        border-radius: 5px;
        padding: 10px 15px;
        width: 195px;
        align-items: center;
        gap: 5px;
        transition: 0.2s;
        &:hover {
            background: $main-color;
            color: white;
        }
    }
    .team_img {
        width: 19px;
        border-radius: 5px;
    }
}
.margin {
    margin-top: 20px;
}
</style>
