<template>
  <div>
    <div class="w-3/4 mx-auto">
      <back-button />
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto ">
        <div class="px-4 py-5 flex-auto bg-sepia-500 rounded-lg">
          <label-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelForm from "../../components/crud/label/LabelForm.vue";

export default {
  components: { LabelForm },
  name: "label-create",
};
</script>
