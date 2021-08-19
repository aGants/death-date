<template>
  <div class="record">
    <div class="container">
      <div class="record-img">
        <img src="@/assets/micro.png" alt="Микрофон" />
      </div>
      <div class="record-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="record__percent">{{ percent }}%</div>
      <div class="record__text">Запись сообщения</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const progress = ref(0);
    let interval = setInterval(() => {
      (progress.value < 100) ? (progress.value += 0.10) :
       clearInterval(interval);
    }, 8);
    const percent = computed(() => {
      return progress.value.toFixed();
    });
    return { progress, percent };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.record-bar {
  position: relative;
  width: 260px;
  height: 4px;
  border-radius: 5px;
  overflow: hidden;
  background: var(--main-color);
  margin-bottom: 24px;
}
.progress {
  height: 100%;
  border-radius: 15px;
  background: var(--second-color);
}
.record__percent {
  font-size: 20px;
  letter-spacing: 0.1em;
  color: var(--sub-color);
  margin-bottom: 15px;
}
.record__text {
  font-weight: 300;
  font-size: 18px;
  color: var(--sub-color);
}
.record-img {
  margin-bottom: 40px;
  width: 180px;
  height: 100px;
}
.record-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 769px) {
  .record-bar {
    width: 600px;
    height: 10px;
  }
  .record__percent {
    font-size: 40px;
    letter-spacing: 0.1em;
    color: var(--sub-color);
    margin-bottom: 15px;
}
}
</style>