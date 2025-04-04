import { NavLink } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Lumi Energia</h1>
        <nav className="flex gap-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/invoices"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
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
