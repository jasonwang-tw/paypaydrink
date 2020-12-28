<template>
  <div class="content">
    <h1>This is an about page</h1>
    <contentmsg msg="Welcome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import contentmsg from '@/components/contentmsg.vue';

export default {
  // name: 'content',
  components: {
    contentmsg,
  },
};
</script>
