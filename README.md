# Rick and Morty

[Open the Application](https://gra4evyakov.github.io/rick-and-morty-vuetify/)

This is a Vue.js application project for viewing characters from the popular animated series "Rick and Morty." The application allows users to browse and search for characters from the show, as well as add them to their favorites list.

## Tools

Vue.js, Pinia, Vue Router, Vuetify, Axios, ESLint, and Prettier

## Project Structure

The project is organized as follows:

### `api/`

- **`requests.js`**: Module for making HTTP requests to the "Rick and Morty" API.
- **`services.js`**: Module for configuring and creating a service for making HTTP requests.

### `components/`

- **`icons/`**: Contains icons used in the application.
- **`ui/`**: User interface components.

    - **`TheCharactersList.vue`**: Component for displaying the list of characters.
    - **`TheFavorites.vue`**: Component for displaying favorite characters.
    - **`TheHeader.vue`**: Application header component.
    - **`TheMain.vue`**: Main component for displaying the list of characters, search, and pagination.
    - **`ThePagination.vue`**: Component for handling pagination.
    - **`TheSearchForm.vue`**: Character search form.
    - **`TheTools.vue`**: Component that combines the search form and pagination controls.

### `hooks/`

- **`useRequest.js`**: Reusable Vue composition for making HTTP requests. Provides functionality for data loading, error handling, and request execution.

### `router/`

- **`index.js`**: Routing configuration for the application.

### `services/`

- **`default.js`**: Axios configuration for making HTTP requests to the "Rick and Morty" API.

### `store/`

- **`app.js`**: Vuex store for managing the application state. Includes functionality for loading characters, adding/removing them from the favorites list, and handling search and pagination.

### `views/`

- **`Favorites.vue`**: View for the favorites list of characters.
- **`Home.vue`**: Main view for the list of characters.

## Installation and Running

1. Clone the project repository.
2. Install dependencies using `npm install`.
3. Start the application with `npm run dev`.
4. Open a web browser and navigate to the provided URL to access the application.

## Features

- View a list of characters from the "Rick and Morty" animated series.
- Filter characters by name and species.
- Add/Remove characters to/from the favorites list.
- Pagination for navigating through character pages.
- Responsive design for various screen sizes.

## Usage

1. Visit the homepage to view the list of characters.
2. Use the search form to filter characters by name.
3. Use the species filter to narrow down the list of characters.
4. Click on characters to add them to your favorites.
5. Access your favorite characters by clicking the "Favorites" link in the header.

## Authors

This project was created by [Grachev Yakov](https://github.com/gra4evyakov) and is inspired by the "Rick and Morty" animated series.
