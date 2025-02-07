import { Outlet } from "react-router-dom"
import ShoppingHeader from "./header"


function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <ShoppingHeader/>
      <main className="flex w-full flex-col">
        <Outlet/>
      </main>
    </div>
  )
}

export default ShoppingLayout
