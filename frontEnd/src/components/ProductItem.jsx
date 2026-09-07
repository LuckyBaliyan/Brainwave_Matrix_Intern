import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <style>{`
            @keyframes shimmer {
                100% { transform: translateX(100%); }
            }
        `}</style>
      <div className='overflow-hidden relative aspect-[3/4] bg-gray-100'>
        {!loaded && (
          <div className='absolute inset-0 bg-gray-200 overflow-hidden'>
            <div
              className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent'
              style={{ animation: 'shimmer 1.5s infinite' }}
            />
          </div>
        )}
        <img
          src={image[0]}
          alt=""
          onLoad={() => setLoaded(true)}
          className={`w-full h-full hover:scale-110 object-cover transition-all ease-in-out duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
            }`}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;