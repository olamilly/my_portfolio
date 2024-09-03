<template>
    <section class="home-hero" id="top" style="display: flex;justify-content: center;" >
      <div class="home-hero__content "  data-aos="fade-up">
        <div style="width: 100%;display: flex;justify-content: center;"><programmerComp /></div>
        
        
        <h1 class="heading-primary">Hey, My name is Olamide</h1>
        <!-- 👋 -->
        <div class="home-hero__info">
          <p class="text-primary">
            I'm a Software Engineer...
          </p>
          <!-- Passionate -->
        </div>
        <div class="home-hero__cta" >
          <!-- style="display:flex;justify-content: space-around;" -->
          <a href="/#about" class="btn btn--bg">About me</a>
          <!-- <a href="./#contact" class="btn btn--bg btn--theme dynamicBgClr"
              >Resume</a
            > -->
        </div>
      </div>
    </section>
</template>
<script setup lang="ts">
import programmerComp from '@/assets/programmerLogo.vue';
</script>
<style scoped>
.home-hero__content{
  zoom:85%;
}
</style>