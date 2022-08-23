const images = {
    0: require('./images/fr0.png'),
    1: require('./images/fr1.png'),
    2: require('./images/fr2.png'),
    3: require('./images/fr3.png'),
    4: require('./images/fr4.png'),
    5: require('./images/fr5.png'),
}

const getTimeLeftText = () => {
    const totalHoursLeft = Math.floor((Date.parse('27 Aug 2022 20:00:00') - Date.now()) / (1000 * 60 * 60))
    if (totalHoursLeft < 0) {
        return 'ALREADY PASSED :/'
    }
    const daysLeft = Math.floor(totalHoursLeft / 24)
    const hoursLeft = totalHoursLeft - daysLeft * 24
    if (daysLeft > 0) {
        return `${daysLeft} DAYS; ${hoursLeft} HOURS LEFT`
    }
    return `${hoursLeft} HOURS LEFT`
}

const texts = {
    0: 'ANNIHILATION PARTY PRESENTS',
    1: '27TH AUGUST 20:00',
    2: getTimeLeftText(),
    3: 'UV DECORATIONS',
    4: 'CRAZY LASERS',
    5: 'WILD FOREST RAVE',
}

export { images, texts }
