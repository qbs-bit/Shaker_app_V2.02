// Note: Categories list arrays...!

let lgList = ["ACCESSORY", "Others", "Split Outdoor", "LGLAELED", "LG", "Split Indoor", "Concealed Outdoor", "Concealed Indoor", "SAMPLES", "Chillers", "Chillers Accessory", "Unitary Package", "Split Duct", "Free Standing", "Free Standing", "Multi V", "Multi V", "Cassette Indoor", "Multi V", "Air Purifier", "Cassette Outdoor", "Convertible Outdoor", "Convertible Indoor", "Chillers AHU", "Window", "Split Duct", "MPS", "Chillers FCU"];
let arList = ["Washer Dryer", "WASHER", "Cookers 90x60", "Cookers 50x60", "Cookers 60x60", "Ovens", "Hood", "Hobs", "Dishwasher", "Refrigerator", "Microwave", "DRYER"];
let idList = ["Dishwashers", "DRYER", "Cookers 50x60", "Cookers 60x60", "Cookers 90x60", "Hobs", "Ovens", "Hood", "WASHER", "Washer Dryer", "Pofessional Cookers"];
let miList = ["Microwaves", "Built in Microwave", "Washers", "Fan", "Refrigerators", "Midea", "Chest Freezers", "Humidifier", "Rice Steam Cookers", "Deep Fryer", "Electric Oven", "Blender", "Kettles", "Food Processor", "Water Cooler", "Heater Convector", "Ceramic Heater", "Oil Heater", "Vaccum Cleaner", "Dishwasher"];
let mtList = ["Chest Freezers", "Refrigerator", "Laundry", "Diswasher", "Dryer", "Electric Range", "Washer Dryer", "Washer", "Freezer", "Electric", "Gas"];
let biList = ["Cleaning Formulas", "Cannisters", "Hand floor cleaner", "Up Rights"];
let kaList = ["Heavy Duty", "Artisan", "P2 KitchenAid"];
let shList = ["Split outdoor", "Window"];
let boList = ["Cooker"];
let paList = ["TV"];

