<template>
    <section id="contact" class="contact sec-pad dynamicBg "  >
      <div class="main-container " data-aos="fade-up">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Feel free to reach out if you have any inquiries, work opportunities or just to say hello.
          </span>
        </h2>
        <div class="contact__form-container">
          <div  class="alert " id="alert-box">
              <p v-if="errorMessage">{{ errorMessage }}</p>
          </div>
          <form @submit.prevent="contactMe" class="contact__form" >
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name <strong style="color:red">*</strong></label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
                v-model="form.name"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email <strong style="color:red">*</strong></label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                class="contact__form-input"
                name="email"
                v-model="form.email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Message <strong style="color:red">*</strong></label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                v-model="form.message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const WEB3FORMS_ACCESS_KEY = "e6e112f2-401a-452a-b01a-f38bb4ebd0b5";
const form = ref({
  access_key: WEB3FORMS_ACCESS_KEY,
  name:'',
  email:'',
  message:''
})
const errorMessage = ref('');

async function contactMe(){
  const box=document.querySelector<HTMLElement>('#alert-box')
  const container=document.querySelector<HTMLElement>('.contact__form-container')
  
  if (box!=null && container!=null){
    box.style.padding='1rem'
    if(box.classList.contains('alert-danger')){
      box.classList.toggle('alert-danger')
    }
    if(container.classList.contains('container-danger')){
      container.classList.toggle('container-danger')
    }
    if(container.classList.contains('container-success')){
      container.classList.toggle('container-success')
    }
    if(box.classList.contains('alert-success')){
      box.classList.toggle('alert-success')
    }
  }

  errorMessage.value=''
  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(form.value),
  }).then((response)=>{
    if(response.ok){
      form.value.name=''
      form.value.email=''
      form.value.message=''
    }
    errorMessage.value = 'Message sent successfully.';
    if (box!=null && container!=null){
      box.classList.toggle('alert-success')
      container.classList.toggle('container-success')
      setTimeout(()=>{
        box.classList.toggle('alert-success')
        container.classList.toggle('container-success')
        box.style.padding='0px'
      },2500)
    }
  })
  .catch((error)=>{
    errorMessage.value = 'Network Issues. Check your Internet and try again.';
    if (box!=null && container!=null){
      box.classList.toggle('alert-danger')
      container.classList.toggle('container-danger')
    }
  });
  

}
</script>
<style scoped>
.alert{
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  color:white;
  padding:1rem;
  margin-bottom: 1rem;
}
.alert-danger{
  background-color: rgb(255, 40, 40);
}
.alert-success{
  background-color: rgb(77, 215, 2);
}
.container-danger{
  border:5px solid rgb(255, 40, 40);
}
.container-success{
  border: 5px solid rgb(77, 215, 2);
}
</style>