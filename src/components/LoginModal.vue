<template>
    <div
        class="modal-container"
        v-show="modal"
        @click.self="$emit('closedLogin', false)"
    >
        <div class="modal">
            <div class="modal__logo">
                <img src="../assets/img/hltv-logo-text.svg" alt="Hltv logo" />
            </div>
            <form action="" class="modal__form">
                <input
                    type="username"
                    class="form__input"
                    placeholder="Username"
                />
                <input
                    type="password"
                    class="form__input"
                    placeholder="Password"
                />
                <button class="form__button">Login</button>
                <div class="modal__check">
                    <div class="check__wrapper">
                        <input type="checkbox" class="modal__checkbox" />
                        <label class="checkbox__label">Remember me</label>
                    </div>
                    <a class="modal__forgot-pw" href="#">Forgot password?</a>
                </div>
                <hr />
                <router-link
                    to="/Signup"
                    class="form__signup"
                    @click="$emit('closedLogin', false)"
                >
                    Sign up
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginModal",
    emits: ["closedLogin"],
    props: ["modal"],
    data: function () {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_input.scss";
.modal-container {
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background: #000000dd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
}
.modal {
    padding: 15px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    .modal__logo {
        padding: 15px;
    }
    .modal__form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .modal__check {
            display: flex;
            // flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .check__wrapper {
                align-items: center;

                .checkbox__label {
                    padding: 5px;
                    font-size: $unfocused-font-size;
                    color: $primary-font-color;
                }
            }

            .modal__forgot-pw {
                text-decoration: none;
                color: $primary-font-color;
                font-size: $unfocused-font-size;
            }
        }
    }
}

.form__button {
    background: $main-color;
    padding: 15px;
    border-radius: 5px;
    color: #ffffff;
    border: 0;
    transition: 0.2s;
    font-size: $btn-font-size;

    &:hover {
        background: $blue-hover-color;
    }
}

.form__signup {
    border: 2px solid $main-color;
    padding: 15px;
    border-radius: 5px;
    color: $main-color;
    transition: 0.2s;
    list-style: none;
    text-decoration: none;
    text-align: center;
    font-size: $btn-font-size;

    &:hover {
        background: $main-color;
        color: #ffffff;
    }
}

hr {
    background: black;
}
</style>
