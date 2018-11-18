<template>
  <div class="cover">
    <div class="background">
      <img
        :src="require('./background.responsive.jpg?size=2500')"
        :srcset="require('./background.responsive.jpg').srcSet">
    </div>
    <div class="cover-content">
      <div/>
      <img
        class="image"
        src="./arteempecas.svg" >
      <div class="bottom">
        <p class="has-text-centered">Mais detalhes abaixo...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
}

.background {
  position: absolute;
  overflow: hidden;
  z-index: -1;
}
.background * {
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.cover-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;
  /* background: linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.7)),
    url(https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fc6dea05a65ff5bb7ffdfa36b56feb5&auto=format&fit=crop&w=1650&q=80)
      #458db6; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

.bottom {
  padding-bottom: 2rem;
  color: #ffffff;
}

.image {
  max-width: 50vw;
  max-height: 50vh;
}
</style>
