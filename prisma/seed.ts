
import prisma from "./instance";
import companiesFile from '../data/challenge_companies.json'
import dealsFile from '../data/challenge_deals.json'


const companies:any[] = []
for(let company of Object.values(companiesFile)){
    console.log(company)
    companies.push(company);
}
const deals:any[] = []
for(let deal of Object.values(dealsFile)){
    console.log(deal)
    deals.push(deal);
}
Promise.all([
    async function () {
        console.log('hey',companies)
        await prisma.company.createMany({
            data: companies,
            skipDuplicates: true,
        });
    }(),
    async function () {
        console.log('hey',deals)
        await prisma.deal.createMany({
            data: deals,
            skipDuplicates: true,
        });
    }()
]);