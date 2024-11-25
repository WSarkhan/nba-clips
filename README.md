# NBA Clips Viewer

## Overview

This project is a simple Web UI that:

1. **Fetches data** from the Storyteller API.
2. **Renders the `clips` results** for users to interact with and explore.
3. **Accepts user input** for:
   - Favorite Team
   - Followed Teams
   - Followed Players
4. Dynamically **updates the API request** based on user input to display tailored results.

This project was built as part of a recruitment task for Storyteller. The solution focuses on providing a clean UI, responsive design, and robust code structure using React with TypeScript.

## Features

- **Dynamic API Calls**: User inputs for Favorite Team, Followed Teams, and Followed Players are dynamically passed to the API as query parameters.
- **Clips Viewer**:
  - Displays thumbnails and descriptions of each clip.
  - Supports hover previews with video playback.
  - Includes interactive buttons for sharing links and displaying like/share counts.
- **Responsive Design**: Works seamlessly across devices with a focus on usability.
- **Atomic Design Principles**: Modular component-based structure for scalability and reusability.
- **User Notifications**:
  - Loading indicators during API calls.
  - Toast messages for feedback, such as sharing a clip link.
- **Error Handling**: Displays user-friendly error messages if the API fails.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- Yarn (preferred) or npm
- storyteller API key

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:WSarkhan/nba-clips.git
   cd nba-clips
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. create a .env file in the root folder and add the secret key and api as

   ```bash
   VITE_SECRET_KEY=your_api_key
   VITE_API_URL=your_api_url
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open the app in your browser at http://localhost:5173.
