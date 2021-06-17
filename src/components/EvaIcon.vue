<template>
  <i
    :data-eva="name"
    :data-eva-fill="fill"
    :data-eva-width="width"
    :data-eva-height="height"
    :data-eva-animation="animation"
  />
</template>

<script lang="ts">
import {
  defineComponent, onMounted, watch,
} from 'vue';
import * as eva from 'eva-icons';

const options: eva.ReplaceOptions = {
  class: 'fill-current',
};

export default defineComponent({
  name: 'EvaIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: '1rem',
    },
    height: {
      type: [String, Number],
      default: '1rem',
    },
    animation: {
      type: String,
      default: undefined,
    },
    fill: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    watch(() => props, () => eva.replace(options));
    onMounted(() => eva.replace(options));
  },
});
</script>
