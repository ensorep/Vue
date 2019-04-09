Vue.component('left-nav', {
    data: function() {
        return{

        }
    },
    template: `

    <div class="navbar">
    <div class="navbar-left">
      <div class="navbar_logo">
        <h1 class="navbar_logo-ECSI">ECSI</h1>
        <h4 class="navbar_logo-Fibrotools">Fibrotools, Inc. </h4>
      </div>
    </div>

    <ul class="nav-ul navbar-right">
    <a class="nav-a"><li class="nav-item">About</li></a>
    <a class="nav-a"><li class="nav-item">Technology</li></a>
    <a class="nav-a"><li class="nav-item">Products</li></a>
    <a class="nav-a"><li class="nav-item">News</li></a>
    <a class="nav-a"><li class="nav-item">FAQ</li></a>
    <a class="nav-a"><li class="nav-item">Contact</li></a>
    </ul>

  </div>`
})

Vue.component('homepage', {
    data: function() {
        return{

        }
    },
    template: `
      <div class="hero">
        <!--<div id="overlay"></div>-->
        <div class="hero-img">
          <div class="hero_focus">
            <h3 class="hero_focus-main"> Meet IKo<span id="tm">&trade;</span></h3>
            <span class="hero_focus-subline">Compact. Inexepensive. Simply unmatched.</span>
            <div class="CTA_home"><button class="CTA_home-learn">Learn More</button></div>
          </div>
        </div>
      </div>`
})

Vue.component('foot', {
  data: function() {
      return{}
  },
  template: `
        <div class="navbar_footer">
          <a href="about.html">About</a> &#8226;
          <a href="technology.html">Technology</a> &#8226;
          <a href="products.html">Products</a> &#8226;
          <a href="news.html">News</a> &#8226;
          <a href="faq.html">FAQ</a> &#8226;
          <a href="contact.html">Contact</a>
          <div class="navbar_footer-copyright">&copy; ECSI Fibrotools</div>
        </div>`
})


Vue.component('footer-nav', {
    data: function() {
        return{}
    },
    template: `
          <div class="bottom_nav">
            <hr />
            <a href="about.html">About</a> &#8226;
            <a href="technology.html">Technology</a> &#8226;
            <a href="products.html">Products</a> &#8226;
            <a href="news.html">News</a> &#8226;
            <a href="faq.html">FAQ</a> &#8226;
            <a href="contact.html">Contact</a>
            <div style="margin-top:10px;text-align:center">&copy;ECSI Fibrotools 2015 - 2019</div>
          </div>`
})


const app = new Vue({
    el: '#app',
    data: {
      message: 'a',
    },
})