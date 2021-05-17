<template>
  <router-link class="card" :to="'/novel/' + novel.id">
    <img class="card-image" :src="novel.coverUrl" :alt="novel.title" />
    <div class="card-content">
      <h2 class="card-title">{{ novel.title }}</h2>
      <p id="info">{{ novel.jpTitle }}<br /><br /></p>
      <p
        id="info"
        v-if="!_.isEmpty(novel.author) && !_.isEmpty(novel.illustrator)"
      >
        by
        <router-link :to="'/author/' + novel.author.id"
          ><span class="text-2xl">{{ novel.author.name }}</span></router-link
        >,
        <router-link
          class="text-sm"
          :to="'/illustrator/' + novel.illustrator.id"
          ><span class="text-2xl">{{
            novel.illustrator.name
          }}</span></router-link
        >
      </p>
      <p id="info" v-else>
        by unknown
      </p>
      <p id="info" v-if="!_.isEmpty(novel.label)">
        published on
        <router-link :to="'/label/' + novel.label.id">
          <span class="text-2xl">{{ novel.label.name }}</span>
        </router-link>
      </p>
      <p id="info" v-else>
        published on unknown
      </p>
      <div id="datevol" v-if="!_.isEmpty(novel.releases)">
        <p class="card-date">
          last released on
          {{ dayjs(novel.lastRelease).format("MMMM DD, YYYY") }}
        </p>
        <div class="card-vol">
          <p id="info">{{ novel.volumeCount }} volumes</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    novel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
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
.card {
  font-size: 12px;
  margin: 32px auto;
  width: 75%;
  height: min-content;
  border-radius: 8px;
  background-color: #f5e2cf;
  display: flex;
  overflow: hidden;
  transition: transform 500ms ease;
}

.card-image {
  object-fit: contain;
  width: 200px;
  flex: 1;
  margin: 20px 16px;
  float: left;
}

.card-content {
  --padding: 1.5rem;
  width: 70%;
  margin: 0;
  padding: 1.5rem;
}

.card-title {
  white-space: wrap;
  display: block;
  word-wrap: break-word;
  text-overflow: ellipsis;
  font-size: 2.5em;
  margin-top: 8px;
  margin-bottom: 20px;
  color: #3b4954;
  width: 100%;
  position: relative;
  text-align: left;
  /*overflow: hidden;*/
}

#datevol {
  display: flex;
  padding-top: 15%;
}

.card-date {
  float: left;
  flex: 1;
  color: #3b4954;
  text-align: left;
}

.card-vol {
  float: right;
  color: #3b4954;
  padding: 8px;
  background-color: #d8c6b4;
  border: 0px solid #fff;
  border-radius: 8px;
  text-align: center;
}

#info {
  color: #3b4954;
}

@media (hover) {
  .card:hover,
  .card:focus-within {
    transform: scale(1.025);
  }

  .card-content {
    transform: translateY(35%);
    transition: transform 500ms ease;
  }

  .card:focus-within .card-content {
    transition-duration: 0ms;
  }

  .card:hover .card-content,
  .card:focus-within .card-content {
    transform: translateY(0);
    transition-delay: 500ms;
  }

  .card-content > *:not(.card-title) {
    opacity: 0;
    transition: opacity 500ms linear;
  }

  .card:hover .card-content > *,
  .card:focus-within .card-content > * {
    opacity: 1;
    transition-delay: 750ms;
  }

  .card-title::after {
    content: "";
    position: absolute;
    left: calc(var(--padding) * -1);
    bottom: -8px;
    height: 3px;
    width: calc(100% + var(--padding));
    background: #3b4954;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }

  .card:hover .card-title::after,
  .card:focus-within .card-title::after {
    transform: scaleX(1);
  }
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .card-content p {
    display: none;
  }

  .card-title {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: -40px;
    font-size: 1.5em;
  }

  .card-image {
    margin: 32px auto;
  }

  .card-content {
    transform: translateY(0);
    transition: transform 500ms ease;
  }

  .card:focus-within .card-content {
    transition-duration: 0ms;
  }

  .card:hover .card-content,
  .card:focus-within .card-content {
    transform: translateY(0);
    transition-delay: 500ms;
  }

  #datevol {
    display: none;
  }
}
</style>
