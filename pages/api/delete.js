import clientPromise from "../../lib/mongodb" 
import Cookies from "cookies";

export default async function handler(req, res){
    if(req.method == "POST"){
        const username=req.body['username']
        const client = await clientPromise;
          const db = client.db("Users");
          await db.collection("Profiles").deleteOne({"Username":username});
           const cookies = new Cookies(req, res)
           cookies.set('username')
           res.redirect("/")
    }else{
        res.redirect("/")
    }
}
