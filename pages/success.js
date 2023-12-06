export default function Success(){
    return(
        <div className="w-full md:w-1/3 mx-auto">
        <div className="flex flex-col p-5 rounded-lg shadow bg-white">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-4 bg-white rounded-full">
                <img src="https://www.svgrepo.com/show/491895/success.svg"  alt="" /> 
            </div>
            <h2 className="mt-2 font-semibold text-gray-800">User successfully deleted</h2>
            </div>
      
          <div className="flex items-center mt-3">
            <button className="flex-1 px-4 py-2 bg-green-300 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            <a href="/">Continue</a>
            </button>  
          </div>
        </div>
      </div>
    )
}