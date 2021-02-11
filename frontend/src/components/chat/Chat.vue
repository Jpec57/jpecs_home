<template>
  <div class="chat-container">
        <ChatMessage
          v-for="(message) in messages"
          v-bind:key="message"
          :message="message"
        />

  </div>
</template>

<script>
import Chat from '../../models/Chat';
import ChatMessage from './ChatMessage.vue'

export default {
    name: "Chat",
    components: [
        ChatMessage
    ],
    props: { chat: Chat },
}
</script>

<style scoped>
</style>