 import React from 'react'
 
 const ProductFilters = () => {
   return (
      <section className='flex justify-center items-center py-8 '>
{/*className='hidden' para ocultar o botão */}
<input 
id='filter-0' 
type='radio' 
name='filter-selectinon' 
className='hidden'
/> 
{/* // className='rounded-s-lg aredonda apenas o lado esquerdo */}
<label  
htmlFor="filter-0" 
className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer font-bold'
>Todos</label>
<input 
id='filter-1' 
type='radio' 
name='filter-selectinon' 
className='hidden'
/><label  
htmlFor="filter-1" 
className=' bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer font-bold'
>Masculino</label>
<input id='filter-2' type='radio' name='filter-selectinon' className='hidden'
/>
{/* // className='rounded-s-lg aredonda apenas o lado esquerdo para reolver esse problema inclimo dir='rtl' invertendo a direção da direita para esquerda */}
<label  
htmlFor="filter-2"
dir='rtl'
 className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer font-bold'
>Feminino</label>

      </section>
   )
 }
 
 export default ProductFilters