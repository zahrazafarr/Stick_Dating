const Navbar = ( {setSignedUp, showAuth, setShowAuth} ) => {

    const authToken = false

    const handleClick = () => {
        setShowAuth(true)
        setSignedUp(false)
    }

    return (
        <>

            <nav className="fixed top-0 w-screen m-0 flex flex-row justify-end bg-orange-200 text-white pb-3 pt-3">

                {!authToken && 
                <button className="bg-gradient-to-r from-orange-600 bg-orange-400 hover:bg-rose-600 text-white font-medium py-1 px-3 mr-4 rounded-full hover:animate-pulse"
                onClick={handleClick}>Login</button>}

            </nav>
        
        </>
    )
}

export default Navbar