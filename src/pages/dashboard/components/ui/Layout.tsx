import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-green-600">Lumi Energia</h1>
        </div>
        <nav className="flex gap-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-text-green-600 pb-1"
                : "text-gray-600 hover:text-green-600"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/invoices"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold border-b-2 border-green-text-green-600 pb-1"
                : "text-gray-600 hover:text-green-600"
            }
          >
            Faturas
          </NavLink>
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
};
