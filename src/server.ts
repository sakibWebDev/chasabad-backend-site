import app from "./app";
import { envVars } from "./app/config/env";

// লোকাল ডেভেলপমেন্টের জন্য
if (process.env.NODE_ENV !== 'production') {
    const bootstrap = () => {
        try {
            app.listen(envVars.PORT, () => {
                console.log(`✅ Server is running on http://localhost:${envVars.PORT}`);
                console.log(`📦 Environment: ${envVars.NODE_ENV}`);
            });
        } catch (error) {
            console.error('❌ Failed to start server:', error);
            process.exit(1);
        }
    };
    bootstrap();
}

// ✅ Vercel-এর জন্য app export করুন (এটাই সবচেয়ে গুরুত্বপূর্ণ)
export default app;