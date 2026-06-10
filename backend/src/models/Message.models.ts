import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true,
    },
     sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    messageType: {
      type: String,
      enum: [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      default: "text",
    },

    deliveredTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    seenBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// messageSchema.index({
//   conversationId: 1,
//   createdAt: -1,
// });



const Message = mongoose.model("Message", MessageSchema);
export default Message;