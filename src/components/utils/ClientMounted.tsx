"use client";

import { useEffect, useState } from "react";

export function ClientMounted({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Return a placeholder or empty div with the exact same layout boundaries if you needed to prevent layout shift.
    // However, since we're just wrapping buttons or interactive FAQ accordions, 
    // simply rendering null on the server is fine. It delays rendering the UI 
    // until after the browser takes over, preventing any SSR mismatch.
    if (!mounted) return null;

    return <>{children}</>;
}
