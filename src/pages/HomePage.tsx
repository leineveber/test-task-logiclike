import { GameList } from "@/components/features/GameList/GameList";
import MainLayout from "@/components/layouts/main/MainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <GameList />
    </MainLayout>
  );
};
