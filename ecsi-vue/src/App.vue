<template>
  <div id="app">
    <div class="navbar">
      <div class="navbar-left">
        <div class="navbar_logo">
          <h1 class="navbar_logo-ECSI">ECSI</h1>
          <h4 class="navbar_logo-Fibrotools">Fibrotools, Inc. </h4>
        </div>
      </div>
      <ul class="nav-ul navbar-right">
        <a class="nav-a"><li class="nav-item"><router-link to="/">Home</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">About</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">Technology</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">Products</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">News</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">FAQ</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/about">Contact</router-link></li></a>
      </ul>
    </div>
    <router-view/>
    <div class="navbar_footer">
      <a href="about.html">About</a> &#8226;
      <a href="technology.html">Technology</a> &#8226;
      <a href="products.html">Products</a> &#8226;
      <a href="news.html">News</a> &#8226;
      <a href="faq.html">FAQ</a> &#8226;
      <a href="contact.html">Contact</a>
      <div class="navbar_footer-copyright">&copy; ECSI Fibrotools</div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
