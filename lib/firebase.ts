import { initializeApp, getApps } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCZJUIHixNrGadBhIrDh2P3bLDwjhbh2eE",
  authDomain: "daniel-fernandes-dev.firebaseapp.com",
  projectId: "daniel-fernandes-dev",
  storageBucket: "daniel-fernandes-dev.firebasestorage.app",
  messagingSenderId: "93518902712",
  appId: "1:93518902712:web:986e1fb683b8605f270b4d",
  measurementId: "G-L1MJWWS6D8",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

export async function initAnalytics() {
  if (typeof window !== "undefined" && await isSupported()) {
    return getAnalytics(app)
  }
  return null
}

export default app
