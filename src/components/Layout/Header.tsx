import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { FC } from "react";
import { Link } from "react-router-dom";
const Header: FC = () => {
  return (
    <div className="pt-5 flex justify-between">
      <Link className=" text-3xl font-bold" to={"/"}>
        Фильмы
      </Link>
      <Link className="" to={"/favourites"}>
        <FavoriteIcon sx={{ color: pink[500] }} />
      </Link>
    </div>
  );
};

export default Header;
