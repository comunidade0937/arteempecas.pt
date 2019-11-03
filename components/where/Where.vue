<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1>
          Localização
        </h1>

        <p>
          O Arte em Peças realiza-se no Centro Cultural de Paredes de Coura.
        </p>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
              <p class="has-text-centered">
                <a
                  class="button is-success"
                  target="_blank"
                  rel="noopener"
                  href="https://www.google.com/maps/dir/My+Location/Paredes+de+Coura"
                >
                  <span class="icon">
                    <b-icon icon="map" />
                  </span>
                  <span>Encontrar o melhor caminho</span>
                </a>
              </p>

              <p class="has-text-centered">
                Av. Cónego Bernardo Chousal<br />
                Paredes de Coura<br />
                Portugal<br />
              </p>

              <h4>Coordenadas GPS</h4>
              <p>
                41°54'42.90"N 8°33'46.18"W
                <br />
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://goo.gl/maps/gZ8RhfG381J2"
                >
                  <b-icon icon="google-maps" />
                  <span>ver no Google Maps</span>
                </a>
              </p>

              <h4>Direcções</h4>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="http://g.co/maps/b4kge"
                    >Porto, Portugal</a
                  >
                  (115km)
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="http://g.co/maps/2dvvm"
                    >Vigo, Spain</a
                  >
                  (59-65km)
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://goo.gl/maps/LUXu7nGmVML2"
                    >Santiago Compostela, Spain</a
                  >
                  (145km)
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="http://g.co/maps/njsqb"
                    >Lisboa, Portugal</a
                  >
                  (420km)
                </li>
              </ul>
            </div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile is-child">
              <div class="map-container">
                <img class="map" src="./mapa_iberia.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.screen {
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.map-container {
  overflow: hidden;
  margin: 0 -1.5rem 0 0;
}

.map {
  max-width: 300%;
  max-height: 35rem;
}

@media print, screen and (min-width: 769px) {
  .map-container {
    overflow: visible;
  }
}
</style>
