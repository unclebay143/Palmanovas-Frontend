import { formatDate } from "./dateFormatter";
import { getPackageROIDay } from "./getPackageROIDay";


export const generateMatureDate = (startDate, packageID) =>{
    // get the package mature days
    const roiMatureDay = getPackageROIDay(1)
    // convert startDate to Date
    const convertedStartDate = new Date(startDate)
    // add roiMatureDays to roiMatureDays
    const matureDate = startDate.setDate(startDate.getDate() + roiMatureDay)
    // convert matureDate to Date
    const convertedMatureDate = new Date(matureDate)
    getRemainingDays(convertedStartDate)

    

    console.log("mature day is ", getDifferenceInDays(convertedStartDate, convertedMatureDate))
}


function getDifferenceInDays(startDate, roiMatureDay) {
    const differenceInMinutes = Math.abs(roiMatureDay - startDate);
    const convertedDifferenceInDays = differenceInMinutes / (1000 * 60 * 60 * 24);
    return convertedDifferenceInDays
}

export const getRemainingDays = (startDate) =>{
    const today = Date.now()
    const convertedTodayDate = new Date(today)
    const differenceInMinutes = Math.abs(convertedTodayDate - startDate)
    const getDifferenceInDays = differenceInMinutes / (1000 * 60 * 60 * 24)
    return getDifferenceInDays
}