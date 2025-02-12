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
import { Input } from "@/components/atoms/input";
import { Button } from "../atoms/button";
import { Bookmark } from "./bookmark-view/columns";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface Props {
  bookmark: Bookmark;
  onSuccess(): void;
}

const formSchema = z.object({
  label: z.string().min(4, {
    message: "Label must be at least 4 characters."
  }),
  url: z.string({ message: "URL is required." }),
  userId: z.string({ message: "User Id is required." })
});

export default function UpdateBookmarkForm(props: Props) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: props.bookmark.title,
      url: props.bookmark.url,
      userId: props.bookmark?.userId
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const req = await fetch(`/api/bookmarks/${props.bookmark.id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: values.label,
          url: values.url,
          userId: props.bookmark?.userId
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
          <DialogTrigger asChild>
            <Button type="submit">Save Changes</Button>
          </DialogTrigger>
        </form>
      </Form>
    </>
  );
}
