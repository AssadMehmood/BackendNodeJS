### Week 1 Day 5 Using Mongoose to Define Models and Saving Data


Consider Students Information System, which saves information about `Students`, their registered `Courses`, `Semester`. Each of these (Students, Courses, Semester) are collections in the database. Courses collection also contains marks each student obtained in the course.

- Define the schemas and the models based on these schemas for each of the entities. 
- Relate the entities, in a way that we need to have Courses, Semester, and Students first.
- Courses for a student can be added as array! also add the marks of students.
- Enable search students by name, and by course name.
- Add courses info, semester info and marks once the student information is already saved. i.e. Get the details of each student by `find` method and add values for courses.

NOTE: Keep in mind that not all courses are offered in a semester. Each semester has different courses. 
#### Bonus
- Display students who have got marks greater than 80 in a subject
- Calculate percentage of marks for each student based on courses they are studying. 