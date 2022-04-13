<template>
  <v-app>
    <notifications id="my-notification" group="notification" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import { notify } from '@kyvg/vue3-notification'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    let queue1 = computed(() => store.getters['notification/queue'])

    watch(
      queue1,
      (queue) => {
        let queueTop = queue[queue.length - 1]
        notify({ ...queueTop, group: 'notification' })
      },
      {
        immediate: true,
        deep: true,
      }
    )
  },
}
</script>
<style lang="scss">
#my-notification {
  margin: 5px;
}

.vue-notification-wrapper {
  .notification-title {
    font-size: 18px;
  }

  .notification-content {
    font-size: 16px;
  }
}
</style>
