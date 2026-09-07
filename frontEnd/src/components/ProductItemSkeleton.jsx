// ProductItemSkeleton.jsx
import React from 'react'

const ProductItemSkeleton = () => {
  return (
    <div className='text-gray-700'>
        <style>{`
            @keyframes shimmer {
                100% { transform: translateX(100%); }
            }
        `}</style>
        <div className='overflow-hidden relative aspect-[3/4] bg-gray-200'>
            <div
                className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent'
                style={{ animation: 'shimmer 1.5s infinite' }}
            />
        </div>
        <div className='pt-3 pb-1'>
            <div className='h-3.5 w-3/4 bg-gray-200 rounded' />
        </div>
        <div className='pt-1'>
            <div className='h-3.5 w-1/3 bg-gray-200 rounded' />
        </div>
    </div>
  )
}

export default ProductItemSkeleton