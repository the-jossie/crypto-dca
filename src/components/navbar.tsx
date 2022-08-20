import { useContext } from 'react';

import { UserContext } from '../contexts';

const Navbar = () => {
  const { user }: any = useContext(UserContext);

  return (
    <div className="py-[25px] px-4 lg:px-[45px] bg-white flex items-center justify-between overflow-hidden">
      <h1 className="text-xl lg:text-3xl font-bold cursor-default">
        DCA <span className="font-light italic text-primary">CORE</span>
      </h1>

      <div className="flex items-center">
        <div className="flex items-center justify-center rounded-full h-8 w-8  bg-grey ml-3 lg:ml-[19px] md:mr-2">
          {user?.name?.slice(0, 1)}
        </div>
        <div className="flex items-center cursor-pointer">
          <p className="hidden md:inline-block text-sm mr-[10px]">{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
