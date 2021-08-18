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
  --svg-color: rgba(255, 255, 255, 0,2);
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
  font: 16px 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 21px 29px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

@media (min-width: 769px) {
  #app {
    padding: 30px 0;
  }

  .container {
    width: 100%;
  }
}

.btn {
  position: relative;
  width: 310px;
  padding: 23px 0;
  color: var(--main-color);
  background: linear-gradient(to right,#F6C866, #FEAD35);
  border: none;
  border-radius: 50px;
  font-size: 20px;
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


</style>
