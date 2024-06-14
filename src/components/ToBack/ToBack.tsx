import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ButtonHTMLAttributes, FC } from "react";
import { useNavigate } from "react-router-dom";
type TypeData = {} & ButtonHTMLAttributes<HTMLButtonElement>;
const ToBack: FC<TypeData> = ({ className }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className={className}>
      <ArrowBackIcon fontSize="large" />
    </button>
  );
};

export default ToBack;
