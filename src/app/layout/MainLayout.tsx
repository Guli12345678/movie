import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);