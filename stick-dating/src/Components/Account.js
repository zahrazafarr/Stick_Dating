import { useState } from "react"

import Navbar from "./Nav"

const Account = () => {

    const handleChange = () => {
        
    }

    const handleSubmit = () => {
        
    }

    return (
        <>
            {/* <Navbar showAuth={false} setShowAuth={() => {}}/> */}
            
            <div className="grid h-screen bg-gradient-to-r from-orange-300 bg-orange-100">

                <h2 className="text-5xl font-bold mt-20 mx-auto text-center text-white font-poppins">Get stuck in love...</h2>
                
                <h4 className="text-1xl font-bold text-center text-black font-poppins"><em>CREATE NEW USER ACCOUNT</em></h4>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-6 w-100 drop-shadow-[0_3.2px_3.9px_black] mx-auto" onSubmit={handleSubmit}>

                    <label htmlFor="name" className="text-rose-900">First Name</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-left" type="text" name="name" required={true} value={""} onChange={handleChange}/>


                    <label htmlFor="birthday" className="text-rose-900">Birthday</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="number" name="birth_day" placeholder="DD" required={true} value={""} onChange={handleChange}/>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="number" name="birth_month" placeholder="MM" required={true} value={""} onChange={handleChange}/>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="number" name="birth_year" placeholder="YYYY" required={true} value={""} onChange={handleChange}/>

                    <div className="mt-3">
                    <label htmlFor="about" className="text-rose-900">About Me</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-left" type="text" name="about" placeholder="What makes you happy?" required={true} value={""} onChange={handleChange}/>
                    </div>

                    <section className="">

                    <label htmlFor="photo" className="text-rose-900">Upload a Photo</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-left" type="url" name="photo1" required={true} onChange={handleChange}/>

                    </section>


                    <div className="mt-3">
                    <label htmlFor="gender_identity" className="text-rose-900">I am a... </label>
                    <br></br>

                    <label htmlFor="gender_woman">Woman</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-black text-center" type="radio" name="gender_identity" value="woman" id="gender_woman" checked={false} onChange={handleChange}/>
                    <label htmlFor="gender_man">Man</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 text-black text-center" type="radio" name="gender_identity" value="man" id="gender_man" checked={false} onChange={handleChange}/> 
                    <label htmlFor="gender_human">Human</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-20 text-black text-center" type="radio" name="gender_identity" value="human" id="gender_human" checked={false} onChange={handleChange}/> 

                    <label htmlFor="show_gender" className="text-yellow-900">Show your gender</label>
                    <input className="shadow appearance-none border rounded py-1 px-1 ml-2 mr-8 text-black text-center" type="checkbox" name="show_gender" required={true} checked={false} onChange={handleChange}/>
                    </div>

                    <br></br>


                    <label htmlFor="show_gender" className="text-rose-900">I want to get stuck with... </label>
                    <br></br>

                    <label htmlFor="gender_interest_woman">Women</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-black text-center" type="radio" name="gender_interest" value="woman" id="gender_interest_woman" checked={false} onChange={handleChange}/>
                    <label htmlFor="gender_interest_man">Men</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 text-black text-center" type="radio" name="gender_interest" value="man" id="gender_interest_man" checked={false} onChange={handleChange}/> 
                    <label htmlFor="gender_interest_human">Everyone</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 text-black text-center" type="radio" name="gender_interest" value="human" id="gender_interest_human" checked={false} onChange={handleChange}/> 
                    
                    <br></br>

                        {/* <div className="p-6 border-t border-solid border-blueGray-200 rounded-b mx-auto">
                 
                            <button className="text-white bg-rose-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:animate-pulse" type="button"onClick={}>Close</button>
                  
                            <input className="text-white bg-rose-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:animate-pulse" type="submit" onClick={() => setShowAuth(false)}/>

                        </div> */}
                    
                    {/* <p>{error}</p> */}

                </form>

            </div>

        </>
    )
}

export default Account