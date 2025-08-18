// src/ui/glass-button.tsx

export default function GlassButton({ children, ...props }) {
  return (
    <button className="glass-button px-4 py-2 rounded-xl font-semibold transition-all" {...props}>
      {children}
    </button>
  );
}
