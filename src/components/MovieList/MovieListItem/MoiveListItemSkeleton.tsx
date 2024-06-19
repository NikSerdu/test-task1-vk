import { Skeleton } from "@mui/material";
import { FC } from "react";

const MoiveListItemSkeleton: FC = () => {
  return (
    <div>
      <Skeleton variant="rectangular" width={200} height={282} />

      <Skeleton
        variant="text"
        sx={{ fontSize: "0.5rem" }}
        width={200}
        height={20}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "0.5rem" }}
        width={200}
        height={20}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "0.5rem" }}
        width={200}
        height={20}
      />
    </div>
  );
};

export default MoiveListItemSkeleton;
