<template>
  <div id="main_content">
    <div id="homepage">
      <div id="hero"><img id="hero-banner" name="hm_tagline" src="pics/Fibro_banner.svg" width="100%"> <img
          id="hp_hero" name="Iko_hero" src="pics/iko-twin-station-2.jpg"> <span
          class="logo-text logo-text-header">Meet IKo™</span> <span class="logo-text logo-text-sub">Compact.
          Inexpensive. And it works.</span> <a id="learnmore" href="products.html" class="button-learnmore">Learn More
          <span class="fa fa-arrow-right"></span></a></div>
      <h3 class="italic"> ECSI Fibrotools designs, builds ,and supplies efficient, precision benchtop
        equipment for electroplating of MICRO- and NANO-structures. <span class="big_red">FIBRotools™</span>
        are an ideal solution for academic and R&amp;D institutions seeking rapid optimization of novel
        designs for MEMS and NANO structures and advanced high-density interconnects (HDI).
        Publish and commercialize innovations faster with our uniform, reproducible electroplating process.
      </h3>
      <p>
        What enables us to do this at a low cost is our proprietary <span class="big_red">FIBRotools™
          -- Fiber-Initiated &nbsp;Boundary-layer Removal --</span> technology. Complemented
        by our advanced wafer-holder design, <span class="big_red">FIBRotools™</span> produces uniformity,
        eliminates bubbles and minimizes edge effects. <span class="big_red">FIBRotools™</span> is based on
        the work of our founder and CEO, Dr. Igor V. Kadija, whose discoveries in the physicochemical
        hydrodynamics of wet processing were awarded three US
        patents with worldwide patent coverage.</p>
      <p><a href="addonoptions.html">Flexible and adaptable</a> to many different process configurations,
        <span class="big_red">FIBRotools™</span> enables fast track R&amp;D in design advancements of
        a wide variety of MEMS, NANO, and HDI devices. <a href="products.html">Click here</a>
        to find out more about our <a href="products.html">products</a> and <a href="addonoptions.html">add-on
          options</a>.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>