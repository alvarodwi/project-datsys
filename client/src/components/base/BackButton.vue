<template>
  <button
    class="py-4 px-4 flex justify-center items-center my-4 bg-sepia-500 hover:bg-sepia-700 focus:ring-sepia-500 focus:ring-offset-sepia-200 text-steel-500 w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
    @click="$router.go(-1)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
        fill="rgba(59,73,84,1)"
      />
    </svg>
    <span class="mx-2">Back</span>
  </button>
</template>

<script>
export default {
  name: "back-button",
  props: {
    routeName: {
      type: String,
    },
  },
};
</script>
