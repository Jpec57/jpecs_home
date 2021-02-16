<template>
  <div class="chat-container">
    <h3>{{ nbComments }} Comment{{ nbComments > 1 ? "s" : "" }}</h3>
    <CommentView
      v-for="message in chat.messages"
      v-bind:key="message"
      :message="message"
    />

    <div class="new-message-container">
      <h3>New comment</h3>
      <input type="text" v-model="username" placeholder="Your username" />

      <textarea v-model="text" rows="5" placeholder="Type here your comment" />
      <button @click="sendComment">Send message</button>
    </div>
  </div>
</template>

<script>
import CommentSectionModel from "../../models/CommentSectionModel";
import CommentView from "./CommentView.vue";
import { writeArticleComment, getArticleComments } from "../../services/repositories/comment_repo";
import CommentMessage from "../../models/CommentMessage";
import User from "../../models/User";

export default {
  name: "CommentSection",
  components: { CommentView },
  props: { ref: String },
  computed: {
    nbComments: function () {
      return this.chat.messages.length;
    },
  },
  data() {
    return {
      username: "",
      text: "",
      chat: new CommentSectionModel(this.$props.ref, []),
    };
  },

  methods: {
    async fetchComments() {
    
      var ref = this.$route.params.slug;
      await getArticleComments(ref)
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            var comments = [];
            querySnapshot.forEach((doc) => {
              var data = doc.data();
              comments.push(new CommentMessage(doc.id, new User(data.user, data.user), data.message))
            });
            this.chat.messages = comments;
          }
        });
    },
    sendComment: function () {
      console.log("Message :" + this.$props);
            var ref = this.$route.params.slug;
      writeArticleComment(
        ref,
        new CommentMessage(0, this.$data.username, this.$data.text)
      ).then(()=> this.fetchComments());
      return;
    },
  },
  async mounted() {
    this.fetchComments();
  },
};
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: #e2e2e2;
  padding: 2em 3em;
  width: 100%;
  h3 {
    text-align: start;
    text-decoration: none;
  }
}
.new-message-container {
  input {
    text-align: start;
    width: 100%;
    margin-bottom: 1em;
    line-height: 2em;
  }
  textarea {
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