# 🏋️ Coders Gym

A modern, responsive fitness and gym website built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

Coders Gym is designed with a clean and modern UI to showcase gym programs, fitness equipment, blogs, testimonials, offers, and promotional sections. The project also includes interactive product/category filtering using React `useState` and smooth scroll-based animations using Framer Motion.

---

## 🚀 Live Demo

🔗 **Live Website:**  
https://your-live-demo-link.com

---

## 📸 Features

- ✅ Fully Responsive Design
- ✅ Modern Gym/Fitness UI
- ✅ React.js Component-Based Architecture
- ✅ Tailwind CSS for Styling
- ✅ Framer Motion Animations
- ✅ Interactive Category Filtering
- ✅ React `useState` for Filter State Management
- ✅ Responsive Navbar with Mobile Menu
- ✅ Animated Hero Section
- ✅ Product/Equipment Filter
- ✅ Testimonials Section
- ✅ Blog Sections
- ✅ Call-to-Action Section
- ✅ Responsive Footer
- ✅ Hover Effects and Smooth Transitions
- ✅ React Icons Integration
- ✅ Clean and Reusable Components

---

## 🛠️ Technologies Used

### Frontend

- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**

### Development Tools

- **Vite**
- **Git**
- **GitHub**
- **VS Code**

---

## 🎨 Sections

The website contains multiple sections designed for a complete gym/fitness experience:

### 🏠 Hero Section

A modern hero section featuring:

- Gym introduction
- Call-to-action buttons
- Fitness imagery
- Framer Motion animations
- Responsive layout

---

### 💪 Offers Section

Displays the main categories/services offered:

- Yoga Equipment
- Muscle Equipment
- Fitness Equipment

The cards include responsive layouts, hover effects, and entrance animations.

---

### 🛍️ Product Filter

An interactive filtering system allows users to filter products based on categories:

- All
- Yoga
- Fitness
- Muscles

The filtering functionality is implemented using React's `useState`.

Example:

```jsx
const [activeTab, setActiveTab] = useState("All");

const filteredProducts =
  activeTab === "All"
    ? products
    : products.filter(
        (product) => product.category === activeTab
      );
      This allows the UI to update dynamically without reloading the page.

📝 Blog Section

The website includes blog sections focused on fitness and self-care.

Features:

Responsive two-column layout
Fitness imagery
Call-to-action button
Framer Motion animations
⭐ Testimonials

A responsive customer testimonials section showcasing:

Customer profile images
Customer names
Reviews
Five-star ratings
Responsive cards
Scroll animations
🎯 CTA Section

A promotional call-to-action section encouraging users to take advantage of a first-order discount.

Includes:

Promotional heading
Supporting text
Action buttons
Responsive typography
📱 Responsive Navbar

The navigation bar is responsive across different screen sizes.

Desktop:

Logo | Home | Trainer | Program | Blogs | Pricing | Search | Cart | Login

Mobile:

Logo                                      ☰

The mobile menu is controlled using React useState.

🦶 Footer

The footer contains:

Gym branding
Social media icons
Important links
Company links
Resources
Location information
Copyright information
🎬 Animations

The project uses Framer Motion to create smooth and modern animations.

Different animation utilities are used throughout the website, including:

SlideLeft()
SlideRight()
SlideUp()
Rotate()

Example:

<motion.div
  variants={SlideUp(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
>
  ...
</motion.div>

These animations provide smooth entrance effects as users scroll through the page.

📂 Project Structure
coders-gym/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Offers.jsx
│   │   ├── Filter.jsx
│   │   ├── Blogs.jsx
│   │   ├── NewBlog.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Cta.jsx
│   │   └── Footer.jsx
│   │
│   ├── utility/
│   │   └── animation.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
⚙️ Installation

Follow these steps to run the project locally.

1. Clone the Repository
git clone https://github.com/your-username/coders-gym.git
2. Navigate to the Project
cd coders-gym
3. Install Dependencies
npm install
4. Start Development Server
npm run dev

The application will be available at:

http://localhost:5173
📦 Dependencies

Main dependencies used in this project:

npm install react
npm install framer-motion
npm install react-icons

Tailwind CSS is used for the complete responsive UI and styling.

📱 Responsive Design

The website is optimized for:

📱 Mobile devices
📱 Tablets
💻 Laptops
🖥️ Desktop screens

Tailwind responsive breakpoints are used throughout the project:

sm → Small devices
md → Medium devices
lg → Large devices
xl → Extra large devices

Example:

grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

This allows the layout to automatically adapt to different screen sizes.

🧠 What I Learned

While building this project, I practiced and improved my knowledge of:

React component development
React useState
Conditional rendering
Array .map()
Array .filter()
Props and reusable components
Tailwind CSS
Responsive design
Framer Motion
Scroll-based animations
React Icons
Mobile navigation
Git and GitHub
Component organization
🔮 Future Improvements

Some features that can be added in the future:

 Shopping cart functionality
 Product details page
 Authentication/Login system
 Backend integration
 Database integration
 Payment gateway
 Search functionality
 Product API integration
 Blog details page
 Dark mode
 Admin dashboard
🤝 Contributing

Contributions are welcome!

If you would like to improve this project:

Fork the repository
Create a new branch
git checkout -b feature/new-feature
Make your changes
Commit your changes
git commit -m "Add new feature"
Push the branch
git push origin feature/new-feature
Open a Pull Request
👨‍💻 Author
Muhammad Huzaifa

Frontend Developer specializing in:

React.js
JavaScript
HTML
CSS
Tailwind CSS
WordPress
Git & GitHub
⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more projects!

📄 License

This project is created for educational and portfolio purposes.


### GitHub repository description

For the short **GitHub "About" description**, I'd use:

> **Modern responsive gym website built with React, Tailwind CSS & Framer Motion, featuring interactive category filtering with React useState, smooth animations, responsive UI, testimonials, blogs, and fitness equipment sections.**

And for GitHub topics, use:

```text
react
javascript
tailwindcss
framer-motion
react-icons
vite
responsive-design
gym-website
fitness-website
frontend
react-hooks
usestate

This README presents the project as a proper portfolio project, rather than just a basic React practice project.