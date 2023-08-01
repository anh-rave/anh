const images = {
    0: require('./images/cybergigbg.gif'),
}

const getTimeLeftText = () => {
    const totalHoursLeft = Math.floor((Date.parse('18 Aug 2023 19:00:00') - Date.now()) / (1000 * 60 * 60))
    if (totalHoursLeft < 0) {
        return 'ALREADY PASSED :/'
    }
    const daysLeft = Math.floor(totalHoursLeft / 24)
    const hoursLeft = totalHoursLeft - daysLeft * 24
    if (daysLeft > 0) {
        return `${daysLeft} DAYS LEFT`
    }
    return `${hoursLeft} HOURS LEFT`
}

const texts = {
    0: 'ANNIHILATION PARTY',
    1: 'i chuj',
    2: '18 SIERPNIA',
    3: getTimeLeftText(),
}

export { images, texts }
