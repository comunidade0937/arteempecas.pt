<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Feito com
          <b-icon
            icon="heart"
            type="is-danger"
            class="heart"
            alt="amor"
            aria-valuetext="amor"
            title="amor"
          />pela
          <a target="_blank" rel="noopener" href="https://comunidade0937.com"
            >Comunidade 0937</a
          >. <br />LEGO® é uma marca registada da LEGO Group, que não patrocina
          nem apoia esta página.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.heart {
  display: inline-flex;
  animation: pulsate 2.5s infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.2);
  }
  10% {
    transform: scale(1.1);
  }
  15% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
