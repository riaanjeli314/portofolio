<template>

  <section id = "sec-2" class = "py-5">
    <div class = "container my-4">
      <div class = "row gx-lg-5">
        <div class = "col-lg-6 mb-5">
          <img src = "../assets/enjel.jpg" class = "img-fluid">
        </div>
        <div class = "col-lg-6">
          <h3>Facts About Me</h3>
          <p class = "text-muted fw-light lh-lg my-4">I used to dream of becoming a doctor, but due to financial constraints, I discouraged that and then turned to other things, namely becoming a psychologist. but in the middle of high school I changed my mind again, I wanted to become a programmer because at that time it was difficult to ask for help from my school system and I intend to change all of that. however, all of that is not as easy as I thought, to achieve all of that I have to try harder than usual  </p>
        </div>
      </div>
    </div>
  </section>

  <section id = "sec-6" class = "py-5">
    <div class = "container my-4">
      <div class = "row mb-5">
        <div class = "col-12 text-center text-white">
          <h3 class = "mb-4">Social Media</h3>
        </div>
      </div>
      <div class = "row text-uppercase text-center text-white">
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://instagram.com/aanjeliii?igshid=YmMyMTA2M2Y=" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <h6>Instagram</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.facebook.com/hahahahahahahaha009" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
          <h6>Facebook</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.tiktok.com/@sweetbabeu?_t=8bb9NEq26gE&_r=1" target="_blank">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
          <h6>Tiktok</h6>
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
:root{
  --green: #16db93;
  --green-dark: #13bc7e;
  --light-grey: #f1f4f6;
}

*{
  font-family: 'Roboto', sans-serif;
}

/* misc stylings */
ul li{
  list-style-type: none;
}
.container{
  max-width: 1200px;
}
.display-1{
  letter-spacing: 1px;
}
.bg-green{
  background-color: var(--green)!important;
}
.bg-grey{
  background-color: var(--light-grey);
}
.text-green{
  color: var(--green);
}
.btn{
  border: 2px solid #fff;
  border-radius: 1.5rem;
  padding: 0.6rem 0;
  width: 160px;
}
.btn-green{
  background-color: var(--green);
  color: #fff;
  padding: 0.55rem 0;
  width: 140px;
}
.btn-green:hover{
  color: var(--green);
  background: #fff;
  border-color: var(--green);
}
.lh-lg{
  line-height: 1.7!important;
}
.circle-icon{
  width:55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--green);
}



/* section 6 */
#sec-6{
  background: linear-gradient(rgb(255, 255, 255), rgba(14, 13, 13, 0.93)), url(../assets/section-6-bg.jpg) center/cover no-repeat;
}
#sec-6 .circle-icon{
  width: 95px;
  height: 95px;
}

/* section 7 */
#sec-7 .card{
  border: none;
}

/* section 8 */
#sec-8 .carousel-item img{
  width: 180px!important;
}

/* section 9 */
.pricing-item{
  border-radius: 0.3rem;
  overflow: hidden;
  max-width: 340px;
}
.pricing-title{
  background-color: var(--green-dark);
}
.pricing-price, .pricing-item ul li{
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.9rem 0;
}
.pricing-item .btn:hover{
  background: transparent!important;
  color: #fff;
}
</style>