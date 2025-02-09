import { Separator } from "@/components/shadcn/ui/separator";
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarRail, SidebarInset, SidebarTrigger } from "@/components/shadcn/ui/sidebar";
import { TSRBreadCrumbs } from "@/lib/tanstack/router/TSRBreadCrumbs";


interface MainDrawerProps {
  sidebar_props?: React.ComponentProps<typeof Sidebar>;
  children: React.ReactNode
  header?: React.ReactNode
  links?: React.ReactNode
  footer?: React.ReactNode
}

export function MainDrawer({sidebar_props,children,links,header}:MainDrawerProps){
return (
  <SidebarProvider defaultOpen={false}>
    {/* <Helmet title="Github| Dashboard" description="Dashboard for Github" /> */}
    <Sidebar className="" collapsible="icon" {...sidebar_props}>
      <SidebarHeader>
        {/* <DashboardSidebarHeader /> */}
        {header}
      </SidebarHeader>
      <SidebarContent>
        {links}
      </SidebarContent>
      <SidebarFooter className="gap-5">
        {/* <ThemeToggle /> */}
        {/* <DashboardTheme />
        <DashboardSidebarUser /> */}
        <div className="h-10" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header className="fixed z-30 flex h-10 items-center gap-2 bg-base-100 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <TSRBreadCrumbs />
        </div>
      </header>
      {/* main content */}
      <div data-test="dashboard-layout" className="h-full p-2 min-h-screen bg-accent/10">
        {children}
      </div>
    </SidebarInset>
  </SidebarProvider>
);
}
