<template>
  <div class="about">
    <div class="about_flex">
      <div class="about_div about_why">
        <h2 class="about_why-title">Why</h2>
        <p class="about_why-text">
          Our objective is to make wet processing easy. We liberate our customers from the haphazardness of
          conventional systems.
        </p>
      </div>


      <div class="about_div about_who">
        <h2 class="about_who-title"> Who </h2>
        <p class="about_who-text">
          At ECSI Fibrotools Inc, we make tools that work. We design, build, 
          and supply wet processing equipment for micromachine, nano-features,
          R&amp;D, and manufacturing.
        </p>
      </div>
      
      <div class="about_div about_what"> 
        <h2 class="about_what-title">What</h2>
        <p class="about_what-text">
          Flexible and adaptable to many different process configurations,
          FiBRotools&#8482; enable fast track R&amp;D in design advancements of
          a wide variety of MEMS, NANO, and HDI devices. 
        </p>
      </div>  

      <div class="about_div about_how"> 
        <h2 class="about_how-title">How</h2>
        <p class="about_how-text">
          What enables us to do this is our proprietary FiBRotools&trade; (Fiber-Initiated
          Boundary-layer Removal) technology. It is based on discoveries by our founder and CEO, Igor V. Kadija, 
          in the physicochemical hydrodynamics of wet processing.
          FiBRotools&trade; is covered by three U.S.
          Patents with worldwide patent coverage. 
        </p>
      </div>
    </div>
      <div class="about_ourStory"> 
        <h2 class="about_ourStory-title">Our Story</h2>
        <img class="about_ourStory-CEO" src="../assets/igor.jpg"/>
        <p class="about_ourStory-text">
          Author of numerous articles, presentations, and over 60 U.S. and foreign patents,
          Dr. Igor V. Kadija has spent 30+ years in the highly specialized fields of
          electrochemistry and physicochemical hydrodynamics. Founding ECSI in 1989, he now brings their relevant applications to the
          manufacturing of semiconductors, MEMS, and HDI-PCBs. As the individual <span></span> with the best first-hand insight and understanding 
          of wet processing of fine features, Dr.Kadija works closely with clients to ensure the best 
          product fit and the highest level of FIBRotools productivity.
        </p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
  }
</script>

<style lang="scss" scoped>

.about {
  background-color: rgba(255,255,255,.8);
  margin:.25rem;
  padding: .5rem;
  font-size: .95rem;
  &_ourStory{
    &-CEO {
      width: 200px;
      height: 250px;
    }
    span {
      display: inline-block;
      padding: 1rem 0;
    }
  }
}

@media screen and (min-width: 820px) {
.about {
  margin-bottom: 3rem;
  &_flex {
    display: flex;
  }
  &_ourStory {
    display: block;
  }
}
}

</style>


