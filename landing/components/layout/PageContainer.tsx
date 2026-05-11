import { ReactNode } from "react";
import PageHeader from "./PageHeader";

const PageContainer = ({ children, title, subtitle }: { children: ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="page-content-dot-bg min-h-full font-body text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <main className="page-content-main mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-14">
        <PageHeader
          title={title}
          subtitle={subtitle}
        />
        {children}
      </main>
    </div>
  );
};

export default PageContainer;
