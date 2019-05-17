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
        <a class="nav-a"><li class="nav-item"><router-link to="/Products">Products</router-link></li></a>
        <a id="newsNav" class="nav-a"><li class="nav-item"><router-link to="/News">News</router-link></li></a> 
        <a class="nav-a"><li class="nav-item"><router-link to="/FAQ">FAQ</router-link></li></a>
        <a class="nav-a"><li class="nav-item"><router-link to="/Contact">Contact</router-link></li></a>
      </ul>
    </div>
    <router-view/>
    <div class="navbar_footer">
      <span id="bottom-nav"> 
        <a class="navbar_footer-a"><router-link to="/">Home</router-link></a> 
        <a class="navbar_footer-a"><router-link to="/About">About</router-link></a>
        <a class="navbar_footer-a"><router-link to="/Products">Products</router-link></a> 
        <a id="newsNav" class="nav-a"><router-link to="/News">News</router-link></a>
        <a class="navbar_footer-a"><router-link to="/FAQ">FAQ</router-link></a>
        <a class="navbar_footer-a"><router-link to="/Contact">Contact</router-link></a>
      </span>
      <div class="navbar_footer-copyright">&copy; ECSI Fibrotools</div>
    </div>
  </div>
</template>


<style lang="scss">
// ---------- Can't be scoped ----------- //
$logo-blue: #3a95f9;
body {
  // background-color: #bcc4c6;
  margin: 0;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
@media screen and (max-width: 767px){
  body {
    margin: 0;
    background: url('../src/assets/iko-twin-station-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
  }

}
// -------------------------------------- //
</style>




<style lang="scss" scoped>
// ------------- Mobile first ----------------
$logo-blue: #3a95f9;
$blue: #2c3e51;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2c2c;
  height: 100vh;
}

.navbar {
  display:block;
  background-color: white;
  &-right {
    display: inline-flex;
    justify-content: space-around;
    margin: auto;
    padding: .5rem 0;
    color: inherit;
    width: 100%;
  }
  &_logo {
      &-ECSI{
      color: $logo-blue;
      margin:0; 
      font-size: 3.5rem;

    }
    &-Fibrotools {
      margin: 0;
      position: relative;
      bottom: 1rem;
    } 
  }
  &_footer {
    a {
      display: none;
    }
    &-copyright {
      // color:fff;
    }
  }
  .nav-ul {
		.nav-a {
			.nav-item{
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
			list-style: none;
      display:inline-block;
      font-size: 1rem;
      &:hover {
        color: inherit;
      }
			}
		}
  }
  &_footer {
    color: #2c2c2c;
    font-weight: bold;
    background: #fff;
    padding: .25rem 0;
    width: 100%;
    text-align: center;
  }
}

#bottom-nav,
#techNav,
#newsNav {
  display: none;
}

.CTA_home-learn {
  border: none;
  background: transparent;
}


//----------------- Tablet --------------------//
@media screen and (min-width:768px){ 

.navbar {
	display:inline-flex;
	justify-content: space-between;
  width: 100%;
  border-bottom: solid 3px $blue;
	&-left {
		flex:1;
    }
	&_logo {
		margin: .5rem;
		display: inline-block;
		&-ECSI {
			color: $logo-blue;
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
}
#newsNav {
  display: inline-block;
}
}

@media screen and (min-width: 1024px) {
.navbar {
  .nav-ul {
    .nav-a {
        .nav-item {
          transition: all .25s;
          border-bottom: solid 3px white;
        font-size: 1.3rem;
        &:hover {
          opacity: 1;
          transition:  all .25s;
          border-bottom: solid 3px $logo-blue;
        }
      } 
    }
  }
  &_footer{ 
    background-color: $logo-blue;
    font-weight: bold;
    font-size: 1.25rem;
    color: #fff;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
}
#bottom-nav {
  display: inline;
}
}
</style>
