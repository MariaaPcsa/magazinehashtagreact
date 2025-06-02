import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const UserButtons = () => {
  return (
    <div className="flex gap-4 p-4">
      {/* adicionando a class relative */}
      <button className="rounded-md mx-2 my-01 text-slate-100 bg-slate-950 group-hover:scale-110 rounded transition duration-300 transform hover:scale-110 hover:bg-slate-500 shadow h-auto relative">
        Carrinho <FontAwesomeIcon icon={faCartShopping} />
        <div id="cart-amount" className="absolute inline-flex items-center justify-center w-6 h-6 font-normal sm:font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -right-2 "> 3  </div>
      </button>
      <a
        href="#"
        className="rounded-md mx-2 my-01 text-slate-100 bg-slate-950 group-hover:scale-110 rounded transition duration-300 transform hover:scale-110 hover:bg-slate-500 shadow h-auto"
      >
        Histórico <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  )
}

export default UserButtons
