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
})