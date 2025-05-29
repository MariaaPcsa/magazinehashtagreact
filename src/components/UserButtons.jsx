import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const UserButtons = () => {
  return (
    <div className="">
      <button className="px-2  ">
        Carrinho <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <a href="#" className=" px-2">
        Histórico <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  )
}

export default UserButtons;
