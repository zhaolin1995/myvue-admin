<template>
    <div class="home">
        <z-header></z-header>
        <z-sidebar></z-sidebar>
        <z-tags></z-tags>
    </div>
</template>

<script>
    // @ is an alias to /src
import ZHeader from "./Header"
import ZSidebar from "./Sidebar"
import ZTags from "./Tags"
    export default {
        name: "Home",
        components: {ZHeader,ZSidebar,ZTags}
    };
</script>
