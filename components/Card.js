import Image from "next/image";
import php from "../public/images/php.png";

function Card() {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-3 gap-10">
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <div className="php w-24 h-24" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/2 mx-auto text-xl mont font-semibold txt-indigo-900">
            <div className="flex">
              <li>PHP 8</li>
              <div className="bg-red-500 w-24 h-4 my-2 mx-4 rounded-xl" />
            </div>
            <div></div>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl shadow-xl">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div>
          <ul className="bg-yellow-500 w-1/3 mx-auto text-xl mont font-semibold txt-indigo-900 text-center">
            <li>PHP 8</li>
            <li>Laravel 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
