import Cookies from 'cookies'
import clientPromise from "../../lib/mongodb";
const {createHash} = require('node:crypto');

export default async function handler(req, res) {
  if (req.method == "POST"){
    const username = req.body['username']
const password = req.body['password']
const email=req.body['email']
const usertype= req.body['usertype']
const passwordagain = req.body['passwordagain']
if (password != passwordagain){
    res.redirect("/error?msg=The two passwords do not match.");
    return;
}
const client = await clientPromise;
const db = client.db("Users");
const users = await db.collection("Profiles").find({"Username": username}).toArray();
if (users.length > 0){
    res.redirect("/error?msg=Username already exists");
    return;
}
const password_hash = createHash('sha256').update(password).digest('hex');
const currentDate = new Date().toUTCString();

const bodyObject = {
    Username: username,
    Email: email,
    Password: password_hash,
    UserType: usertype,
    Created: currentDate
    
}


await db.collection("Profiles").insertOne(bodyObject);

const cookies = new Cookies(req, res)
cookies.set('username', username)
if(usertype=="candidate"){
res.redirect("/personal-details")
}else{
res.redirect("/company_details")
}

} else {
res.redirect("/")
}
}