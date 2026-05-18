type LabeledTagListProps = {
  heading: string;
  items: string[];
  className?: string;
};

export function LabeledTagList({
  heading,
  items,
  className = "mb-6",
}: LabeledTagListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h3 className="mb-2 font-label text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">
        {heading}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span className="inline-block rounded-full border border-outline-variant/30 bg-surface-container-high px-3 py-1 text-xs text-on-surface-variant">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
