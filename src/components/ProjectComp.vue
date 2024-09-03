<template>
    <div class="projects__row">
    <div class="projects__row-img-cont">
        <img
        :src="project.img"
        alt="Software Screenshot"
        class="projects__row-img"
        loading="lazy"
        />
    </div>
    <div class="projects__row-content">
        <h3 class="projects__row-content-title">{{ project.name }} </h3>
        <p class="projects__row-content-desc">
            {{ props.project.description }}
        </p>
        <a
        @click="viewProject(project.name)"
        class="btn btn--med btn--theme dynamicBgClr"
        target="_blank"
        >Details</a
        >
    </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        project:{ type: Object, required: true }
    })
    import { useRouter } from 'vue-router'
    const router = useRouter()
    
    function viewProject(p: string): void{
        router.push({ path: '/project', query: { project: p } });
    }
</script>