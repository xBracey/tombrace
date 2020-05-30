// Custom react hook to determine if viewport is desktop or mobile

import { useState, useEffect } from "react";
import config from "../config";

const useIsDesktop = () => {
    const isClient = typeof window === "object";
    const [isDesktop, setIsDesktop] = useState(true);

    const getWidth = () => {
        return isClient ? window.innerWidth : undefined;
    };

    const [viewportWidth, setViewportWidth] = useState(getWidth());

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize() {
            setViewportWidth(getWidth());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    useEffect(() => {
        const newIsDesktop = viewportWidth && viewportWidth < config.desktopMinViewport ? false : true;
        setIsDesktop(newIsDesktop);
    }, [viewportWidth]);

    return isDesktop;
};

export default useIsDesktop;
