import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignOutBtn, Button } from "./index";
import { toggleGpt } from "../Store/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAuthentic = useSelector((state) => state.auth.authentic);
  const gptActive = useSelector((state) => state.gpt.gptactive); 

  const logourl =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  return (
    <header className="absolute flex items-center justify-between w-full bg-black opacity-80 px-8 py-4 text-white z-10">
      <div className="cursor-pointer" onClick={() => navigate("/browse")}>
        <img className="w-32" src={logourl} alt="Netflix Logo" />
      </div>

      <nav>
        <ul className="flex space-x-6">
          
          {userAuthentic && (
            <>
            <li>
            <Button
              name={gptActive ? "Home" : "GPTSearch"}
              onClick={() => dispatch(toggleGpt())}
              className="text-lg font-medium hover:text-red-500 transition cursor-pointer"
              />
          </li>
            <li className="ml-6">
              <SignOutBtn />
            </li>
              </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
