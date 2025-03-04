import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home'; // Import Home component
import Tour from './components/Tour'; // 
import Transportation from './components/Transportation'; // 
import BangkokTransports from './components/Bangkok/BangkokTransports'; 
import BangkokTransers from './components/Bangkok/BangkokTransfers'; 
import BangkokTransferPay from './components/Bangkok/BangkokTransferPay'; // 
import BangkokPattayaTransfers from './components/Bangkok/BangkokPattayaTransfers'; 
import DmkHotelTransfersPay from './components/Bangkok/DmkHotelTransfersPay'; 
import DmkHotelTransfers from './components/Bangkok/DmkHotelTransfers'; 
import BangkokPattayaTransfersPay from './components/Bangkok/BangkokPattayaTransfersPay'; 
import ContactUs from './components/ContactUs'; // 
//import ShowProducts from './components/ShowProducts';
import CreateAccount  from './components/CreateAccount';
import Root from './components/Roots';
import Bangkok from './components/Bangkok/Bangkok';
import BangkokMSW from './components/Bangkok/BangkokMSW';
import BangkokMSWPay from './components/Bangkok/BangkokMSWPay'; // Corrected import
import LearnMore from './components/Bangkok/BangkokLearnMore';
import OneDayKanchanaBridgeKwai from './components/Bangkok/OneDayKanchanaBridgeKwai'; 
import ChaoPDCruise from './components/Bangkok/ChaoPDCruise'; 
import ThreeTempleAndGPTB from './components/Bangkok/ThreeTempleAndGPTB';
import GrandPearlDinnerCruiseB from './components/Bangkok/GrandPearlDinnerCruiseB';
import BangkokAncientCityAndEM from './components/Bangkok/BangkokAncientCityAndEM';
import BangkokCityTT from './components/Bangkok/BangkokCityTT'; 
import BangkokCityShoppingT from './components/Bangkok/BangkokCityShoppingT';
import SafariWorldAndMPB from './components/Bangkok/SafariWorldAndMPB';
import WhiteOrchidDinnerCruise from './components/Bangkok/WhiteOrchidDinnerCruise';
import DamnoenSadukAndMRMB from './components/Bangkok/DamnoenSadukAndMRMB';
import SiamAmazingThemePark from './components/Bangkok/SiamAmazingThemePark';
import SamphranElephantZoo from './components/Bangkok/SamphranElephantZoo';
import AmphawaFloatingMarketBangkok from './components/Bangkok/AmphawaFloatingMarketBangkok';
import BangkokDreamWorldPark from './components/Bangkok/BangkokDreamWorldPark';
import EveningFoodTourTukTuk from './components/Bangkok/EveningFoodTourTukTuk'; 
import EveningWalkingCityTourBangkok from './components/Bangkok/EveningWalkingCityTourBangkok';
import SealifeOceanWorldMTB from './components/Bangkok/SealifeOceanWorldMTB';
import Logout from './components/Logout';
import Product from './components/Product'; 
import Cart from './components/Cart'; 
import AdminBookings from './components/AdminBookings';
import Phuket from './components/Phuket/Phuket';
import  KhaiIslandMorningAfternoonTour from './components/Phuket/KhaiIslandMorningAfternoonTour';
import PhiPhiIslandsMayaBay from './components/Phuket/PhiPhiIslandsMayaBay';
import PhiPhiIslandTourbyBigBoat from './components/Phuket/PhiPhiIslandTourbyBigBoat';
import JamesBondIsland from './components/Phuket/JamesBondIsland'; 
import PhuketCityPrivateTour  from './components/Phuket/PhuketCityPrivateTour'; 
import ElephantCareCamp  from './components/Phuket/ElephantCareCamp'; 
import JamesBondIslandWithLunch  from './components/Phuket/JamesBondIslandWithLunch'; 
import JamesBondIslandTourBySpeedBoat  from './components/Phuket/JamesBondIslandTourBySpeedBoat'; 
import SimilanPremiumOneDayTrip  from './components/Phuket/SimilanPremiumOneDayTrip';
import CarnivalMagicPhuketTicket  from './components/Phuket/CarnivalMagicPhuketTicket'; 
import SiamNiramitPhuket  from './components/Phuket/SiamNiramitPhuket'; 
import  PhuketFantaSeaUltimateShow  from './components/Phuket/PhuketFantaSeaUltimateShow'; 
import  FulldayWhiteWaterRaftingPhuket  from './components/Phuket/FulldayWhiteWaterRaftingPhuket'; 
import PhuketTransports from './components/Phuket/PhuketTransports'; 
import PhuketAirportADPTransfers   from './components/Phuket/PhuketAirportADPTransfers '; 
import PhuketHotelToKrabi  from './components/Phuket/PhuketHotelToKrabi'; 
import AndamandaWaterParkTicketsPhuket  from './components/Phuket/AndamandaWaterParkTicketsPhuket'; 
import TigerParkTicketPhuket  from './components/Phuket/TigerParkTicketPhuket'; 
import PhiPhiIslandBambooTourBySpeedBoat  from './components/Phuket/PhiPhiIslandBambooTourBySpeedBoat'; 
import PhuketCityGroupTour  from './components/Phuket/PhuketCityGroupTour'; 
import ChiangMai from './components/ChiangMai/ChiangMai';
import  DoiInthanonNationalParkTwinPagoda from './components/ChiangMai/DoiInthanonNationalParkTwinPagoda';
import  FullDayTourChiangRaiWhiteTempleGoldenTriangle from './components/ChiangMai/FullDayTourChiangRaiWhiteTempleGoldenTriangle';
import  ChiangMaiHalfDayDoiSuthepTempleMhongVillage from './components/ChiangMai/ChiangMaiHalfDayDoiSuthepTempleMhongVillage';
import  TheKhumKhantokeDinnerShowsTickets from './components/ChiangMai/TheKhumKhantokeDinnerShowsTickets';
import  ChiangMaiNightSafariTicket from './components/ChiangMai/ChiangMaiNightSafariTicket';
import  FullDayElephantBathingBambooRaftingTour from './components/ChiangMai/FullDayElephantBathingBambooRaftingTour';
import  PrivateTourChiangMaiDoiSuthepTempleStickyWaterfall from './components/ChiangMai/PrivateTourChiangMaiDoiSuthepTempleStickyWaterfall';
import  ElephantCareTour from './components/ChiangMai/ElephantCareTour';
import  Krabi from './components/Krabi/Krabi';
import  SevenIslandSunsetTourByLongTailBoat from './components/Krabi/SevenIslandSunsetTourByLongTailBoat';
import  PhiPhiIslandTourbySpeedBoatKrabi from './components/Krabi/PhiPhiIslandTourbySpeedBoatKrabi';
import  KrabiHalfDayCityPrivateTour from './components/Krabi/KrabiHalfDayCityPrivateTour';
import  FourIslandTourKrabiByLongTailBoat from './components/Krabi/FourIslandTourKrabiByLongTailBoat';
import  FourIslandTourKrabiPrivateLuxuryLongTailBoat from './components/Krabi/FourIslandTourKrabiPrivateLuxuryLongTailBoat';
import  FourIslandTourKrabiPrivateTraditionalLongTailBoat from './components/Krabi/FourIslandTourKrabiPrivateTraditionalLongTailBoat';
import  SevenIslandSunsetTourPrivateTraditionalLongTailBoat from './components/Krabi/SevenIslandSunsetTourPrivateTraditionalLongTailBoat';
import  HongIslandTourLongTailBoatGroupTour from './components/Krabi/HongIslandTourLongTailBoatGroupTour';
import  HongIslandTourSpeedBoatGroupTour from './components/Krabi/HongIslandTourSpeedBoatGroupTour';
import  HongIslandSunsetTourGroupTour from './components/Krabi/HongIslandSunsetTourGroupTour';
import  EmeraldPoolPlusHotSprings from './components/Krabi/EmeraldPoolPlusHotSprings';
import  HongIslandSunsetTourPrivateLuxuryBoat from './components/Krabi/HongIslandSunsetTourPrivateLuxuryBoat';
import  HongIslandTourPrivateTraditionalLongTailBoat from './components/Krabi/HongIslandTourPrivateTraditionalLongTailBoat';
import  HongIslandTMorningTourPrivateLuxuryLongTailBoat from './components/Krabi/HongIslandTMorningTourPrivateLuxuryLongTailBoat';
import  Pattaya from './components/Pattaya/Pattaya';
import  HimmaphanIceDomeSnowDomeOvercoat from './components/Pattaya/HimmaphanIceDomeSnowDomeOvercoat';
import  PattayaFloatingMarket from './components/Pattaya/PattayaFloatingMarket';
import  AlcazarCabaretShowVIPTickets from './components/Pattaya/AlcazarCabaretShowVIPTickets';
import  UnderwaterWorldPattayaTicket from './components/Pattaya/UnderwaterWorldPattayaTicket';
import  TheSanctuaryOfTruthEntranceTicket from './components/Pattaya/TheSanctuaryOfTruthEntranceTicket';
import  TheSanctuaryOfTruthEntranceTicketEveningSession from './components/Pattaya/TheSanctuaryOfTruthEntranceTicketEveningSession';
import  NongNoochTropicalGarden from './components/Pattaya/NongNoochTropicalGarden';
import  TigerParkPattaya from './components/Pattaya/TigerParkPattaya';
import  RamayanaWaterParkentranceticketdaypass from './components/Pattaya/RamayanaWaterParkentranceticketdaypass';
import  TigerTopiaSrirachaZooTickets from './components/Pattaya/TigerTopiaSrirachaZooTickets';
import  ArtInParadisePattayaTickets from './components/Pattaya/ArtInParadisePattayaTickets';
import  PattayaDolphinariumTickets from './components/Pattaya/PattayaDolphinariumTickets';
import  MiniSiamPattayaTicket from './components/Pattaya/MiniSiamPattayaTicket';
import  ThaiSkyAdventuresPattaya from './components/Pattaya/ThaiSkyAdventuresPattaya';
import  KhaoKheowOpenZoo from './components/Pattaya/KhaoKheowOpenZoo';
import  ElephantSanctuaryTourPattayaHalfDay from './components/Pattaya/ElephantSanctuaryTourPattayaHalfDay';
import  TiffanyShowPattayaTickets from './components/Pattaya/TiffanyShowPattayaTickets';
import  PattayaCoralIslandTourLunch from './components/Pattaya/PattayaCoralIslandTourLunch';
import  PrivateTourPattayaCity from './components/Pattaya/PrivateTourPattayaCity';
import  PattayaCityTourHalfDayGroupTour from './components/Pattaya/PattayaCityTourHalfDayGroupTour';
import PattayaTransports from './components/Pattaya/PattayaTransports';
import PrivateTransferPattayaToSuvarnabhumiAirport from './components/Pattaya/PrivateTransferPattayaToSuvarnabhumiAirport'; 
import PrivateTransferPattayaHotelDMKAirport from './components/Pattaya/PrivateTransferPattayaHotelDMKAirport';
import PattayaHotelangkokHotelPrivateTransfer from './components/Pattaya/PattayaHotelangkokHotelPrivateTransfer';
import  KohSamui from './components/KohSamui/KohSamui';
import  AroundTheIslandTour from './components/KohSamui/AroundTheIslandTour';
import  FullDayAroundTheIslandTour from './components/KohSamui/FullDayAroundTheIslandTour';
import  ElephantJungleFullDayTour from './components/KohSamui/ElephantJungleFullDayTour';
import  AngthongMarineParkFullDaySpeedBoatTour from './components/KohSamui/AngthongMarineParkFullDaySpeedBoatTour';
import  VIPAngthongMarineParkSemiPrivateTour from './components/KohSamui/VIPAngthongMarineParkSemiPrivateTour';
import  KohMadsumPigIslandKohTanTour from './components/KohSamui/KohMadsumPigIslandKohTanTour';
import  VIPKohTaoKohNangYuanSmallGroupSemiPrivateTour from './components/KohSamui/VIPKohTaoKohNangYuanSmallGroupSemiPrivateTour';
import  FullDayHeritageAyutthayaTempleTourByRoad from './components/Bangkok/FullDayHeritageAyutthayaTempleTourByRoad';
import  HeritageTourAyutthayaByCruiseCoach from './components/Bangkok/HeritageTourAyutthayaByCruiseCoach';
import  KhaoYaiNationalParkPrivateTourBangkok from './components/Bangkok/KhaoYaiNationalParkPrivateTourBangkok';



