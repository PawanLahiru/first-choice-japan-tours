"use client";

import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ShareButtons() {
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <div className="flex flex-wrap gap-3">
        <Button variant="outline">
            <FaFacebookF className="mr-2 h-4 w-4" />
            Facebook
        </Button>

        <Button variant="outline">
            <FaXTwitter className="mr-2 h-4 w-4" />
            X
        </Button>

        <Button
        variant="outline"
        onClick={copyLink}
        >
        <Link2 className="mr-2 h-4 w-4" />
            Copy Link
        </Button>
    </div>
  );
}