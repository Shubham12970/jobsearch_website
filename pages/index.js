import Layout from '../components/layout/Layout'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import { getCookie } from 'cookies-next';
import clientPromise from '../lib/mongodb';

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

    const url = 'https://jsearch.p.rapidapi.com/search?query=Electrical%20Engineer%20in%20Delhi%2C%20India%20&page=2&num_pages=1&radius=200';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d0af16280mshec4c0cfdbb2816ap1acc11jsn117cbef80439',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

	const response = await fetch(url, options);
	const resp = await response.json();
    const result= resp.data;
    return {props:{result,username:username, email: email}}
};

export default function HomePage({result,username,email} ) {
   
    return (
        <Layout pageTitle="Home">
            {username &&
            <>
        <Header 
        name= {username}
        email={email}
        />
         <main className="">
    
      <div className="px-4">
        <div className="my-5">
          <h2 className=" text-lg font-semibold text-gray-900">NEW JOBS</h2>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
          {result.map((result)=>{
            let logo=true;
            if(result.employer_logo == null){
                logo=false;
            }
            return (
               <div className="mb-6 rounded-lg bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">    
                <img className="mr-2 h-10 w-10 rounded-full object-cover" src={logo?result.employer_logo:"/assets/jobimg.svg"} alt="profile" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{result.employer_name}</h3>
                  <span className="block text-xs font-normal text-gray-500">{result.job_title}</span>
                  <span className="block text-xs font-normal text-gray-500">{result.employer_company_type}</span>
                  <span className="block text-xs font-normal text-gray-500">{result.job_employment_type}</span>
                </div>
              </div>
              <a href={result.job_apply_link} className="text-sm font-medium text-indigo-500"><span className="mr-0.5">+</span>Apply</a>
            </div>
            <p className="my-6 text-sm font-normal text-gray-500">{result.job_description.slice(0,400)}<span className="mx-2 font-large text-gray-700">...</span></p>
            <h3 className="text-base font-semibold text-gray-900"><a href={result.employer_website}>{result.employer_website}</a></h3>
            <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-5 w-5 text-base text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
                <span className="mr-1">{result.job_city}</span> , {result.job_country}
              </div>
              <div className="flex items-center">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="" />
                <a className="mx-1" href={result.job_google_link}>Google Link</a>
              </div>
            </div>
          </div> 
            )
          })}
          
        </div>
      </div>
    </main>
        
        <Footer />
        </>}
        </Layout>
    );
}


