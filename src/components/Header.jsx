import { NavLink, useNavigate } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import logoHeader from '../assets/images/logo-header.svg';
import carrinhoCompras from '../assets/images/carrinho.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconBusca from '../assets/images/icon-busca.svg';
import { useState } from 'react';
import PopUp from './PopUp';
import ModalMenu from './ModalMenuSandwish';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [aberto, setAberto] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const abrirMenu = () => {
    setAberto(!aberto)
  }
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className="flex flex-col  px-24 py-10 justify-between">
        <section className="flex py-5 items-center justify-between">
          <button className="mr-10 md:hidden" onClick={abrirMenu}>
            <img src={iconMenu} alt="icone de menu" />
          </button>

          <a href="/" className="w-36 md:w-auto">
            <img src={logoHeader} alt="logo digital college" />
          </a>

          <div className="md:w-1/3 mx-6 hidden md:block md:h-12 relative">
            <input
              className="bg-slate-100 pl-2 rounded md:w-full md:h-full outline-none border-box"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pesquisar produto"
            />
            <button
              type="button"
              className="absolute right-0 top-0 flex justify-center items-center h-12 md:px-4"
            >
              <img src={iconBusca} alt="icone de busca"
                onClick={handleSearch}
                style={{ cursor: "pointer" }} />
            </button>
          </div>
          <a href="/criar-conta" className="hidden md:block mx-5 underline leading-7 font-normal text-base text-[#474747] whitespace-nowrap">
            Cadastre-se
          </a>
          <button type="button" className="mx-3 md:hidden">
            <img src={iconBusca} alt="icone de busca" />
          </button>
          <button className="hidden md:block bg-pink-600 text-white py-1 px-8 rounded-lg">
            <a href="/login">Entrar</a>
          </button>
          <button type="button" onClick={handleClick}>
            <img src={carrinhoCompras}
              alt="carrinho de compras"
              style={{ cursor: "pointer" }}
            />
          </button>
        </section>
        <nav className={''}>
          <div className={'hidden md:gap-4 md:flex  md:font-bold md:text-base'}>
            <NavbarItem path="/" title="Home" />
            <NavbarItem path="/produtos" title="Produtos" />
            <NavbarItem path="/categorias" title="Categorias" />
            <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
          </div>
        </nav>
      </header>
      {aberto && <ModalMenu />}
      {isOpen && <PopUp />}
    </>
  );
}
