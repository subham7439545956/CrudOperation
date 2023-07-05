var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var chatSchema = new Schema({
  roomId: {
    type: String,
    require: true,
  },
  chats: {
    type: Array,
    user: {
      type: String,
      require: true,
    },
    message: {
      type: String,
    },
    imgMssg: {
      type: String,
    },
    created_at: { type: Date, default: new Date() },
  },
});

module.exports = mongoose.model("Chats", chatSchema);
