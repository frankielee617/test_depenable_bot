<script>
    import Carousel from 'svelte-carousel'

    let carousel;

function showPrevPage(e){
    carousel.goToPrev({ animated: true })
}
function showNextPage(e){
    carousel.goToNext({ animated: true })
}

</script>

<div>
  <Carousel
  bind:this={carousel}
    autoplay
  autoplayDuration={5000}
  autoplayProgressVisible
  pauseOnFocus
  >
  <div slot="prev" on:click={showPrevPage} class="slider-butt-prev">
        {"<"}
  </div>

  <div style={`width:100%; aspect-ratio: 16/7;`}>
    <div style={`background: #fff url('/icon_analysis.svg')center center / contain no-repeat; width:100%; height:100%`}></div>
  </div>

  <div slot="next" on:click={showNextPage} class="slider-butt-next">
    {">"}
  </div>
  </Carousel>
</div>

  <style>
    .slide{
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    }
    .slider-butt-prev{
    background: #000000a1;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 2rem;
    cursor: pointer;
    }
    .slider-butt-next{
    background: #000000a1;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 2rem;
    cursor: pointer;
    right:0;
    }
  </style>