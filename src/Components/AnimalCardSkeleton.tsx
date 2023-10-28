//import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function AnimalCardSkeleton(prop: any) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={5}>
      <div className="relative">
        {prop.showFavIcon && (
          <button className="absolute top-3 right-3">
            <img
              src="src/assets/heart.svg"
              className="h-6 w-6 rounded-lg"
              alt="Heart Icon"
            />
          </button>
        )}

        <section className="flex flex-col justify-center items-center border-solid border border-gray-200 p-4">
          <h3>
            <Skeleton />
          </h3>
          <Skeleton className="block h-56 w-full" />
          <p>
            <Skeleton count={2} />
          </p>
        </section>
      </div>
    </SkeletonTheme>
  );
}
