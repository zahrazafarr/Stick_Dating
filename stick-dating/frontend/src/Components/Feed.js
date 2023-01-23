import { useState } from "react"

import Inbox from "./Inbox"

const Feed = () => {



    return (
        <>
            <Inbox/>

            <div className="flex flex-row h-screen mx-11 my-0 bg-orange-400">
                <h2 className="text-white text-2xl mx-auto mt-4 mr-14"><em>now sticking as</em> <span className="text-3xl">user.name</span></h2>
                <div className="px-32 py-10 -ml-7 -mr-11 bg-gray-50 shadow-lg shadow-rose-900">
                <div className="bg-green-900">
                    <img src="" className="h-20 w-20 mx-auto"></img>
                </div>
                <button className=" bg-orange-400 hover:bg-red-600 active:bg-red-900 text-white font-medium py-1 px-2 ml-3 mt-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none">Logout</button>

                    <h1 className="text-2xl mt-5">Matches</h1>

                    

                </div>
            </div>
        
        </>
    )
}

export default Feed