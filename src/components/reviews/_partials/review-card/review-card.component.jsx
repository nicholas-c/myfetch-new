"use client";

import React from "react";
import { Star, Quotes } from "phosphor-react";

const ReviewCard = ({ author, body, date, rating }) => (
  <article className="relative  flex  flex-col  w-full  bg-white rounded  border  shadow  p-6  min-w-80vw  md:min-w-50vw  lg:min-w-1/3">
    <Quotes
      size={35}
      className="mb-2  fill-teal-400  shrink-0  absolute  top-0  right-0  mr-6  mt-4"
      weight="fill"
    />

    <div className="flex  items-center  mb-4">
      <Star size={25} weight="fill" className="fill-emerald-500" />
      <Star size={25} weight="fill" className="fill-emerald-500" />
      <Star size={25} weight="fill" className="fill-emerald-500" />
      <Star size={25} weight="fill" className="fill-emerald-500" />
      <Star size={25} weight="fill" className="fill-emerald-500" />

      <span className="ml-1">
        <strong>{rating}</strong>

        <span className="text-gray-500  font-extralight"> / 5.0</span>
      </span>
    </div>

    <div className="h-full  mb-4">
      <p>{body}</p>
    </div>

    <p>
      <strong className="text-gray-600">{author}</strong>
      <br />
      <span className="text-sm  text-gray-500">{date}</span>
    </p>
  </article>
);

export { ReviewCard };
