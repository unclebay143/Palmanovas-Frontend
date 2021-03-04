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
        // icon: faMoneyBill,
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
        url: '/dashboard/'
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
};


export const agents = [
    {
        sr: 'Agent 1',
        name: "Delikk",
        whatsappNumber: '+234 816 471 6129  '
    },
    {
        sr: 'Agent 2',
        name: "Mabel",
        whatsappNumber: '+234 813 547 8532'
    },
    {
        sr: 'Agent 3',
        name: "O.J",
        whatsappNumber: '+234 706 586 5777'
    },
    {
        sr: 'Agent 4',
        name: "Dickson",
        whatsappNumber: '+234 906 344 7206'
    },
    {
        sr: 'Cryptocurrency',
        cryptoAddress: "3MVH7XYsAvMXubAyHhohoEtPa8vchuCA6F",
    },
]


export default MenuItem;