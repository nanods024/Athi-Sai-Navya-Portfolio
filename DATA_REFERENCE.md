# 📊 Navya Portfolio - Complete Data Reference

This document shows all the data used in your portfolio and how to update it.

---

## 1️⃣ SKILLS DATA

**File:** `src/data/skillsData.js`

### Current Data
```javascript
{
  name: "Python",
  percentage: 95
},
{
  name: "SQL",
  percentage: 90
},
{
  name: "Power BI",
  percentage: 95
},
{
  name: "Machine Learning",
  percentage: 85
},
{
  name: "Big Data Technologies",
  percentage: 80
},
{
  name: "Cloud Computing",
  percentage: 80
}
```

### How to Add/Edit
```javascript
// Add a new skill
export const skillsData = [
  // ... existing skills
  {
    name: "New Skill",      // Skill name
    percentage: 75          // 0-100 proficiency
  }
];
```

### Display
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Progress bar animates on scroll
- Shows percentage value

---

## 2️⃣ PROJECTS DATA

**File:** `src/data/projectsData.js`

### Current Data (6 Projects)

```javascript
{
  id: 1,
  title: "Emotion Recognition Through Audio",
  category: "Data Science",
  tech: ["Python", "Machine Learning", "Audio Processing"],
  image: "emotion-recognition.jpg",
  github: "https://github.com/",
  demo: "https://",
  description: "Developed an ML model to recognize emotions from audio data"
}
```

### All 6 Projects
1. **Emotion Recognition Through Audio** - Data Science
2. **WhatsApp Group Chat Analysis** - Data Analysis
3. **Time Series Analysis** - Data Science
4. **Data Word Cloud** - Data Visualization
5. **Portfolio Website** - Web Development
6. **Weather Detection Project** - Data Science

### Filter Options
```javascript
["All", "Data Science", "Data Analysis", "Web Development"]
```

### How to Add/Edit
```javascript
{
  id: 7,                                      // Unique ID
  title: "Your Project Title",                // Project name
  category: "Data Science",                   // Must match filter option
  tech: ["Tech1", "Tech2", "Tech3"],         // Technology stack
  image: "project-image.jpg",                 // Placeholder or image filename
  github: "https://github.com/yourrepo",     // GitHub link
  demo: "https://your-demo-link.com",        // Live demo link
  description: "Brief project description"    // 1-2 sentences
}
```

### Display
- Filterable by category
- 3-column (desktop), 2-column (tablet), 1-column (mobile)
- Image with hover overlay showing GitHub and Demo buttons
- Tech stack displayed as tags
- Category highlighted

---

## 3️⃣ SERVICES DATA

**File:** `src/data/servicesData.js`

### Current Data (4 Services)

```javascript
{
  id: 1,
  title: "Data Analysis",
  icon: FaChartBar,
  description: "Transforming raw data into actionable insights using Python, statistical analysis, and machine learning models."
},
{
  id: 2,
  title: "Data Visualization",
  icon: FaPalette,
  description: "Creating compelling visual narratives with Power BI, Python visualization libraries, and interactive dashboards."
},
{
  id: 3,
  title: "Big Data Management",
  icon: FaDatabase,
  description: "Managing and processing large-scale datasets using Hadoop, Spark, and distributed computing frameworks."
},
{
  id: 4,
  title: "Cloud Computing Solutions",
  icon: FaCloud,
  description: "Deploying scalable solutions on AWS and Azure with focus on performance, security, and cost optimization."
}
```

### Available Icons
React Icons includes 1000+ icons. Some commonly used ones:

**From FontAwesome (FaXXX):**
- FaChartBar, FaChartLine, FaChartPie
- FaPalette, FaBrush, FaPencil
- FaDatabase, FaServer, FaHardDrive
- FaCloud, FaCloudDownloadAlt, FaCloudUploadAlt
- FaCode, FaLaptop, FaMobile
- FaUsers, FaTeam, FaUserTie
- FaBriefcase, FaTools, FaWrench
- FaCog, FaGear, FaSpinner

