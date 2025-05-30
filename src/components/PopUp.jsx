import React from 'react';
import Subtitles from '../components/Subtitles';
import Text from '../components/Text';
import tenisCollection from '../assets/images/tenisCollection.png';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


export default function PopUp() {

  const navigate = useNavigate();

  const handleComprarClick = () => {
    navigate('/compra-realizada'); // mudar rotar para ver carrinho

  }

  return (
    <div className="absolute right-120 md:right-40 z-10 top-24">
      <div className="flex flex-col p-7 w-[315px] h-[454px] bg-white drop-shadow-lg ">
        <span>
          <Subtitles type="third2" children="Meu Carrinho" />
        </span>
        <div className="border-b mt-5 mb-5 border-gray-300"></div>
        <div className="flex gap-4">
          <div className="flex bg-[#E2E3FF] w-36 h-14">
            <img
              className="flex items-center w-auto"
              src={tenisCollection}
              alt=""
            />
          </div>
          <div className="flex ">
            <Subtitles
              type="third3"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
            <div></div>
          <div className="ml-12 justify-start">
            <Subtitles type="third2" children="R$219,00" />
          </div>
          <div className="mr-5 ">
            <Text type="mini-description" children="R$275" className="line-through leading-[10px]" 
            />
          </div>
        </div>


        <div className="flex gap-4">
          <div className="flex bg-[#E2E3FF] w-36 h-14">
            <img
              className="flex items-center w-auto"
              src={tenisCollection}
              alt=""
            />
          </div>
          <div className="flex ">
            <Subtitles
              type="third3"
              children="Tênis Nike Revolution 6 Next Nature Masculino"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
            <div></div>
          <div className="ml-12 justify-start">
            <Subtitles type="third2" children="R$219,00" />
          </div>
          <div className="mr-5 ">
            <Text type="mini-description" children="R$275" className="line-through leading-[10px]" 
            />
          </div>
        </div>


        
        <div className="border-b mt-5 mb-5 border-gray-300"></div>
      
        <div className='flex justify-between'>
            <Subtitles type='third2' children='Valor Total:'/>
            <Subtitles type='third' children='R$ 219,00'/>
        </div>

        <div className='flex justify-between mt-6'>
            <Text type='gray-description' children='Esvaziar' className='underline'/>
            <Button  type='default' 
            color='pink' 
            children='Ver carrinho'
            onClick={handleComprarClick}
            
            />
        </div>


      </div>
    </div>
  );
}
