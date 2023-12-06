import clientPromise from "../../lib/mongodb"

export default async function handler(req, res){
    if(req.method == "POST"){
        const username=req.body['username']
        console.log(username)
        const client = await clientPromise;
          const db = client.db("Users");
          await db.collection("Profiles").deleteOne({"Username":username})
          res.redirect("/success")
    }else{
        res.redirect("/")
    }
}
