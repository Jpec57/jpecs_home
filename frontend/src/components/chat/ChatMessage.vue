<template>
  <div>
      Ceci est un message
  </div>
</template>

<script>
import ChatMessage from '../../models/ChatMessage';

export default {
    name: "ChatMessage",
    props: {
      message: ChatMessage
    }
}
</script>

<style>

</style>