**Import example:**
```javascript
import { FaCode, FaTools, FaRocket } from "react-icons/fa";
```

### How to Add/Edit
```javascript
import { FaYourIcon } from "react-icons/fa";

{
  id: 5,
  title: "Your Service Title",
  icon: FaYourIcon,  // Choose icon from react-icons
  description: "Detailed description of your service capabilities and expertise."
}
```

### Display
- 2x2 grid (desktop), responsive to mobile
- Icon displayed at top with hover animation
- Hover effect: lift card + border glow

---

## 4️⃣ CERTIFICATIONS DATA

**File:** `src/data/certificationsData.js`

### Current Data (3 Certifications)

```javascript
{
  id: 1,
  title: "Data Science Internship",
  organization: "Imaginnovate",
  year: 2024,
  logo: "imaginnovate-logo.png",
  credential: "https://"
},
{
  id: 2,
  title: "Python",
  organization: "HackerRank",
  year: 2023,
  logo: "hackerrank-logo.png",
  credential: "https://"
},
{
  id: 3,
  title: "Data Science Introduction",
  organization: "Great Learning",
  year: 2023,
  logo: "great-learning-logo.png",
  credential: "https://"
}
```

### How to Add/Edit
```javascript
{
  id: 4,
  title: "Certification Name",           // What credential
  organization: "Organization Name",     // Issuer
  year: 2024,                           // Year obtained
  logo: "org-logo.png",                 // Logo filename (optional)
  credential: "https://credential-url"  // Verification link
}
```

### Display
- 3-column responsive grid
- Logo placeholder on left, text on right
- Shows: Title, Organization, Year
- Hover: Scale up + glow effect

---

## 5️⃣ TIMELINE DATA

**File:** `src/data/timelineData.js`

### Current Data (5 Timeline Items)

```javascript
{
  id: 1,
  year: 2024,
  title: "Data Science",
  description: "University at Albany - Pursuing Data Science Degree"
},
{
  id: 2,
  year: 2023,
  title: "Emotion Recognition Through Audio",
  description: "Advanced ML project on sentiment analysis"
},
{
  id: 3,
  year: 2023,
  title: "Time Series Analysis",
  description: "Forecasting and temporal data analysis project"
},
{
  id: 4,
  year: 2023,
  title: "WhatsApp Group Chat Analysis",
  description: "Data mining and visualization project"
},
{
  id: 5,
  year: 2022,
  title: "Weather Detection Project",
  description: "ML-based weather pattern recognition"
}
```

### How to Add/Edit
```javascript
{
  id: 6,
  year: 2024,                              // Year
  title: "Project or Milestone Title",    // What happened
  description: "Brief description (1-2 sentences)" // Details
}
```

### Display
- Vertical timeline with center line
- Alternative left/right layout
- Circle nodes with accent color
- Cards with hover scale effect

---

## 🎨 COMPONENT DATA REFERENCES

### Hero Section (Hard-coded)
```
Text: "Hello, I'm"
Name: "Athi Sai Navya"
Title: "Frontend Developer | Data Science Student"

Rotating Roles:
- "Data Analyst"
- "Machine Learning Enthusiast"
- "Cloud Explorer"

Buttons:
- Download Resume
- Contact Me

Image: Profile placeholder (NS initials)
```

**To Edit:** Modify `src/components/Hero.jsx` (lines 40-70)

---

### About Section (Hard-coded)
```
Title: "About Me"

Summary: "Passionate Data Science Student at University at 
Albany with a strong foundation in Python, SQL, Machine Learning, 
Big Data, and Cloud technologies..."

Highlight Cards (Hard-coded):
1. Project Management - Icon: Briefcase
2. Problem Solving - Icon: Brain
3. Collaboration - Icon: Users
4. Projects Completed: 4 - Icon: CheckCircle
```

**To Edit:** Modify `src/components/About.jsx` (lines 12-26 for highlights)

