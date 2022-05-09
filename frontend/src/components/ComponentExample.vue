<template>
  <div class="votes">
    <div class="votes__icon"></div>
    <div class="likes">{{ item.likes }}</div>
    <div class="votes__icon votes__icon--down">{{ item.dislikes }}</div>
    <div class="dislikes">1</div>
  </div>
</template>

<script>
export default {
  name: "voteModule",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.votes {
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
}
.votes__icon {
  width: 40px;
  height: 40px;
  background-image: url("@/assets/img/icons/vote-hollow.svg");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.5s ease;
}

.votes__icon--down {
  transform: rotate(180deg);
  margin-top: 4px;
}

.votes__icon--active {
  background-image: url("@/assets/img/icons/vote-filled.svg");
}
</style>
