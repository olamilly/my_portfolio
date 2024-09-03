<template>
    <header class="header" style="width: 100dvw;">
      <div class="header__content">
        <div class="header__logo-container" >
          <!-- <div class="header__logo-img-cont" style="border: 2px solid black;">
            <img
              src="../assets/jpeg/olamide.jpg"
              alt="Olamide Image"
              class="header__logo-img"
            />
          </div> -->
          <span class="header__logo-sub" @click="header__logo_containerfunction()">Mustapha Olamide</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="/#top" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="/#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="/#projects" class="header__link">
                Projects
              </a>
            </li>
            <!-- <li class="header__link-wrapper">
              <a href="/#certs" class="header__link">
                Certificates
              </a>
            </li> -->
            <li class="header__link-wrapper">
              <a href="/#contact" class="header__link"> Contact </a>
            </li>
            <li class="header__link-wrapper">
              <a href="https://medium.com/@olamilly" target="_blank" class="header__link"> Blog <i class='bx bx-link-external'></i> </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont" ref="hamMenuBtn" @click="hamMenuBtnfunction">
            <img
              src="../assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
              ref="headerHamMenuBtn"
            />
            <img
              src="../assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
              ref="headerHamMenuCloseBtn"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu" ref="smallMenu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link"  v-for="s, index in small_links" :key="index" @click="headerSmallMenuLinksfunction()">
              <a :href="s.link" :target="s.name[0]=='B'?'_blank':''" v-html="s.name"> </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue'
onMounted(()=>{
  const app=document.querySelector('#app')
  if (app!=null){
    app.addEventListener('click',closeDropdown)
  }
})
const small_links=ref([
    {name:"Home",link:"/#top"},
    {name:"About",link:"/#about"},
    {name:"Projects",link:"/#projects"},
    {name:"Contact",link:"/#contact"},
    {name:"Blog <i class='bx bx-link-external'></i>",link:"https://medium.com/@olamilly"}
])
const hamMenuBtn = ref()
const smallMenu = ref()
const headerHamMenuBtn = ref()
const headerHamMenuCloseBtn = ref()
function closeDropdown(e:Event){
  const el = e.target as HTMLInputElement
  if(el != hamMenuBtn.value && el !=headerHamMenuBtn.value){
    if (smallMenu.value.classList.contains('header__sm-menu--active')) {
        smallMenu.value.classList.remove('header__sm-menu--active')
    }
    if (headerHamMenuBtn.value.classList.contains('d-none')) {
        headerHamMenuBtn.value.classList.remove('d-none')
        headerHamMenuCloseBtn.value.classList.add('d-none')
    }
  }
}
function hamMenuBtnfunction(){
    if (smallMenu.value.classList.contains('header__sm-menu--active')) {
        smallMenu.value.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.value.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.value.classList.contains('d-none')) {
        headerHamMenuBtn.value.classList.remove('d-none')
        headerHamMenuCloseBtn.value.classList.add('d-none')
    } else {
        headerHamMenuBtn.value.classList.add('d-none')
        headerHamMenuCloseBtn.value.classList.remove('d-none')
    }
}

function headerSmallMenuLinksfunction(){
    smallMenu.value.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.value.classList.remove('d-none')
    headerHamMenuCloseBtn.value.classList.add('d-none')
}

function header__logo_containerfunction(){
    location.href = '/'
}


</script>