---

### Contact Section (Hard-coded)
```
Address:
1400 Washington Ave
Albany, NY 12222, USA

Email:
sainavyaathi@gmail.com

Social Icons:
- LinkedIn (FaLinkedin)
- GitHub (FaGithub)
- Instagram (FaInstagram)

Form Fields:
- Name (required)
- Email (required)
- Subject (required)
- Message (required)
```

**To Edit:** Modify `src/components/Contact.jsx`

---

## 📝 QUICK UPDATE GUIDE

### Add a New Project
```javascript
// Edit: src/data/projectsData.js
{
  id: 7,
  title: "Your New Project",
  category: "Data Science",  // or other categories
  tech: ["React", "Python"],
  image: "new-project.jpg",
  github: "https://github.com/yourlink",
  demo: "https://demo-link.com",
  description: "What does this project do?"
}
```

### Update Skills
```javascript
// Edit: src/data/skillsData.js
// Change percentage values
{
  name: "Python",
  percentage: 95  // Change this number
}
```

### Add New Certification
```javascript
// Edit: src/data/certificationsData.js
{
  id: 4,
  title: "New Certification",
  organization: "Provider Name",
  year: 2024,
  logo: "logo.png",
  credential: "https://verify.com"
}
```

### Change Contact Info
```javascript
// Edit: src/components/Contact.jsx (line 47-63)
// Update address, email, and social links
```

---

## 🖼️ IMAGE PLACEHOLDERS

Currently using:
- **Colored Gradients** for images (no external images needed)
- **Avatar:** "NS" (Navya's initials in gradient)
- **Projects:** Project title first letter
- **Certifications:** Organization initials

### To Use Real Images

1. **Add image file** to `src/assets/images/`
2. **Import in component:**
```javascript
import profileImage from '../assets/images/profile.jpg';
```
3. **Use in JSX:**
```jsx
<img src={profileImage} alt="Profile" />
```

### Recommended Image Sizes
- **Profile:** 350x350px (About section), 300x300px (Hero)
- **Projects:** 400x250px
- **Certifications:** 60x60px (logo)

---

## 🔗 IMPORTANT LINKS TO UPDATE

1. **Resume Download Button** (Hero.jsx)
   ```javascript
   // Add onClick or href for resume PDF
   ```

2. **Project Links** (projectsData.js)
   ```javascript
   github: "https://github.com/your-username/repo-name"
   demo: "https://your-deployed-site.com"
   ```

3. **Social Media** (Contact.jsx)
   ```javascript
   LinkedIn: "https://linkedin.com/in/yourprofile"
   GitHub: "https://github.com/your-username"
   Instagram: "https://instagram.com/your-username"
   ```

4. **Email** (Contact.jsx)
   ```javascript
   mailto:sainavyaathi@gmail.com
   ```

---

## 📊 DATA STATISTICS

| Section | Items | Editable? | Location |
|---------|-------|-----------|----------|
| Skills | 6 | ✅ Yes | skillsData.js |
| Projects | 6 | ✅ Yes | projectsData.js |
| Services | 4 | ✅ Yes | servicesData.js |
| Certifications | 3 | ✅ Yes | certificationsData.js |
| Timeline | 5 | ✅ Yes | timelineData.js |
| Hero Content | - | ✅ Yes | Hero.jsx |
| About Content | - | ✅ Yes | About.jsx |
| Contact Info | - | ✅ Yes | Contact.jsx |

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying, update:

- [ ] Resume link (Hero button)
- [ ] All project links (GitHub + Demo)
- [ ] All social media links
- [ ] Contact email address
- [ ] Profile images
- [ ] Project images
- [ ] Certification logos
- [ ] All text content
- [ ] Meta tags in index.html
- [ ] Domain name

---

**Data Version:** 1.0  
**Last Updated:** March 3, 2026

For more detailed component information, see `IMPLEMENTATION_SUMMARY.md`
