import { apiInstance } from "../apiInstance";
import { GetCoursesResponse } from "./coursesTypes";

export class CoursesService {
  static async getCourses(): Promise<GetCoursesResponse> {
    return apiInstance
      .get<GetCoursesResponse>("/courses.json")
      .then((res) => res.data);
  }
}
