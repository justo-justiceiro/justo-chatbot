<template>
  <div class="justo">
    {{helo}}
    <h1>Olá eu sou Justo, o Justiceiro do Dinheiro</h1>
    <chat :client="teste"></chat>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from '@/components/Chat.vue';

export default {
  name: 'justo',
  components: {
    Chat,
  },
};
</script>
