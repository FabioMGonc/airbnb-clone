import React from 'react';

const AccProfile = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <p>Logado como NOME USUARIO</p>
        <button className="bg-[var(--primary-color-400)] min-w-44 cursor-pointer rounded-full px-4 py-2 transitio text-white">Logout</button>
    </div>
  )
}

export default AccProfile;