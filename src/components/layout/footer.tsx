// src/components/layout/footer.tsx

import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  [key: string]: any;
}

export default function GlassButton({ children, ...props }: GlassButtonProps) {
  return (
    <button className="glass-button px-4 py-2 rounded-xl font-semibold transition-all" {...props}>
      {children}
    </button>
  );
}
