import Cookies from "cookies"
export default  function handler(req,res){
    if(req.method=="POST"){
        const admin= req.body['admin_name']
        const admin_password=req.body['admin_password']
        if(admin == process.env.ADMIN_NAME && admin_password == process.env.ADMIN_PASSWORD){
        const cookies = new Cookies(req, res)
        cookies.set('admin',admin)
        res.redirect("/users-data")
        }else{
            res.redirect("/login-admin?msg=Incorrect Admin username or password.");
        }
        

    }else{
        res.redirect("/")
    }
}