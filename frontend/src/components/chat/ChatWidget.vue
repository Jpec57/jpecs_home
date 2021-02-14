<template>
  <div class="chat-container">
    <h3>{{nbComments }} Comment{{nbComments > 1 ? "s" : ""}}</h3>
    <ChatMessage
      v-for="message in chat.messages"
      v-bind:key="message"
      :message="message"
    />

<div class="new-message-container">
      <input type="text" v-model="username" placeholder="Your username"/>

    <textarea type="text" v-model="text" rows="5" placeholder="Type here your comment"/>
    <button>Send message</button>
</div>
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
  },
  data(){
    return {
      text: "",
      username: ""
    }
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
.new-message-container{
  input {
    text-align: start;
    width: 100%;
    margin-bottom: 1em;
    line-height: 2em;
  }
  textarea{
        border-radius: 5px;
    line-height: 2em;
    width: 100%;
    resize: none;
  }
  margin-top: 2em;
  button {
    color: white;
    background: #0f3057;
    width: 100%;
    padding: 0.5em;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>