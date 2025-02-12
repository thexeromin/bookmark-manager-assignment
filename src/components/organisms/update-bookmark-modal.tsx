import { Button } from "../atoms/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/atoms/dialog";

import UpdateBookmarkForm from "./update-bookmark-form";
import { Bookmark } from "./bookmark-view/columns";
import { Category } from "@/types";

interface Props {
  bookmark: Bookmark;
  onSuccess: () => void;
  categories: Category[];
  c_id?: string;
}

export default function UpdateBookmarkModal({
  bookmark,
  onSuccess,
  categories,
  c_id
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        {bookmark && (
          <UpdateBookmarkForm
            bookmark={bookmark}
            onSuccess={onSuccess}
            categories={categories}
            c_id={c_id}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
