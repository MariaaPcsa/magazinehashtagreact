// Importa o logo da aplicação a partir da pasta assets
import logo from '../assets/logo/hashtag.svg';

// Importa o componente que renderiza os botões de login/cadastro ou perfil do usuário
import UserButtons from './UserButtons';

// Importa o hook useLocation do React Router para acessar a rota atual
import { useLocation } from 'react-router-dom';

// Define o componente funcional Header
const Header = () => {
  // Extrai o pathname da URL atual (ex: '/', '/checkoutPage')
  const { pathname } = useLocation();

  // Cabeçalho completo com logo e botões de usuário (usado na home "/")
  const completeHeader = (
    <header className="text-white flex flex-wrap items-center justify-between bg-slate-950 px-4 py-3 shadow-xl text-xl sticky top-0 z-10">
      <a href="/" className="flex items-center">
        {/* Logomarca da empresa */}
        <img
          className="h-14 sm:h-16 rounded-lg mx-2 my-1 w-full"
          src={logo}
          alt="Logomarca hashtag"
        />
        {/* Título do site */}
        <h1 className="text-white flex flex-wrap mt-6 justify-between bg-slate-950 px-2 py-1 shadow-xl text-2xl">
          Magazine
        </h1>
      </a>

      {/* Botões de login/cadastro/perfil (somente na home) */}
      <div className="w-full sm:w-auto flex justify-end mt-2 sm:mt-0">
        <UserButtons />
      </div>
    </header>
  );

  // Cabeçalho simplificado (usado em páginas diferentes da home)
  const simpleHeader = (
    <>
      <header className="text-white flex flex-wrap items-center justify-between bg-slate-950 px-4 py-3 shadow-xl text-xl sticky top-0 z-10">
        <a href="/" className="flex items-center">
          {/* Logo um pouco menor */}
          <img
            className="h-12 sm:h-14 rounded-lg mx-2 my-1 w-full"
            src={logo}
            alt="Logomarca hashtag"
          />
          <h1 className="text-white flex flex-wrap mt-6 justify-between bg-slate-950 px-2 py-1 shadow-xl text-2xl">
            Magazine
          </h1>
        </a>

        {/* Botões ocultos nas outras páginas (comentado) */}
        {/* <div className="w-full sm:w-auto flex justify-end mt-2 sm:mt-0">
          <UserButtons />
        </div> */}
      </header>
    </>
  );

  // Retorna o cabeçalho completo apenas na rota '/', caso contrário exibe o simples
  return (
    <>
      {pathname === '/' ? completeHeader : simpleHeader}
    </>
  );
};

export default Header;
