<template>
  <div class="message-container">
    <div class="message-header">
      <img
        src="/images/profile_rounded.jpg"
        alt="profile-pic"
        class="rounded-profile-pic"
      />

      <span>ICI{{ message.userId }}</span>
    </div>
    <div class="message-content">
      {{ message.message }}
    </div>
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
  margin-top: 1em;
  text-align: start;

  .message-header {
    display: flex;
    background-color: #e4e4e4;
    text-align: start;
    padding: 0.5em 0.5em;
    span {
      margin-left: 1em;
      margin-top: 0.5em;
    }
  }
  .rounded-profile-pic {
    max-width: 40px;
    //   position: relative;
    //   top: -0.8em;
    //   left: -1em;

    //   img {
    //     max-width: 40px;
    //     position: relative;
    //   }
  }
  .message-content {
    padding: 0.5em 1em;
    text-align: start;
  }
}
</style>