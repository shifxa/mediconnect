function Categoriescard({ id, title, img, desp, count, buttonText }) {
  return (
    <div
      className="min-w-[300px] flex flex-col gap-y-2 px-3 pt-3 rounded-xl shadow bg-blue-100 hover:shadow-lg hover:shadow-blue-200 "
      key={id}
    >
      <h1 className="geist-bold text-2xl">{title}</h1>
      <img className="h-[50%] object-contain" src={img} alt="dr" />
      <h2 className="geist-semi-bold text-lg">{count}</h2>
      <p className="geist-normal text-sm text-gray-500">{desp}</p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-3xl w-full mx-auto mt-2 geist-semi-bold hover:cursor-pointer hover:text-white hover:bg-blue-600 hover:text-lg 
     transition-all">
        {buttonText}
      </button>
    </div>
  );
}

export default Categoriescard;
