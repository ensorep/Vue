<template>
  <div>
   <div class="hero">
        <div class="hero-img">
          <div class="hero_focus">
            <h3 class="hero_focus-main"> Meet IKo<span id="tm">&trade;</span></h3>
            <span class="hero_focus-subline">Compact. Inexepensive. Simply unmatched.</span>
            <div class="CTA_home"><button class="CTA_home-learn">Learn More</button></div>
          </div>
        </div>
      </div>
      <!-- <div class="clients">
        <div><a class="clients-link" href="#"><img class="logo_nasa" src="../assets/nasa.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_mit" src="../assets/mit.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_boston" src="../assets/boston.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_draper" src="../assets/draper.png"/></a></div>
      </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Homepage',
    props: {
      msg: String
    }
  }
</script>

<style lang="scss">
html, body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; }

a { text-decoration: none; color: #000; }

.navbar { display: -webkit-inline-box; display: -ms-inline-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; align-items: center}

.navbar_footer { margin-top: 1rem; text-align: center; }

.navbar_footer a:hover {color: #993300; }

.navbar_footer-copyright { margin-top: 1rem; }

.navbar_logo { margin: .5rem; display: inline-block; }

.navbar_logo-ECSI { color: #993300; font-size: 4rem; margin: 0; padding: 0; letter-spacing: 3px; }

.navbar_logo-Fibrotools { margin: 0; padding: 0; font-size: 1.25rem; text-align: center; position: relative; bottom: .5rem; }

.navbar .nav-ul { display: inline-block; padding: 0; }

.navbar .nav-ul .nav-a .nav-item { list-style: none; display: inline; padding-right: 2rem; font-size: 1.1rem; }

.nav-item a:hover {color: #993300};

.hero { position: relative; }

.hero-img { background: url("../assets/iko-twin-station-2.jpg"); background-attachment: fixed; background-size: contain; width: 100%; height: 700px; margin: auto; }

.hero_focus { position: relative; padding: 2rem; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.7); float: left; text-align: center; }

.hero_focus-main { padding: 0; display: block; color: #fff; position: relative; font-size: 5rem; margin: auto; text-align: center; }

.hero_focus-main #tm { position: absolute; top: 1rem; right: 0; font-size: 2rem; }

.hero_focus-subline { text-align: center; color: #fff; font-size: 1.25rem; }

.CTA { width: 100%; height: 200px; display: -webkit-box; display: -ms-flexbox; display: flex; }

.CTA_sub { margin: auto; font-size: 1.5rem; }

.CTA_home { display: block; margin: auto; }

.CTA_home-learn { position: relative; width: 30%; -webkit-transition: .5s; transition: .5s; padding: 1rem; border-radius: 4px; font-size: 1rem; margin: 1.5rem 0 0 0; background: #993300; border: none; color: #fff; text-align: center; }

.CTA_home-learn:hover { -webkit-transition: .5s; transition: .5s; width: 50%; }

.clients { display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
/*# sourceMappingURL=styles.min.css.map */
</style>