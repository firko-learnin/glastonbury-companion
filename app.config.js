import 'dotenv/config';

export default {
  expo: {
    name: 'glasto-app',
    slug: 'glasto-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      bundleIdentifier: 'com.firko.glasto-app',
      supportsTablet: true,
      // googleServicesFile: './GoogleService-Info.plist',
    },
    android: {
      package: 'com.firko.glastoapp',
      // googleServicesFile: './google-services.json',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    plugins: ['@react-native-google-signin/google-signin'],
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      twitterApiKey: process.env.TWITTER_API_KEY,
      twitterApiSecret: process.env.TWITTER_API_SECRET,
      twitterBearerToken: process.env.TWITTER_BEARER_TOKEN,
    },
  },
};
