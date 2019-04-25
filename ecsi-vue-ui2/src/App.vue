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
        <a class="nav-a"><li class="nav-item"><router-link to="/About">About</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/About">Technology</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/About">Products</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/About">News</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/About">FAQ</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/About">Contact</router-link></li></a>
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

// ---------- Can't be scoped ----------- //
<style lang="scss">
body {
  margin: 0;
  background: url('../src/assets/iko-twin-station-2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
// -------------------------------------- //



<style lang="scss" scoped>
// ------------- Mobile first ----------------
$logo-red: #993300;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  &-right {
    display: none;
  }
  &_logo {
      &-ECSI{
      color: #fff;
      margin:0; 
      font-size: 3.5rem;

    }
    &-Fibrotools {
      display: none;
    } 
  }
  &_footer {
    a {
      display: none;
    }
    &-copyright {
      color: #fff;
    }
  }
}




//----------------- Tablet --------------------
@media screen and (min-width:768px){ 
body {
    background: none;
  }
.navbar {
	display:inline-flex;
	justify-content: space-between;
	width: 100%;
	&-left {
		flex:1;
    }
    &_footer {
        margin-top: 1rem;
        text-align: center;
        &-copyright {
            margin-top: 1rem;
        }
    }
	&_logo {
		margin: .5rem;
		display: inline-block;
		&-ECSI {
			color: $logo-red;
			font-size: 4rem;
			margin: 0;
			padding: 0;
			letter-spacing: 3px;
		}
		&-Fibrotools{
			margin: 0;
			padding: 0;
			font-size: 1.25rem;
			text-align: center;
			position: relative;
			bottom: .5rem;
		}
	}
	.nav-ul {
		display: inline-block;
		margin: auto;
		padding: 0;
		.nav-a {
			.nav-item{
			list-style: none;
			display:inline;
			padding-right: 2rem;
			font-size: 1.1rem;
			}
		}
	}
}
}
</style>
