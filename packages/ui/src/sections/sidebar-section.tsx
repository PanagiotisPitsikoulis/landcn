import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../components/sidebar";
import { Button, cn, Input, Link, Spacer } from "@nextui-org/react";
import { ChevronsUpDown, SearchIcon } from "lucide-react";
import { ThemeSwitch } from "../components/theme-switch";

export type DashboardProps = {
  children?: React.ReactNode;
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    className?: string;
  }[];
  activeItem?: string;
  sidebarVariant?: "sidebar" | "floating" | "inset";
  className?: string;
  dropdownMenuItems?: React.ReactNode;
  sidebarFooterContent?: React.ReactNode;
  classNames?: {
    base?: string;
    content?: string;
    header?: string;
    footer?: string;
    menu?: string;
    menuItem?: string;
    menuButton?: string;
    searchInput?: string;
    searchWrapper?: string;
    avatarDropdown?: string;
    avatarButton?: string;
    avatarMenu?: string;
    avatarContent?: string;
  };
  text?: {
    searchPlaceholder?: string;
    searchResultsText?: string;
    toggleSidebar?: string;
  };
};

/**
 * Reusable dashboard component with a sidebar, header, and content area.
 * Fully customizable using props and classNames.
 * @returns JSX.Element
 * @param children - The children of the sidebar.
 * @param user - The user object.
 * @param items - The items to display in the sidebar.
 * @param activeItem - The currently active item in the sidebar.
 * @param sidebarVariant - The variant of the sidebar.
 * @param className - Additional class for the sidebar.
 * @param classNames - Classnames for specific parts of the sidebar.
 * @param text - Text props for the sidebar.
 * @param dropdownMenuItems - The dropdown menu items for the sidebar.
 * @param sidebarFooterContent - The content for the sidebar footer.
 */
export function SidebarComposed({
  children,
  items,
  activeItem,
  sidebarVariant = "inset",
  className,
  classNames = {},
  text = {},
  dropdownMenuItems,
  sidebarFooterContent,
}: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const {
    searchPlaceholder = "Search",
    searchResultsText = "Search Results",
    toggleSidebar = "Toggle Sidebar",
  } = text;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <SidebarProvider
      className={cn(
        "w-full bg-content2 dark:bg-content1",
        className,
        classNames.base
      )}
    >
      <Sidebar
        collapsible={"offcanvas"}
        variant={sidebarVariant}
        className={cn("px-2", classNames.base)}
      >
        <SidebarContent>
          {/* Sidebar Menu */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className={cn(classNames.menu)}>
                {/* Search Input */}
                <SidebarMenuItem className={cn(classNames.searchWrapper)}>
                  <Input
                    isClearable
                    placeholder={searchPlaceholder}
                    variant='underlined'
                    color='primary'
                    value={searchQuery}
                    onChange={handleSearch}
                    onClear={() => {
                      setSearchQuery("");
                      setFilteredItems(items);
                    }}
                    classNames={{
                      input: cn(
                        "!border-none !ring-0 !outline-none",
                        classNames.searchInput
                      ),
                      inputWrapper: "!border-none !border-b-none shadow-none",
                    }}
                    startContent={<SearchIcon />}
                  />
                </SidebarMenuItem>
                <Spacer y={2} />
                {/* Menu Items */}
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={cn(classNames.menuItem, item.className)}
                    >
                      <SidebarMenuButton asChild>
                        <Button
                          startContent={item.icon}
                          size='md'
                          as={Link}
                          variant={activeItem === item.title ? "flat" : "light"}
                          className={cn(
                            "flex justify-start",
                            classNames.menuButton
                          )}
                          href={item.url}
                        >
                          {item.title}
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                ) : (
                  <p className='text-sm text-foreground-600 px-4'>
                    {searchResultsText}
                  </p>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>{sidebarFooterContent}</SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {/* Content Area */}
        <section
          className={cn("flex flex-col gap-4 w-full", classNames.content)}
        >
          <header className='flex py-1 items-center px-4 lg:px-8 border-b border-content2 sticky top-0 left-0 right-0 z-50 bg-background'>
            <div className='h-14 flex items-center justify-between w-full'>
              <SidebarTrigger className='-ml-1'>{toggleSidebar}</SidebarTrigger>
              <ThemeSwitch />
            </div>
          </header>
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
