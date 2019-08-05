//database of all companies
const data = [
    {
        title: "養心殿",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "養心殿地址",
        shortSummary: "關於養心殿概括"
    },
    {
        title: "吉野家",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "吉野家地址",
        shortSummary: "關於吉野家概括"
    },
    {
        title: "經濟日報",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "某處某處某處某處某處某處某處某處某處某處某處某處某處某處某處某處",
        shortSummary: "藤條水喉通打仔"
    },
    {
        title: "HKG報",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "某處某處某處某處某處某處某處某處某處某處",
        shortSummary: "藤條水喉通打仔"
    }
];
export default {
    find: function(query) {
        if (!query) {
            return data.slice(0, 10);
        } else {
            return data.filter(company => company.title.includes(query)); 
        }
    }
}