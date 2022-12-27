import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        img1:{type:String,required:true},
        img2:{type:String,required:true},
        img3:{type:String,required:true},
        img4:{type:String,required:true},
        brand:{type:String,required:true},
        category:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,requiured:true},
        details:{type:String,required:true},
        rating:{type:Number,required:true},
        numreviews:{type:Number,required:true},
        actualprice:{type:Number,required:true}
    },
    {
        timestamps: true,
    }
);
const Product=mongoose.model('Product',productSchema);

export default Product;