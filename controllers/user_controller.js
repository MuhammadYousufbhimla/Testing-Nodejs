//Function of democode API
const user_modules=require('../modules/user_modules')
 
const demoapi=async(req,res)=>{
// res.send("Hello My First API");

try {
    const addstd = new user_modules(req.body)
    // console.log(addstd);
    let insertstd = await addstd.save();
    res.status(201).send(insertstd) //koi bhi data insert krne k liye
        //status uska 201 hona chahye
} catch (e) {
    console.log(e)
    res.status(400).send(e)
}


}

// getAll student 
const getalluser=async(req,res)=>{
    // res.send("Hello My First API");
    
    try {
       // const addstd = new student_model(req.body)
        // console.log(addstd);
        let getdata = await user_modules.find({});
        res.status(201).send(getdata) //koi bhi data get krne k liye 
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
    
    
    }

module.exports={demoapi,getalluser}