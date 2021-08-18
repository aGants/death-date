<template>
  <router-view />
</template>

<style>

:root {
  --bgcolor: #262628;
  --main-color: #ffffff;
  --second-color: #F6C866;
  --sub-color: rgba(255, 255, 255, 0.6);
  --footer-color: #9D9D9D;
  --q-text: rgba(255, 255, 255, 1);
  --svg-color: rgba(255, 255, 255, 0.2);
}

* {
  margin: 0;
  padding: 0;
}

body {
  background: var(--bgcolor);
  color: var(--main-color)
}

#app {
  font: 300 12px/25px 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.btn {
  position: relative;
  width: 180px;
  padding: 11px 0;
  margin-bottom: 20px;
  background: linear-gradient(to right,#F6C866, #FEAD35);
  border: none;
  border-radius: 50px;
  font: 300 14px 'Roboto', sans-serif;
  color: var(--main-color);
  overflow: hidden;
}

.btn:before{
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 100%;
  content: '';
  background: rgba(255, 255, 255, 0.2);
  filter: blur(13px);
  animation: shine 1.5s infinite;
}

@keyframes shine {
 from { transform: translate(0px)skewX(45deg); }
 to { transform: translate(300px)skewX(45deg); }
}

.color {
  color: var(--second-color)
}

.subtext {
  color: var(--sub-color)
}

@media (min-width: 769px) {
  #app {
    font: 300 16px 'Roboto';
  }

  .container {
    max-width: 1440px;
  }

  .btn {
    width: 310px;
    padding: 23px 0;
    margin-bottom: 34px;
    font: 300 20px 'Roboto', sans-serif;
  }
}

</style>
