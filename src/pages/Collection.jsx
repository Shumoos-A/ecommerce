import React, { useEffect , useState } from 'react'
import Product from './Product';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { Products , search , showSearch } = useContext(ShopContext);
 const [category , setCategory]  = useState([]);
 const [subcategory , setSubCategory] = useState([]);
const [sortType , setSortType]=useState('relavent')

 const toggleCategory = (e) => {
    if (category.includes(e. target.value)) {
setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
        setCategory(prev => [...prev,e.target.value])
    }
 }
 
const toggleSubCategory = (e) => {
if (subCategory.includes(e.target.value)) {
setSubCategory (prev=> prev.filter(item => item !== e.target.value))
}
else{
setSubCategory (prev => [...prev, e.target.value])
}
}
 const applyFilter = () => {
    let productsCopy= Products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0 ) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
 
    setFilterProducts(productsCopy)
 }

 const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType){
        case 'low-high' :
            setFilterProducts(fpCopy.sort((a,b) =>(a.price - b.price)));
           break;

           case 'high-low':
            setFilterProducts(fpCopy.sort((a,b) =>(b.price - a.price)));
            break;
            default:
                applyFilter();
                break;
    }
 }
 useEffect(() =>{
 applyFilterr();
 },[category,subCategory,search,showSearch])

 useEffect(()=>{
    sortProduct();
 },[sortType])
  return (
    <div>

      {/* SubCategory Filter */}
<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
  <p className='mb-3 text-sm font-medium'>TYPE</p>
  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className='flex gap-2'>
      <input className='w-3' type="n'} checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
    </p>
    <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}  /> Bottomwear
    </p>
    <p className='flex gap-2'>
      <input className='w-3' type="checkbox" value={'Winterwear'}onChange={toggleSubCategory}  /> Winterwear
    </p>
  </div>
</div>


{/* Porduct Sort */}

<select onChange= {(e)=>setSortType(e.target.value)}
className='border-2 border-gray-300 text-sm px-2'>

<option value="relavent">Sort by: Relavent</option>

<option value="low-high">Sort by: Low to High</option>

<option value="high-low">Sort by: High to Low</option>

</select>


    </div>
  )
}

export default Collection
