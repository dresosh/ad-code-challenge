import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { getBreedsList, getURL } from "./../services/apiservice";
import Modal from "./ModalPopup";
import AnimalCardSkeleton from "./AnimalCardSkeleton";

export default function Cats() {
  const catURL = `https://api.thecatapi.com/v1`;
  const [catList, setCatList] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<any>([]);
  const [searchStr, setSearchStr] = useState<any>("");
  const [showModel, setShowModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>();

  const getCatList = async () => {
    try {
      setLoader(true);
      const str = breeds.find((element: any) => element.name === searchStr);
      const apiResponse = await getURL(catURL, page, str?.id);
      setCatList(apiResponse);
    } catch (error) {
      console.log(error);
    }
    //skeleton effect delay time
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  const getBreeds = async () => {
    try {
      setLoader(true);
      const apiResponse = await getBreedsList(catURL);
      setBreeds(apiResponse);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    getBreeds();
    getCatList();
  }, [page]);
  return (
    <div>
      <div className="container m-auto">
        <h2 className="text-center p-6">
          Whiskers & Wonders: Cat Breeds Unveiled
        </h2>
        <section className="p-4 flex items-stretch sm:items-center flex-col sm:flex-row text-center align-middle">
          <label htmlFor="browser" className="block mr-4 text-lg ">
            Search for your favorite Cat breed
          </label>
          <div className="flex border-2 border-sky-800">
            <input
              list="browsers"
              name="browser"
              id="browser"
              value={searchStr}
              onChange={(e) => {
                setSearchStr(e.target.value);
              }}
              className="w-full block focus:outline-none p-2"
            />
            <button
              onClick={() => {
                getCatList();
              }}
              className="w-10 h-10 text-xl bg-sky-800 text-white focus:outline-none"
            >
              &#8981;
            </button>
          </div>
          <datalist id="browsers">
            {breeds.length &&
              breeds.map((element: any) => {
                return <option value={element.name} key={element.id} />;
              })}
          </datalist>
        </section>
        {loader && (
          <div className="grid grid-col-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 p-4">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <AnimalCardSkeleton showFavIcon={true} key={index} />
              ))}
          </div>
        )}
        {!loader && (
          <div className="grid grid-col-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 p-4">
            {catList?.length &&
              catList.map((cat: any) => {
                return (
                  <AnimalCard
                    key={cat.id}
                    pet={cat}
                    petURL={catURL}
                    setShowModel={setShowModel}
                    setModelData={setModelData}
                    showFavIcon={true}
                  />
                );
              })}
          </div>
        )}
        {/* <div className="flex">
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            load more
          </button>
        </div> */}
      </div>

      {showModel && <Modal data={modelData} setShowModal={setShowModel} />}
    </div>
  );
}
