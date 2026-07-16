import { FiHeart } from "react-icons/fi";

export default function ProductCard({product}){

return(

<div className="bg-white rounded-xl shadow hover:shadow-lg duration-300 overflow-hidden">

<div className="relative">

<img
src={product.image}
alt={product.name}
className="w-full h-72 object-cover"
/>

<button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">

<FiHeart/>

</button>

</div>

<div className="p-4">

<h3 className="font-semibold">
{product.name}
</h3>

<p className="mt-2 font-bold">
${product.price}
</p>

</div>

</div>

)

}