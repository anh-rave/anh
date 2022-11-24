const images = {
    0: require('./images/cybergigbg.gif'),
}

const getTimeLeftText = () => {
    const totalHoursLeft = Math.floor((Date.parse('17 Dec 2022 19:00:00') - Date.now()) / (1000 * 60 * 60))
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
    1: 'CYBER GIG',
    2: 'RAP & RAVE',
    3: getTimeLeftText(),
    4: 'DIVE-FM PALETO 650',
    5: '17 DECEMBER',
}

export { images, texts }
