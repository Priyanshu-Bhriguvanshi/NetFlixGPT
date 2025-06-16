import React from "react";

const MoviesCard = ({ title, posterPath }) => {
  return (
    <div className="w-[250px] sm:w-[200px] md:w-[220px] lg:w-[240px] p-2 flex-shrink-0">
      <div className="relative group bg-gray-900 rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w300${posterPath}`}
          alt={title}
          className="w-full h-[270px] sm:h-[300px] md:h-[320px] object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
        />
        <h3 className="text-white text-sm sm:text-base md:text-lg mt-2 text-center truncate px-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MoviesCard;
