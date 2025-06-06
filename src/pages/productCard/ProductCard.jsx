
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ProductCard = ({ id, name, brand, price, image, feminine }) => {
  return (
    <article className=" m-4 card-produto group   bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg h-50 w-60 
">
      <img
        src={image}
        alt={`Imagem do Produto ${id}`}
        className=" group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300  " 
      />
      <div className="p-3 flex flex-col px-1 py-30"> 
        <p className="text-sm text-gray-500">{brand}</p>
        <p className=" text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-base font-medium text-green-600">R$ {price}</p>
        <button className=' rounded-md mx-4 my-01 text-slate-100 bg-slate-950 group-hover:scale-110' >
         <FontAwesomeIcon icon={faCartPlus}/>  Adicionar</button>
       </div> 
    </article>
  )
}

export default ProductCard

