import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Homepage from "./pages/Homepage";
import HomeDesigns from "./pages/Housepage";
import HospitalDesigns from "./pages/Hospitalpage";
import ShoppingMallDesigns from "./pages/Shoppingmallpage";
import RestaurantDesigns from "./pages/Restaurantpage";
import CollegeDesigns from "./pages/Collegepage";
import ApartmentDesigns from "./pages/Apartmentpage";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import AboutUs from "./pages/Auth/AboutUs";

import CalculatorPage from "./pages/CalculatorPage";
import ThankYou from "./pages/ThankYou";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

import IndependentHouse from "./pages/IndependentHouseForm";
import DuplexHouse from "./pages/DuplexHouseForm";
import VillaHouse from "./pages/VillaForm";
import SemiDetachedHouse from "./pages/SemiDetachedForm";
import ThreeStoreyHouse from "./pages/ThreeStoreyForm";
import TriplexHouse from "./pages/TriplexHouseForm";

import GeneralHospitalForm from "./pages/GeneralHospitalForm";
import ChildrenHospitalForm from "./pages/ChildrenHospitalForm";
import EyeHospitalForm from "./pages/EyeHospitalForm";
import MultiSpecialtyHospitalForm from "./pages/MultiSpecialtyHospitalForm";
import OrthopedicHospitalForm from "./pages/OrthopedicHospitalForm";
import DentalHospitalForm from "./pages/DentalHospitalForm";

import CommunityShoppingMallForm from "./pages/CommunityShoppingMallForm";
import FashionShoppingMallForm from "./pages/FashionShoppingMallForm";
import NeighbourhoodShoppingMallForm from "./pages/NeighbourhoodShoppingMallForm";
import SuperRegionalShoppingMallForm from "./pages/SuperRegionalShoppingMallForm";
import LifestyleShoppingMallForm from "./pages/LifestyleShoppingMallForm";
import RegionalShoppingMallForm from "./pages/RegionalShoppingMallForm";

import CafeCoffeeRestaurantForm from "./pages/CafeCoffeeRestaurantForm";
import GrillzRestaurantForm from "./pages/GrillzRestaurantForm";
import EmberFlameRestaurantForm from "./pages/EmberFlameRestaurantForm";
import PalatePlaceRestaurantForm from "./pages/PalatePlaceRestaurantForm";
import BuffetRestaurantForm from "./pages/BuffetRestaurantForm";
import SerenityRestaurantForm from "./pages/SerenityRestaurantForm";


import AgricultureCollegeForm from "./pages/AgricultureCollegeForm";
import EngineeringCollegeForm from "./pages/EngineeringCollegeForm";
import MedicalCollegeForm from "./pages/MedicalCollegeForm";
import SpringdaleArtsScienceCollegeForm from "./pages/SpringdaleArtsScienceCollegeForm";
import InformaticsCollegeForm from "./pages/InformaticsCollegeForm";
import LawCollegeForm from "./pages/LawCollegeForm";



import GTwoApartmentForm from "./pages/GTwoApartmentForm";
import GThreeApartmentForm from "./pages/GThreeApartmentForm";
import GThreeModernApartmentForm from "./pages/GThreeModernApartmentForm";
import GFourApartmentForm from "./pages/GFourApartmentForm";
import GFiveApartmentForm from "./pages/GFiveApartmentForm";
import GFiveModernApartmentForm from "./pages/GFiveModernApartmentForm";

// import AboutUs from "./pages/Auth/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/house" element={<HomeDesigns />} />
      <Route path="/hospital" element={<HospitalDesigns />} />
      <Route path="/shoppingmall" element={<ShoppingMallDesigns />} />
      <Route path="/restaurant" element={<RestaurantDesigns />} />
      <Route path="/college" element={<CollegeDesigns />} />
      <Route path="/apartment" element={<ApartmentDesigns />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
            <Route path="/aboutus" element={<AboutUs />} />

      <Route path="/calculator" element={<CalculatorPage />} />

      {/* ✅ Admin Routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      <Route path="/independent" element={<IndependentHouse />} />
      {/* <Route path="/independent-form" element={<IndependentHouseForm />} /> */}
      <Route path="/duplex" element={<DuplexHouse />} />
      <Route path="/villa" element={<VillaHouse />} />
      <Route path="/semidetached-house" element={<SemiDetachedHouse />} />
      <Route path="/threestorey" element={<ThreeStoreyHouse />} />
      <Route path="/Triplex-house" element={<TriplexHouse />} />
      

      <Route path="/generalhospital-form" element={<GeneralHospitalForm />} />
      <Route path="/childrenhospital-form" element={<ChildrenHospitalForm />} />
      <Route path="/multispecialtyhospital-form" element={<MultiSpecialtyHospitalForm />} />
      <Route path="/orthopedichospital-form" element={<OrthopedicHospitalForm />} />
      <Route path="/dentalhospital-form" element={<DentalHospitalForm />} />
      <Route path="/eyehospital-form" element={<EyeHospitalForm />} />

      <Route path="/regionalshoppingmall-form" element={<RegionalShoppingMallForm />} />
      <Route path="/communityshoppingmall-form" element={<CommunityShoppingMallForm />} />
      <Route path="/fashionshoppingmall-form" element={<FashionShoppingMallForm />} />
      <Route path="/neighbourhoodshoppingmall-form" element={<NeighbourhoodShoppingMallForm />} />
      <Route path="/superregionalshoppingmall-form" element={<SuperRegionalShoppingMallForm />} />
      <Route path="/lifestyleshoppingmall-form" element={<LifestyleShoppingMallForm />} />


      <Route path="/cafecoffeerestaurant-form" element={<CafeCoffeeRestaurantForm />} />
      <Route path="/grillz-restaurant-form" element={<GrillzRestaurantForm />} />
      <Route path="/emberFlamerestaurant-form" element={<EmberFlameRestaurantForm />} />
      <Route path="/palate-place-restaurant-form" element={<PalatePlaceRestaurantForm />} />
      <Route path="/buffetrestaurant-form" element={<BuffetRestaurantForm />} />
      <Route path="/serenity-restaurant-form" element={<SerenityRestaurantForm />} />
       

      <Route path="/agriculturecollege-form" element={<AgricultureCollegeForm />} />
      <Route path="/engineeringcollege-form" element={<EngineeringCollegeForm />} />
      <Route path="/medicalcollege-form" element={<MedicalCollegeForm />} />
      <Route path="/informaticscollege-form" element={<InformaticsCollegeForm />} />
      <Route path="/springdaleartssciencecollege-form" element={<SpringdaleArtsScienceCollegeForm />} />
      <Route path="/lawcollege-form" element={<LawCollegeForm />} />
      

      <Route path="/gtwoapartment-form" element={<GTwoApartmentForm />} />
      <Route path="/gthreeresidentialapartment-form" element={<GThreeApartmentForm />} />
      <Route path="/gthreemodernresidentialapartment-form" element={<GThreeModernApartmentForm />} />
      <Route path="/gfourapartment-form" element={<GFourApartmentForm />} />
      <Route path="/gfiveapartment-form" element={<GFiveApartmentForm />} />
      <Route path="/gfivemodernapartment-form" element={<GFiveModernApartmentForm />} />
      

      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;