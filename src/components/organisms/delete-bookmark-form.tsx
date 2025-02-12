"use client";

import { CircleX } from "lucide-react";
import { Button } from "../atoms/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/atoms/dialog";

interface Props {
  id: string;
  title: string;
  onSuccess: () => void;
}

export default function DeleteBookmarkForm(props: Props) {
  async function handleDelete() {
    try {
      const req = await fetch(`/api/bookmarks/${props.id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      await req.json();
      props.onSuccess();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>

        <div>
          <div className="flex justify-center items-center">
            <CircleX
              size={"100px"}
              className="text-red-500"
              strokeWidth={"1px"}
            />
          </div>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mt-7">
            Are you sure?
          </h3>

          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
            Do you really want to delete {props.title}? This process cannot be
            undone.
          </p>

          <div className="flex justify-center items-center gap-x-2 mt-10">
            <DialogTrigger asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
