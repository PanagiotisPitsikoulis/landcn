import { SVGAttributes } from "react";
import { PlayIcon, LucideIcon } from "lucide-react";
import { cn } from "@nextui-org/react";

interface ApplicationLogoProps extends SVGAttributes<SVGElement> {
  icon?: LucideIcon;
}

export default function ApplicationLogo({
  icon: Icon = PlayIcon,
  ...props
}: ApplicationLogoProps) {
  return <Icon {...props} className={cn(props.className)} />;
}
