
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ProductCard = ({ id, name, brand, price, image, feminine }) => {
  return (
    <article className=" card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg sm:mx-4 md:mx-6
">
      <img
        src={image}
        alt={`Imagem do Produto ${id}`}
        className=" group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300  " 
      />
      <div className="p-4 flex flex-col gap-2"> 
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-base font-medium text-green-600">R$ {price}</p>
        <button className=' rounded-md mx-4 my-01 text-slate-100 bg-slate-950 group-hover:scale-110' >
         <FontAwesomeIcon icon={faCartPlus}/>  Adicionar</button>
       </div> 
    </article>
  )
}

export default ProductCard

