export default function LoadingState() {
  return (
    <div className="absolute inset-0 bg-neutral-50 flex items-center justify-center z-20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-neutral-600 font-medium">Loading interactive map...</p>
      </div>
    </div>
  );
}
