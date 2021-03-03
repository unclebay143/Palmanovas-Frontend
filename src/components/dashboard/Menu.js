import { 
    faGift,
    faHistory,
    faMoneyBill,
    faMoneyBillAlt,
    faPaperPlane,
    faSignOutAlt,
    faUsers 
} from "@fortawesome/free-solid-svg-icons";
const MenuItem = [
    {
        id: 1,
        title: "Wallets",
        // icon: faMoneyBill
        icon: faMoneyBillAlt
    },
    {
        id: 2,
        title: "Upgrade",
        icon: faPaperPlane
    },
    {
        id: 3,
        title: "Bonus",
        icon: faGift
    },
    {
        id: 4,
        title: "Referral",
        icon: faUsers
    },
    {
        id: 5,
        title: "History",
        icon: faHistory
    },
    {
        id: 6,
        title: "Logout",
        icon: faSignOutAlt
    },
]

export const user = {
    profile:{
        name: "Ayodele Samuel Adebayo",
        username: "unclebay143",
        registeredNumber: "08083826262",
        email: "unclebay143@gmail.com",
        userType: "palmaUser",
        rank: "PalmNiggar"
    },
    account:{
        bankName: "Polaris Bank Plc",
        accountNumber: "3054487011",
        accountType: "Savings"
    },
    crypto:{
        id: "93939kdkdkdlaaoow994994",
        email: "crypto@gmail.com"
    }
}

export default MenuItem;