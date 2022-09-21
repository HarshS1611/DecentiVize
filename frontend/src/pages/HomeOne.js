import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroOne from "../components/hero/HeroOne";
import Divider from "../components/divider/Divider";
import FeaturedNFT from "../components/featuredNFT/FeaturedNFT";


export default function HomeOne() {
    return (
        <>
            <Header />

            <HeroOne
                heading="DecentiVize"
                subHeading="It's crafted with the latest trend of design & coded with all modern approaches."
                buttonGroup={[
                    {
                        btnColor: "primary",
                        btnText: "Explore Now",
                        btnURL: "/live-bidding",
                        btnIcon: "bi-arrow-right"
                    },
                    {
                        btnColor: "minimal",
                        btnText: "All Collections",
                        btnURL: "/collections",
                        btnIcon: "bi-grid-3x3-gap"
                    }
                ]}
                welcomeImage="img/illustrator/2.png"
            />

            <Divider />

            {/* Data: data > featuredNFT > featured-nft.json */}
            <FeaturedNFT
                heading="Editor's Picks"
            />

            <Divider />



            <Divider />

            {/* <LiveAuction
                backgroundColor="gray"
                spinnerColor="danger"
                title="Live Auctions"
                buttonText="View All Auctions"
                buttonURL="/live-bidding"
                buttonColor="primary"
            /> */}

            <Divider />

            {/* <DiscoverItems
                title="Discover"
            /> */}

            <Divider />

            {/* <PopularCollection
                title="Popular items in last"
            /> */}

            <Divider />

            {/* <Process /> */}

            <Divider />

            {/* Data:  */}
            {/* <Collection
                heading="Browse by category"
                buttonText="View All Catagories"
                buttonURL="/collections"
                buttonColor="primary"
            /> */}

            <Divider />
            {/* 
            <Footer /> */}
        </>
    )
}