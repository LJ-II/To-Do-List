import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const Profile = () =>
{
    const navigate = useNavigate();
    async function handleLogout() 
    {
        try 
        {
            const response = await fetch("https://to-do-list-7t86.onrender.com/api/user/logout", 
            {
                method: "POST",
                credentials: "include",
            });
            
            if (!response.ok)
            {
                throw new Error("Logout failed! Please try again.");
            }

            // After logging out and clearing the cookie, redirect to /login
            navigate("/login"); 
        } 
        catch (error) 
        {
            toast.error(error.message);
        }    
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <CircleUserRound className="transition ease-in hover:cursor-pointer hover:stroke-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Profile;