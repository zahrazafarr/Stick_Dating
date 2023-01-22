import { useState } from "react"

import Inbox from "./Inbox"

const Feed = () => {



    return (
        <>
            <Inbox/>

            <div className="flex flex-row h-screen mx-11 my-0 bg-orange-400">
                <h2 className="text-white text-2xl mx-auto mt-4 mr-11"><em>now sticking as</em> <span className="text-3xl">user.name</span></h2>
                <div className="px-20 py-11 -ml-9 -mr-9 bg-gray-50">
                <div className="bg-green-900">
                    <img src="" className="h-20 w-20 mx-auto"></img>
                </div>
                <button className=" bg-orange-400 hover:bg-red-600 text-white font-medium py-1 px-2 ml-3 mt-2 rounded-md">Logout</button>

                    <h1 className="text-2xl mt-5">Matches</h1>

                    

                </div>
            </div>
        
        </>
    )
}

export default Feed