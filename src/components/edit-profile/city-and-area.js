import { cityInfoArr } from '../complain-form/other-files/city-info';

const getCityAndArea = (LocationID) => {
    let cityFlag = false;
    let cityFound;

    for (let i = 0; i < cityInfoArr.length; i++) {
        // console.log(cityInfoArr[i]);

        if (LocationID === cityInfoArr[i].subRegionId) {
            cityFlag = true;
            cityFound = cityInfoArr[i];
            setPrevCityObj(cityInfoArr[i]);
            break;
        }
    }
    console.log(cityFound, 'City Data Found!');
}

export { getCityAndArea };