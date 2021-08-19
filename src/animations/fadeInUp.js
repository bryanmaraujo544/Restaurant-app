export const fadeInUp = {
    exit: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.5 }
    },
    initial: {
        y: 150,
        opacity: 0,
        transition: { duration: 0.5 }
    }, 
    animate: i => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: i * 0.25,
            type: "tween"
        }
    })
}