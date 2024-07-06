import mongoose from "mongoose";

const AboutSchema= new mongoose.Schema({

    userid:{
        type: String
    },
    about:{
        type: String
    },

},
)

const about= mongoose.model('About', AboutSchema);

export default about;