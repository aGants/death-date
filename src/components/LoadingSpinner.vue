<template>
  <div class="container">
    <div class="loading">
      <div class="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="loading__text">Loading</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
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
.loading__text {
  margin-top: 27px;
  color: var(--sub-color);
  letter-spacing: 0.1em;
  text-align: center;
}
.loading-spinner {
  position: relative;
  display: inline-block;
  width: 73px;
  height: 73px;
}
.loading-spinner div {
  transform-origin: 40px 40px;
  animation: loading-spinner 1.2s linear infinite;
}
.loading-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  left: 35px;
  width: 7px;
  height: 13px;
  border-radius: 40px;
  background: var(--second-color);
}
.loading-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.loading-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.loading-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.loading-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.loading-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.loading-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.loading-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.loading-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.loading-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.loading-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.loading-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.loading-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes loading-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (min-width: 769px) {
  .loading-spinner {
    width: 280px;
    height: 280px;
}
  .loading-spinner div {
    transform-origin: 140px 140px;
  }
  .loading-spinner div:after {
    top: 10px;
    left: 120px;
    width: 20px;
    height: 50px;
    border-radius: 40px;
    background: var(--second-color);
  }
}
</style>