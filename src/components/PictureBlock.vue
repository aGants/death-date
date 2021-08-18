<template>
  <section class="picture">
    <div class="container">
      <p class="picture__text btext">
        Многие не верят предсказаниям и мы решили доказать каждому, 
        <span class="color">
          что прогноз может изменить жизнь любого человека!
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PictureBlock'
}
</script>

<style scoped>
  .container{
    margin-bottom: 53px;
    background: linear-gradient(to right, rgba(32, 32, 36, 0.8), rgba(32, 32, 36, 0.8)),
      url('../assets/bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .picture__text {
    width: 219px;
    height: 149px;
    padding: 102px 0 80px;
    font-weight: 400;
  }
  @media (min-width: 769px) {
    .container {
      box-sizing: border-box;
      height: 600px;
      background-image: linear-gradient(to right, rgba(32, 32, 36, 0.8), rgba(32, 32, 36, 0.8)),
        url('../assets/bbg.jpg');
      margin-bottom: 133px;
    }
    .picture__text {
      width: 380px;
      height: 260px;
      padding: 240px 0 180px;
  }
  }
</style>