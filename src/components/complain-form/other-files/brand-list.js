// Note: Brand list arr...!

let brandListArr = ["LG", "ARISTON", "Indesit", "Maytag", "Midea", "Bissell", "LG", "ARISTON", "Indesit", "Maytag", "Midea", "Bissell", "KITCHEN AID", "BOMBANI", "Panasonic", "Shaker"];
// console.log(brandListArr);

let updatebrandListArr = new Set(brandListArr);
updatebrandListArr = [...updatebrandListArr];
// console.log(updatebrandListArr);




// Note: Brand list arr...!
let brandIdArr = ["LG", "AR", "ID", "MT", "MI", "BI", "LG", "AR", "ID", "MT", "MI", "BI", "KA", "BO", "PA", "SH"]

let updatebrandIdArr = new Set(brandIdArr);
updatebrandIdArr = [...updatebrandIdArr];
// console.log(updatebrandIdArr);


// Note: Brand information container...!
let brandInfoArr = [
    {
        BrandName: 'LG',
        BrandId: 'LG',
    },
    {
        BrandName: 'ARISTON',
        BrandId: 'AR',
    },

    {
        BrandName: 'Indesit',
        BrandId: 'ID',
    },

    {
        BrandName: 'Maytag',
        BrandId: 'MT',
    },

    {
        BrandName: 'Midea',
        BrandId: 'MI',
    },

    {
        BrandName: 'Bissell',
        BrandId: 'BI',
    },

    {
        BrandName: 'KITCHEN AID',
        BrandId: 'KA',
    },

    {
        BrandName: 'BOMBANI',
        BrandId: 'BO',
    },

    {
        BrandName: 'Panasonic',
        BrandId: 'PA',
    },

    {
        BrandName: 'Shaker',
        BrandId: 'SH',
    }
];

export {
    updatebrandListArr,
    updatebrandIdArr,
    brandInfoArr
};