import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetProfileByIdQuery } from "redux/stats/profileApi";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [isErrorShow, setIsErrorShow] = useState<boolean>(false);

  const navigate = useNavigate();

  const { isError, isSuccess } = useGetProfileByIdQuery(value, {
    skip: !value,
  });

  const showError = () => {
    setIsErrorShow(true);
    const timer = setTimeout(() => {
      setIsErrorShow(false);
      clearTimeout(timer);
    }, 6000);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(event?.currentTarget.value);

  useEffect(() => {
    console.log({ isSuccess });
    if (isSuccess && !isError) navigate(`/profile/${value}`);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) showError();
  }, [isError]);
  
  return (
    <div className={`flex items-center`}>
      <input
        className={`${isOpen ? "flex" : "hidden"} border`}
        value={value}
        onChange={handleChange}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="color-primary mr-4 font-smooch text-3xl transition-colors hover:text-accent"
      >
        Search
      </button>

      <div
        className={`${
          isErrorShow ? "block" : "hidden"
        } bg-black p-2 text-white`}
      >
        No such user!
      </div>
    </div>
  );
};

export default SearchBar;
