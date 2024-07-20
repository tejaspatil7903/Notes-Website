import React from 'react'

export default function Card({note}) {
    function pdfHandler (){
        window.open(pdf,'_blank');
    }
    function chapterHandler(){
        window.open(chapterwise,'_blank');
    }

    const {image,title,slogan,pdf,chapterwise}=note;
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col items-center p-6">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={image}
        ></img>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{title}</h5>
        <p className="text-sm text-gray-500">{slogan}</p>
        <div className="grid mt-4">
          <button
            className="inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-purple-900 text-center"
            onClick={pdfHandler}
          >
            PDF Notes
          </button>
          <button
            className="inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-purple-900 text-center"
            onClick={chapterHandler}
          >
            Chapterwise Notes
          </button>
        </div>
      </div>
    </div>
  );
}
