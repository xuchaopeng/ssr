<template>
  <div>Index</div>
</template>

<script>
export default {
  asyncData({ store }) {
    return store.dispatch('getCount');
  },
};
</script>

<style lang="scss" scoped></style>
