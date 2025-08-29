import { AccountProgressCard } from "./account-progress-card"
import { FinancialWellBeingCard } from "./financial-wel-being-card"
import { KeyInsightsAndWellBeingCard } from "./key-insights-and-well-being-card"
import { ProspectsLeadsCard } from "./prospects-leads"
import { TotalFranchiseesOnBoardCard } from "./total-franchisees-on-board-card"

export const GroupOfCards = () => {
    return (
        <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  xl:gap-4 xl:p-8">
            <div className="row-span-2">
                <AccountProgressCard progress={85} />
            </div>
            <TotalFranchiseesOnBoardCard />
            <KeyInsightsAndWellBeingCard salesGrowthPercentage={10}/>
            <FinancialWellBeingCard />
            <ProspectsLeadsCard />
        </div>
    )
}