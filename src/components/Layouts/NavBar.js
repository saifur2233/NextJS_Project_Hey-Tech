import auth from "@/firebase/firebase.auth";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log("from user", user?.email);
  console.log("from loading", loading);
  console.log("from error", error);
  const menuItems = <></>;
  return (
    <header>
      <div className="navbar bg-blue-700 px-8 ">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <Link href="#" className="text-neutral">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral">
                  Component
                </Link>
                <ul className="p-2 bg-blue-700">
                  <li>
                    <Link href="#" className="text-white">
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="#">RAM</Link>
                  </li>
                  <li>
                    <Link href="#">Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href="#">Storage Device</Link>
                  </li>
                  <li>
                    <Link href="#">Monitor</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" className="text-neutral">
                  Special Offer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral">
                  Account
                </Link>
              </li>
              {user?.email && (
                <li>
                  <Link href="#" className="text-neutral ">
                    {user?.email}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <p className="font-bold text-2xl">Hey-Tech</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-white">Component</summary>
                <ul className="p-2 bg-blue-700">
                  <li>
                    <Link href="#">CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href="#">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="#">RAM</Link>
                  </li>
                  <li>
                    <Link href="#">Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href="#">Storage Device</Link>
                  </li>
                  <li>
                    <Link href="#">Monitor</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/specialoffer" className="text-white">
                Special Offer
              </Link>
            </li>

            {user?.email ? (
              <>
                <li>
                  <Link href="#" className="text-white">
                    {user?.email}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/account" className="text-white">
                  Account
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/pcbuilder" className="btn btn-accent text-white">
            PC Builder
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
