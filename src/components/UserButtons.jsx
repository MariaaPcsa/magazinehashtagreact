import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const UserButtons = () => {
  return (
    <div className="flex gap-4 p-4">
      <button className="rounded-md mx-2 my-01 text-slate-100 bg-slate-950 group-hover:scale-110 rounded transition duration-300 transform hover:scale-110 hover:bg-slate-500 shadow h-auto">
        Carrinho <FontAwesomeIcon icon={faCartShopping} />
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
