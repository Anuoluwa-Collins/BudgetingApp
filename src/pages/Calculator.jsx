import CalculatorForm from "../components/CalculatorForm"
import Sidebar from "../components/SideBar";
import { PiggyBank } from 'lucide-react';

const Calculator = () => {
  return (
    <div className="flex">
      <div className="w-1/4 ">
      <Sidebar/>
      </div>
      <div className="w-3/4">

    <div className=" flex w-full">
      <div className="bg-green-700 w-1/2 flex flex-col justify-center items-center text-white">
        <h1 className="">Income Tax <br /> Calculator</h1>
        <p>Tools & Calculator <br />
          to slash your bills        
        </p>
        <PiggyBank className="text-white" size={100}/>
      </div>
      <CalculatorForm/>
    </div>
      </div>
    </div>
  )
}

export default Calculator