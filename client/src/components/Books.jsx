const Books = ({ data, search, setSearch }) => {
  return data.length > 0 ? (
    <div className="mt-8">
      <div className="mb-8 flex flex-col items-center justify-center p-2">
        <input
          type="text"
          className="w-full sm:w-1/2 rounded-full px-4 py-2 shadow"
          placeholder="kitap adı, yazar veya yayınevi ara"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="mt-4 underline">{data.length} adet kitap bulundu</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-2 gap-4">
        {data
          .filter((item) => {
            const searchLowerCase = search.toLowerCase();
            return (
              item.title.toLowerCase().includes(searchLowerCase) ||
              item.writers.some((writer) =>
                writer.toLowerCase().includes(searchLowerCase)
              ) ||
              item.publisher.toLowerCase().includes(searchLowerCase)
            );
          })
          .map((item) => {
            return (
              <div
                key={Math.random()}
                className="flex flex-col items-center rounded-[50px] justify-between gap-2 border shadow p-4 m-2 hover:scale-105 ease-in duration-300 hover:shadow-2xl cursor-pointer transition-all"
              >
                <div className="h-30 w-28">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm ">{item.title}</span>
                <span className="text-xs">{item.writers}</span>
                <span className="text-xs">{item.publisher}</span>
                <span className="text-sm border px-6 py-2 bg-violet-400 text-white rounded-xl hover:bg-violet-600 transition-all duration-300">
                  {item.prices} ₺
                </span>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div className="text-4xl text-center mt-28 ">Veri bulumadı ... </div>
  );
};

export default Books;
