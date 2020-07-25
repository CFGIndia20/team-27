
## Models
User Model Schema
Login / signup
name
email
password
access => teacher, admin, student
verified => teacher (admin will verify for teacher)

Created according to access
student: ref Student
teacher: ref Teacher



Student Model Schema
skills => enum array
degrees => { 10: {school,year, percentage }, 12: {school,year, percentage }, undergrad: {school,year, percentage }, postgrad: {school,year, percentage }}
experiences => [{company, start, end, post, details}]


Teacher Model Schema
subjects => enum array
degrees => { 10: {school,year, percentage }, 12: {school,year, percentage }, undergrad: {school,year, percentage }, postgrad: {school,year, percentage }}
experiences => [{company, start, end, post, details}]



## Pages
* Auth pages
    * Login page
    * Signup page
* Student/teacher details page
    * skills/subjects
    * degrees
    * experiences

Students
Pages
* Profile page, edit details (uploaded documents)
* MCQ form [later on]
* Register for a slot (if none active)
* Current slot active / class details (teacher name, course name, skill level, attendance, etc) (leave class)
* View jobs page (all jobs) and apply for job button (filter jobs based on skills) [only after he completes course, and attendance above 80%]


After they login, aadhar card, 10th standard sheet, below poverty line card, and 12 standard sheet, automated test for skills (google forms) => Level of skill and satisfy the requirement
Upload their resume
The admin will verify before they signup for a class, admin checks skills entered
Select a slot starting after they register
Person can view teacher name, attendance, start date, skill level
After they complete the program, they can view jobs
Jobs can viewed on the basis of their attendance, based on skills they have
Apply for the job

Ratings to be implemented later

Teacher
Pages
* Batches he's allocated (timetable)
* Attendance posting

Add skills
Raise an issue to change a slot (substitute)
Mark attendance for all students in the class for the day

Ratings to be implemented later

Admin
Pages
* Verify teacher and student
* Add a new slot
* Check pending requests for slot change
* Add a new job [modal inside the all jobs page]
* Find eligible students

The admin will put up a slot with a start date, end date, with multiple batches
Verify student and teacher
Respond to request of teacher
Add a new job, along with job name,  salary, job tags (like communication, etc)
Look for students for a job, based on the jobs tags and check their profile (resume, attendance etc)

Skills
Interpersonal
Communication
Problem Solving

