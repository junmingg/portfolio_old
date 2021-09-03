<template>
    <div id="nav">
        <span>Jun Ming.</span>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/projects">Projects</router-link>
    </div>
    <br>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

    div {
        background-color: rgb(128,128,128,0.5);
        margin: 0px 0px 100px 0px;
        border: 1px solid black;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        }
    br {
        content: "";
        display: block;
        margin: 100px 0;
    }
    span {
        position: absolute;
        font-size: 50px;
        top: 5px;
        left: 50px;
        font-family: Monoton;
    }
</style>