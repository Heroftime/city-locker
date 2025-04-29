# City Lockers - Luggage Tracker

A simple web application to track luggage items and their destinations. Built with Next.js, React, and TypeScript.

## Features

- Add luggage items with name and destination
- List all luggage items
- Delete luggage items
- Data persistence using localStorage
- Loading animations for better UX
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone [<repository-url>](https://github.com/Heroftime/city-locker)
cd city-locker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── context/          # React Context providers
├── hooks/            # Custom React hooks
└── types/            # TypeScript type definitions
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Development

The application uses:
- Functional components with React Hooks
- React Context for state management
- Local storage for data persistence
- CSS-in-JS with Tailwind CSS
- TypeScript for type safety

## Testing the Application

1. **Adding Items**:
   - Enter an item name (e.g., "Suitcase")
   - Enter a destination (e.g., "New York")
   - Click "Add Luggage Item"
   - You should see a loading animation while the item is being added
   - The item should appear in the list below

2. **Viewing Items**:
   - All added items will be displayed in the list
   - Each item shows its name and destination

3. **Deleting Items**:
   - Click the trash icon next to any item
   - You should see a loading animation while the item is being deleted
   - The item should be removed from the list

4. **Data Persistence**:
   - Refresh the page
   - Your items should still be there (they're stored in localStorage)

5. **Error Handling**:
   - Try to add an item with empty fields
   - You should see an error message

## Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

You can deploy this application to platforms like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the MIT License.
