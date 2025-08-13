import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
    - Logo
    - Nav Items
  Body
    - Search
    - Restarunt Container
      - Restarunt Card
        - Name of Restarunt , Star Rating , cuisine , delivery time etc.
  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/021/953/298/non_2x/food-delivery-app-logo-with-points-plate-and-fork-combined-shape-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaruntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "396440",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/56498403-03a7-4b10-8950-d2bc0e054d89_396440.JPG",
      locality: "Amrapali Platinum Shopping Arcade",
      areaName: "Sector 72",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-rest396440",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "94383",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/7b554185-d022-4706-abdf-360f7010d02b_94383.JPG",
      locality: "Sector 72",
      areaName: "Sector 72",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/kfc-sector-72-rest94383",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38937",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/10654763-70bb-4f44-b5cc-22ae7d8cee4e_38937.JPG",
      locality: "Rg Residency",
      areaName: "Sector 72",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/dominos-pizza-rg-residency-sector-72-rest38937",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "624070",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Gaur City 1",
      areaName: "Gaur City 1",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      parentId: "61955",
      avgRatingString: "4.1",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "1.7",
          ratingCount: "23",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/chinese-wok-gaur-city-1-rest624070",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253735",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/d4b98c24-5546-4031-86f7-8cd6be9ebc01_253735.JPG",
      locality: "Supertech Shopprix Mall",
      areaName: "Sector 61",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹117",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/mcdonalds-supertech-shopprix-mall-sector-61-rest253735",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90872",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ae22cdf6-e866-43ef-a8ff-7da62c3d6f16_90872.jpg",
      locality: "North Eye",
      areaName: "Sector 74",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/burger-king-north-eye-sector-74-rest90872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "727061",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/a56320c2-1fb6-43ed-bb77-3b34d573639f_727061.JPG",
      locality: "C Block",
      areaName: "Sector 63",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/olio-the-wood-fired-pizzeria-c-block-sector-63-rest727061",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "621721",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/4/0552462e-5b5d-4cf3-95bf-9ea4b0f0b248_621721.JPG",
      locality: "Sector 75",
      areaName: "Sector 50",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/starbucks-coffee-sector-75-sector-50-rest621721",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "220495",
      name: "Mad Over Donuts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/b8779e1b-f61a-4ed6-a292-d887f7506492_220495.JPG",
      locality: "Gaur City Mall",
      areaName: "Gaur City 1",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.5,
      veg: true,
      parentId: "611",
      avgRatingString: "4.5",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "93",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/mad-over-donuts-gaur-city-mall-gaur-city-1-rest220495",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "577853",
      name: "Chicago Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/8fa6b9d3-c91e-4389-8dca-110a78cdb70c_577853.jpg",
      locality: "Gautam Buddha Nagar",
      areaName: "Gaur City 1",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      parentId: "60277",
      avgRatingString: "3.8",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/chicago-pizza-gautam-buddha-nagar-gaur-city-1-rest577853",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "593827",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/9ef4fccd-3de8-403a-87f5-780c10505383_593827.JPG",
      locality: "GAUTAM BUDDHA NAGAR",
      areaName: "C Block",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.3",
      totalRatingsString: "202",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/the-dessert-heaven-pastry-brownie-and-cakes-gautam-buddha-nagar-c-block-rest593827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "726145",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/b043b03c-aef4-4938-844b-09a90da08f0c_726145.JPG",
      locality: "Sector 77",
      areaName: "Gautam Buddha Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹290",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "2.0",
          ratingCount: "28",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/theobroma-sector-77-gautam-buddha-nagar-rest726145",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "248079",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/eac14472-c891-437a-98cf-01f06b3d7769_248079.jpg",
      locality: "Gaur City 1",
      areaName: "Gaur City 1",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-12 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "2.4",
          ratingCount: "88",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/subway-gaur-city-1-rest248079",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "472139",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_472139.JPG",
      locality: "Gautam Buddha Nagar",
      areaName: "Amrapali Dream Valley",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.6,
      parentId: "281782",
      avgRatingString: "4.6",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹84",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/chaayos-chai-snacks-relax-gautam-buddha-nagar-amrapali-dream-valley-rest472139",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "32942",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/8a811a64-bc29-4279-bc41-e7c86e7ddb01_32942.JPG",
      locality: "Gautam Buddha Nagar",
      areaName: "Sector - 60",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/bakingo-gautam-buddha-nagar-sector-60-rest32942",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "405217",
      name: "Call Chotu - Your Everyday Food Genie",
      cloudinaryImageId: "fw8lo5clwgoywor5xvsv",
      locality: "Hanuman Marg",
      areaName: "Sector 73",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Street Food",
        "Momos",
        "Thai",
        "Kebabs",
        "Mughlai",
        "Maharashtrian",
      ],
      avgRating: 4.1,
      parentId: "471234",
      avgRatingString: "4.1",
      totalRatingsString: "8.5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/call-chotu-your-everyday-food-genie-hanuman-marg-sector-73-rest405217",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "741449",
      name: "Good Flippin' Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/62481292-c2f0-4770-b9f1-f5bc3c1e393d_741449.JPG",
      locality: "Sector 73",
      areaName: "Sector 73, Noida",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      avgRating: 4.4,
      parentId: "11748",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹295",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/good-flippin-burgers-sector-73-sector-73-noida-rest741449",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "458581",
      name: "Caterspoint",
      cloudinaryImageId: "zdfismlgpq8dyojmrena",
      areaName: "Sector 52",
      costForTwo: "₹600 for two",
      cuisines: [
        "Salads",
        "Healthy food",
        "Snacks",
        "pastas",
        "Lebanese",
        "Mexican",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "11011",
      avgRatingString: "4.3",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/caterspoint-sector-52-rest458581",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "619774",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ayvcoyhiloweyurunrrw",
      locality: "Sector 74",
      areaName: "Sector 72",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-74-sector-72-rest619774",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "436438",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "Prem Singh market",
      areaName: "Sector 71",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "236673",
      avgRatingString: "4.6",
      totalRatingsString: "165",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-13 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-22bd199a-bc49-4341-86d2-6cc1ca50a69b",
    },
    cta: {
      link: "https://www.swiggy.com/city/noida-1/the-brooklyn-creamery-healthy-ice-cream-prem-singh-market-sector-71-rest436438",
      type: "WEBLINK",
    },
  },
];

// not using keys (not acceptable) <<<< index as key <<<< unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurunt) => (
          <RestaruntCard key={restaurunt.info.id} resData={restaurunt} />
        ))}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
