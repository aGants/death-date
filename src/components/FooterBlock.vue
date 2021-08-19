<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock'
}
</script>

<style scoped>
  .footer__text {
    width: 295px;
    height: 20px;
    font: 400 7px/9px 'Roboto';
    letter-spacing: 3px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    color: var(--footer-color);
  }
  ::-webkit-scrollbar { 
    width: 0px; 
    background: transparent;
  }
  @media (min-width: 769px) {
    .footer__text {
      width: 400px;
      height: 29px;
      font: 12px/14px 'Roboto';
    }
  }
</style>
