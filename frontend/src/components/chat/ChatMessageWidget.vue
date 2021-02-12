<template>
  <div class="message-container">
        <div class="rounded-profile-pic">
      <img src="/images/profile_rounded.jpg" alt="profile-pic"/>
    </div>
    <div class="message-header">
      {{message.userId}}
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
  .rounded-profile-pic{
    max-width: 40px;
    position: relative;
        top: -15px;
    left: -20px;
    img {
      max-width: 40px;
          position: relative;

    }
}
.message-content{
  padding: 0.5em 1em;
  text-align: start;
}
}


</style>