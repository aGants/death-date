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
  
}

.color {
  color: var(--second-color)
}

.subtext {
  color: var(--sub-color)
}


</style>
