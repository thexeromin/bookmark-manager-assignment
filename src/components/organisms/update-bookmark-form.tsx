"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/atoms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/atoms/select";
import { Input } from "@/components/atoms/input";
import { Button } from "../atoms/button";
import { Bookmark } from "./bookmark-view/columns";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Category } from "@/types";

interface Props {
  bookmark: Bookmark;
  onSuccess(): void;
  categories: Category[];
  c_id?: string;
}

const formSchema = z.object({
  label: z.string().min(4, {
    message: "Label must be at least 4 characters."
  }),
  url: z.string({ message: "URL is required." }),
  category: z.string().optional(),
  userId: z.string({ message: "User Id is required." })
});

export default function UpdateBookmarkForm(props: Props) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: props.bookmark.title,
      url: props.bookmark.url,
      userId: props.bookmark?.userId,
      category: props?.c_id
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch(`/api/bookmarks/${props.bookmark.id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: values.label,
          url: values.url,
          userId: props.bookmark?.userId,
          category: values.category
        })
      });

      // alert message
      toast({
        title: "Congrats!",
        description: "Your bookmark is updated."
      });
      props.onSuccess();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input placeholder="Google" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://google.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {props.categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogTrigger asChild>
            <Button type="submit">Save Changes</Button>
          </DialogTrigger>
        </form>
      </Form>
    </>
  );
}
