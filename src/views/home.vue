<template>
  <!--banner image-->

  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div class="content text-start">
      <h1 class="text-white">Hello Everyone</h1>
    </div>
    <div class = "col-lg-5">
      <img src="../assets/gue.JPG" class="img-fluid">

    </div>
  </div>



  <!--kontent-->
  <section id = "sec-4" class = "py-5">
    <div class = "container my-4">
      <div class = "row gx-lg-5">
        <div class = "col-lg-6 mb-5">
          <p class = "text-muted fw-light lh-lg my-4">My name is Ria Anjeli. I come from Bangkinang. I am the 5th child of 5 siblings. I am 20 years old turning 21. I am an Informatics Engineering student at the State Islamic University of Sultan Syarif Kasim Riau. My hobbies are reading and listening to music, I get bored easily with something but if I like it I will listen and see it continuously </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.banner-image {
  background-color: rgba(12, 12, 12, 0.64);
}

h1 {
  padding-right: 300px;
}

p{
  font-family: Arial;
}

.col-lg-5{
  margin-top: 500px;
  height: 600px;
  margin-bottom: 500px;
  margin-right: -100px;
}
</style>