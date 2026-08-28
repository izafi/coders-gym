# 🏋️ Coders Gym

A modern, responsive fitness and gym website built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

Coders Gym features a clean and modern UI designed to showcase gym programs, fitness equipment, offers, blogs, testimonials, and promotional sections. The project also includes interactive equipment filtering using React `useState` and smooth scroll-based animations using Framer Motion.

---

## 🚀 Live Demo

🔗 **Live Website:**  
https://coders-gym-coral.vercel.app/

---

## 📸 Features

- ✅ Fully Responsive Design
- ✅ Modern Gym & Fitness UI
- ✅ React Component-Based Architecture
- ✅ Tailwind CSS Styling
- ✅ Framer Motion Animations
- ✅ Interactive Equipment Filtering
- ✅ React `useState` for Filter State Management
- ✅ Responsive Navbar with Mobile Menu
- ✅ Animated Hero Section
- ✅ Fitness Equipment Categories
- ✅ Testimonials Section
- ✅ Blog Sections
- ✅ Offers Section
- ✅ Call-to-Action Section
- ✅ Responsive Footer
- ✅ Hover Effects & Smooth Transitions
- ✅ React Icons Integration
- ✅ Clean & Reusable Components
- ✅ Mobile, Tablet & Desktop Support

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

## 🎨 Website Sections

### 🏠 Hero Section

A modern hero section introducing the gym with:

- Gym introduction
- Call-to-action buttons
- Fitness imagery
- Responsive layout
- Framer Motion animations

---

### 💪 Offers Section

The offers section showcases different fitness equipment categories:

- Yoga Equipment
- Muscle Equipment
- Fitness Equipment

Each category includes responsive layouts, hover effects, and smooth entrance animations.

---

### 🛍️ Equipment Filter

The website includes an interactive equipment filtering system.

Users can filter equipment based on different categories:

- All
- Yoga
- Fitness
- Muscles

The filtering functionality is implemented using React's `useState` and JavaScript's `.filter()` method.

### Example

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

The website includes blog sections focused on fitness, workouts, health, and self-care.

Features
Responsive blog layout
Fitness-related content
High-quality imagery
Call-to-action buttons
Framer Motion animations
Responsive design
⭐ Testimonials

A responsive testimonials section showcasing customer feedback.

Includes
Customer profile images
Customer names
Customer reviews
Five-star ratings
Responsive testimonial cards
Scroll-based animations
🎯 CTA Section

A promotional Call-to-Action section encouraging users to take advantage of special offers.

Includes
Promotional heading
Supporting text
Action buttons
Responsive typography
Modern UI design
📱 Responsive Navbar

The navigation bar is fully responsive and adapts to different screen sizes.

Desktop
Logo | Home | Trainer | Program | Blogs | Pricing | Search | Cart | Login
Mobile
Logo | ☰

The mobile navigation menu is controlled using React useState.

🦶 Footer

The footer includes:

Gym branding
Social media icons
Important links
Company links
Resources
Location information
Copyright information
🎬 Animations

Framer Motion is used throughout the website to create smooth and modern animations.

Reusable animation utilities include:

SlideLeft()
SlideRight()
SlideUp()
Rotate()
Example
<motion.div
  variants={SlideUp(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
>
  ...
</motion.div>

These animations create smooth entrance effects as users scroll through the website.

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

Follow the steps below to run the project locally.

1. Clone the Repository
git clone https://github.com/izafi/coders-gym.git
2. Navigate to the Project
cd coders-gym
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will be available at:

http://localhost:5173
📦 Dependencies

The main dependencies used in this project include:

npm install react
npm install framer-motion
npm install react-icons

If you clone the repository, you only need to run npm install because all project dependencies are already listed in package.json.

📱 Responsive Design

The website is optimized for:

📱 Mobile devices
📱 Tablets
💻 Laptops
🖥️ Desktop screens

Tailwind CSS responsive breakpoints are used throughout the project:

sm → Small devices
md → Medium devices
lg → Large devices
xl → Extra large devices
Example
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

This allows the layout to automatically adapt to different screen sizes.

🧠 What I Learned

While building this project, I practiced and improved my knowledge of:

React component development
React useState
Conditional rendering
JavaScript .map()
JavaScript .filter()
Props and reusable components
Tailwind CSS
Responsive web design
Framer Motion
Scroll-based animations
React Icons
Mobile navigation
Git & GitHub
Component organization
UI/UX implementation
🔮 Future Improvements

Some features that can be added in future versions:

🛒 Shopping cart functionality
📦 Product details page
🔐 Authentication & Login System
🔎 Advanced search functionality
🌐 Backend integration
🗄️ Database integration
💳 Payment gateway
🔗 Product API integration
📝 Blog details page
🌙 Dark mode
⚙️ Admin dashboard
🤝 Contributing

Contributions are welcome!

If you would like to improve this project:

1. Fork the Repository

Create your own fork of this repository.

2. Create a New Branch
git checkout -b feature/new-feature
3. Make Your Changes

Implement your feature or improvements.

4. Commit Your Changes
git commit -m "Add new feature"
5. Push the Branch
git push origin feature/new-feature
6. Open a Pull Request

Create a Pull Request with a description of your changes.

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

Your support and feedback are greatly appreciated and motivate me to build more projects!

📄 License

This project is created for educational and portfolio purposes.

🔗 Project Links

Live Demo:
https://coders-gym-coral.vercel.app/

GitHub Repository:
https://github.com/izafi/coders-gym


### GitHub About Description

Use this in the **GitHub repository About section**:

```text
Modern responsive gym website built with React, Tailwind CSS & Framer Motion, featuring interactive equipment filtering, smooth animations, testimonials, blogs, offers, and fitness sections.
GitHub Topics
react
reactjs
javascript
tailwindcss
framer-motion
react-icons
vite
responsive-design
gym-website
fitness-website
frontend
frontend-development
react-hooks
usestate