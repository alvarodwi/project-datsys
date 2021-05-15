<template>
  <div>
    <div class="w-3/4 mx-auto">
      <back-button />
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto ">
        <div class="px-4 py-5 flex-auto bg-sepia-500 rounded-lg">
          <illustrator-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IllustratorForm from "../../components/crud/illustrator/IllustratorForm.vue";

export default {
  components: { IllustratorForm },
  name: "illustrator-create",
};
</script>
