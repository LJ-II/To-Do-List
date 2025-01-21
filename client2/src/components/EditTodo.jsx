import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import EditIcon from "./icons/EditIcon";

export default function EditTodo({ title, id, handleUpdate })
{
    const [updatedTitle, setUpdatedTitle] = useState(title);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <EditIcon className="iconHover" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                    <DialogDescription>
                        Make changes to your todo here. Click on save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <DialogTrigger asChild>
                    <form className="flex flex-col gap-2" action={handleUpdate}>
                        <input type="hidden" value={id} name="id" />
                        <Label htmlFor="title">Previous Todo</Label>
                        <Input 
                            id="title"
                            name="title"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            className="col-span-3"
                        />
                        <DialogFooter>
                            <Button>Save Changes</Button>
                        </DialogFooter>
                    </form>
                </DialogTrigger>
            </DialogContent>
        </Dialog>
    );
}

/*import React from "react";
import EditIcon from "./icons/EditIcon";

const EditTodo = () => 
{
    return(
        <div>
            <EditIcon className="iconHover" />
        </div>
    );
};

export default EditTodo;*/