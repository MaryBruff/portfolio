import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <Card
      className={`bg-pink-950/80 border-pink-500 backdrop-blur-sm m-1 ${className}`}
    >
      <CardHeader className="p-3">
        <CardTitle className="text-white flex justify-between items-center portfolio-font">
          <span>{title}</span>
          <div className="flex space-x-2">
            <button className="w-4 h-4 rounded-full bg-pink-300" />
            <button className="w-4 h-4 rounded-full bg-pink-400" />
            <button className="w-4 h-4 rounded-full bg-pink-500" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={`p-4 md:p-5 lg:p-6 ${bodyClassName}`}>
        {children}
      </CardContent>
    </Card>
  );
}
