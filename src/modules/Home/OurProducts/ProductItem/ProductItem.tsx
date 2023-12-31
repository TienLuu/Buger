import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../../../utilities/formatCurrency";
import { useShoppingCart } from "../../../../context/ShopingCartContext"

type ProductItemProps= {
  id:number,
  image:string,
  name:string,
  oldPrice:string,
  price:number,
  sale:boolean
}

const ProductItem = ({id, image, name, oldPrice,price,sale}:ProductItemProps) => {
  const { increaseCartQuantity} = useShoppingCart()
  
  return (
    <>
           <a className="block mb-5 animate__animated animate__fadeIn">
             <div className="product-image mb-[18px] overflow-hidden relative">
               <span style={{display: sale ? "block" : "none"}} className={`absolute z-[1] right-auto left-0  md:left-auto top-[15px] ml-5 md:ml-0 bg-orange-color text-white-color md:inline-block md:mb-0 py-[5px] px-[11px] text-[14px] leading-[18px] font-semibold rounded-[14px] md:right-5`}>
                 {sale ?"  Sale!" :null}
               </span>
               <img
                 src={image}
                 width={500}
                 height={500}
                 alt=""
               />
             </div>
             <div className="relative star-rating w-[129px] h-5 tracking-[10px] mx-auto text-md overflow-hidden text-yellow-color ">
               <i className="">
                 <FontAwesomeIcon icon={faStar} />
               </i>
               <i className="px-2">
                 <FontAwesomeIcon icon={faStar} />
               </i>
               <i className="">
                 <FontAwesomeIcon icon={faStar} />
               </i>
               <i className="px-2">
                 <FontAwesomeIcon icon={faStar} />
               </i>
               <i className="">
                 <FontAwesomeIcon icon={faStar} />
               </i>
             </div>
             <h2 className="mt-3 mb-[5px] text-lg leading-[1.6] font-extrabold">
               {name}
             </h2>
             
             <span className="price block mt-1 text-orange-color">
               <del className="text-dark-gray-color" aria-hidden="true">
                 <span className="woocommerce-Price-amount amount">
                  
                   <bdi className="mr-1 text-base leading-4 font-bold text-dark-gray-color">
                   {oldPrice}
                   </bdi>
                 </span>
               </del>{" "}
               <ins className="no-underline">
                
                 <span className="woocommerce-Price-amount amount">
                  
                   <bdi className="text-2xl leading-8 font-black text-orange-color no-underline"> 
                    {formatCurrency(price)}
                   </bdi>
                 </span>
               </ins>
             </span>
           </a>
           <a
             className="custom-button1 pl-[30px] pr-[30px] py-[13px] animate__animated animate__fadeIn"
             onClick={()=> increaseCartQuantity(id)}
           >
             Add to cart
           </a>
    </>
  )
}

export default ProductItem