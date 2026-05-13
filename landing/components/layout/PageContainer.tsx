import { ReactNode } from "react";
import PageHeader from "./PageHeader";

export type PageContainerProps =
  | {
      children: ReactNode;
      customHeader: ReactNode;
    }
  | {
      children: ReactNode;
      pretitle?: string;
      title: string;
      subtitle: string;
    };

function PageContainer(props: PageContainerProps) {
  return (
    <div className="page-content-dot-bg min-h-full font-body text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <main className="page-content-main mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-14">
        {"customHeader" in props ? (
          props.customHeader
        ) : (
          <PageHeader pretitle={props.pretitle} title={props.title} subtitle={props.subtitle} />
        )}
        {props.children}
      </main>
    </div>
  );
}

export default PageContainer;
