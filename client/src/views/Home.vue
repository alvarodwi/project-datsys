<template>
  <div>
    <section class="w-full">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 pt-32 md:pt-64 overflow-hidden" id="left">
          <img class="absolute top-0 w-full md:w-1/2 h-full" id="bgimg" src="../assets/img/bgimg.png" alt="bg" />
          <p class="title" id="datsys">DatSys</p>
          <p class="title" id="project">Project</p>
          <hr id="redline" />
          <p class ="mt-4 ml-8 text-sepia-500 tracking-widest">A light Novel Database</p>
        </div>
        <div class="w-full md:w-1/2">
          <img class="gambar" src="../assets/img/ram.jpg" alt="ram" />
          <img class="gambar" src="../assets/img/hyoka.jpg" alt="hyouka" />
          <img
            class="gambar"
            src="../assets/img/dunno.jpg"
            alt="succubus tryin to be smart"
          />
          <img class="gambar" src="../assets/img/mogami.jpg" alt="mogami" />
          <img class="gambar" src="../assets/img/poi.jpg" alt="yuudachi" />
          <img class="gambar" src="../assets/img/koakuma.jpg" alt="koakuma" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("gambar");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 4000);
    }
  },
};
</script>

<style scoped>

#bgimg {
  z-index: -10;
  left: -40px;
  opacity: 15%;
}

#redline {
  border: 1px solid #fb9a96;
}

.gambar {
  width: 100%;
  height: auto;
  animation: fading 4s infinite;
}

@keyframes fading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#left {
  border-right: 1px solid #fb9a96;
}

.title {
  font-family: hind;
  font-style: normal;
  font-weight: normal;
  font-size: 300%;
  line-height: 1.2em;
}

#datsys {
  margin: 0 0.5em;
  color: #f95851;
}

#project {
  margin: 0 0.5em;
  color: #f5e2cf;
  margin-bottom: 0.8rem;
}

@media (max-width: 768px) {
  .gambar {
    width: 200%;
  }
}
</style>
