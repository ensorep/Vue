Vue.component('left-nav', {
    data: function() {
        return{

        }
    },
    template: `<div id="side-nav">
      <div><a href="index.html"><img src="pics/ECSI_logo.svg" style="height:100%;width:auto;" /></a></div>
      <div><img style="height:60%;margin-top:25px;" src="pics/Fibro_donut_end.svg" /></div>
      <div><a href="index.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-home fa-fw fa-lg"></span>Home</a></div>
      <div><a href="about.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-user fa-fw fa-lg"></span>About</a></div>
      <div><a href="technology.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-gear fa-fw fa-lg"></span>Technology</a></div>
      <div><a href="products.html"><img src="pics/Fibro_donut.svg" /><span style="font-family:arial;font-weight:900;letter-spacing:-2px;width:36.5px;"
            class="icon fa fa-fw ">IKo</span>Products</a></div>
      <div><a href="news.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-newspaper-o fa-fw fa-lg"></span>News</a></div>
      <div><a href="faq.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-question fa-fw fa-lg"></span>FAQ</a></div>
      <div><a href="cost.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-dollar fa-fw fa-lg"></span>Cost</a></div>
      <div><a href="contact.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-fw fa-lg">@</span>Contact</a></div>
      <div><a href="customers.html"><img src="pics/Fibro_donut.svg" /><span class="icon fa fa-globe fa-fw fa-lg"></span>Customers</a></div>
  </div>`
})

Vue.component('homepage', {
    data: function() {
        return{

        }
    },
    template: `<div id="homepage">
    <div id="hero">
      <img id="hero-banner" name="hm_tagline" src="pics/Fibro_banner.svg"
        width="100%" />
      <img name="Iko_hero" src="pics/iko-twin-station-2.jpg" width="100%" />
      <span class="logo-text logo-text-header">Meet IKo&trade;</span>
      <span class="logo-text logo-text-sub">Compact.
        Inexpensive. And it works.</span>
      <a id="learnmore" class="button-learnmore"
        href="products.html">Learn More <span class="fa fa-arrow-right"></span></a>
    </div>

    <h3 class="italic"> ECSI Fibrotools designs, builds ,and supplies efficient, precision benchtop
      equipment for electroplating of MICRO- and NANO-structures. <span class="big_red">FIBRotools&trade;</span>
      are an ideal solution for academic and R&amp;D institutions seeking rapid optimization of novel
      designs for MEMS and NANO structures and advanced high-density interconnects (HDI).
      Publish and commercialize innovations faster with our uniform, reproducible electroplating process.
    </h3>

    <p>
      What enables us to do this at a low cost is our proprietary <span class="big_red">FIBRotools&trade;
        -- Fiber-Initiated &nbsp;Boundary-layer Removal --</span> technology. Complemented
      by our advanced wafer-holder design, <span class="big_red">FIBRotools&trade;</span> produces uniformity,
      eliminates bubbles and minimizes edge effects. <span class="big_red">FIBRotools&trade;</span> is based on
      the work of our founder and CEO, Dr. Igor V. Kadija, whose discoveries in the physicochemical
      hydrodynamics of wet processing were awarded three US
      patents with worldwide patent coverage.</p>

    <p><a href="addonoptions.html">Flexible and adaptable</a> to many different process configurations,
      <span class="big_red">FIBRotools&#8482;</span> enables fast track R&amp;D in design advancements of
      a wide variety of MEMS, NANO, and HDI devices. <a href="products.html">Click here</a>
      to find out more about our <a href="products.html">products</a> and <a href="addonoptions.html">add-on
        options</a>.
    </p>
  </div>`
})


Vue.component('footer-nav', {
    data: function() {
        return{}
    },
    template: `
          <div id="bottom_nav" style="margin-top:20px;">
            <hr />
            <a href="index.html">Home</a> &#8226;
            <a href="about.html">About</a> &#8226;
            <a href="technology.html">Technology</a> &#8226;
            <a href="products.html">Products</a> &#8226;
            <a href="news.html">News</a> &#8226;
            <a href="faq.html">FAQ</a> &#8226;
            <a href="cost.html">Cost</a> &#8226;
            <a href="contact.html">Contact</a> &#8226;
            <a href="customers.html">Customers</a>
            <div style="margin-top:10px;text-align:center">&copy;ECSI Fibrotools</div>
          </div>`
})


const app = new Vue({
    el: '#app',
    data: {
    }
    methods: {
        url: function() {
            return document.URL;
        }
    }
})