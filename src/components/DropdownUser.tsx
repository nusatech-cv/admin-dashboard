import UserOne from '/images/user/user-01.png';

const DropdownUser = () => {

  return (
    <div className="relative">
      <div className="flex items-center gap-4" >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
          </span>
          <span className="block text-xs">admin@gmail.com</span>
        </span>
        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
      </div>
    </div>
  );
};

export default DropdownUser;
