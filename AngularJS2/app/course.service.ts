export class CourseService{
    courses: string[] = ['Angular', 'ASP.NET Web API', 'C#']; 

    getCourses():string[]{
        return this.courses;
    }
}