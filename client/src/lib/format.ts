


export function formatPrice(price: number): string {
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return `${formatted} USD`
}

export const formatDistances = (distance: number | null | undefined): string => {

    if (distance)
        if (distance > 999) {
            return `${distance / 1000}km`
        }
    return `${distance}m`
}



