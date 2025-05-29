import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const UserButtons = () => {
  return (
    <div className="flex gap-4 p-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded transition duration-300 transform hover:scale-110 hover:bg-slate-500 shadow">
        Carrinho <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <a
        href="#"
        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded transition duration-300 transform hover:scale-110 hover:bg-slate-500 shadow"
      >
        Histórico <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  )
}

export default UserButtons
