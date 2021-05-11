<template>
  <div>
    <section id="home">
      <div class="split">
        <div id="left">
          <img id="bgimg" src="../assets/img/bgimg.png" alt="bg" />
          <p class="title" id="datsys">DatSys</p>
          <p class="title" id="project">Project</p>
          <hr id="redline" />
          <p id="lightnovel">A light Novel Database</p>
        </div>
        <div id="right">
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

<style>
h1,
h2,
p {
  font-family: hind;
  color: #f5e2cf;
}

p {
  margin: 0 auto;
  padding-left: 20px;
  font-family: Lexend Exa;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 45px;
}

a {
  margin: 0 auto;
  text-decoration: none;
  font-style: normal;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}

body {
  font-family: hind;
  background-color: #57626b;
  margin: 0px;
}

#home {
  width: 100%;
}

#bgimg {
  z-index: -10;
  position: absolute;
  width: 50%;
  height: 100%;
  left: -40px;
  top: 0;
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

.split {
  display: flex;
  flex-direction: row;
}

#left {
  width: 50%;
  padding-top: 20%;
  border-right: 1px solid #fb9a96;
  overflow: hidden;
}

#right {
  width: 50%;
}

.title {
  font-family: hind;
  font-style: normal;
  font-weight: normal;
  font-size: 300%;
  line-height: 1.2em;
}

#datsys {
  font-family: Lexend Exa;
  margin: 0 0.5em;
  color: #f95851;
}

#project {
  font-family: Lexend Exa;
  margin: 0 0.5em;
  color: #f5e2cf;
  margin-bottom: 0.8rem;
}

#lightnovel {
  margin-top: 1.5em;
  padding-bottom: 5em;
  font-size: 1rem;
  margin: 0 2.2em;
}

@media (max-width: 800px) {
  .gambar {
    width: 200%;
  }

  .split {
    flex-direction: column;
  }

  .split > * {
    flex-basis: 100%;
  }

  #left {
    width: 100%;
    padding-top: 20%;
  }

  #right {
    width: 100%;
  }

  #bgimg {
    width: 100%;
  }
}
</style>
