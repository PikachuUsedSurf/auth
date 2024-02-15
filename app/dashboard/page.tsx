import Sidebar from "@/app/dashboard/sidebar/page";
import Navbar from "@/app/dashboard/navbar/page";

const ReportDashboard = () => {
    return (
        <div>
            <div className={"grid min-h-screen w-full lg:grid-cols-[280px_1fr]"}>
                <Sidebar/>
                <Navbar/>
            </div>
        </div>
    );
}

export default ReportDashboard;