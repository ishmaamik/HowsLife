import About from "../model/About.js";

export const userAbout= async(request, response)=>{
    try{
        let exist = await About.findOne({ userid: request.body.sub , about: request.body.about});

        if(exist) {
            response.status(200).json('about already exists');
            return;
        }

        const newAbout = new About(request.body);
        await newAbout.save();
        response.status(200).json(newAbout);
    }
    catch(error){

    }
}