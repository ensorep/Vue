<template>
  <div>
   <div class="hero">
        <div class="hero-img">
          <div class="hero_focus">
            <h3 class="hero_focus-main"> Meet IKo<span id="tm">&trade;</span></h3>
            <span class="hero_focus-subline">Compact. Inexepensive. Simply unmatched.</span>
            <div class="CTA_home"><button class="CTA_home-learn"><router-link to="/Products">Learn More</router-link></button></div>
          </div>
        </div>
      </div>
      <div class="clients">
        <div><a class="clients-link" href="#"><img class="logo_nasa" src="../assets/nasa.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_mit" src="../assets/mit.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_boston" src="../assets/boston.png"/></a></div>
        <div><a class="clients-link" href="#"><img class="logo_draper" src="../assets/draper.png"/></a></div>
      </div>
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

<style lang='scss' scoped>
$logo-red: #993300;
$blue: #2c3e51;
$pinsblue: #c1c8ca;

// --- Mobile First ----// 

.clients {
	display: none;
}

.hero {
  &-img {
		background: rgba(255,255,255,0.5);
	}
	&_focus {
		display: block;
		// background: linear-gradient($blue 1%,transparent);
			color: inherit;
			padding: 1rem;
			height: 90vh;
		&-main {
			font-size: 4rem;
			margin-top: 4rem;
			margin-bottom: 3rem;
		}
		&-subline {
			font-size: 1.2rem;
			font-weight: bold;
		}
	}

	.CTA {
		&_home {
			&-learn {
				margin-top: 5rem;
				border: none;
				background-color: #993300;
				transition: .5s;
				padding: .75rem;
				font-size: 1rem;
				font-weight: bold;
				border-radius: 4px;
				width: 40%;
				a{
					color: #fff;
				}
			}
		}
	}
	
	
}
// --- Tablet ---- //
@media screen and (min-width:768px){
.hero {
	position: relative;
	&-img {
		background: url('../assets/iko-twin-station-2.jpg');
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 90vh;
		margin: auto;
	}
	&_focus {
		position: relative;
		padding: 2rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0,0,0,0.7);
		float: left;
		text-align: center;
		&-main{
			padding: 0;
			display: block;
			color: #fff;
			position: relative;
			font-size: 5rem;
			margin: auto;
			text-align: center;
			#tm {
				position: absolute;
				top: 1rem;
				right: 0;
				font-size: 2rem;
			}
		}
		&-subline {
			text-align: center;
			color: #fff;
			font-size: 1.25rem;
		}
	}
}

.CTA {
	width: 100%;
	height: 200px;
	display: flex;
	&_sub {
		margin: auto;
		font-size: 1.5rem;
	} &_home {
		display: block;
		margin: auto;
		&-learn {
			position: relative;
			width: 30%;
			transition: .5s;
			padding: 1rem;
			border-radius: 4px; 
			font-size: 1rem;
			margin: 1.5rem 0 0 0;
			background: $logo-red;
			border: none;
			color: #fff;
			text-align: center;
			&:hover {
				transition: .5s;
				width: 50%;
			}
		}
	}
}
@media screen and (min-width: 1024px){
.clients {
	display: flex;
	align-items: center;
	margin: 1rem 0 2rem 0;
		.logo {
			&_nasa {
				width: 45%
			}
			&_mit {
				width: 55%
			}
			&_boston {
				position: relative;
				width:70%;
				right: 1rem;
			}
			&_draper {
				width: 85%;
			}
		}
		div {
			width: 25%;
			max-width: 25%;
		}
}
}
// ----------------- FOOTER ---------------------

}
</style>