Vue.component('left-nav', {
    data: function() {
        return{

        }
    },
    template: `

    <div id="navbar">
    <div class="navbar-left">
      <div class="logo-top">
        <h1 id="ECSI">ECSI</h1>
        <h4 id="ECSI_Fibrotools">Fibrotools, Inc. </h4>
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

Vue.component('footer-nav', {
    data: function() {
        return{}
    },
    template: `
          <div id="bottom_nav" style="margin-top:20px;">
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
    methods: {
        url: function() {
            if(document.URL.includes('index.html')){
              return true
            }
            else {
              return false
            }
        }
    }
})

// When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }