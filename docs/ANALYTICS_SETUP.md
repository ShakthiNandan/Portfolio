# Google Analytics Integration Setup

This guide explains how to set up Google Analytics with your portfolio website.

## Prerequisites

1. A Google Cloud Platform (GCP) project
2. Google Analytics 4 (GA4) property
3. Service account with access to Google Analytics

## Backend Setup

1. **Create a Service Account**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Give it a name (e.g., "portfolio-analytics") and click "Create"
   - Grant the "Viewer" role and click "Continue"
   - Click "Done"

2. **Create a Service Account Key**
   - Find your service account in the list and click on it
   - Go to the "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select JSON format and click "Create"
   - Save the downloaded JSON file as `service-account-key.json` in the `backend` directory

3. **Configure Google Analytics**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Select your GA4 property
   - Go to "Admin" > "Property Access Management"
   - Add your service account email with "Viewer" permissions
   - Note your Property ID (starts with "G-" or a number)

4. **Update Configuration**
   - Open `backend/google-analytics.config.js`
   - Replace `YOUR_GA4_PROPERTY_ID` with your actual GA4 Property ID

## Frontend Setup

1. **Update Environment Variables**
   - Open `.env` file in the root directory
   - Update `REACT_APP_API_URL` with your backend URL
   - Update `REACT_APP_GA_TRACKING_ID` with your GA4 Measurement ID (starts with "G-")

2. **Verify Google Tag Manager**
   - Make sure your GA4 Measurement ID is correctly set up in `public/index.html`
   - The tracking code should look like this:
     ```html
     <!-- Google tag (gtag.js) -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'YOUR_MEASUREMENT_ID');
     </script>
     ```

## Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Start the Frontend**
   ```bash
   npm install
   npm start
   ```

## Verifying the Integration

1. Open your website in a browser
2. Open the browser's developer tools (F12)
3. Go to the "Network" tab
4. Filter for "stats" - you should see API calls to your backend
5. Go to Google Analytics > Realtime to see active users

## Troubleshooting

1. **No data in Google Analytics**
   - Verify your GA4 Measurement ID is correct
   - Check if the Google tag is properly loaded in the page source
   - Make sure your ad blocker isn't blocking Google Analytics

2. **API Errors**
   - Check the backend console for errors
   - Verify the service account has the correct permissions
   - Ensure the service account key file is in the correct location

3. **CORS Issues**
   - Make sure your frontend URL is in the CORS whitelist in the backend
   - Check the browser's console for CORS errors
