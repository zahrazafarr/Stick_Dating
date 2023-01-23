import { useState } from "react"

const Account = () => {

    const [data, setData] = useState({

        user: "",
        name: "",
        birth_day: "",
        birth_month: "",
        birth_year: "",
        sun_sign: "",
        about: "",
        green_flags: "",
        red_flags: "",
        photo1: "",
        gender_identity: "woman",
        show_gender: false,
        gender_interest: "man",
        matches: []
    })

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.type === 'checkbox' ? 
        e.target.checked : e.target.value

        setData((newUser) => ({
            ...newUser,
            [name]: value
        }))

    }

    console.log(data)

    const handleSubmit = () => {
        
    }

    return (
        <>
            
            <div className="grid h-screen bg-gradient-to-r from-orange-300 bg-orange-100">

                <h2 className="text-5xl font-bold mt-14 mx-auto mb-11 text-center text-white font-poppins">Get stuck in love...</h2>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-6 w-100 drop-shadow-[0_3.2px_3.9px_black] mx-auto" onSubmit={handleSubmit}>
                    
                    <h4 className="text-1xl font-bold text-center text-black font-poppins"><em>CREATE NEW USER ACCOUNT</em></h4>

                    <label htmlFor="name" className="text-rose-900">First Name</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 mt-3 py-2 px-1 text-black text-left" type="text" name="name" required={true} value={data.name} onChange={handleChange}/>


                    <label htmlFor="birthday" className="text-rose-900">Birthday</label>
                    <input className="shadow appearance-none border rounded w-full mb-2 mt-3 py-2 px-1 text-black text-center" type="number" name="birth_day" placeholder="DD" required={true} value={data.birth_day} onChange={handleChange}/>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="number" name="birth_month" placeholder="MM" required={true} value={data.birth_month} onChange={handleChange}/>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black text-center" type="number" name="birth_year" placeholder="YYYY" required={true} value={data.birth_year} onChange={handleChange}/>

                    <div className="mt-3">
                    <label htmlFor="about" className="text-rose-900">About Me</label>
                    <input className="shadow appearance-none border rounded w-full mb-3 mt-3 py-2 px-1 text-black text-left" type="text" name="about" placeholder="What makes you happy?" required={true} value={data.about} onChange={handleChange}/>
                    </div>

                    <label htmlFor="green_flags" className="text-rose-900">List your green flags</label>
                    <input className="shadow appearance-none border rounded w-full mb-3 mt-3 py-2 px-1 text-black text-left" type="text" name="green_flags" placeholder="optional" value={data.green_flags} onChange={handleChange}/>

                    <label htmlFor="red_flags" className="text-rose-900">... and your red flags.</label>
                    <input className="shadow appearance-none border rounded w-full mb-3 mt-3 py-2 px-1 text-black text-left" type="text" name="red_flags" placeholder="optional" value={data.red_flags} onChange={handleChange}/>

                    <label htmlFor="sun_sign" className="text-rose-900">What's your sign?</label>
                    <input className="shadow appearance-none border rounded w-full mb-3 mt-3 py-2 px-1 text-black text-left" type="text" name="sun_sign" placeholder="optional" value={data.sun_sign} onChange={handleChange}/>

                    <section>

                    <label htmlFor="photo" className="text-rose-900">Upload a Photo</label>
                    <input className="shadow appearance-none border rounded flex w-50 mb-2 mt-3 py-2 px-1 text-black text-left" type="url" name="photo1" placeholder="*insert link*" required={true} onChange={handleChange}/>

                    </section>

                    <div className="mt-3">
                    <label htmlFor="gender_identity" className="text-rose-900">I am a... </label>
                    <br></br>

                    <label htmlFor="gender_woman">Woman</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_identity" value="woman" id="gender_woman" checked={false} onChange={handleChange}/>

                    <label htmlFor="gender_man">Man</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_identity" value="man" id="gender_man" checked={false} onChange={handleChange}/> 

                    <label htmlFor="gender_human">Human</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_identity" value="human" id="gender_human" checked={false} onChange={handleChange}/> 

                    <label htmlFor="show_gender" className="text-gray-600">Show your gender</label>
                    <input className="shadow appearance-none border rounded py-1 px-1 ml-2 mr-8 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-200 dark:border-gray-600" type="checkbox" name="show_gender" required={true} checked={false} onChange={handleChange}/>
                    </div>

                    <br></br>

                    <label htmlFor="show_gender" className="text-rose-900">I want to get stuck with... </label>
                    <br></br>

                    <label htmlFor="gender_interest_woman">Women</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_interest" value="woman" id="gender_interest_woman" checked={false} onChange={handleChange}/>

                    <label htmlFor="gender_interest_man">Men</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_interest" value="man" id="gender_interest_man" checked={false} onChange={handleChange}/> 

                    <label htmlFor="gender_interest_human">Everyone</label>
                    <input className="shadow appearance-none border py-1 px-1 ml-2 mr-8 mt-6 text-center text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-orange-200 dark:border-gray-600" type="radio" name="gender_interest" value="human" id="gender_interest_human" checked={false} onChange={handleChange}/> 
                    
                    <br></br>

                        <div className="p-6 border-t border-solid border-blueGray-200 rounded-b mx-auto">
                 
                         <input className="text-white bg-rose-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:animate-pulse" type="submit"/>

                        </div>

                </form>

            </div>

        </>
    )
}

export default Account