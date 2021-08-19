<template>
  <router-view />
</template>

<style>
:root {
  --bgcolor: #202024;
  --main-color: #ffffff;
  --second-color: #F6C866;
  --sub-color: rgba(255, 255, 255, 0.6);
  --footer-color: #9D9D9D;
  --q-text: rgba(255, 255, 255, 1);
  --svg-color: rgba(49, 44, 44, 0.2);
  --error: #EE5353;
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


.color {
  display: block;
  color: var(--second-color)
}

.subtext {
  color: var(--sub-color)
}

.btext {
  font-size: 16px;
}

@media (min-width: 769px) {
  #app {
    font: 300 16px/35px 'Roboto';
  }

  .container {
    max-width: 1440px;
  }

  .btext {
    font-size: 25px;
  }
}

</style>
