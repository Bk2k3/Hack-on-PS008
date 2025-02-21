import 'dotenv/config.js';
import mongoose from 'mongoose';
import Course from './src/models/Course.js';

const sampleCourses = [
  {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript, the programming language of the web."
  },
  {
    title: "Advanced React",
    description: "Deep dive into React hooks, context, and performance optimizations."
  },
  {
    title: "Node.js Fundamentals",
    description: "Learn how to build server-side applications using Node.js and Express."
  }
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    await Course.deleteMany({});
    await Course.insertMany(sampleCourses);
    console.log('Sample courses inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error inserting courses', err);
    process.exit(1);
  });
