import express from 'express';
import { getAllCourses, getCourseById } from "./get-courses.route.js";
import { searchLessons } from './search-lessons.route.js';

const app = express();
const port = process.env.PORT || 9000;

app.route('/api/courses').get(getAllCourses);
app.route('/api/courses/:id').get(getCourseById);
app.route('/api/lessons').get(searchLessons);

const httpServer = app.listen(port, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});