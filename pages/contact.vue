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
          <div class="icon"><i class="fa fa-envelope"></i></div>
          <h4>Email</h4>
          <p>isc.ramirez_abril@outlook.com</p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><i class="fa-brands fa-github"></i></div>
          <h4>Github Page</h4>
          <p>github.com/iscRamirezAbril</p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><i class="fa-brands fa-linkedin-in"></i></div>
          <h4>Connect with me</h4>
          <p>www.linkedin.com/in/abril-ramirez-flores-71a26b275</p>
        </div>
        <!-- Contact info item end -->
      </div>

      <h3 class="contact-title padd-15">Send Me An Email</h3>
      <h4 class="contact-sub-title padd-15">Fill in the form below</h4>

      <!-- Contact form start -->
      <div class="row">
        <form action="https://formspree.io/f/mjkbrvyo" method="POST" class="contact-form padd-15">
          <div class="row">
            <div class="form-item col-6 padd-15">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" name="name">
              </div>
            </div>
            <div class="form-item col-6 padd-15">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" name="email">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-item col-12 padd-15">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" name="subject">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-item col-12 padd-15">
              <div class="form-group">
                <textarea class="form-control" id="" placeholder="Message" name="message"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-item col-12 padd-15">
              <button type="submit" class="btn">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <!-- Contact form end -->
    </div>
  </section>
</template>
