import { useEffect, useState } from "react";
import Books from "./components/Books";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [kitapyurduColor, setKitapyurduColor] = useState(false);
  const [kitapsepetiColor, setKitapsepetiColor] = useState(false);
  const [allColor, setAllColor] = useState(true);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const kitapyurdu = await fetch(
          "http://localhost:4000/api/kitapyurdu/get-all"
        );
        const kitapsepeti = await fetch(
          "http://localhost:4000/api/kitapsepeti/get-all"
        );
        const dataKitapYurdu = await kitapyurdu.json();
        const dataKitapSepeti = await kitapsepeti.json();
        const mergedData = [...dataKitapYurdu, ...dataKitapSepeti];
        setMergedData(mergedData);
        setData(mergedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const kitapyurdu = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/kitapyurdu/get-all");
      const data = await res.json();
      setData(data);
      setAllColor(false);
      setKitapsepetiColor(false);
      setKitapyurduColor(!kitapyurduColor);
    } catch (error) {
      console.log(error);
    }
  };

  const kitapsepeti = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/kitapsepeti/get-all");
      const data = await res.json();
      setData(data);
      setAllColor(false);
      setKitapyurduColor(false);
      setKitapsepetiColor(!kitapsepetiColor);
    } catch (error) {
      console.log(error);
    }
  };

  const all = () => {
    setData(mergedData);
    setAllColor(!allColor);
    setKitapyurduColor(false);
    setKitapsepetiColor(false);
  };

  return (
    <div>
      <div className="sticky top-0 bg-orange-500 z-50 text-white text-center h-28 sm:text-4xl text-2xl shadow-xl font-bold sm:p-8 p-4">
        Smart Maple | Web Scraping Projesi
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="min-w-[200px] sm:text-xl text-sm mt-8 sticky top-28 m-auto flex sm:flex-col z-50">
          <div
            className={`"border  border-gray-300 bg-violet-400 mb-2 text-white shadow-xl w-full min-w-[120px] p-3 ml-2 rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-2xl cursor-pointer" ${
              allColor === true ? "!bg-violet-600" : " "
            }`}
            onClick={all}
          >
            Tümü
          </div>
          <div
            className={`"border border-gray-300 bg-violet-400 mb-2 text-white shadow-xl w-full min-w-[120px] p-3 ml-2 rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-2xl cursor-pointer" ${
              kitapyurduColor === true ? "!bg-violet-600" : " "
            }`}
            onClick={kitapyurdu}
          >
            kitapyurdu.com
          </div>
          <div
            className={`"border border-gray-300 bg-violet-400 mb-2 text-white shadow-xl w-full min-w-[120px] p-3 ml-2 rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-2xl cursor-pointer" ${
              kitapsepetiColor === true ? "!bg-violet-600" : " "
            }`}
            onClick={kitapsepeti}
          >
            kitapsepeti.com
          </div>
        </div>
        <div className="w-full h-full">
          <Books data={data} setSearch={setSearch} search={search} />
        </div>
      </div>
    </div>
  );
};

export default App;
