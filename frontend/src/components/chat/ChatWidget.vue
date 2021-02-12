<template>
  <div class="chat-container">
    <h3>Comment section</h3>
    <ChatMessage
      v-for="message in chat.messages"
      v-bind:key="message"
      :message="message"
    />
  </div>
</template>

<script>
import Chat from "../../models/Chat";
import ChatMessage from "./ChatMessageWidget.vue";

export default {
  name: "Chat",
  components: { ChatMessage },
  props: { chat: Chat },
};
</script>

<style lang="scss" scoped>
.chat-container {
  background-color: antiquewhite;
  padding: 1em;
}
</style>