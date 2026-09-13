export default function SectionHeading({ index, title }: { index: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-accent_flame text-xl md:text-2xl">{index}.</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white whitespace-nowrap">{title}</h2>
      <div className="h-[1px] w-full bg-border_col ml-4 relative">
        <div className="absolute top-0 left-0 w-12 h-full bg-accent_flow/50"></div>
      </div>
    </div>
  );
}
