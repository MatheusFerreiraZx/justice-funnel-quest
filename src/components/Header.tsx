
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Phone, Mail, MapPin } from "lucide-react";
import LawyerLogo from "@/components/LawyerLogo";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto">
        {/* Top header with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-lawyer-DEFAULT" />
              <span>(11) 9999-8888</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-lawyer-DEFAULT" />
              <span>contato@drrichard.adv.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lawyer-DEFAULT" />
              <span>São Paulo, SP</span>
            </div>
          </div>
        </div>
        
        {/* Main header with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <LawyerLogo />
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="px-4 py-2 text-gray-700 hover:text-lawyer-DEFAULT transition-colors"
                >
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="px-4 py-2 text-gray-700 hover:text-lawyer-DEFAULT transition-colors"
                >
                  Serviços
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="px-4 py-2 text-gray-700 hover:text-lawyer-DEFAULT transition-colors"
                >
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#" 
                  className="px-4 py-2 text-gray-700 hover:text-lawyer-DEFAULT transition-colors"
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
