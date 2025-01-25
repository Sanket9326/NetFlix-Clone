# Netflix Clone - Pure Frontend

## **Overview**

This project is a frontend-only Netflix clone built using **Angular** and **TypeScript**. It replicates key features of the Netflix UI, focusing on responsive design, dynamic data rendering, and modern Angular techniques. This project aims to strengthen frontend development skills while delivering a visually stunning and user-friendly interface.

---

## **Features**

### **1. Fully Responsive UI**
- Optimized for both desktop and mobile devices.
- Adaptive layout with a dark theme similar to Netflix’s design.

### **2. Dynamic Content Rendering**
- Categories like "Trending Now," "Top Picks," and "Action Movies."
- Movie/TV show thumbnails displayed in horizontal carousels.
- Hover effects on thumbnails to display additional details.

### **3. Featured Banner**
- Hero section showcasing a featured movie/TV show with title, description, and action buttons (e.g., "Play" and "More Info").

### **4. Search Functionality**
- Real-time search to filter movies and shows by title.

### **5. My List**
- Users can add movies/shows to their personalized list using local storage.
- Persistent across sessions.

### **6. Details Page**
- A dedicated page for each movie/TV show, featuring:
  - Full-size poster.
  - Title, description, genre, and rating.
  - Related movies/shows carousel.

### **7. Smooth Animations**
- CSS and Angular animations for hover effects, carousel transitions, and page navigation.

---

## **Tech Stack**

### **Frontend**
- **Angular**: Framework for building a scalable and maintainable application.
- **TypeScript**: Enhances JavaScript with static typing.
- **Angular Material**: UI components for a polished and responsive design.
- **CSS3**: Custom styling for animations, layouts, and hover effects.

### **Data Management**
- JSON files for simulating a database.
- Local storage for saving user-specific data (e.g., "My List").

---

## **How to Run the Project**

### **1. Prerequisites**
- [Node.js](https://nodejs.org/) installed.
- Angular CLI installed globally. Run:
  ```bash
  npm install -g @angular/cli
  ```

### **2. Clone the Repository**
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Run the Application**
```bash
ng serve
```
- Open your browser and navigate to `http://localhost:4200/`.

---

## **Folder Structure**

```plaintext
src/
|-- app/
|   |-- components/
|   |   |-- header/         # Navigation bar
|   |   |-- banner/         # Featured movie/TV show section
|   |   |-- category/       # Movie/TV show categories
|   |   |-- details/        # Details page component
|   |-- services/
|   |   |-- movie.service.ts # Service to manage movie data
|-- assets/
|   |-- images/             # Static images for the project
|   |-- data/               # JSON files for movies and categories
|-- styles.css              # Global styles
```

---

## **Core Angular Concepts Used**

1. **Components**: Modular design for reusable UI elements (e.g., banner, category, details).
2. **Services**: Centralized logic for managing movie data.
3. **Directives and Pipes**: Custom pipes for filtering and sorting movies dynamically.
4. **Routing**: Navigation between pages (e.g., Home, Details).
5. **Reactive Forms**: For implementing the search functionality.

---

## **Future Enhancements**
- Implement PWA support for offline access.
- Add sorting and filtering options (e.g., by genre or rating).
- Enhance accessibility features (e.g., ARIA roles and labels).

---

## **Credits**
Special thanks to Netflix for inspiring the design and functionality of this project. All content and images used in this project are for educational purposes only.

---

## **License**
This project is licensed under the MIT License. Feel free to use and modify it for educational or personal projects.

---

## **Screenshots**
Add screenshots of your app here to showcase the design and functionality. Include:
- Homepage with categories.
- Featured banner.
- Details page.

---

Happy coding! 🚀
