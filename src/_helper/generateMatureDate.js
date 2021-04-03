// import { formatDate } from "./dateFormatter";
// import { getPackageROIDay } from "./getPackageROIDay";


// export const generateMatureDate = (startDate, packageID) =>{
//     // get the package mature days
//     const roiMatureDay = getPackageROIDay(packageID)
//     // convert startDate to Date
//     const convertedStartDate = new Date(startDate)
//     // add roiMatureDays to roiMatureDays
//     const matureDate = startDate.setDate(startDate.getDate() + roiMatureDay)
//     // convert matureDate to Date
//     const convertedMatureDate = new Date(matureDate)
//     console.log(getRemainingDays(convertedStartDate))

//     console.log("mature day is ", getDifferenceInDays(convertedStartDate, convertedMatureDate))
//     return getDifferenceInDays(convertedStartDate, convertedMatureDate)
// }


// function getDifferenceInDays(startDate, roiMatureDay) {
//     const differenceInMinutes = Math.abs(roiMatureDay - startDate);
//     const convertedDifferenceInDays = differenceInMinutes / (1000 * 60 * 60 * 24);
//     return convertedDifferenceInDays
// }

// export const getRemainingDays = (startDate) =>{
//     const today = Date.now()
//     const convertedTodayDate = new Date(today)
//     const differenceInMinutes = Math.abs(convertedTodayDate - startDate)
//     const getDifferenceInDays = differenceInMinutes / (1000 * 60 * 60 * 24)
    
//     return getDifferenceInDays
// }


export const generateMatureDate = (startDate, endDate) =>{
    console.log(endDate)
    // get today's current date
    const getCurrentDate = new Date();
    // convert end date to new Date
    const convertEndDate = new Date(endDate);
    // To calculate the time difference of two dates
    var Difference_In_Time = convertEndDate.getTime() - getCurrentDate.getTime() ;
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.abs(Difference_In_Time / (1000 * 3600 * 24))
    return(Math.floor(Difference_In_Days))
}