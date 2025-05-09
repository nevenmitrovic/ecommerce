import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};
export default MainLayout;
