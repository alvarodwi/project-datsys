<template>
  <div>
    
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto ">
        <div class="px-4 py-5 flex-auto bg-sepia-500 rounded-lg">
          <author-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorForm from "../../components/crud/author/AuthorForm.vue";

export default {
  components: { AuthorForm },
  name: "author-create",
};
</script>
