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

export const getPackagePrice = (packageID) =>{
    switch (packageID) {
        case 1:
            return "10, 000"
        case 2:
            return "25, 000"
        case 3:
            return "53, 000"
        case 4:
            return "108, 000"
        case 5:
            return "222, 000"
        case 6:
            return "530,000"
        case 7:
            return "1,110,000"
        case 8:
            return "2,500,000"
        case 9:
            return "5,000,000"
        default:
            break;
    }
}