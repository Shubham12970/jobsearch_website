import Link from "next/link"
import Footer from "../components/Footer/Footer"
import Layout from "../components/layout/Layout"
import { getCookie } from "cookies-next"
import clientPromise from "../lib/mongodb"

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/home"
            }
        }
    }
    const client = await clientPromise;
    const db = client.db("Users");
    const users = await db.collection("Profiles").find({"Username": username}).toArray();
    const userdoc=users[0]
    const email=userdoc['Email']
    const detail=userdoc['details']
    const details=JSON.parse(JSON.stringify(detail))
    return {props:{username:username, email: email,details}}
};

export default function Profile({username,email,details}){
    return(
        <Layout pageTitle="profile">
         <header className="w-full mt-5 text-gray-700 bg-blue-200 border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
           
            <nav className="flex flex-wrap items-center justify-center  text-base border-gray-200 md:mr-auto">
                <Link href="/" className="mr-5 font-medium hover:text-gray-900">Home</Link>
                <Link href="/about" className="mr-5 font-medium hover:text-gray-900">About</Link >
                <Link href="/contact" className="font-medium hover:text-gray-900">Contact</Link >
            </nav>
            <div className="items-center h-full">
                <Link href="/"
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-400 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                    Back
                </Link >
            </div>
        </div>
    </header>

    <div className="p-16"><div className="p-8 bg-white shadow mt-12"> 
    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
<a href="/personal-details">
<button
  className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Edit
</button></a>
<form action="/api/delete" method="POST">
    <input className="hidden" name="username" value={username} readOnly/>
    <button type="submit"
  className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Delete Account
</button></form>
    </div>
  
                 <div className="mt-10 text-center border-b pb-12">   
                  <h1 className="text-4xl font-medium text-gray-700">{details.fname+" "+details.lname}</h1>
                   <p className="font-light text-gray-600 mt-3">{details.address+", "+details.city+", "+details.country}</p>  
                   <h4 className="text-l font-medium text-gray-700">{email}</h4>
                   <h4 className="text-l font-medium text-gray-700">{details.mobile}</h4>
                     <p className="mt-8 text-gray-700">{details.dept+" - "+details.dept}</p> 
                     {details.spec && <p className="mt-2 text-gray-700">{"Specializing in : "+details.spec}</p> }
                      <p className="mt-2 text-gray-700">{details.university}</p>  </div>  <div className="mt-12 flex flex-col justify-center">  
                        <p className="text-gray-600 text-center font-light lg:px-16">{details.about}</p>  
                  </div></div></div>
    <Footer />
</Layout>
    )

}