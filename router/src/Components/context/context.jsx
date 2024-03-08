import React, { useContext } from 'react'

const context = () => {
    const [islogin,setislogin] = useContext(false)
  return (
    <div>context</div>
  )
}

export default context