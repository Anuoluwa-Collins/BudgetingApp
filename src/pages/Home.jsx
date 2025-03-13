import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Review from "../components/Review";
import Pricing from "../components/Pricing";
import {
  Trophy,
  ArrowDownFromLine,
  Heart,
  ListCheck,
  Sunset,
  ClockArrowUp,
} from "lucide-react";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="w-full">
      <MiniNav/>
      <Hero />

      <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
        <FeatureCards
          logo={<Trophy size={40} className="text-green-800" />}
          headers="Smart Budget Categories"
          description="Automatically categorize your expenses and create custom budget categories that adapt to your spending habits."
        />
        <FeatureCards
          logo={<ArrowDownFromLine size={40} className="text-green-800" />}
          headers="Expense Tracking"
          description="Effortlessly track and monitor your expenses in real-time with automatic categorization and intelligent tagging."
        />
        <FeatureCards
          logo={<Heart size={40} className="text-green-800" />}
          headers="Savings Goals"
          description="Set personalized savings goals and track your progress with visual indicators and smart recommendations."
        />
        <FeatureCards
          logo={<Sunset size={40} className="text-green-800" />}
          headers="Investment Planning"
          description="Plan for your future with integrated investment tracking and recommendations based on your financial goals."
        />
        <FeatureCards
          logo={<ClockArrowUp size={40} className="text-green-800" />}
          headers="Financial Insights"
          description="Gain valuable insights into your spending patterns with detailed analytics and actionable recommendations."
        />
        <FeatureCards
          logo={<ListCheck size={40} className="text-green-800" />}
          headers="Bill Reminders"
          description="Never miss a payment with automated bill reminders and scheduled payment tracking features."
        />
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          <Review
            name="Emily Johnson"
            title="Small Business Owner"
            description="BudgetMaster transformed how I manage both personal and business
      finances. The intuitive interface and smart categorization save me hours each month."
          />

          <Review
            name="Michael Chen"
            title="Software Engineer"
            description="As someone who's tried dozens of budget apps, this is by far the most
      elegant and effective solution. The investment tracking feature is particularly impressive."
          />

          <Review
            name="Sophia Rodriguez"
            title="Freelance Designer"
            description="I finally achieved my savings goals thanks to BudgetMaster's visual
      progress tracking. The custom categories adapt perfectly to my irregular income patterns."
          />

          <Review
            name="David Wilson"
            title="Marketing Director"
            description="The insights provided by BudgetMaster helped me identify wasteful
      spending and redirect over $500 monthly to my retirement savings. Game changer!"
          />
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-green-800 uppercase tracking-wide text-lg">
            Join thousands achieving their financial goals
          </h4>
          <ol className="flex flex-wrap justify-center gap-4 mt-4 text-gray-800 font-semibold">
            <li className="shadow-md px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm sm:text-xs">
              30,000+ Active Users
            </li>
            <li className="shadow-md px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm sm:text-xs">
              4.8/5 App Store Rating
            </li>
            <li className="shadow-md px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm sm:text-xs">
              $150M+ Saved by Users
            </li>
            <li className="shadow-md px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm sm:text-xs">
              99% Customer Satisfaction
            </li>
          </ol>
        </div>
      </div>
      <Pricing />
      <Footer/>
    </div>
  );
};

export default Home;
