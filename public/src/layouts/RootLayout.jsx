import Header from "./header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import PageTransition from "./animations/PageTransition";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="relative pb-[100px] min-h-screen">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
