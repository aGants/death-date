<template>
  <main class="main">
    <div class="container">
      <ul class="main-list">
        <li class="main-list__li">
          <b class="color">Name:</b> {{ info.name }}
        </li>
        <li class="main-list__li">
          <b class="color">Gender:</b>  {{ info.gender }}
        </li>
        <li class="main-list__li">
         <b class="color">Height:</b> {{ info.height }}
        </li>
        <li class="main-list__li">
          <b class="color">Mass:</b> {{ info.mass }}
        </li>
        <li class="main-list__li">
          <b class="color">Hair color:</b>  {{ info.hair_color }}
        </li>
        <li class="main-list__li">
          <b class="color">Skin color:</b>  {{ info.skin_color }}
        </li>
        <li class="main-list__li">
          <b class="color">Eye color:</b> {{ info.eye_color }}
        </li>
      </ul>
      <Button-link :link="'/'">На главную</Button-link>
    </div>
  </main>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
 name: 'Data',
 components: { ButtonLink },
 data () {
   return {
     info: []
   }
 },
 created () {
    this.axios
      .get('https://swapi.dev/api/people/1/')
      .then(response => {
        console.log(response.data)
        this.info = response.data;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
  },
}
</script>

<style scoped>
.main {
  font-size: 20px;
  line-height: 30px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100vh;
}
.main-list {
  margin-left: 0;
  padding-left: 0;
}

.main-list__li {
  list-style-type: none;
}

.color {
  display: inline;
}

@media (min-width: 426px) {
  .main {
  font-size: 40px;
  line-height: 60px;
}
}
</style>