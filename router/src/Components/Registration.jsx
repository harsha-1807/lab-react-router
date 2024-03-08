import React, { useState } from 'react'

const Forms = () => {

    //state to check if the form is submitted
    const [formSubmit, setFormSubmit] = useState(false);

    // state to keep track of all errors
    const [formErr, setFormErr] = useState({})

    // state to keep all form data
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: ""
    })

    // const firstNameHandler = (e) => {
    //     setFormData({
    //         ...formData,
    //         firstName: e.target.value
    //     })
    //     console.log(formData)
    // }

    // const lastNameHandler = (e) => {
    //     setFormData({
    //         ...formData,
    //         lastName: e.target.value
    //     })
    //     console.log(formData)
    // }

    // const emailHandler = (e) => {
    //     setFormData({
    //         ...formData,
    //         email: e.target.value
    //     })
    //     console.log(formData)
    // }

    // const phoneHandler = (e) => {
    //     setFormData({
    //         ...formData,
    //         phone: e.target.value
    //     })
    //     console.log(formData)
    // }

    const handleInputChange = (e)=>{
        let {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }


    const formSubmitHandler = (e) => {
        e.preventDefault()
        let errors = validate(formData)
        setFormErr(errors)
        let errKeyArray = Object.keys(errors)
        if(errKeyArray.length == 0){
            setFormSubmit(true)
        }else{
            setFormSubmit(false)
        }
        console.log(formErr)
    }

    const validate = (data) => {
        let error = {}
        if (data.firstName.trim()==""){
            error.firstName = "Please enter your First Name."
        }
        if (data.lastName.trim()==""){
            error.lastName = "Please enter your Last Name."
        }
        if (data.email.trim()==""){
            error.email = "Please enter your email."
        }
        if (data.phone.trim()==""){
            error.phone = "Please enter your phone number"
        }
        if (data.phone.trim().length > 10 || data.phone.trim().length < 10){
            error.phone = "Please enter 10 digit phone number"
        }
        return error
    }

return (
    <div className="form-container" style={{width:"98vw"}}>
        <fieldset>
            <legend>Fill this form</legend>
            <form onSubmit={formSubmitHandler}>
                {/* Success Message */}
                {formSubmit && <div className="success">
                <p style={{color:"black"}}>Registration Sucessfull! ✅</p>
            </div>}
                
                <label>First Name :</label>
                <input type="text" name="firstName" onChange={handleInputChange}/>
                {formErr.firstName ? <p className="err">{formErr.firstName}</p> : ""}

                <label>Last Name :</label>
                <input type="text" name="lastName" onChange={handleInputChange}/>
                {formErr.lastName ? <p className="err">{formErr.lastName}</p> : ""}

                <label>Email Name :</label>
                <input type="email" name="email" onChange={handleInputChange}/>
                
                {formErr.email ? <p className="err">{formErr.email}</p> : ""}

                <label>Phone :</label>
                <input type="number" name="phone" onChange={handleInputChange}/>

                {formErr.phone ? <p className="err">{formErr.phone}</p> : ""}
                <input type="submit" value={"Register"}/>
            </form>
        </fieldset>
    </div>
  )
}

export default Forms