import mongoose from "mongoose";

const UserSchema =new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            trim: true,
            minlength:3,
            maxlength:11,
        },
        email:{
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            unique:true,
            required:true,
            type: String,
            minlength:6,
        },
        avatar:{
            type:String,
            default: ""
        },
        bio:{
            type:String,
            default:""
        },
        status:{
            type:Date,
            default: Date.now
        },
    },{timestamps: true,}
);

// userSchema.index({ email: 1 });     //if we don't use unique:true in email schema
const User = mongoose.model("User", UserSchema);
export default User;