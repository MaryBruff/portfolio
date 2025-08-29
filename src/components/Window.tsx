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
      className={`border-black border m-1 p-0 rounded-xl ${className}`}
    >
      <CardHeader className="bg-primary rounded-t-xl p-3">
        <CardTitle className="text-black flex justify-between items-center portfolio-font">
          <span>{title}</span>
          <div className="flex space-x-2">
            <button className="w-4 h-4 border-black border rounded-full bg-chart-4" />
            <button className="w-4 h-4 border-black border rounded-full bg-chart-5" />
            <button className="w-4 h-4 border-black border rounded-full bg-chart-3" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={`p-4 md:p-5 lg:p-6 ${bodyClassName}`}>
        {children}
      </CardContent>
    </Card>
  );
}
