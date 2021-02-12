<template>
  <div class="message-container">
    {{ message.message }}
  </div>
</template>

<script>
import ChatMessage from "../../models/ChatMessage";

export default {
  name: "ChatMessage",
  props: {
    message: ChatMessage,
  },
};
</script>

<style lang="scss" scoped>
.message-container {
  border-radius: 2px;
  border: 1px solid grey;
  padding: 1em;
}
</style>