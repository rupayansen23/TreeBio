"use server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onBordUser = async () => {
    try {
        const user = await currentUser();
        if (!user) {
            return {
                success: false, error: "No authenticated user found"
            };
        }
        const { id, firstName, lastName, emailAddresses, imageUrl, username } = user;
        const newUser = await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                firstName: firstName || "",
                lastName: lastName || "",
                imageUrl: imageUrl || "",
                email: emailAddresses[0].emailAddress || "",
                username: username || "",
            },
            create: {
                clerkId: id,
                firstName: firstName || "",
                lastName: lastName || "",
                imageUrl: imageUrl || "",
                email: emailAddresses[0].emailAddress || "",
                username: username || "",
            }
        });
        return {
            success: true,
            user: newUser,
            message: "user onborded successfully",

        }
    }
    catch (error) {
        console.error("Faliled to onbording user", error);
        return {
            success: false,
            error: "Failed to create user "
        };
    }
}