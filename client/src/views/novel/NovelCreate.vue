<template>
  <div>
    <div class="w-3/4 mx-auto">
      <back-button />
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto ">
        <div class="px-4 py-5 flex-auto bg-sepia-500 rounded-lg">
          <novel-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NovelForm from "../../components/crud/novel/NovelForm.vue";

export default {
  components: { NovelForm },
  name: "novel-create",
};
</script>
