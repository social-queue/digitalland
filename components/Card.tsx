"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImageCardForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const image = formData.get("image") as File;
    
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Import your image</CardTitle>
        <CardDescription>Secheduler your image deploy on meta</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Image</Label>
              <Input id="image" name="image" type="file" accept="images/*" required />
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" type="reset">
              Cancel
            </Button>
            <Button type="submit">Deploy</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
