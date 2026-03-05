## 3.2 Interface Storyboarding

This section outlines the interface storyboarding for the AI Assessment Platform, categorizing the interface screens based on user roles: **Common User, Student, Instructor, and Admin**.

For each storyboard step, a placeholder is provided where the corresponding UI mockup or screenshot should be inserted into the final proposal document.

---

### 1. Common User Views

**1.1 As a common user, I should be able to view the platform's features and understand the value proposition before logging in.**
* **Screen to add:** `Landing Page` (Homepage)
* *Note: This screenshot should show the Hero section, value propositions, and the prominent call-to-actions.*

**1.2 As a user of the system, I should be able to select my role and login so that I can perform my desired tasks.**
* **Screen to add:** `User Login Screen` / `Role Selection`
* *Reference Image Mapping:* You can use **Figure 7: User Login Screen** here as the baseline representation of the authentication gateway.

---

### 2. Student Views

**2.1 As a Student, I should be able to view a summary of my active courses, recent grades, and overall progress.**
* **Screen to add:** `Student Dashboard` (`/student/dashboard`)
* *Reference Image Mapping:* You can adapt **Figure 10: Dashboard** and **Figure 12: Student Dashboard** here to demonstrate the high-level course overview layout.

**2.2 As a Student, I should be able to view details and required tasks for my specific classes.**
* **Screen to add:** `Student Tasks & Information View` (`/student/tasks`)
* *Reference Image Mapping:* You can use **Figure 14: Class Information** here to indicate how a student expands a course to see assessments, content, and pending to-dos.

**2.3 As a Student, I should be able to view my past submissions and review the AI-assisted feedback.**
* **Screen to add:** `Student Submissions View` (`/student/submissions`)
* *Note: This screenshot should highlight the table or list of past assignments along with their final grades and feedback summaries.*

---

### 3. Instructor Views

**3.1 As an Instructor (Course Convenor), I should be able to view an overarching dashboard of my courses and pending grading tasks.**
* **Screen to add:** `Instructor Dashboard` (`/instructor/dashboard`)
* *Note: This screenshot should focus on actionable metrics like "Submissions awaiting review" or "Average class performance".*

**3.2 As an Instructor, I should be able to add/modify course assessments and configure grading rubrics.**
* **Screen to add:** `Create/Edit Assessment View` (`/instructor/assessments/new`)
* *Note: This is a critical screen showing the upload area for rubrics and the configuration of the AI grading parameters.*

**3.3 As an Instructor, I should be able to review the AI's provisional grading, edit the feedback, and finalize the score (Human-in-the-Loop workflow).**
* **Screen to add:** `Grading Interface` (`/instructor/grading/[id]`)
* *Note: This screenshot illustrates the core value of the platform: showing the student submission alongside the AI-generated feedback and the instructor override controls.*

---

### 4. Admin Views

**4.1 As a System Administrator, I should be able to view platform-wide analytics and system health.**
* **Screen to add:** `Admin Dashboard` (`/admin/dashboard`)
* *Note: Show high-level statistics like total active users, API usage metrics, and system status.*

**4.2 As an Admin, I should be able to manage users, assigning or revoking roles across the platform.**
* **Screen to add:** `User Management View` (`/admin/users`)
* *Note: This screenshot should show a comprehensive data table listing all registered users, their roles (Student/Instructor/Admin), and quick-action buttons.*
