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
      <input
        type="text"
        v-model="username"
        placeholder="Your username"
        @change="resetFormError"
      />

      <textarea
        v-model="text"
        rows="5"
        placeholder="Type here your comment"
        @change="resetFormError"
      />
      <div class="error" v-if="errors && errors.length > 0">
        <ul>
          <li v-for="err in errors" :key="err">{{ err }}</li>
        </ul>
      </div>
      <button @click="sendComment">Send message</button>
    </div>
  </div>
</template>

<script>
import CommentSectionModel from "../../models/CommentSectionModel";
import CommentView from "./CommentView.vue";
import {
  writeArticleComment,
  getArticleComments,
} from "../../services/repositories/comment_repo";
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
      errors: [],
      chat: new CommentSectionModel(this.$props.ref, []),
    };
  },

  methods: {
    async fetchComments() {
      var ref = this.$route.params.slug;
      await getArticleComments(ref).then((querySnapshot) => {
        if (!querySnapshot.empty) {
          var comments = [];
          querySnapshot.forEach((doc) => {
            var data = doc.data();
            comments.push(
              new CommentMessage(
                doc.id,
                new User(data.user, data.user),
                data.message
              )
            );
          });
          this.chat.messages = comments;
        }
      });
    },
    resetFormError: function () {
      this.errors = [];
    },
    validateForm: function () {
      var errors = [];
      if (!this.username || this.username.length < 2) {
        errors.push("The username must contain at least 3 characters.");
      }
      if (!this.text || this.text.length < 5) {
        errors.push("Your comment must contain at least 5 characters.");
      }
      this.errors = errors;
      return errors.length == 0;
    },
    sendComment: function () {
      if (this.validateForm()) {
        console.log("Message :" + JSON.stringify(this.$props));
        var ref = this.$route.params.slug;
        var comment = new CommentMessage(
          0,
          this.$data.username,
          this.$data.text
        );
        this.text = "";
        writeArticleComment(ref, comment).then(() => this.fetchComments());
      }
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
ul {
    list-style-type: none;
}
</style>