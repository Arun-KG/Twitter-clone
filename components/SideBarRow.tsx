import { FC, SVGProps } from "react";

interface ISideBarRow {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  Title: string;
}

const SideBarRow: FC<ISideBarRow> = ({ Icon, Title }) => {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 max-w-fit rounded-full cursor-pointer transition-colors duration-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter text-base font-light transition-colors duration-200 hidden md:inline-flex lg:text-xl">
        {Title}
      </p>
    </div>
  );
};

export default SideBarRow;
