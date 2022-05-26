<template>
    <div class="modal">
        <div class="modal__logo">
            <img src="../assets/img/hltv-logo-text.svg" alt="Hltv logo" />
        </div>
        <form action="" class="modal__form">
            <input type="username" class="form__input" placeholder="Username" />
            <input type="password" class="form__input" placeholder="Password" />
            <button class="form__button">Login</button>
            <div class="modal__check">
                <div class="check__wrapper">
                    <input type="checkbox" class="modal__checkbox" />
                    <label class="checkbox__label">Remember me</label>
                </div>
                <p><a href="#">Forgot password?</a></p>
            </div>
            <hr />
            <button class="form__signup">signup</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.modal {
    padding: 15px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;

    .modal__logo {
        padding: 15px;
    }
    .modal__form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .form__input {
            border: 2px solid $main-color;
            border-radius: 5px;
            padding: 15px;
            height: 50px;
            width: 400px;
        }

        .modal__check {
            display: flex;
            // flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .check__wrapper {
                align-items: center;
            }
        }
    }
}

.form__button {
    background: $main-color;
    padding: 15px;
    border-radius: 5px;
    color: $primary-font-color;
    border: 0;
    transition: 0.2s;

    &:hover {
        background: hotpink;
    }
}

.form__signup {
    border: 2px solid $header-gradient-background-color;
    padding: 15px;
    border-radius: 5px;
    color: $main-color;
    transition: 0.2s;

    &:hover {
        background: $header-gradient-background-color;
        color: #ffffff;
    }
}

.checkbox__label {
    padding: 5px;
}
hr {
    background: black;
}
</style>
