
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function SearchPopup({
  setDarkBgGround,
  setOpenSearchBox,
  openSearchBox,
}: {
  setDarkBgGround: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBox: boolean;
}) {
  return (
    <>
      <IoSearch
        color="white"
        size={28}
        onClick={() => {
          setOpenSearchBox(true);
          setDarkBgGround(true);
        }}
      />

      <div
        className={`absolute -top-12 right-[50%] translate-x-[50%] transition-all duration-300 z-40 ${
          openSearchBox && "top-32 "
        }`}
      >
        <div className="w-[300px] tablet:w-[500px] relative bg-white rounded-lg ">
          <div
            className="absolute right-0 -top-3 bg-white rounded-full"
            onClick={() => {
              setOpenSearchBox(false);
              setDarkBgGround(false);
            }}
          >
            <IoIosClose />
          </div>
          <div className="flex  gap-2 w-full p-2">
            <IoSearch color="black" size={28} />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    </>
  );
}
