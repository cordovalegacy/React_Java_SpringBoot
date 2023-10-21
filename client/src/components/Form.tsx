
// !Packages
import axios from "axios"
import { useState } from "react"

const Form = ({ studentList, setStudentList }: { studentList: { name: string, address: string }[], setStudentList: any }) => {

    let id = 1
    const [studentInfo, setStudentInfo] = useState({
        id: ++id,
        name: "",
        address: ""
    })

    const changeHandler = (e: any) => {
        setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value })
    }

    const submitHandler = (e: any) => {
        const { name, address } = studentInfo
        const payload = { name, address }
        e.preventDefault()
        axios
            .post('http://localhost:8080/student/add', payload)
            .then((res) => {
                console.log("Student Post Result: ", res)
                setStudentList([...studentList, studentInfo])
                setStudentInfo({
                    id: 1,
                    name: "",
                    address: ""
                })
            })
            .catch((err) => {
                console.log("Error Adding Student: ", err)
            })
    }

    return (
        <form onSubmit={submitHandler} className="border-4 border-blue-500 rounded-xl w-1/2 h-fit min-h-[300px] p-5">
            <h1 className="font-extrabold text-2xl text-center text-blue-500 mb-10">Add Students!</h1>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text"
                    name="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={changeHandler}
                    required
                />
                <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Name
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="email"
                    name="address"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={changeHandler}
                    required
                />
                <label
                    htmlFor="address"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    )
}

export default Form
