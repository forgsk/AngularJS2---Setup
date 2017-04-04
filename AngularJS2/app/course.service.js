"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseService = (function () {
    function CourseService() {
        this.courses = ['Angular', 'ASP.NET Web API', 'C#'];
    }
    CourseService.prototype.getCourses = function () {
        return this.courses;
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map