import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);


    const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const { data: userDoc } = await axios.post('/users/login', {
          email,
          password,
        }); 
        setUser(userDoc)
        setRedirect(true)
      } catch (error) {
        alert(`Erro ao logar: ${error.response.data}`)
      }
    } else {
      alert('Voce precisa preencher os campos de email e senha')
    }
  };
  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className='flex items-center '>
        <div className='mx-auto flex max-w-96 flex-col items-center gap-4 w-full'>
            <h1 className='text-3xl font-bold'>Faça seu login</h1>
            <form className='flex w-full flex-col gap-2' onSubmit={handleSubmit}>
                <input className='w-full rounded-full border border-gray-400 px-4 py-2' placeholder='Digite seu e-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='w-full rounded-full border border-gray-400 px-4 py-2' placeholder='Digite sua senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='w-full cursor-pointer text-white rounded-full font-bold text-xl bg-[var(--primary-color-400)] px-4 py-2'>Login</button>
            </form>

            <p>Ainda não tem conta? Registre-se <Link className='no-underline hover:underline hover:font-semibold hover:text-blue-600' to={'/register'}>aqui</Link></p>

        </div>
    </section>
  )
}

export default Login;