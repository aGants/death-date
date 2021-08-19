<template>
  <router-link 
    class="button"
    tag="button" 
    :to="link"
  >
    <slot></slot>
  </router-link>
</template>

<script>

export default {
  name: 'ButtonLink',
  props: {
    link: String
  }
}
</script>

<style>
  .button {
    position: relative;
    display: block;
    width: 180px;
    padding: 11px 0;
    margin-bottom: 20px;
    background: linear-gradient(to right,#F6C866, #FEAD35);
    border: none;
    border-radius: 50px;
    font: 300 14px 'Roboto', sans-serif;
    color: var(--main-color);
    overflow: hidden;
    cursor: pointer;
    transition: .7s ease-out;
    text-decoration: none;
  }

  .button:hover {
    box-shadow: 0 2px 15px 0 #FEAD35;
  }

  .button:active, .button:focus {
    box-shadow: 0 2px 30px 0 #FEAD35;
  }

  .button:before{
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

  @media (min-width: 769px) {
    .button {
      width: 310px;
      padding: 23px 0;
      margin-bottom: 34px;
      font: 300 20px 'Roboto', sans-serif;
  }
  }
</style>