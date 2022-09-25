import ActivityTab from "../components/dashboard/activityTab/ActivityTab";
import MonthlyVisitorChart from "../components/dashboard/charts/MonthlyVisitorChart";
import PriceHistory from "../components/dashboard/charts/PriceHistory";
import StatisticsChart from "../components/dashboard/charts/StatisticsChart";
import StatisticsChartTwo from "../components/dashboard/charts/StatisticsChartTwo";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import FeaturedCard from "../components/dashboard/featuredCard/FeaturedCard";
import Header from "../components/header/Header";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import HeroCard from "../components/dashboard/hero/HeroCard";
import TodaysPick from "../components/dashboard/todaysPick/TodaysPick";
import TopAuthor from "../components/dashboard/topAuthor/TopAuthor";
import TopBuyer from "../components/dashboard/topBuyer/TopBuyer";
import TrendingAuction from "../components/dashboard/trendingAuction/TrendingAuction";
import Activity from "../components/dashboard/activityTab/Activity";

const Dashboard = () => {
    return (
        <div className="bg-black">
            <Header />
            <DashboardHeader />
            <div className="admin-wrapper  bg-slate-200">
                <div className="container w-full">
                    <div className="row w-full g-12 space-y-2">


                        {/* <ActivityTab /> */}
                        <Activity />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;