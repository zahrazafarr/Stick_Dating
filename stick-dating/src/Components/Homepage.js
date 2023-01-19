import { useState } from 'react'

import Navbar from './Nav'
import Auth from './Auth'

const Home = () => {

    const authToken = false

    const [showAuth, setShowAuth] = useState(false)
    const [signedUp, setSignedUp] = useState(true)

    const handleClick = () => {
        setSignedUp(true)
        setShowAuth(true)
    }

    return (
        <>        

            <Navbar setSignedUp={setSignedUp} authToken={authToken} showAuth={showAuth} setShowAuth={setShowAuth}/>

            <div className="grid h-screen place-items-center text-center bg-[url('https://media.istockphoto.com/id/1297583775/photo/happy-young-couple-in-love-hugging-laughing-drinking-wine-enjoying-talking-having-fun.jpg?s=612x612&w=0&k=20&c=pG_vsPl9u-djI9giASN78-yMbEvbvr3VGq7Lh_j9jBg=')] bg-auto">

                <h1 className="text-7xl font-bold text-orange-300 mt-44 font-poppins drop-shadow-[0_9.2px_3.9px_black]">Find a match that'll <img src="https://i.imgur.com/SPAzBdR.png" className="mx-auto"/></h1>

                <button className="bg-gradient-to-r from-orange-600 bg-orange-400 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-full mb-44 hover:animate-pulse" onClick={handleClick}>
                    { authToken ? 
                    'Signout' : 
                    'Sign Up' }
                </button>

                { showAuth && (<Auth setShowAuth={setShowAuth} signedUp={signedUp}/>) }

            </div>
        </>
    )
}

export default Home