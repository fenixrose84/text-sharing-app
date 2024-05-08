const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)

const Room = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: String,
})

module.exports = mongoose.model("Room", Room)