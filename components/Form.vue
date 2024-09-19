<template>
  <div class="row">
    <form action="https://formspree.io/f/mrbzwbnr" method="POST" class="contact-form padd-15">
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
          <button style="cursor: pointer;" type="submit" class="btn">Send Message</button>
        </div>
      </div>
    </form>
  </div>
</template>