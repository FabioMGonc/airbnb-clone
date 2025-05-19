import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='flex items-center '>
        <div className='mx-auto flex max-w-96 flex-col items-center gap-4 w-full'>
            <h1 className='text-3xl font-bold'>Faça seu login</h1>
            <form className='flex w-full flex-col gap-2'>
                <input className='w-full rounded-full border border-gray-400 px-4 py-2' placeholder='Digite seu e-mail' type="email" name="" id="" />
                <input className='w-full rounded-full border border-gray-400 px-4 py-2' placeholder='Digite sua senha' type="password" name="" id="" />
                <button className='w-full cursor-pointer text-white rounded-full font-bold text-xl bg-[var(--primary-color-400)] px-4 py-2'>Login</button>
            </form>

            <p>Ainda não tem conta? Registre-se <Link className='no-underline hover:underline hover:font-semibold hover:text-blue-600' to={'/register'}>aqui</Link></p>

        </div>
    </section>
  )
}

export default Login