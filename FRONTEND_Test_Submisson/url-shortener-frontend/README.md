# URL Shortener Frontend

This is a simple React application that allows users to shorten URLs. The application provides a user-friendly interface for inputting URLs and displays the shortened version after submission.

## Project Structure

```
url-shortener-frontend
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.tsx            # Main application component
│   ├── components
│   │   └── UrlShortenerForm.tsx  # Form for URL shortening
│   ├── services
│   │   └── api.ts         # API calls for URL shortening
│   ├── styles
│   │   └── App.css        # CSS styles for the application
│   └── index.tsx          # Entry point for the React application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the URL Shortener Frontend, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd url-shortener-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Enter the URL you want to shorten in the input field.
- Click the "Shorten" button to submit the form.
- The shortened URL will be displayed below the form.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.