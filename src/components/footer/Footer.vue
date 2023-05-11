<template>
  <section class="contact">
    <h1>Contact</h1>
    <div class="contact-container">
      <div class="contact-data">
        <div>
          <a href="" class="fa fa-phone"></a>
          <a href="tel:0040123456789">0040.123.456.789</a>
        </div>
        <div>
          <a href="" class="fa fa-envelope"></a>
          <a href="mailto:cosmin.tudosie81@yahoo.ro"
            >cosmin.tudosie81@yahoo.ro</a
          >
        </div>
      </div>
      <span class="social-media">
        <a href="" class="fa fa-facebook"></a>
        <a
          href="https://www.linkedin.com/in/tudosie-cosmin-76a550231/"
          class="fa fa-linkedin"
          target="blank"
        ></a>
        <a href="" class="fa fa-github"></a>
      </span>
    </div>
  </section>
  <footer>2022 Cosmin Tudosie</footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.contact {
  background-color: #5a4848;
}
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 15rem;
  margin-bottom: 2rem;
  gap: 1rem;
  font-size: 1.3rem;
  padding: 2rem;
}
.contact-data {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact a {
  color: #c1a8a8;
  text-decoration: none;
  margin-right: 1rem;

  font-size: 1.2rem;
}
.contact a:hover {
  color: white;
}
h1 {
  text-align: center;

  color: #a7a0a0;
  font-size: 1.5rem;
}
</style>
