<template>
    <div>
        <div class="header">
            <div class="menu">
                <svg @click="showMenu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="20" height="20">
                    <g>
                        <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
                        <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
                        <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
                    </g>
                </svg>
                <div class="nav-bar">
                    <MenuNavigation 
                        :active='displayMenu'
                        @closeMenu='closeMenu'
                    />
                </div>
            </div>
            <div class="title">
                <router-link to="/">EdinCode</router-link>
            </div>
            <div class="home">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>
            </div>
        </div>
    </div>
</template>
<script>
import MenuNavigation from './MenuNavigation.vue';
export default {
    data(){
        return {
            displayMenu: false,
        }
    },
    components: {
        MenuNavigation
    },
    methods: {
        showMenu(){
            this.displayMenu ? this.displayMenu = false : this.displayMenu = true;
        },
        closeMenu(){
            this.displayMenu = false
        }
    },
}
</script>
<style scoped>
svg {
    fill: aliceblue;
}
.menu {
    padding: 1rem;
}
.title a {
    display: inline-block;
    padding: 1rem;
    color: aliceblue;
    font-weight: 700;
}
.home {
    padding: 1rem;
    visibility: hidden;
}
.header {
    display: flex;
    justify-content: space-between;
    background: #7d7dff;
}
</style>