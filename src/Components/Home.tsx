import { Link } from "react-router-dom";

export default function Home() {
  interface DashboardLinks {
    path: string;
    imageUrl: string;
    cardTitle: string;
  }

  const dashboardImagesUrl: DashboardLinks[] = [
    {
      path: "/cats",
      imageUrl: "src/assets/animate-cat.png",
      cardTitle: "CATS",
    },
    {
      path: "/dogs",
      imageUrl: "src/assets/animate-dog.png",
      cardTitle: "DOGS",
    },
    {
      path: "/favorites",
      imageUrl: "src/assets/favorite.png",
      cardTitle: "YOUR FAVORITE",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="md:flex m-20 items-center justify-center">
        {dashboardImagesUrl.map((linkItem, index) => {
          return (
            <Link
              className="flex flex-col justify-center items-center mb-8 md:mb-0 no-underline border m-4 p-4 border-gray-200 transition-shadow ease-in-out duration-300 hover:shadow-xl"
              to={linkItem.path}
              key={index}
            >
              <img src={linkItem.imageUrl} className="h-52 w-52" />
              <h3 className="text-center text-lg uppercase font-bold">
                {linkItem.cardTitle}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
