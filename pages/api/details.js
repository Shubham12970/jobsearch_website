
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res){
    if(req.method == "POST"){
        const details= {
            fname: req.body['fname'],
            lname: req.body['lname'],
            address: req.body['address'],
            mobile: req.body['mobile'],
            city: req.body['city'],
            country: req.body['country'],
            postal: req.body['postal'],
            university: req.body['university'],
            course: req.body['course'],
            dept: req.body['dept'],
            spec: req.body['spec'],
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