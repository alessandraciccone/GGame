import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import game from "../assets/img/game.png";
const navigation = [
  { name: "Homepage", href: "/", current: false },
  { name: "Registration", href: "/registration", current: false },

  { name: "Login", href: "/login", current: false },
  { name: "Find your game", href: "/findyourgame", current: false },
];

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-blue-950 backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo + Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo"
                src={game}
                className="h-8 w-auto bg-purple-500 rounded-lg "
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-blue-800/60 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium transition"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-300 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuItem>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Sign Out
                </button>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-blue-800/60 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium transition"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
