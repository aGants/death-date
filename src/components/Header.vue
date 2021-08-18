<template>
  <header class="header">
    <div class="container">
      <p class="header__subtitle subtext">Лучшие астрологи и экстрасенсы Румынии</p>
      <span class="header__title subtext">Точность прогноза: 97%</span>

      <div class="header-img">
        <img src="@/assets/woman.png" class="header-img__up">
        <img src="@/assets/vector.svg">
      </div>
      
      <p class="header-text color">Вас беспокоит вопрос о том, 
        <span class="header-text__up">
          когда Вы покинете этот Мир и при каких обстоятельствах?
        </span>
      </p>
      <button class="btn">Да</button>
      <button class="btn">Нет</button>
      <span class="header__downtext subtext">Онлайн предсказание</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 21px 0 40px;
}

.header__subtitle {
  display: block;
  width: 100vw;
  border-bottom: 1px solid var(--svg-color);
  padding-bottom: 11px;
}

.header__title {
  font-size: 20px;
  margin: 7px 0 24px;
}

.header-img {
  position: relative;
  width: 205px;
}

.header-img__up {
  position: absolute;
  width: 137px;
  top: 0; 
  right: 0;
  bottom: 0; 
  left: 0; 
  margin: auto;
  color: red;
}

.header-text {
  width: 270px;
  margin-bottom: 23px;
  font-size: 16px;
  font-weight: 400;
}

.header-text__up {
  text-transform: uppercase;
}

@media (min-width: 769px) {
  .header {
    padding: 36px 0 70px;
  }
  .header__subtitle {
    width: 100%;
    padding-bottom: 19px;
  }
  .header__title {
    font-size: 25px;
    margin: 12px 0 42px;
  }
  .header-img {
    width: 360px;
  }
  .header-img__up {
    width: 238px;
  }
  .header-text {
    width: 500px;
    margin-bottom: 60px;
    font-size: 25px;
  }
}

</style>