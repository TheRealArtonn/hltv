<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body module__body--no-more">
            <div class="signup__information">
                <p class="signup-process__text">
                    Thank you for signing to HLTV.org
                </p>
                <p class="signup-process__text">
                    We only need you to fill in some information before your
                    account is ready.
                </p>
            </div>

            <h3 class="body__title">Personal information</h3>
            <div class="signup">
                <form action="" class="signup__information">
                    <div class="input__username">
                        <input
                            type="text"
                            placeholder="Username"
                            class="form__input"
                        />
                    </div>
                    <div class="input__field">
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Email"
                        />

                        <input
                            class="form__input"
                            type="text"
                            placeholder="Confirm email"
                        />
                    </div>
                    <div class="input__field">
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Password"
                        />
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Confirm"
                        />
                    </div>
                </form>
            </div>

            <div class="signup--process">
                <h3 class="body__title">Flag and times</h3>
                <div class="signup__information">
                    <p class="signup-process">
                        Thank you for signing to HLTV.org
                    </p>
                    <select class="form__input">
                        <option value="Albania">Albania</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Poland">Poland</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Vietnam">Vietnam</option>
                    </select>
                </div>
            </div>
            <div class="signup--process">
                <h3 class="body__title">Privacy and data</h3>
                <div class="signup__information">
                    <p class="signup-process">
                        By creating an account on HLTV.org we will store and
                        process data of and about you. <br />
                        You can at all times read the full and latest terms here
                        and privacy policy here.
                    </p>
                    <router-link to="/preference" class="form__button">
                        Sign up
                    </router-link>
                </div>
            </div>
        </div>
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

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_input.scss";

.signup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.form__input {
    width: 415px;
}
.form__button {
    background: $main-color;
    padding: 15px;
    border-radius: 5px;
    color: #ffffff;
    font-size: $btn-font-size;
    text-decoration: none;
    border: 0;
    transition: 0.2s;
    text-align: center;
    width: 165px;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background: $blue-hover-color;
    }
}

.signup-process {
    margin-bottom: 10px;
    font-size: $primary-font-size;
}
.input__field {
    display: flex;
    gap: 25px;
    margin-top: 10px;
}

.body__title {
    border-top: 1px solid;
    margin-top: 15px;
}

.signup__information {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 15px;

    .signup-process__text {
        padding: 5px;
        font-size: $primary-font-size;
    }
}
</style>
