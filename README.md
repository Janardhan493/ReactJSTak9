# Task 9: React useContext Hook Implementation

A responsive and modern React application demonstrating global state management and theme swapping using the `useContext` and `useState` hooks. This project implements a deeply nested component structure completely devoid of prop drilling.

## 🚀 Features

- **Zero Prop Drilling:** Uses React Context API to pass state data and event handlers effortlessly down a 3-tier component tree.
- **Dynamic 10-Field Form:** Features a beautifully structured registration form that monitors user inputs in real-time.
- **Global Theme Toggling:** A custom theme engine that instantly flips the interface between a modern Light Mode and an immersive Dark Mode across all nested tiers.
- **Live Mirroring:** A dedicated preview block (Component 3) that displays active application context changes on the fly.
- **Responsive Layout:** Engineered with CSS Grid and Flexbox configurations for seamless layout adjustments across varying screen viewports.

---

## 📂 Component Hierarchy

```text
App (Creates & Provides Form/Theme Context)
 ↳ Component1 (Header Block & Theme Toggle Control)
   ↳ Component2 (10-Field Registration Form)
     ↳ Component3 (Live Data Context Mirror View)


🛠️ Requirements Fulfilled
Nested Structure: Minimum of 3 component tiers nested consecutively.

Comprehensive Inputs: Accommodates 10 necessary form fields (First Name, Last Name, Email, Mobile Number, Password, Confirm Password, Date of Birth, Gender, Address, City).

Context Hook: Utilitarian deployment of createContext and useContext.

Clean Design: Styled natively using strict responsive standards with no overlapping artifacts or alignment drops.

⚙️ How to Run Locally
Follow these steps to get the development environment running locally:

Clone the repository:

Bash
git clone <your-repository-url>
Navigate into the directory:

Bash
cd task9-usecontext
Install dependencies:

Bash
npm install
Boot up the local development server:

Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.
