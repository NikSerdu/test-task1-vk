import { Skeleton } from "@mui/material";
import { FC } from "react";

const MovieSkeleton: FC = () => {
  return (
    <>
      <div className="flex gap-10">
        <div>
          <Skeleton variant="rectangular" width={400} height={571} />
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className="font-bold text-2xl">
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem" }}
              width={331}
              height={50}
            />
          </h1>
          <p>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem" }}
              width={331}
              height={50}
            />
          </p>
          <p>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem" }}
              width={331}
              height={50}
            />
          </p>
          <div>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem" }}
              width={331}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Skeleton
          variant="text"
          sx={{ fontSize: "1.5rem" }}
          width={400}
          height={50}
        />
      </div>
    </>
  );
};

export default MovieSkeleton;
