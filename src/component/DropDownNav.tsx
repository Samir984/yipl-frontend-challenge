type dropDownNavProps = {
  dropDownNavItems: {
    icon: string;
    label: string;
    key: string;
    text: string;
  }[];
};

export default function DropDownNav({ dropDownNavItems }: dropDownNavProps) {
  return (
    <div className="absolute  hidden  group-hover:flex flex-col z-20  top-7 rounded-lg  w-[412px] ">
      <div className="h-5"></div>
      <div className="flex  flex-col gap-4 bg-white p-8 ">
        {dropDownNavItems.map((item) => {
          return (
            <div
              className="flex gap-6 items-baseline hover:bg-[#f7f7f7] p-4 "
              key={item.key}
            >
              <img src={item.icon} alt="icon" />
              <div className="flex flex-col  ">
                <h4 className="font-semibold font-inter text-lg text-gray-900">
                  {item.label}
                </h4>
                <p className="text-gray-500 text-sm font-normal">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
