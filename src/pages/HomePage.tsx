import { EmptyState } from "@/components/common/EmptyState/EmptyState";
import { ErrorState } from "@/components/common/ErrorState/ErrorState";
import { LoadingState } from "@/components/common/LoadingState/LoadingState";
import { CoursesList } from "@/components/features/CoursesList/CoursesList";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import { useCourses } from "@/hooks/useCourses";

export const HomePage = () => {
  const { data, isLoading, error } = useCourses();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!data?.length) {
    return <EmptyState />;
  }

  return (
    <MainLayout>
      {(currentTab) => <CoursesList currentTab={currentTab} />}
    </MainLayout>
  );
};
