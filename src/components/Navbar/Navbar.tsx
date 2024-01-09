import { auth } from "@/library/auth";
import ComLink from "./NavLink/ComLinks";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="w-full p-2">
      <div className="">
        <ComLink session={session} />
      </div>
    </header>
  );
};

export default Navbar;
