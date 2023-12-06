import SignupForm from './signupform';
export default function SignupPage(){
    return(
        <div className="min-h-screen bg-gray-200 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-100 shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'}} >
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                   <div className='ml-8 mt-6'><SignupForm /></div>
                </div>
            </div>
        </div>
    )
}