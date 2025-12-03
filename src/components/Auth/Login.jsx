import React, { useState } from 'react';

function Login() {

      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')

      //two way binding
      const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is ,",email);
        console.log("password is , ",password)


        setEmail("")
        setPassword("")
      }


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="text-white outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white"
            type="text"
            placeholder="Enter your email"
          />

          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="text-white outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-white"
            type="password"
            placeholder="Enter password"
          />

          <button
            className="text-white outline-none border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full mt-3 hover:bg-emerald-700 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
