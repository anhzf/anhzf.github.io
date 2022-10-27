<script lang="ts">
import { useMouse } from '@vueuse/core';
import anime from 'animejs/lib/anime.es';

const CursorFollower = defineComponent({
  name: 'CursorFollower',
  setup() {
    const mouse = reactive(useMouse());
    const state = reactive({
      pointer: false,
      click: false,
    });
    const instance = getCurrentInstance();
    const animate = () => {
      const el = instance?.vnode.el;

      if (el && !el.hidden) {
        anime({
          targets: el as HTMLElement,
          translateX: `calc(-45% + ${mouse.x}px)`,
          translateY: `calc(-40% + ${mouse.y}px)`,
          scale: state.click
            ? '-=0.6'
            : (state.pointer ? 1.6 : 1),
          opacity: state.pointer
            ? 0.5 : 1,
          easing: 'easeOutQuart',
          duration: 150,
        });
      }
    };

    watch([mouse, state], () => animate(), { immediate: true });

    onMounted(() => {
      document.body.onmouseover = (e) => {
        if (e.target && instance?.vnode.el) {
          const cursorType = window.getComputedStyle(e.target as HTMLElement).cursor;

          state.pointer = cursorType === 'pointer';
        }
      };
      document.onmousedown = () => {
        state.click = true;
      };
      document.onmouseup = () => {
        state.click = false;
      };
    });

    return () => h('div', {
      class: 'pointer-events-none opacity-0 absolute z-49 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full',
    });
  },
});

export default CursorFollower;
</script>


