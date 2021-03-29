// this function returns the ROI day for each packages
export const getPackageROIDay = (packageID) =>{
    switch (packageID) {
        case 1:
            return 21
        case 2:
            return 21
        case 3:
            return 21
        case 4:
            return 21
        case 5:
            return 21
        case 6:
            return 21
        case 7:
            return 28
        case 8:
            return 28
        case 9:
            return 28
        default:
            break;
    }
}

export const getPackageName = (packageID) =>{
    switch (packageID) {
        case 1:
            return "Basic"
        case 2:
            return "Standard"
        case 3:
            return "Premium"
        case 4:
            return "Silver"
        case 5:
            return "Bronze"
        case 6:
            return "Gold"
        case 7:
            return "Master"
        case 8:
            return "Executive"
        case 9:
            return "Vip"
        default:
            break;
    }
}