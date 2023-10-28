import { useEffect, useState } from "react";
import { getFavoriteList, getImageData } from "./../services/apiservice";
import AnimalCard from "./AnimalCard";
import AnimalCardSkeleton from "./AnimalCardSkeleton";
import Modal from "./ModalPopup";

export default function Favorite() {
  const [openTab, setOpenTab] = useState<number>(1);
  const catURL = `https://api.thecatapi.com/v1`;
  const dogURL = `https://api.thedogapi.com/v1`;
  const [favoriteList, setFavoriteList] = useState<any>();
  const [loader, setLoader] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [modelData, setModelData] = useState<any>();

  const getFavorites = async (url: any) => {
    try {
      const apiResponse: any = await getFavoriteList(url);
      const promises = apiResponse.map((favorite: any) => {
        return getImageData(url, favorite.image_id);
      });
      const respsonse = await Promise.all(promises);
      setFavoriteList(respsonse);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  useEffect(() => {
    getFavorites(catURL);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-stretch justify-center mt-9 mx-4">
        <ul className="flex space-x-2 border-b-2 border-sky-800 justify-stretch items-stretch">
          <li className="flex-grow sm:flex-grow-0 flex items-center justify-center">
            <a
              onClick={() => {
                setOpenTab(1);
                getFavorites(catURL);
              }}
              className={`no-underline w-full sm:w-56 text-center p-1 ${
                openTab === 1
                  ? "bg-sky-800 text-white cursor-auto"
                  : "bg-white text-black cursor-pointer"
              }`}
            >
              CATS
            </a>
          </li>
          <li className="flex-grow sm:flex-grow-0 flex items-center justify-center">
            <a
              onClick={() => {
                setOpenTab(2);
                getFavorites(dogURL);
              }}
              className={`no-underline w-full sm:w-56 text-center p-1 ${
                openTab === 2
                  ? "bg-sky-800 text-white cursor-auto"
                  : "bg-white text-black cursor-pointer"
              }`}
            >
              DOGS
            </a>
          </li>
        </ul>
        <div className="mt-6">
          <div className={openTab === 1 ? "block" : "hidden"}>
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
                {favoriteList?.length &&
                  favoriteList.map((cat: any) => {
                    return (
                      <AnimalCard
                        key={cat.id}
                        pet={cat}
                        setShowModel={setShowModel}
                        setModelData={setModelData}
                        showFavIcon={false}
                      />
                    );
                  })}
              </div>
            )}
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
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
                {favoriteList?.length &&
                  favoriteList.map((dog: any) => {
                    return (
                      <AnimalCard
                        key={dog.id}
                        pet={dog}
                        setShowModel={setShowModel}
                        setModelData={setModelData}
                        showFavIcon={false}
                      />
                    );
                  })}
                {showModel && (
                  <Modal data={modelData} setShowModal={setShowModel} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
