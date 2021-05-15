<template>
  <div>
    <div class="w-3/4 mx-auto">
      <back-button />
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto ">
        <div class="px-4 py-5 flex-auto bg-sepia-500 rounded-lg">
          <release-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReleaseForm from "../../components/crud/release/ReleaseForm.vue";

export default {
  components: { ReleaseForm },
  name: "release-create",
};
</script>
