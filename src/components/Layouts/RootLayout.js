const { default: Link } = require("next/link");

const RootLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="navbar bg-blue-700 px-8 text-white">
          <div className="navbar-start">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="#">Item 1</Link>
                </li>
                <li>
                  <Link href="#">Parent</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="#">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="#">Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Item 3</Link>
                </li>
              </ul>
            </div>
            <Link href="#" className="btn btn-ghost text-xl">
              <p className="font-bold text-2xl">Hey-Tech</p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="#">Item 1</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="#">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="#">Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#">Item 3</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link href="#" className="btn">
              Button
            </Link>
          </div>
        </div>
      </header>
      <div className="px-12">{children}</div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <Link href="#" className="link link-hover">
            Branding
          </Link>
          <Link href="#" className="link link-hover">
            Design
          </Link>
          <Link href="#" className="link link-hover">
            Marketing
          </Link>
          <Link href="#" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link href="#" className="link link-hover">
            About us
          </Link>
          <Link href="#" className="link link-hover">
            Contact
          </Link>
          <Link href="#" className="link link-hover">
            Jobs
          </Link>
          <Link href="#" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href="#" className="link link-hover">
            Terms of use
          </Link>
          <Link href="#" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="#" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default RootLayout;
