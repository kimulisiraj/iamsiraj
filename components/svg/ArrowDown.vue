<template>
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    aria-labelledby="arrowDownIconTitle"
    stroke="#fff"
    stroke-width="1"
    stroke-linecap="square"
    stroke-linejoin="miter"
    fill="none"
    color="#fff"
    class="bounce"
  ><title id="arrowDownIconTitle">Arrow Down</title>
    <path d="M6 15l6 6 6-6" />
    <path d="M12 3v17" />
    <path stroke-linecap="round" d="M12 21v-1" />
  </svg>
</template>

<script>
export default {
  name: 'ArrowDown'
}
</script>

<style scoped>
  .bounce{
    animation: bounce 1s infinite 2s ease-in-out alternate;
  }
  @keyframes bounce {
    from {
      transform:translateY(0) scale(1);
    }
    to {
      transform:translateY(20%) scale(.9);
    }
  }
</style>
