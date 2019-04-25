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

<style lang='scss' scoped>
$logo-red: #993300;

.hero {
  &-img {
    background: none;
  }
  
}

@media screen and (min-width:768px){
.hero {
	position: relative;
	&-img {
		background: url('../assets/iko-twin-station-2.jpg');
		background-attachment: fixed;
		background-size: contain;
		width: 100%;
		height: 700px;
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

.clients {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

// ----------------- FOOTER ---------------------

}
</style>