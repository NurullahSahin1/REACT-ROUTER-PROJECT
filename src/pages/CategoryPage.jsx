import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  const user = {
    name: "ahmet",
    type: "admin ",
  };

  if (user.type !== "admin") {
    //1) hook kullanımı
    // navigate("/");
    // 2)bileşen kullanımı
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>

      <Outlet />
    </div>
  );
};

export default CategoryPage;
