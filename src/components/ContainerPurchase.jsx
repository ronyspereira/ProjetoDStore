import ButtonPrint from "./ButtonPrint";
import ButtonBackHome from "./ButtonBackHome";
import HeaderPurchase from "./HeaderPurchase";
import InfoDelivery from "./InfoDelivery";
import InfoPurchase from "./InfoPurchase";
import InfoPersonPurchase from "./InfoPersonPurchase";
import Line from "./Line";
import PurchaseSummary from "./PurchaseSummary";
import PurchaseTotal from "./PurchaseTotal";
import Header from "./Header";
import Footer from "./Footer";

export default function ContainerPurchase () {
    return (
        <>
            <Header />
            <div className="bg-slate-50 p-6">
                <section className="rounded flex flex-col justify-center bg-white p-10 py-6 my-6 w-[768px] mx-auto rounded-sm ">
                <HeaderPurchase />
                <Line />
                <InfoPersonPurchase />
                <Line />
                <InfoDelivery />
                <Line />
                <InfoPurchase />
                <Line />
                <PurchaseSummary />
                <PurchaseTotal />
                <ButtonPrint />
            </section>
            <ButtonBackHome />

            </div>
            

            <Footer />/
        </>
    )
}