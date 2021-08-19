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

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font: 300 12px/25px 'Roboto', sans-serif;
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

.dialog {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
  padding: 11px;
  border-radius: 5px;
  color: var(--bgcolor);
  background: var(--main-color);
}
.dialog::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 15px solid #fff;
  position: absolute;
  bottom: -14px;
  right: 30px;
}
.dialog__text {
  font-family: "Bad Script";
  line-height: 30px;
  text-align: center;
  color: var(--bgcolor);
}

@media (min-width: 769px) {
  .app {
    font: 300 16px/35px 'Roboto';
  }
  
  .container {
    max-width: 1440px;
  }

  .btext {
    font-size: 25px;
  }
  
  .dialog {
    width: 650px;
    height: 130px;
    padding: 11px 20px;
  }
}

</style>
