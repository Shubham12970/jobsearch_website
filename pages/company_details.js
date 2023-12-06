import { getCookie } from "cookies-next";
export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username} };
  };

export default function Company(username){
    return (
<section className=" py-1 bg-blueGray-50">
<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
        <h6 className="text-blueGray-700 text-xl font-bold">
          Fill the details below to proceed
        </h6>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form className="pb-4" method="POST" action="/api/details_company">
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Company Information
        </h6>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                UserName
              </label>
              <input name="username" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={username.username} readOnly/>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Company Name
              </label>
              <input name="company_name" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
            </div>
          </div>
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Company Address
              </label>
              <input  name="company_address" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Company Email
              </label>
              <input name="company_email" type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Contact No.</label>
              <input name="contact" type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          </div>
        </div>
      

        <hr className="mt-6 border-b-1 border-blueGray-300"/>

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          About The Company
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <textarea name="about" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" />
            </div>
          </div>
        </div>
        <button  className="absolute right-12  bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
</section>
    )
}