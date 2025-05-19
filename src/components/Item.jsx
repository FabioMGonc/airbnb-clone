import React from 'react';

const preco = 550;

const Item = () => {
  return (
    <a href='#' className='flex flex-col gap-2'>
        <img className='aspect-square object-cover rounded-2xl' src="https://a0.muscache.com/im/pictures/airflow/Hosting-39895819/original/ce8f6db3-ab4d-4926-a791-8700330a6c80.jpg?im_w=960" alt="Imagem da acomodação" srcSet="" />
        <div>
            <h3 className='text-xl font-semibold'>Quarto em Botafogo, Brasil</h3>
            <p className='truncate text-gray-600'>Alugando um quarto de uma casa em Botafogo-RJ com 44 pés quadrados (4 metros quadrados). Os hóspedes têm acesso a dois banheiros, cozinha, varanda, máquina de lavar e varal. Uma casa arejada e iluminada. Condomínio muito tranquilo. Muito bem localizado, fica perto da estação de metrô, pontos de ônibus, mercados, restaurantes, bares, shopping centers, praças, farmácias e hospitais. Perto do Pão de Açúcar e das praias de Botafogo, Copacabana e Ipanema. Bem-vindos a todos!</p>
        </div>
        <p><span className='font-semibold'>R$:{preco}</span> por noite</p>
    </a>
  )
}

export default Item;