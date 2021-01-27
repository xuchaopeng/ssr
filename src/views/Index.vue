<template>
  <div>
    Index
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  asyncData({ store }) {
    return store.dispatch('getCount');
  },
};
</script>

<style lang="scss" scoped></style>
