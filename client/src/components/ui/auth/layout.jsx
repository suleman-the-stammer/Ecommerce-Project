import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex ">
      <div
        className="min-h-screen w-1/2 text-center
      text-primary-foreground px-12  bg-zinc-950 text-white flex justify-center items-center "
      >
        <h1 className="font-extrabold text-4xl text-center tracking-tight">
          Welcome to Ecommerce Shopping
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
