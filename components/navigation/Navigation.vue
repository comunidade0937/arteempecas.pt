<template>
  <nav
    :class="{
      'is-rolled-up': navbarHidden,
      'is-at-top': hideAtTop && lastScrollPosition === 0,
      'is-expanded': navbarMenuOpen
    }"
    class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <nuxt-link
        to="/"
        class="navbar-item">
        Arte em Peças
      </nuxt-link>
      <div
        :class="{ 'is-active': navbarMenuOpen }"
        class="navbar-burger burger"
        @click="toggle">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div
      :class="{ 'is-active': navbarMenuOpen }"
      class="navbar-menu">
      <div class="navbar-start"/>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button is-link"
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/comunidade0937">
                <span class="icon">
                  <b-icon icon="facebook"/>
                </span>
                <span>
                  Facebook
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bd-special-shadow" />
  </nav>
</template>

<script>
export default {
  props: {
    hideAtTop: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      navbarHidden: false,
      navbarMenuOpen: false,
      lastScrollPosition: 0
    }
  },

  created: function() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  mounted() {
    // this.popupItem = this.$el
  },

  destroyed: function() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    toggle() {
      this.navbarMenuOpen = !this.navbarMenuOpen
    },

    handleScroll: function(event) {
      const scrollPosition = window.pageYOffset | document.body.scrollTop

      const threshold = 56 // navbar height

      if (
        this.lastScrollPosition < scrollPosition &&
        scrollPosition > threshold + threshold
      ) {
        this.navbarHidden = true
        this.navbarMenuOpen = false
      } else if (
        this.lastScrollPosition > scrollPosition &&
        !(scrollPosition <= threshold)
      ) {
        this.navbarHidden = false
      }

      this.lastScrollPosition = scrollPosition
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: all 0.2s;
}

.navbar.is-rolled-up {
  top: -56px;
}

.navbar.is-at-top:not(.is-expanded) {
  background-color: transparent;
}

.navbar.is-at-top:not(.is-expanded) .navbar-brand .navbar-item {
  display: none;
}

.brand-image {
  max-height: 38px;
}

.bd-special-shadow {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
  height: 8px;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 100%;
  transform: scaleY(1);
  transform-origin: center top;
  transition: all 0.25s;
}

.navbar.is-at-top .bd-special-shadow,
.navbar.is-rolled-up .bd-special-shadow {
  opacity: 0;
}
</style>
