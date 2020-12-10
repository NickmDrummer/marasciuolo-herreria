<template>
  <video autoplay loop muted id="myVideo">
    <source src="../assets/blue.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  z-index: -100;

  background-size: cover;
}
</style>
