import React from 'react';

const ProductCard = (props) => {
 

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      
      <div className="max-w-sm w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out group">
        
        <div className="relative overflow-hidden bg-slate-100 aspect-video">
          <img 
            src={props.imageUrl} 
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <span className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            New
          </span>
        </div>

        {/* Content Box */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
            {props.title}
          </h3>

          {/* Price */}
          <div className="mt-1.5 flex items-baseline">
            <span className="text-xl font-extrabold text-slate-900">{props.price}</span>
          </div>

          {/* Description */}
          <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {props.description}
          </p>

          {/* Action Button */}
          <div className="mt-5">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm hover:shadow active:scale-[0.98] transform">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;