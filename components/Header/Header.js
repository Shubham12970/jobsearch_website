
export default function Header(props){
    return (
      <><nav className="bg-blue-200 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.svgrepo.com/show/261897/job-search-search.svg" className="w-8 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Welcome, {props.name}</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <p  className="text-sm  text-gray-800 dark:text-white hover:underline">{props.email}</p>
            <a href="/api/logout" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</a>
          </div>
        </div>
      </nav><nav className="bg-blue-100 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <a href="/" className="text-blue-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/profile" className="text-gray-900 dark:text-white hover:underline">Profile</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-900 dark:text-white hover:underline">About</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav></>

    )
    }