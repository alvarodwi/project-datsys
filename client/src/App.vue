<template>
  <div id="app">
    <header>
        <nav>
            <ul>
                <li><router-link to="/novel" class="styled">Novel</router-link></li>
                <li><router-link to="/novel" class="styled">Author</router-link></li>
                <li><router-link to="/novel" class="styled">Illustrator</router-link></li>
                <li><router-link to="/novel" class="styled">Label</router-link></li>
            </ul>
        </nav>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>

<style>
header{
    font-family: hind;
    background: #3B4954;
    text-align: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    width: 100%;
}

.styled{
    font-size: 120%;
    padding: none;
    min-width: max-content;
    border: 0;
    outline: 0;
    color: #F5E2CF;
    cursor: pointer;
    transition: all 0.15s ease-out;
    background-color: transparent;
}

.styled:active{
    padding: 10%;
    color: #3B4954;
    cursor: pointer;
    background-color: #F5E2CF;
    border-radius: 10px;
}

nav{
    background: #3B4954;
    position: absolute;
    text-align: center;
    align-items: center;
    width: 100%;
    top: 100%;
    left: 0;
}

nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
}

nav li{
    margin: 1em 2.5%;
}

@media (hover){
    .styled:hover{
        padding: 10%;
        color: #3B4954;
        cursor: pointer;
        transition: all 0.15s ease-out;
        background-color: #F5E2CF;
        border-radius: 10px;
    }
}
</style>