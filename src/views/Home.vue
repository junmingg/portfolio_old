<template>
  <div class="home">
    <h1> This is the home page for Jun Ming's Portfolio. </h1>
    <body>
      <div class="wrapper">
        <div class="static-txt">Hello! I'm a</div>
        <ul class="dynamic-txts">
          <li><span>Data Analyst &nbsp; &nbsp;</span></li>
          <li><span>Data Scientist &nbsp;</span></li>
          <li><span>ML/AI Engineer</span></li>
          <li><span>Web Developer</span></li>
        </ul>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  align-items: center;
   justify-content: center;
   min-height: 100vh;
}

.wrapper {
  display: inline-flex;
}

.wrapper .static-txt {
  font-size: 60px;
  font-weight: 400;
  padding: 10px;
}

.wrapper .dynamic-txts {
  margin-left: 15px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}

.dynamic-txts li {
  color: #BB86FC;
  list-style: none;
  font-size: 60px;
  font-weight: 500;
  position: relative;
  top: 0; 
  animation: slide 6s steps(4) infinite;
}

@keyframes slide {
  100%{
    top: -360px;
  }
}

.dynamic-txts li span {
  position: relative;
}

.dynamic-txts li span::after{
  content: "";
  position: absolute;
  left: 0;
  height: 120%;
  width: 100%;
  background: #121212;
  border-left: 2px solid #BB86FC;
  animation: typing 1.5s steps(14) infinite;
}

@keyframes typing {
  100%{
    left: 100%;
    margin: 0 -35px 0 35px;
  }
}

</style>