import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    className?: string; // Allow custom classes
    delay?: number; // Optional delay prop
}

export const RevealOnScroll = ({ children, width = '100%', className, delay = 0.25 }: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 75 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
