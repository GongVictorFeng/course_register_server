import express from 'express';
import cors from "cors";
import { getAllCourses, getCourseById } from "./get-courses.route.js";
import { searchLessons } from './search-lessons.route.js';

const app = express();
const port = process.env.PORT || 9000;

// Enable CORS for specify allowed domains
app.use(cors({
    origin: ["https://course-register-e5ab4.web.app"], // Allow Firebase URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

app.route('/api/courses').get(getAllCourses);
app.route('/api/courses/:id').get(getCourseById);
app.route('/api/lessons').get(searchLessons);

const httpServer = app.listen(port, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});