<template>
  <section class="project-details">
      <header class="header">
          <div class="header__content">
              <div class="header__logo-container" >
              <span class="header__logo-sub"  @click="()=>{$router.push('/#projects')}"><i class='bx bx-left-arrow-alt'></i></span>
              </div>
          </div>
      </header>
    <div class="main-container">
      <div class="project-details__content">
        <div class="project-details__showcase-img-cont">
          <img
            :src="thisProject.img"
            alt="Project Image"
            class="project-details__showcase-img"
          />
        </div>
        <div class="project-details__content-main">
          <h1 class="projects__row-content-title" style="text-align: center; font-size:3rem; font-weight: 700;">{{ thisProject.name }}</h1>
          <div class="project-details__desc">
            <h3 class="project-details__content-title">Project Overview</h3>
            <p class="project-details__desc-para" style="font-weight: 600;" v-html="thisProject.short_description"></p>
            <p class="project-details__desc-para" v-html="thisProject.main_description"></p>
          </div>
          <div class="project-details__tools-used">
            <h3 class="project-details__content-title">Tools Used</h3>
            <div class="skills">
              <div v-for="t,index in thisProject.tools" :key="index" class="skills__skill">{{ t }}</div>
            </div>
          </div>
          <div class="project-details__links">
            <!-- <h3 class="project-details__content-title">See Live</h3> -->
            <a
              :href="thisProject.live"
              class="btn btn--med btn--theme project-details__links-btn"
              target="_blank"
              v-if="thisProject.live.length"
              >Live Link</a
            >
            <a
              :href="thisProject.source"
              class="btn btn--med btn--theme-inv project-details__links-btn"
              target="_blank"
              v-if="thisProject.source.length"
              >Code Link</a
            >
          </div>
        </div>
      </div>
    </div>
    <FooterComp />
  </section>
</template>
<style scoped>
i{
font-size: 4rem;  
margin:.5rem;
}
.main-container{
  zoom:85%;
}
</style>
<script setup lang="ts">

import FooterComp from '../components/FooterComp.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

let projects = {
  'SafePass':{
    name:'SafePass',
    short_description:'Password and Credentials manager',
    main_description:"Full stack web application that helps users securely store passwords for different websites.<br>I implemented AES-256 encryption on the backend to securely encrypt all user information stored on the database. This project is a <a style='font-weight: 700;text-decoration: underline;' href='https://codingchallenges.fyi/' target='_blank'>coding challenges</a> solution and the problem brief can be found <a style='font-weight: 700;text-decoration: underline;'  href='https://codingchallenges.substack.com/p/coding-challenge-58-password-manager' target='_blank'>here</a>. Going through the brief will help give you a proper understanding of the problem that the application is trying to solve. <br>Working on this project helped me learn more about Cybersecurity and Encryption as well as hosting web applications on AWS virtual servers.",
    img:'/safepass.jpg',
    tools:['HTML','CSS','JavaScript','Git','Vue', "Bootstrap",'PHP', 'Laravel'," MySQL", 'AWS EC2'],
    live:'http://ec2-54-242-210-101.compute-1.amazonaws.com/',
    source:'https://github.com/olamilly/safepass'
  },
  'Class Attendance Management System':{
    name:'Class Attendance Management System',
    short_description:'Fullstack web application that leverages Facial and Fingerprint recognition technology to collect and monitor student attendance data.',
    main_description:'This project has two parts. <br>1. Simple hardware component comprising of a Raspberry pi processor, Pi Camera, Fingerprint Sensor, LCD screen and a button.<br>2. Web application to process and view the data built with Laravel (A PHP Framework), Apache Web server, mySQL database.<br><br>Basically, the hardware identifies students using either their face or fingerprints, writes data on a CSV file(student name, time stamp, course code, etc.) and sends the CSV file to the backend through a HTTP request to be processed, stored and eventually displayed on the dashboard.<br>This project helped me work on my python skills as that was what I used to write code for the hardware processor.',
    img:'/attendance.jpg',
    tools:["PHP","Python","Bootstrap", 'Laravel'," MySQL","Raspberry Pi","Open CV","Adafruit_fingerprint"],
    live:'',
    source:''
  },
  'DevPrompts.ai':{
    name:'DevPrompts.ai',
    short_description:'Artificial Intelligence platform engineering.',
    main_description:"Lightweight frontend web application that levrages Google's powerful Gemini LLM API. <br>Using information from the user about their tech stack, the application is able to generate project ideas for the user to build.",
    img:'/devprompts.jpg',
    tools:['Vue', 'AWS S3'," Artificial Intelligence"],
    live:'http://devprompts.ai.s3-website-us-east-1.amazonaws.com/',
    source:''
  },
  //'Mini Games':{
  //  name:'Mini Games',
    //short_description:'Fun Popular Games to pass time with...',
    //main_description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis',
    //img:'/mini.jpg',
    //tools:['Vue', "Bootstrap", 'Laravel'," MySQL"],
    //live:'',
    //source:''
  //},
  'Appointment Management System':{
    name:'Appointment Management System',
    short_description:'General purpose Administrator dashboard for assistants, secretaries and the likes to manage users, appointments',
    main_description:" Built with Laravel on the backend and Vue.js 3 on the frontend, this project serves as a starting point for creating various web applications requiring an admin interface.<br><br>It provides functionalities like:<br><ul><li style='list-style:square'>User authentication (Laravel Fortify) and management(CRUD operation on users stored in a database).</li><li style='list-style:square'>Data filtering, pagination and searching. (Appointments in the base case but it can be altered to manage whatever data)</li><li style='list-style:square'>Toast notifications</li><li style='list-style:square'>Confirmation modals for actions using Sweet Alert</li><li style='list-style:square'>Date and time pickers</li></ul><br>By building this project, I gained valuable experience in building modern fullstack web applications with a clear separation of concerns between the backend and frontend. I also explored integrating third-party libraries and node modules to enhance user experience.",
    img:'/appointments.jpg',
    tools:['Vue', "Bootstrap", 'Laravel'," MySQL","NPM"],
    live:'',
    source:'https://github.com/olamilly/mylaravue3'
  },
}

const thisProject=ref({name:'',short_description:'',main_description:'',img:'',tools:['a'],live:'',source:''})
onMounted(()=>{
  const projectName= String(route.query.project)
  if(projectName){
    thisProject.value = projects[projectName as keyof typeof projects];
    window.scrollTo(0,0)
  }
  else{
    router.push('/#projects')
  }
})
</script>