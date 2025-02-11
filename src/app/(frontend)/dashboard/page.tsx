import { currentUser } from "@clerk/nextjs/server";

import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/atoms/dialog";
import AddBookmarkForm from "@/components/organisms/add-bookmark-form";
import AddCategoriesForm from "@/components/organisms/add-categories-form";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h4 className="mb-4 text-md font-semibold leading-none">Bookmarks</h4>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Add Bookmark
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Bookmark</DialogTitle>
                <DialogDescription>
                  Fill in the details. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <AddBookmarkForm userId={user.id} />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Category</DialogTitle>
                <DialogDescription>
                  Fill in the details. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <AddCategoriesForm userId={user.id} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
