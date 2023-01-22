import { useState } from "react"

const Inbox = () => {

    const [messageBox, setMessageBox] = useState(null)

    return (
        <>
            <div className="flex flex-row h-screen absolute mx-11">
                <div className="px-20 py-11 -ml-11 bg-gray-50 shadow-lg shadow-rose-900">
                    <h1 className="text-2xl text-center">Messages</h1>

                    <div className="allmessageshere">

                    </div>

                    <div className="mt-11 ml-8">
                    <input value={messageBox} onChange={(e) => setMessageBox(e.target.value)}/>
                    </div>

                    <button className="text-white bg-orange-400 active:bg-green-700 uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none hover:bg-green-400 focus:outline-none mr-1 mb-1 ml-44 mt-4">send</button>
                </div>
            </div>

        </>
    )
}

export default Inbox