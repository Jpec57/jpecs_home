var slugify = require('slugify')

export default class Article {
  constructor(id, title, preview, body, createdAt) {
    this.id = id;
    this.title = title;
    this.preview = preview;
    this.body = body;
    this.createdAt = createdAt;
  }

  get slug() {
    return slugify(this.title, {
      replacement: '-',  // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true,      // convert to lower case, defaults to `false`
      strict: false,     // strip special characters except replacement, defaults to `false`
      locale: 'en'       // language code of the locale to use
    });
  }

}