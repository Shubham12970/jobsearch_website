
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res){
    if(req.method == "POST"){
        const details= {
          company_name: req.body['company_name'],
          company_address: req.body['company_address'],
          company_email: req.body['company_email'],
          contact: req.body['contact'],
          about: req.body['about']
        }
        const username=req.body['username']
        const client = await clientPromise;
          const db = client.db("Users");
          await db.collection("Profiles").updateOne({"Username":username},{$set:{details}})

          res.redirect("/")

    }else{
        res.redirect("/")
    }
}