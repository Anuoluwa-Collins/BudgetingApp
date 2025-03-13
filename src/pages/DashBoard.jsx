import Sidebar from "../components/SideBar";
import DashCards from "../components/DashCards";
import { Coffee, DollarSign, FilmIcon, Gift, HouseIcon, MoveDown, MoveUp, ShoppingCart } from "lucide-react";

const DashBoard = () => {
  return (
    <div className="flex gap-3">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <div>
          <p>Budget DashBoard</p>
          <h1>This Month</h1>
        </div>
        <div className="flex justify-center">
          <DashCards
            name="Total budget"
            title="$5000"
            Logo={<DollarSign />}
            description="Monthly allocation"
          />
          <DashCards
            name="Expenses"
            title="$2356.98"
            Logo={<MoveUp color="green" />}
            description="46.3% of budget used"
          />
          <DashCards
            name="Remaing"
            title="$2608.65"
            Logo={<MoveDown color="Red" />}
            description="53.7% of budget remaining"
          />
        </div>
        <div>
          <h3>Recent Expenses</h3>
          <div>
            <div className="flex justify-between p-4">
              <div className="flex ">
                <HouseIcon color="green" />
                <p className="px-4">Housing</p>
              </div>
              <div className="flex ">
                <p className="px-4">oct 1</p>
                $1200.00
              </div>
            </div>
            <hr />

            <div className="flex justify-between p-4">
              <div className="flex ">
                <ShoppingCart color="green" />
                <p className="px-4">Groceries</p>
              </div>
              <div className="flex ">
                <p className="px-4">oct 7</p>
                $457.43
              </div>
            </div>
            <hr />

            <div className="flex justify-between p-4">
              <div className="flex ">
                <FilmIcon color="green" />
                <p className="px-4">Entertainment</p>
              </div>
              <div className="flex ">
                <p className="px-4">oct 10</p>
                $129.43
              </div>
            </div>
            <hr />

            <div className="flex justify-between p-4">
              <div className="flex ">
                <Coffee color="green" />
                <p className="px-4">Coffee</p>
              </div>
              <div className="flex ">
                <p className="px-4">oct 10</p>
                $129.43
              </div>
            </div>
            <hr />

            <div className="flex justify-between p-4">
              <div className="flex ">
                <Gift color="green" />
                <p className="px-4">Gifts</p>
              </div>
              <div className="flex ">
                <p className="px-4">oct 10</p>
                $700.43
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;