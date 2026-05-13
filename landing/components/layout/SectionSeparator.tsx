const SectionSeparator = ({ contrast }: { contrast: boolean }) => {
    const backgroundColor = contrast ? "bg-transparent" : "bg-[#fdf8ef]";
    return (
        <div className="mx-auto mb-20 max-w-3xl" data-testid="section-separator">
        <div className={`manuscript-divider-fleuron w-full ${backgroundColor}`} />
      </div>
    )
}

export default SectionSeparator;