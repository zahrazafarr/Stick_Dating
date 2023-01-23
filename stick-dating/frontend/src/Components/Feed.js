import { useState } from "react"

import Card from 'react-tinder-card'
import Inbox from "./Inbox"


const Feed = () => {

    const activeUsers = [
        {
         name: 'Thanos',
         url: 'https://f8n-ipfs-production.imgix.net/QmNQguXHVJnxWQG6A332UxUmGcoBpVAgJu19dpxCsBUSJZ/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max'
        },
        {
            name: 'Slipknot',
            url: 'https://live.staticflickr.com/5316/5911914864_fddcfe202e_c.jpg'
        },
        {
          name: 'Bella H.',
          url: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/08/1200/675/bellahadid.jpg?ve=1&tl=1'
        },
        {
            name: 'Hugh H.',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Hugh_Hefner_Glamourcon_2010.jpg'
        },
        {
            name: 'Jason V.',
            url: 'https://i.etsystatic.com/18914926/r/il/f14381/2237038285/il_fullxfull.2237038285_romt.jpg'
        },
        {
            name: 'Spongebob S.',
            url: 'https://assets.nick.com/uri/mgid:arc:imageassetref:nick.com:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true'
        },
        {
            name: 'Mia G.',
            url: 'https://pbs.twimg.com/profile_images/1507034016310046726/ZwOWlvfw_400x400.jpg'
        },
        {
            name: 'Miles T.',
            url: 'https://i.pinimg.com/564x/f0/9b/3e/f09b3e74112bcf25d32b51901bb2f7b5.jpg'
        },
    ]     

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + 'not on screen')
    }

    return (
        <>
            <Inbox/>

            <div className="flex flex-row h-screen my-0 ml-80 bg-orange-400 overflow-hidden overflow-x-hidden">
                
            <div className="mt-24 ml-44 px-44 mr-11 mb-11">
                {activeUsers.map((activeUsers) =>
                    <Card className="flex flex-wrap-reverse absolute w-44 h-96 px-44 py-72 shadow-xl shadow-rose-700 rounded-xl bg-white" 
                    key={activeUsers.name} 
                    onSwipe={(dir) => swiped(dir, activeUsers.name)} 
                    onCardLeftScreen={() => outOfFrame(activeUsers.name)}>
                        <div style={{backgroundImage: 'url('+ activeUsers.url +')'}} className="pl-56 pt-72 pb-11 mt-44 rounded-xl bg-white h-11 w-11 mr-72 bg-contain">
                        </div>
                        <h3 className="absolute text-orange-300 text-4xl mt-44 mr-11">{activeUsers.name}</h3>
                    </Card> 
                )}
           </div>
               
                
                <h2 className="text-white text-1xl  mt-6 pr-14"><em>now sticking as</em> <span className="text-2xl">Zahra</span></h2>

                <div className="px-32 py-10 -ml-7 -mr-11 bg-gray-50 shadow-lg shadow-rose-900">
                <div>
                    <img src="https://i.imgur.com/acwta13.png?2" className="h-20 w-20 mx-auto rounded-lg"></img>
                </div>
                <button className=" bg-orange-400 hover:bg-red-600 active:bg-red-900 text-white font-medium py-1 px-2 ml-3 mt-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none">Logout</button>

                    <h1 className="text-2xl mt-5 text-rose-800">Matches</h1>
                    <hr></hr>

                </div>
            </div>
        </>
    )
}

export default Feed