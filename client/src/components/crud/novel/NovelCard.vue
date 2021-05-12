<template> 
 <a class = "card" href="http://lndb.info/light_novel/Adachi_to_Shimamura">
        <img class = "card-image" src="../../../assets/img/adachi.jpeg" alt="adachi">
        <div class = "card-content">
            <h2 class = "card-title">Adachi to Shimamura </h2>
            <p id="info">安達としまむら<br><br></p>
            <p id="info">by Hitoma Iruma, Non</p>
           <div id="datevol">
            <p class = "card-date">last released on 10/10/2020</p>
            <div class = "card-vol">
                <p id="info">9 volumes</p>
            </div>
           </div>
        </div>
    </a>
</template>

<style scoped>
a{
    margin: 0 auto;
    text-decoration: none;
    font-style: normal;
    font-weight: 100;
    font-variant-ligatures: normal;
    font-size: 2rem;
    letter-spacing: 1px;
}
.card{
    font-size: 12px;
    margin: 32px auto;
    width: 60%;
    height: min-content;
    border-radius: 8px;
    background-color : #F5E2CF;
    display :flex;
    overflow: hidden;
    transition: transform 500ms ease;
}

.card-image{
    width: 200px;
    flex: 1;
    margin: 20px 16px;
    float: left;
}

.card-content{
    --padding : 1.5rem;
    width: 70%;

    margin :0;
    padding :  1.5rem;
}

.card-title{
    font-size: 2em;
    margin-top: 8px;
    margin-bottom: 20px;
    color: #3B4954;
    width: max-content;
    position: relative;
    text-align:left;
    overflow-y: visible;
}

#datevol{
    display: flex;
    padding-top: 15%
}

.card-date{
    float : left;
    flex : 1;
    color: #3B4954;
    text-align: left;
}

.card-vol{
    float : right;
    color: #3B4954;
    padding: 8px;
    background-color: #D8C6B4;
    border: 0px solid #fff;
    border-radius: 8px;
    text-align: center;
}

#info{
    color : #3B4954;
}

@media (hover){
    .card:hover, 
    .card:focus-within{
        transform: scale(1.025);
    }

    .card-content {
        transform: translateY(35%);
        transition: transform 500ms ease;
    }

    .card:focus-within .card-content{
        transition-duration: 0ms;
    }
    
    .card:hover .card-content,
    .card:focus-within .card-content{
        transform: translateY(0);
        transition-delay: 500ms;
    }
    
    .card-content > *:not(.card-title){
        opacity: 0;
        transition: opacity 500ms linear;
    }
    
    .card:hover .card-content > *,
    .card:focus-within .card-content > * {
        opacity: 1;
        transition-delay: 750ms;
    }

    .card-title::after{
        content: "";
        position: absolute;
        left: calc(var(--padding) * -1);
        bottom: -8px;
        height: 3px;
        width: calc(100% + var(--padding));
        background: #3B4954;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
    }
    
    .card:hover .card-title::after,
    .card:focus-within .card-title::after{
        transform: scaleX(1);
    }
}

@media (max-width: 768px) {
    .card{
        flex-direction: column;
    }

    .card-content p{
        display: none;
    }

    .card-title{
        width: auto;
        margin: auto;
        font-size: 1.5em;
    }
    
    .card-image{
        width: 90%;
        margin: 32px auto;
    }

    #datevol{
        display: none;
    }
}
</style>
