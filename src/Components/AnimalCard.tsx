import { addToFavoriteAPI } from "../services/apiservice";

export default function AnimalCard({
  pet,
  petURL,
  setShowModel,
  setModelData,
  showFavIcon,
}: // addToFavoriteClick
{
  pet: any;
  petURL?: any;
  setShowModel: any;
  setModelData: any;
  showFavIcon: boolean;
  // addToFavoriteClick(): any;
}) {
  const addToFavorite = async (id: any) => {
    try {
      //setLoader(true);
      const apiRequest = {
        image_id: id,
        sub_id: "testUser",
      };
      const response = await addToFavoriteAPI(petURL, apiRequest);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    //setLoader(false);
  };
  return (
    <div className="relative">
      {showFavIcon && (
        <button
          title="Mark favourite"
          onClick={() => {
            addToFavorite(pet.id);
          }}
          className="absolute top-3 right-3 rounded-full p-1 hover:bg-red-400 focus:bg-red-400 focus:outline-none transition duration-700 ease-in-out"
        >
          <img
            src="src/assets/heart.svg"
            alt="Heart Icon"
            className="h-6 w-6"
          />
        </button>
      )}

      <div
        className="flex flex-col justify-center items-center border-solid border border-gray-200 transition-shadow ease-in-out duration-300 hover:shadow-xl p-4 h-full"
        onClick={() => {
          setShowModel(true);
          setModelData(pet);
        }}
      >
        <h3 className="text-center font-medium">{pet.breeds[0].name}</h3>
        <img
          src={pet.url}
          alt={`Cat ${pet.id}`}
          className="h-56 w-full object-fill rounded-lg py-2"
        />
        {pet.breeds[0].description ? (
          <p className="line-clamp-2">{pet.breeds[0].description}</p>
        ) : (
          <p className="flex flex-col line-clamp-2">
            <span>{pet.breeds[0].temperament}</span>
          </p>
        )}
      </div>
    </div>
  );
}
