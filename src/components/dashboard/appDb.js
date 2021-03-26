import { 
    faGift,
    faHistory,
    faMoneyBillAlt,
    faPaperPlane,
    faSignOutAlt,
    faUsers 
} from "@fortawesome/free-solid-svg-icons";
import { tryLogout } from "../../actions/userAction";

const MenuItem = [
    {
        id: 1,
        title: "Wallets",
        icon: faMoneyBillAlt,
        url: '/dashboard/wallet'
    },
    {
        id: 2,
        title: "Upgrade",
        icon: faPaperPlane,
        url: '/dashboard/upgrade'
    },
    {
        id: 3,
        title: "Bonus",
        icon: faGift,
        url: '/dashboard/bonus'
    },
    {
        id: 4,
        title: "Referral",
        icon: faUsers,
        url: '/dashboard/referrals'
    },
    {
        id: 5,
        title: "History",
        icon: faHistory,
        url: '/dashboard/history'
    },
    {
        id: 6,
        title: "Logout",
        icon: faSignOutAlt,
        handleClick: tryLogout()
    },
]

export const user = {
    isAdmin: false,
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
        accountName: "Ayodele Samuel Adebayo",
        accountNumber: "3054487011",
        accountType: "Savings"
    },
    crypto:{
        id: "93939kdkdkdlaaoow994994",
        email: "crypto@gmail.com"
    },
    packagePurchased:{
        name: 'PalmaGold',
        price: '#40, 000',
        purchasedDate: 'Mar 7 2021',
        maturedDate: 'Mar 10 2021'
    }
};


export const upgradeAndAgentsDetails = [

        {
            sr: 'Packages',
            packagesInformation:[
                {
                    packageID:1,
                    packageName: "PalmBasic",
                    packagePrice: "#10, 000",
                    packageDescription: "ROI #20350 - #970per day for 21days",
                },
                {
                    packageID:2,
                    packageName: "Palmstandard",
                    packagePrice: "#25, 000",
                    packageDescription: "ROI #46,250 - #2,203per day for 21 days",
                },
                {
                    packageID:3,
                    packageName: "Palmpremium",
                    packagePrice: "#53, 000",
                    packageDescription: "#98,050 - #4,690per day for 21days",
                },
                {
                    packageID:4,
                    packageName: "Palmsilver",
                    packagePrice: "#108, 000",
                    packageDescription: "ROI #199,800 - #9,415per day for 21days",
                },
                {
                    packageID:5,
                    packageName: "Palmbronze",
                    packagePrice: "#222,000",
                    packageDescription: "ROI #410,700 - #19,557per day for 21days",
                },
                {
                    packageID:6,
                    packageName: "Palmgold",
                    packagePrice: "#530,000",
                    packageDescription: "ROI #980,500 - #46,690per day for 21days",
                },
                {
                    packageID:7,
                    packageName: "Palmmaster",
                    packagePrice: "#1,110,000",
                    packageDescription: "ROI #2,053,500 - #330,357per day for 28day",
                },
                {
                    packageID:8,
                    packageName: "Palmexecutive",
                    packagePrice: "#2,500,000",
                    packageDescription: "ROI #4,625,000 - #165,178per day for 28days",
                },
                {
                    packageID:9,
                    packageName: "palmVIP",
                    packagePrice: "#5,000,000",
                    packageDescription: "ROI # 9,250,000 - #330,357per day for 28day",
                },
            ]
        },
        {
            sr: 'Agent 1',
            name: "Delikk",
            whatsappNumber: '+234 816 471 6129  '
        },
        // {
        //     sr: 'Agent 2',
        //     name: "Mabel",
        //     whatsappNumber: '+234 813 547 8532'
        // },
        // {
        //     sr: 'Agent 3',
        //     name: "O.J",
        //     whatsappNumber: '+234 706 586 5777'
        // },
        {
            sr: 'Agent 3',
            name: "Dickson",
            whatsappNumber: '+234 906 344 7206'
        },
        {
            sr: 'Cryptocurrency',
            cryptoAddress: "3MVH7XYsAvMXubAyHhohoEtPa8vchuCA6F",
        },
]

export default MenuItem;