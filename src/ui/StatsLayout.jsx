function StatsLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 gap-8">
      {children}
    </div>
  );
}

export default StatsLayout;
