import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
