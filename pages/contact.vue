<template>
  <section class="contact active section" id="contact">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
      </div>

      <h3 class="contact-title padd-15">Do you have any questions ?</h3>
      <h4 class="contact-sub-title padd-15">Here where you can contact me:</h4>

      <div class="row">
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="mdi:envelope" class="contact-icon" /></div>
          <h4>Email</h4>
          <p>saul.toscano.robles@gmail.com</p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="mdi:github" class="contact-icon" /></div>
          <h4>Github Page</h4>
          <p>
            <a href="https://github.com/SaulToscano" target="_blank" style="all: unset; cursor: pointer;">github.com/SaulToscano</a>
          </p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="ri:linkedin-fill" class="contact-icon" /></div>
          <h4>Connect with me</h4>
          <p>
            <a href="https://www.linkedin.com/in/saul-toscano-110045232/" target="_blank" style="all: unset; cursor: pointer;">
              www.linkedin.com/in/saul-toscano-110045232/
            </a>
          </p>
        </div>
        <!-- Contact info item end -->
      </div>

      <h3 class="contact-title padd-15">Send Me An Email</h3>
      <h4 class="contact-sub-title padd-15">Fill in the form below</h4>

      <!-- Contact form start -->
      <Form />
      <!-- Contact form end -->
    </div>
  </section>
</template>
