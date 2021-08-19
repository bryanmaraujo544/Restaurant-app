export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.5 }
    }, 
    animate: i => ({
        y: 0,
        opacity: 1,
        transition: { 
            delay: i * 0.22
        }
    })
}