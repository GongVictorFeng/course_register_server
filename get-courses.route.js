import {COURSES} from "./db-data.js";

export function getAllCourses(req, res) {
    res.status(200).json({payload: Object.values(COURSES).sort((a, b) => a.seqNo - b.seqNo)})
}

export function getCourseById(req, res) {

    const courseId = req.params["id"];

    const courses = Object.values(COURSES);

    const course = courses.find((course) => course.id == courseId);

    res.status(200).json(course);
}