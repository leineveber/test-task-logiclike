export interface Course {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}

export type GetCoursesResponse = Course[];
