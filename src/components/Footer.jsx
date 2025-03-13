import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-4">
        <div>
          <h2 className="text-green-800">Bugdeter</h2>
          <p>
            Simplifying financial planning with intelligent insights and a
            beautifully designed experience.
          </p>
          <ol className=" flex ">
            <li className="m-1">
              <Facebook />
            </li>
            <li className="m-1">
              <Twitter />
            </li>
            <li className="m-1">
              <Instagram />
            </li>
            <li className="m-1">
              <Linkedin />
            </li>
          </ol>
        </div>
        <div >
          <ul className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Product</h3>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Updates
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="text-green-900 no-underline hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer