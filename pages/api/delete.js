import clientPromise from "../../lib/mongodb"
import Cookies from "cookies";

export default async function handler(req, res){
    if(req.method == "POST"){
        const cookies = new Cookies(req, res)
        const username=req.body['username']
        console.log(username)
        const client = await clientPromise;
          const db = client.db("Users");
          await db.collection("Profiles").deleteOne({"Username":username})

          res.redirect("/home")
    }else{
        res.redirect("/")
    }
}
