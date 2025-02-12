"use client";

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

import { columns } from "@/components/organisms/bookmark-view/columns";
import { DataTable } from "@/components/organisms/bookmark-view/data-table";
import { useQuery } from "@tanstack/react-query";

interface Props {
  userID: string;
}

export default function ManageBookmark(props: Props) {
  async function getBookmarks() {
    try {
      const req = await fetch(`/api/bookmarks?where[userId][equals]=${props.userID}`);
      const data = await req.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const query = useQuery({ queryKey: ["bookmarks"], queryFn: getBookmarks });

  function handleRefetch() {
    query.refetch();
  }

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
              <AddBookmarkForm
                userId={props.userID}
                onSuccess={handleRefetch}
              />
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
              <AddCategoriesForm userId={props.userID} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="container mx-auto py-10">
        {query.data?.docs && (
          <DataTable
            columns={columns}
            data={query.data.docs.map((item: any) => ({
              id: item.id,
              title: item.title,
              url: item.url,
              userId: item.userId
            }))}
            onSuccess={handleRefetch}
          />
        )}
      </div>
    </div>
  );
}
