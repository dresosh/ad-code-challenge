# Animal Dashboard

## Objective

Develop a responsive dashboard application that integrates with 2 APIs to fetch animal data. The foundational project has been scaffolded for you using React with Vite and TailwindCSS. Your task is to create a dynamic dashboard, demonstrating best practices in UI development, error handling, and state management.

## Features

### Components

The dashboard should consist of multiple interactive components:

- **Navigation Bar**

  - Contains three primary links:

    - **Cats**: Display data fetched from the Cat API.
    - **Dogs**: Showcase information from the Dog API.
    - **Favorites**: A section where users can view their favorite animals.
    - **Search bar**: An input where you can filter the data based on user input.

- **Card component**:

  - Display a title above the image with the name of the breed.
  - Display the animal's image.
  - Showcase a brief description (limit to 2 lines).
  - A click on the card reveals a modal with detailed information.
  - Allow users to mark animals as favorites and view them in the "Favorites" section.

- **Modal**:

  - Presents the full description of the selected animal.

- **Search Component**:
  - Enables users to search for specific animals within the dashboard.

### Component Interactivity

- Users should be able to click on a card to view more detailed information about the animal in a modal.
- The search component should filter the displayed animals based on user input.

### API Integration

- Seamlessly integrate with the provided animal APIs:
  - **Dog API:** [https://thedogapi.com/](https://thedogapi.com/)
  - **Cat API:** [https://thecatapi.com/](https://thecatapi.com/)
- Manage the data with some sort of state management

### Error Handling

- Gracefully manage potential issues, especially failed API requests, ensuring a smooth user experience.

### Responsiveness

- Guarantee that the dashboard is fully responsive, catering to both desktop and mobile users.

## Getting Started

### Installation:

#### If you haven't installed `pnpm` yet, you can do so globally with:

```bash
npm install -g pnpm
```

### Setting Up the Project:

**Navigate to your project directory and run:**

```bash
pnpm install
```

### Running the Development Server:

**To start the development server, use:**

```bash
pnpm dev
```

### Building for Production:

**When you're ready to build the project for production, run:**

```bash
pnpm build
```

## Recommendations

- For state management, consider tools such as React's useContext, Redux or Zustand.
- Use [react router 6](https://reactrouter.com)
- [TailwindCSS](https://tailwindcss.com) will be beneficial for styling. Ensure components are visually appealing and user-friendly.
- Prioritize type safety throughout the application to prevent potential runtime errors.

## Bonus

- Implement skeleton loading for a smoother user experience during data fetching.
- Implement smooth transitions for modal appearances and other interactive elements.
- Implement unit tests to ensure the reliability and robustness of your components.
- Get 100% coverage on your unit tests
