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
// Specfic student Get
const specficstudent=async(req,res)=>{
  
    
    try {
        const _id=req.params.id
        console.log(typeof(id))
     
        let getdata1= await user_modules.find({_id:_id})
        res.status(201).send(getdata1) //koi bhi specfic data get  krne k liye
          
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
    
    
    }


    // Specfic student Delete
const studentDelete=async(req,res)=>{
    try {
        const _id=req.params.id
        console.log(typeof(id))
     
        let getdata1= await user_modules.findbyIdandDelete({_id:_id})
       // res.send("Delete Successfully")
        res.status(201).send(getdata1) //koi bhi specfic data delete  krne k liye
          
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
    
    }

module.exports={demoapi,getalluser,specficstudent,studentDelete}