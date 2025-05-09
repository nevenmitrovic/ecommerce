import Navbar from "@/components/common/navbar/Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </>
  );
};
export default MainLayout;
