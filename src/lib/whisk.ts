import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface GeneratedDesign {
    imageUrl: string;
    prompt: string;
}

export const generateDesign = async (prompt: string): Promise<GeneratedDesign> => {
    try {
        // 1. Fetch Whisk Cookies from Firebase
        const docRef = doc(db, "system_config", "whisk_cookies");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            throw new Error("System configuration missing (Whisk Cookies). Contact Admin.");
        }

        const { cookie } = docSnap.data();
        console.log("Using Cookie for generation:", cookie ? "Found" : "Missing");

        // 2. Mock Generation (Replace with actual fetch to Whisk API when endpoint is clear)
        // Note: Calling Whisk directly from browser might trigger CORS. 
        // Ideally this should go through a proxy or the Python script should handle generation.
        // For now, simulating API call.

        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate delay

        return {
            imageUrl: "/mock1.png", // Return one of the mock images
            prompt
        };

    } catch (error) {
        console.error("Generation failed:", error);
        throw error;
    }
};