const router = createBrowserRouter(  
    [
        {
            path: "/",
            element: <Root/>, // Render Home component for root path
            children: [
               {
                  path: "/",
                  element: <Home />, // Render Home component for root path
                  index: true
               },
               {
                  path: "/tour",
                  element: <Tour />, // Wrap AddProducts with ProtectedRoutes
              },
              {
               path: "/cart",
               element: <Cart />, // Wrap AddProducts with ProtectedRoutes
           },
           {
            path: "/adminBookings",
            element: <AdminBookings />, // Wrap AddProducts with ProtectedRoutes
        },
               {
                  path: "/bangkokTransfers", 
                  element: <BangkokTransers />, // Wrap AddProducts with ProtectedRoutes
              },
              {
               path: "/dmkHotelTransfers",
               element: <DmkHotelTransfers />, // Wrap AddProducts with ProtectedRoutes
           },
           {
            path: "/dmkHotelTransfersPay",
            element: <DmkHotelTransfersPay />, // Wrap AddProducts with ProtectedRoutes
        },
              {
               path: "/bangkokTransferPay",
               element: <BangkokTransferPay />, // Wrap AddProducts with ProtectedRoutes
           },
           {
            path: "/bangkokTransports",
            element: <BangkokTransports />, // Wrap AddProducts with ProtectedRoutes
             },
             {
             path: "/bangkokPattayaTransfers",
             element: <BangkokPattayaTransfers />, // Wrap AddProducts with ProtectedRoutes
            },
            {
               path: "/bangkokPattayaTransfersPay",
               element: <BangkokPattayaTransfersPay />, // Wrap AddProducts with ProtectedRoutes
              },
              {
               path: "/transportation",
               element: <Transportation />, // Wrap AddProducts with ProtectedRoutes
             },
               {
                  path: "/contactUs",
                  element: <ContactUs />, 
               },
               {
                  path: "/createAcccount",
                  element: <CreateAccount />, 
               },
               {
                  path: "/bangkok",
                  element: <Bangkok />, 
               },
               {
                  path: "/bangkokMSW",
                  element: <BangkokMSW />, 
               },
               {
                  path: "/bangkokMSWPay", // Define prod_id as a URL parameter
                  element: <BangkokMSWPay />, // Render Checkout component
              },
              {
                  path:"/oneDayKanchanaBridgeKwai",
                  element: <OneDayKanchanaBridgeKwai />,
              },
              {
               path:"/chaoPDCruise",
               element: <ChaoPDCruise />, 
              },
              {
               path:"/threeTempleAndGPTB",
               element: <ThreeTempleAndGPTB />, 
              },
              {
               path:"/grandPearlDinnerCruiseB",
               element: <GrandPearlDinnerCruiseB />, 
              },
              {
               path:"/bangkokAncientCityAndEM",
               element: <BangkokAncientCityAndEM />, 
              },
              {
               path:"/bangkokCityTT",
               element: <BangkokCityTT />, 
              },
              {
               path:"/bangkokCityShoppingT",
               element: <BangkokCityShoppingT />, 
              },
              {
               path:"/safariWorldAndMPB",
               element: <SafariWorldAndMPB />, 
              },
              {
               path:"/whiteOrchidDinnerCruise",
               element: <WhiteOrchidDinnerCruise />, 
              },
              {
               path:"/damnoenSadukAndMRMB",
               element: <DamnoenSadukAndMRMB />, 
              },
              {
               path:"/siamAmazingThemePark",
               element: <SiamAmazingThemePark />, 
              },
              {
               path:"/samphranElephantZoo",
               element: <SamphranElephantZoo />, 
              },
              {
               path:"/amphawaFloatingMarketBangkok",
               element: <AmphawaFloatingMarketBangkok />, 
              },
              {
               path:"/bangkokDreamWorldPark",
               element: <BangkokDreamWorldPark />, 
              },
              {
               path:"/eveningFoodTourTukTuk",
               element: <EveningFoodTourTukTuk />, 
              },
              {
               path:"/eveningWalkingCityTourBangkok",
               element: <EveningWalkingCityTourBangkok />, 
              },
              {
               path:"/sealifeOceanWorldMTB",
               element: <SealifeOceanWorldMTB />, 
              },
              {
                  path: "/learn-more",
                  element: <LearnMore />, 
               },
               {
                  path: "/product",
                  element: <Product />, 
               },
               {
                  path: "/logout",
                  element: <Logout />, 
               },
               {
                  path: "/phuket",
                  element: <Phuket />, 
               },
              
               {
                  path: "/phiPhiIslandsMayaBay",
                  element: <PhiPhiIslandsMayaBay/>, 
               },
               {
                  path: "/phiPhiIslandTourbyBigBoat",
                  element: <PhiPhiIslandTourbyBigBoat/>, 
               },
               {
                  path: "/jamesBondIsland",
                  element: <JamesBondIsland/>, 
               },
               {
                  path: "/phuketCityPrivateTour",
                  element: <PhuketCityPrivateTour/>, 
               },
               {
                  path: "/elephantCareCamp",
                  element: <ElephantCareCamp/>, 
               },
               {
                  path: "/jamesBondIslandWithLunch",
                  element: <JamesBondIslandWithLunch/>, 
               },
               {
                  path: "/jamesBondIslandTourBySpeedBoat",
                  element: <JamesBondIslandTourBySpeedBoat/>, 
               },
               {
                  path: "/similanPremiumOneDayTrip",
                  element: <SimilanPremiumOneDayTrip/>, 
               },
               {
                  path: "/carnivalMagicPhuketTicket",
                  element: <CarnivalMagicPhuketTicket/>, 
               },
               {
                  path: "/siamNiramitPhuket",
                  element: <SiamNiramitPhuket/>, 
               },
               {
                  path: "/phuketFantaSeaUltimateShow",
                  element: <PhuketFantaSeaUltimateShow/>, 
               },
               {
                  path: "/fulldayWhiteWaterRaftingPhuket",
                  element: <FulldayWhiteWaterRaftingPhuket/>, 
               },
               {
                  path: "/phuketTransports",
                  element: <PhuketTransports/>, 
               },
               {
                  path: "/phuketAirportADPTransfers",
                  element: <PhuketAirportADPTransfers/>, 
               },
               {
                  path: "/phuketHotelToKrabi",
                  element: <PhuketHotelToKrabi/>, 
               },
               {
                  path: "/khaiIslandMorningAfternoonTour",
                  element: <KhaiIslandMorningAfternoonTour/>, 
               },
               {
                  path: "/andamandaWaterParkTicketsPhuket",
                  element: <AndamandaWaterParkTicketsPhuket/>, 
               },
               {
                  path: "/tigerParkTicketPhuket",
                  element: <TigerParkTicketPhuket/>, 
               },
               {
                  path: "/phiPhiIslandBambooTourBySpeedBoat",
                  element: <PhiPhiIslandBambooTourBySpeedBoat/>, 
               },
               {
                  path: "/phuketCityGroupTour",
                  element: <PhuketCityGroupTour/>, 
               },
               {
                  path: "/chiangMai",
                  element: <ChiangMai />, 
               },
               {
                  path: "/doiInthanonNationalParkTwinPagoda",
                  element: <DoiInthanonNationalParkTwinPagoda/>, 
               },
               {
                  path: "/fullDayTourChiangRaiWhiteTempleGoldenTriangle",
                  element: <FullDayTourChiangRaiWhiteTempleGoldenTriangle/>, 
               },
               {
                  path: "/chiangMaiHalfDayDoiSuthepTempleMhongVillage",
                  element: <ChiangMaiHalfDayDoiSuthepTempleMhongVillage/>, 
               },
               {
                  path: "/theKhumKhantokeDinnerShowsTickets",
                  element: <TheKhumKhantokeDinnerShowsTickets/>, 
               },
               {
                  path: "/chiangMaiNightSafariTicket",
                  element: <ChiangMaiNightSafariTicket/>, 
               },
               {
                  path: "/fullDayElephantBathingBambooRaftingTour",
                  element: <FullDayElephantBathingBambooRaftingTour/>, 
               },
               {
                  path: "/privateTourChiangMaiDoiSuthepTempleStickyWaterfall",
                  element: <PrivateTourChiangMaiDoiSuthepTempleStickyWaterfall/>, 
               },
               {
                  path: "/elephantCareTour",
                  element: <ElephantCareTour/>, 
               },
               {
                  path: "/krabi",
                  element: <Krabi />, 
               },
               {
                  path: "/sevenIslandSunsetTourByLongTailBoat",
                  element: <SevenIslandSunsetTourByLongTailBoat />, 
               },
               {
                  path: "/phiPhiIslandTourbySpeedBoatKrabi",
                  element: <PhiPhiIslandTourbySpeedBoatKrabi/>, 
               },
               {
                  path: "/krabiHalfDayCityPrivateTour",
                  element: <KrabiHalfDayCityPrivateTour/>, 
               },
               {
                  path: "/fourIslandTourKrabiByLongTailBoat",
                  element: <FourIslandTourKrabiByLongTailBoat/>, 
               },
               {
                  path: "/fourIslandTourKrabiPrivateLuxuryLongTailBoat",
                  element: <FourIslandTourKrabiPrivateLuxuryLongTailBoat/>, 
               },
               {
                  path: "/fourIslandTourKrabiPrivateTraditionalLongTailBoat",
                  element: <FourIslandTourKrabiPrivateTraditionalLongTailBoat/>, 
               },
               {
                  path: "/sevenIslandSunsetTourPrivateTraditionalLongTailBoat",
                  element: <SevenIslandSunsetTourPrivateTraditionalLongTailBoat/>, 
               },
               {
                  path: "/hongIslandTourLongTailBoatGroupTour",
                  element: <HongIslandTourLongTailBoatGroupTour/>, 
               },
               {
                  path: "/hongIslandTourSpeedBoatGroupTour",
                  element: <HongIslandTourSpeedBoatGroupTour/>, 
               },
               {
                  path: "/hongIslandSunsetTourGroupTour",
                  element: <HongIslandSunsetTourGroupTour/>, 
               },
               {
                  path: "/emeraldPoolPlusHotSprings",
                  element: <EmeraldPoolPlusHotSprings/>, 
               },
               {
                  path: "/hongIslandSunsetTourPrivateLuxuryBoat",
                  element: <HongIslandSunsetTourPrivateLuxuryBoat/>, 
               },
               {
                  path: "/hongIslandTourPrivateTraditionalLongTailBoat",
                  element: <HongIslandTourPrivateTraditionalLongTailBoat/>, 
               },
               {
                  path: "/hongIslandTMorningTourPrivateLuxuryLongTailBoat",
                  element: <HongIslandTMorningTourPrivateLuxuryLongTailBoat/>, 
               },
               {
                  path: "/pattaya",
                  element: <Pattaya/>, 
               },
               {
                  path: "/himmaphanIceDomeSnowDomeOvercoat",
                  element: <HimmaphanIceDomeSnowDomeOvercoat/>, 
               },
               {
                  path: "/PattayaFloatingMarket",
                  element: <PattayaFloatingMarket/>, 
               },
               {
                  path: "/alcazarCabaretShowVIPTickets",
                  element: <AlcazarCabaretShowVIPTickets/>, 
               },
               {
                  path: "/underwaterWorldPattayaTicket",
                  element: <UnderwaterWorldPattayaTicket/>, 
               },
               {
                  path: "/theSanctuaryOfTruthEntranceTicket",
                  element: <TheSanctuaryOfTruthEntranceTicket/>, 
               },
               {
                  path: "/theSanctuaryOfTruthEntranceTicketEveningSession",
                  element: <TheSanctuaryOfTruthEntranceTicketEveningSession/>, 
               },
               {
                  path: "/nongNoochTropicalGarden",
                  element: <NongNoochTropicalGarden/>, 
               },
               {
                  path: "/tigerParkPattaya",
                  element: <TigerParkPattaya/>, 
               },
               {
                  path: "/ramayanaWaterParkentranceticketdaypass",
                  element: <RamayanaWaterParkentranceticketdaypass/>, 
               },
               {
                  path: "/tigerTopiaSrirachaZooTickets",
                  element: <TigerTopiaSrirachaZooTickets/>, 
               },
               {
                  path: "/artInParadisePattayaTickets",
                  element: <ArtInParadisePattayaTickets/>, 
               },
               {
                  path: "/pattayaDolphinariumTickets",
                  element: <PattayaDolphinariumTickets/>, 
               },
               {
                  path: "/miniSiamPattayaTicket",
                  element: <MiniSiamPattayaTicket/>, 
               },
               {
                  path: "/thaiSkyAdventuresPattaya",
                  element: <ThaiSkyAdventuresPattaya/>, 
               },
               {
                  path: "/khaoKheowOpenZoo",
                  element: <KhaoKheowOpenZoo/>, 
               },
               {
                  path: "/elephantSanctuaryTourPattayaHalfDay",
                  element: <ElephantSanctuaryTourPattayaHalfDay/>, 
               },
               {
                  path: "/tiffanyShowPattayaTickets",
                  element: <TiffanyShowPattayaTickets/>, 
               },
               {
                  path: "/pattayaCoralIslandTourLunch",
                  element: <PattayaCoralIslandTourLunch/>, 
               },
               {
                  path: "/privateTourPattayaCity",
                  element: <PrivateTourPattayaCity/>, 
               },
               {
                  path: "/pattayaCityTourHalfDayGroupTour",
                  element: <PattayaCityTourHalfDayGroupTour/>, 
               },
               {
                  path: "/pattayaTransports",
                  element: <PattayaTransports/>, 
               },
               {
                  path: "/privateTransferPattayaToSuvarnabhumiAirport",
                  element: <PrivateTransferPattayaToSuvarnabhumiAirport/>, 
               },
               {
                  path: "/privateTransferPattayaHotelDMKAirport",
                  element: <PrivateTransferPattayaHotelDMKAirport/>, 
               },
               {
                  path: "/pattayaHotelangkokHotelPrivateTransfer",
                  element: <PattayaHotelangkokHotelPrivateTransfer/>, 
               },
               {
                  path: "/kohSamui",
                  element: <KohSamui/>, 
               },
               {
                  path: "/aroundTheIslandTour",
                  element: <AroundTheIslandTour/>, 
               },
               {
                  path: "/fullDayAroundTheIslandTour",
                  element: <FullDayAroundTheIslandTour/>, 
               },
               {
                  path: "/elephantJungleFullDayTour",
                  element: <ElephantJungleFullDayTour/>, 
               },
               {
                  path: "/angthongMarineParkFullDaySpeedBoatTour",
                  element: <AngthongMarineParkFullDaySpeedBoatTour/>, 
               },
               {
                  path: "/vIPAngthongMarineParkSemiPrivateTour",
                  element: <VIPAngthongMarineParkSemiPrivateTour/>, 
               },
               {
                  path: "/kohMadsumPigIslandKohTanTour",
                  element: <KohMadsumPigIslandKohTanTour/>, 
               },
               {
                  path: "/vIPKohTaoKohNangYuanSmallGroupSemiPrivateTour",
                  element: <VIPKohTaoKohNangYuanSmallGroupSemiPrivateTour/>, 
               },
               {
                  path: "/fullDayHeritageAyutthayaTempleTourByRoad",
                  element: <FullDayHeritageAyutthayaTempleTourByRoad/>, 
               },
               {
                  path: "/heritageTourAyutthayaByCruiseCoach",
                  element: <HeritageTourAyutthayaByCruiseCoach/>, 
               },
               {
                  path: "/khaoYaiNationalParkPrivateTourBangkok",
                  element: <KhaoYaiNationalParkPrivateTourBangkok/>, 
               },
       ] 
   } 
]
); 

export default router;  