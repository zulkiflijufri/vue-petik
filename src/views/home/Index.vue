<template>
  <div id="home">
    <Header />
    <Slider />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Slider,
    Footer,
  },
};
</script>