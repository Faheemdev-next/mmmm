import mongoose, { Schema, models } from "mongoose";

const LinkSchema = new Schema({
  title: {
    type: String,
    required: true, // e.g., "Instagram", "Portfolio", etc.
  },
  url: {
    type: String,
    required: true, // e.g., "https://instagram.com/username"
  },
});

const UserProfileSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password :{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    links: {
      type: [LinkSchema], // array of link objects
      default: [], // avoid undefined
    },
  },
  { timestamps: true }
);

// Prevent re-compilation in Next.js (important for hot reload)
const UserProfile =
  models.UserProfile || mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile;
