import React from "react";
import Image from "next/image";
import photo from "@/app/photo.png";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mohammed Khalil</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          Creative Manager
        </h2>
        <ContactInfo />
      </div>
      <Image
        src={photo}
        alt="Mohammed Khalil"
        width={150}
        height={150}
        className="rounded-full"
      />
    </header>
  );
}

function ContactInfo() {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      <ContactItem icon={PhoneIcon} text="+971 50 878 5367" />
      <ContactItem icon={EmailIcon} text="mk@mkhalil.com" />
      <ContactItem icon={WebsiteIcon} text="mkhalil.com" />
    </div>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <p className="flex items-center mb-1">
      <Icon className="h-4 w-4 mr-2" />
      {text}
    </p>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function WebsiteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}
