<template>
  <div class="chat-container">
    <h3>{{nbComments }} Comment{{nbComments > 1 ? "s" : ""}}</h3>
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
  computed: {
    nbComments: function() {return this.chat.messages.length},
  }
};
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: antiquewhite;
  padding: 2em 3em;
  width: 100%;
  h3{
    text-align: start;
    text-decoration: none;
  }
}
</style>