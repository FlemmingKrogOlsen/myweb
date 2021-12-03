import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Invoices</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : "gray",
        })} to="/about">About</NavLink> |{" "}
        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : "gray",
        })} to="/invoices">Invoices</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}