// Note: Categories info array...!
let categoryInfoArr = [
    {
        CategoryName: 'Washer Dryer',
        CategoryId: 'ARLDYWSD'
    },

    {
        CategoryName: 'WASHER',
        CategoryId: 'ARLDYWSH'
    },

    {
        CategoryName: 'Cookers 90x60',
        CategoryId: 'ARCKR96C'
    },

    {
        CategoryName: 'Cookers 50x60',
        CategoryId: 'ARCKR56C'
    },

    {
        CategoryName: 'Cookers 60x60',
        CategoryId: 'ARCKR66C'
    },

    {
        CategoryName: 'Ovens',
        CategoryId: 'ARABIOVN'
    },

    {
        CategoryName: 'Hood',
        CategoryId: 'ARABIHOD'
    },

    {
        CategoryName: 'Hobs',
        CategoryId: 'ARABIHOB'
    },

    {
        CategoryName: 'Dishwasher',
        CategoryId: 'ARDWHDWH'
    },

    {
        CategoryName: 'Refrigerator',
        CategoryId: 'ARRFGRFG'
    },

    {
        CategoryName: 'Microwave',
        CategoryId: 'ARABIMCW'
    },

    {
        CategoryName: 'DRYER',
        CategoryId: 'ARLDYDRY'
    },

    {
        CategoryName: 'Dishwashers',
        CategoryId: 'IDDWHDWH'
    },

    {
        CategoryName: 'Cookers 50x60',
        CategoryId: 'IDCKR56C'
    },

    {
        CategoryName: 'Cookers 60x60',
        CategoryId: 'IDCKR66C'
    },

    {
        CategoryName: 'Cookers 90x60',
        CategoryId: 'IDCKR96C'
    },

    {
        CategoryName: 'Hobs',
        CategoryId: 'IDIBIHOB'
    },

    {
        CategoryName: 'Ovens',
        CategoryId: 'IDIBIOVN'
    },

    {
        CategoryName: 'Hood',
        CategoryId: 'IDIBIHOD'
    },

    {
        CategoryName: 'WASHER',
        CategoryId: 'IDLDYWSH'
    },

    {
        CategoryName: 'Pofessional Cookers',
        CategoryId: 'IDCKRPCK'
    },

    {
        CategoryName: 'Microwaves',
        CategoryId: 'MISDAMCW'
    },

    {
        CategoryName: 'Built in Microwave',
        CategoryId: 'MISDABMW'
    },

    {
        CategoryName: 'Washers',
        CategoryId: 'MILDYWSH'
    },

    {
        CategoryName: 'Fan',
        CategoryId: 'MISDAFAN'
    },

    {
        CategoryName: 'Refrigerators',
        CategoryId: 'MIRFGRFG'
    },

    {
        CategoryName: 'Midea',
        CategoryId: 'MI'
    },

    {
        CategoryName: 'Chest Freezers',
        CategoryId: 'MIRFGCFZ'
    },

    {
        CategoryName: 'Humidifier',
        CategoryId: 'MISDAHMD'
    },

    {
        CategoryName: 'Rice Steam Cookers',
        CategoryId: 'MISDARSC'
    },

    {
        CategoryName: 'Deep Fryer',
        CategoryId: 'MISDADFR'
    },

    {
        CategoryName: 'Electric Oven',
        CategoryId: 'MISDAEOV'
    },

    {
        CategoryName: 'Blender',
        CategoryId: 'MISDABDR'
    },

    {
        CategoryName: 'Kettles',
        CategoryId: 'MISDAKTL'
    },

    {
        CategoryName: 'Food Processor',
        CategoryId: 'MISDAFPR'
    },

    {
        CategoryName: 'Water Cooler',
        CategoryId: 'MIWTCWTC'
    },

    {
        CategoryName: 'Heater Convector',
        CategoryId: 'MISDACHT'
    },

    {
        CategoryName: 'Ceramic Heater',
        CategoryId: 'MISDACEH'
    },

    {
        CategoryName: 'Oil Heater',
        CategoryId: 'MISDAOHT'
    },

    {
        CategoryName: 'Vaccum Cleaner',
        CategoryId: 'MISDAVCU'
    },

    {
        CategoryName: 'Dishwasher',
        CategoryId: 'MIDWHDWH'
    },

    {
        CategoryName: 'Laundry',
        CategoryId: 'MTLDYLDY'
    },

    {
        CategoryName: 'Electric Range',
        CategoryId: 'MTCKRELR'
    },

    {
        CategoryName: 'Electric',
        CategoryId: 'MTCKRELC'
    },

    {
        CategoryName: 'Gas',
        CategoryId: 'MTCKRGAS'
    },

    {
        CategoryName: 'ACCESSORY',
        CategoryId: 'LGRACASS'
    },

    {
        CategoryName: 'Others',
        CategoryId: 'LGRACOTH'
    },

    {
        CategoryName: 'Split Outdoor',
        CategoryId: 'LGRACSPC'
    },

    {
        CategoryName: 'LGLAELED',
        CategoryId: 'LGLAELED'
    },

    {
        CategoryName: 'Split Indoor',
        CategoryId: 'LGRACSPF'
    },

    {
        CategoryName: 'Concealed Outdoor',
        CategoryId: 'LGCDUCOC'
    },

    {
        CategoryName: 'Concealed Indoor',
        CategoryId: 'LGCDUCOF'
    },

    {
        CategoryName: 'SAMPLES',
        CategoryId: 'LGRACSAM'
    },

    {
        CategoryName: 'Chillers',
        CategoryId: 'LGAPPCHL'
    },

    {
        CategoryName: 'Chillers Accessory',
        CategoryId: 'LGAPPACC'
    },

    {
        CategoryName: 'Unitary Package',
        CategoryId: 'LGCDUUPK'
    },

    {
        CategoryName: 'Split Duct',
        CategoryId: 'LGCDUSDF'
    },

    {
        CategoryName: 'Free Standing',
        CategoryId: 'LGNDUFSF'
    },

    {
        CategoryName: 'Free Standing',
        CategoryId: 'LGNDUFSC'
    },

    {
        CategoryName: 'Multi V',
        CategoryId: 'LGAPPMLV'
    },

    {
        CategoryName: 'Cassette Indoor',
        CategoryId: 'LGNDUCTF'
    },

    {
        CategoryName: 'Air Purifier',
        CategoryId: 'LGRACAPU'
    },

    {
        CategoryName: 'Cassette Outdoor',
        CategoryId: 'LGNDUCTC'
    },

    {
        CategoryName: 'Convertible Outdoor',
        CategoryId: 'LGNDUCVC'
    },

    {
        CategoryName: 'Convertible Indoor',
        CategoryId: 'LGNDUCVF'
    },

    {
        CategoryName: 'Chillers AHU',
        CategoryId: 'LGAPPAHU'
    },

    {
        CategoryName: 'Window',
        CategoryId: 'LGRACWIN'
    },

    {
        CategoryName: 'Split Duct',
        CategoryId: 'LGCDUSDC'
    },


    {
        CategoryName: 'MPS',
        CategoryId: 'LGAPPMPS'
    },


    {
        CategoryName: 'Chillers FCU',
        CategoryId: 'LGAPPFCU'
    },

    {
        CategoryName: 'Cleaning Formulas',
        CategoryId: 'BICLNCLF'
    },

    {
        CategoryName: 'Cannisters',
        CategoryId: 'BIVCUCAN'
    },

    {
        CategoryName: 'Hand floor cleaner',
        CategoryId: 'BIVCUHFC'
    },

    {
        CategoryName: 'Up Rights',
        CategoryId: 'BIVCUUPR'
    },

    {
        CategoryName: 'Heavy Duty',
        CategoryId: 'KASAZHVZ'
    },

    {
        CategoryName: 'Artisan',
        CategoryId: 'KASAZARZ'
    },

    {
        CategoryName: 'P2 KitchenAid',
        CategoryId: 'KASAZP2Z'
    },

    {
        CategoryName: 'Cooker',
        CategoryId: 'BO'
    },

    {
        CategoryName: 'Split Indoor',
        CategoryId: 'SHSPDR'
    },

    {
        CategoryName: 'Split outdoor',
        CategoryId: 'SHSPODR'
    },

    {
        CategoryName: 'Window',
        CategoryId: 'SHWND'
    }
];

export {
    lgList,
    arList,
    idList,
    miList,
    mtList,
    biList,
    kaList,
    shList,
    boList,
    paList,
    categoryInfoArr
};