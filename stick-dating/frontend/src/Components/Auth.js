import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Auth = ( {setShowAuth, signingUp} ) => {

    const [email, setEmail] = useState(null)

    const [pw, setPw] = useState(null)
    const [confirmPw, setConfirmPw] = useState(null)
    const [error, setError] = useState(null)

    let navigate = useNavigate()
    
    const handleClick = () => {
        setShowAuth(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if ( signingUp && ( pw !== confirmPw)) {setError("Passwords don't match") 
            return
        } 
            console.log('posting', email, pw)
           const data = await axios.post('http://localhost:3000/signup', {email, pw})
            
           const accepted = data.status === 201

           if (accepted) navigate('/account')
        }
            catch (error) {console.log(error)}
        }

        return (
            <>
                <div className="absolute p-6 flex-auto">
                    {/* <div onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div> */}
                        <div>
                            <form className="bg-orange-200 shadow-md rounded px-8 pt-6 pb-6 w-80 drop-shadow-[0_3.2px_3.9px_black]" onSubmit={handleSubmit}>

                            <h2 className="text-white font-bold text-3xl pb-4 font-poppins drop-shadow-[0_3.2px_3.9px_black]">{
                                signingUp ?
                                'Create Account' : 
                                'Login'
                                }
                            </h2>
                            <p className="pb-3">By clicking submit you agree to the Terms and Conditions.</p>

                                <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="email" name="email" placeholder="Email" required={true} onChange={(e) => setEmail(e.target.value)}/>

                                <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="password" name="password" placeholder="Password" required={true} onChange={(e) => setPw(e.target.value)}/>

                                { signingUp && <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" 
                                type="password" name="confirmPw" placeholder="Confirm Password" required={true} onChange={(e) => setConfirmPw(e.target.value)}/> }

                                <div className="p-6 border-t border-solid border-blueGray-200 rounded-b mx-auto">
                    
                                    <button className="text-white bg-rose-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:animate-pulse" type="button"onClick={() => setShowAuth(false)}>Close</button>
                    
                                    <input className="text-white bg-rose-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:animate-pulse" type="submit" onClick={() => setShowAuth(false)}/>

                                </div>
                                <p>{error}</p>
                            </form>
                        </div>
                </div>
            </>
        )
}

export default Auth