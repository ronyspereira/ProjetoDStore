import React from 'react'
import Button from './Button'
import SetaBaixo from '../assets/images/setaBaixo.svg'

const ProductShowHeader = () => {
    const busca = 'Tennis'
    const numResultados = 389    
    const tipoBusca = 'mais revelantes'

  return (
    <div className='flex justify-between'>
        <div>
            <span className='font-bold text-[#474747]'>Resultados para "{busca}"</span>
            <span> - {numResultados} produtos</span>
        </div>
        <Button type='filter'>
            <div className='flex justify-between'>
                
                <span className='font-bold text-[#474747]'>Ordenar por: </span>
                <span className='ml-2'>{tipoBusca}</span>
                <img src={SetaBaixo} className='ml-5'/>
            </div>
        
        </Button>
    </div>
  )
}

export default ProductShowHeader
