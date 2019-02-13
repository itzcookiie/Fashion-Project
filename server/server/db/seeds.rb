# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: 'Mayowa', password: 'mayo')

gt1 = Garment.create(category: 'top', image_url: 'https://www.royalrobbins.co.uk/men/clothing/tops-and-tshirts', colour: 'grey', user_id: 1 )
gt2 = Garment.create(category: 'top', image_url: 'https://d3u4dhauhww2a1.cloudfront.net/product-media/31D/256/256/SM3149217FRONT.jpg', colour: 'green', user_id: 1 )
gt3 = Garment.create(category: 'top', image_url: 'https://d3u4dhauhww2a1.cloudfront.net/product-media/363/256/256/F1842029MERINOLUXHENLEYDRPEPPER5590817.jpg', colour: 'red', user_id: 1 )
gt4 = Garment.create(category: 'top', image_url: 'https://majestikdesignltdharleyspaw-static.myshopblocks.com/images/2018/10/contain/256x256/25261023c63b3449549f130f4901a56a.jpg', colour: 'white', user_id: 1 )
gt5 = Garment.create(category: 'top', image_url: 'https://dknwnigc18uf4.cloudfront.net/product-media/44Q/256/256/2060534169650100.jpg', colour: 'green', user_id: 1 )
gt6 = Garment.create(category: 'top', image_url: 'https://d3u4dhauhww2a1.cloudfront.net/product-media/31B/256/256/SM3149390FRONT.jpg', colour: 'grey', user_id: 1 )
gt7 = Garment.create(category: 'top', image_url: 'https://www.lawson-his.co.uk/media/catalog/category/cache/category/256/1371484665/xdickies_sh81500.jpg.pagespeed.ic.Dx45meSN9H.jpg', colour: 'green', user_id: 1 )
gt8 = Garment.create(category: 'top', image_url: 'https://d3u4dhauhww2a1.cloudfront.net/product-media/31X/256/256/SM3148392FRONT.jpg', colour: 'yellow', user_id: 1 )
gt9 = Garment.create(category: 'top', image_url: 'https://tamstreasures-static.myshopblocks.com/images/2018/08/contain/256x256/70d259b14539dda89998d8a5593f11c8.jpg', colour: 'black', user_id: 1 )
gt10 = Garment.create(category: 'top', image_url: 'https://summitsports.scene7.com/is/image/SummitSports/540050_540050_1?$256$', colour: 'red', user_id: 1 )

gb1 = Garment.create(category: 'bottom', image_url: 'https://static-buyma-jp.akamaized.net/imgdata/item/181121/0039799846/171669866/428.jpg', colour: 'black', user_id: 1)
gb2 = Garment.create(category: 'bottom', image_url: 'https://rainbowapparel-static.myshopblocks.com/images/2018/07/contain/256x256/0816cd1c4915265817d9c5a21be8ea66.jpg', colour: 'green', user_id: 1)
gb3 = Garment.create(category: 'bottom', image_url: 'https://static-buyma-jp.akamaized.net/imgdata/item/180722/0037369350/154960859/428.jpg', colour: 'brown', user_id: 1)
gb4 = Garment.create(category: 'bottom', image_url: 'https://worldswitch-html-upload.world-switch.com/reference.world-switch.com/thumb/226/226671-11986-2/226671-11986-2-1_thumb.jpg', colour: 'brown', user_id: 1)
gb5 = Garment.create(category: 'bottom', image_url: 'https://rainbowapparel-static.myshopblocks.com/images/2018/01/contain/256x256/6a33e34fd46e5cf57158a87106a82b5d.jpg', colour: 'green', user_id: 1)
gb6 = Garment.create(category: 'bottom', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWb3KyGWrjitU7GrBKu1jjuIHfwTnqMIezgg3zL9oBtrFN0Bb7Q', colour: 'red', user_id: 1)
gb7 = Garment.create(category: 'bottom', image_url: 'https://dyzmn8020x6cd.cloudfront.net/sys-master/products/h10/h34/9221762383902/RDT02XXNVY-Product-H118-01_SMALLER', colour: 'blue', user_id: 1)
gb8 = Garment.create(category: 'bottom', image_url: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/f/e/fendi-pink-ff-logo-popper-trousers-235660-803f76b77861e110e5b8ff6c2a339f0bd7417003.jpg', colour: 'pink', user_id: 1)
gb9 = Garment.create(category: 'bottom', image_url: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/b/u/burberry-girls-velvet-jacquard-trousers-248223-3ecadd76a4f0e1f6e0da81fdb13c68df2655d521.jpg', colour: 'cream', user_id: 1)   
gb10 = Garment.create(category: 'bottom', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbdsuyemb1KfmLWMTjejePvTQedeLb7aC5t68a9ZzHxLHBI48KA', colour: 'blue', user_id: 1)   

gs1 = Garment.create(category: 'shoes', image_url: 'https://www.chatham.co.uk/media/catalog/product/cache/1/thumbnail/256x/9df78eab33525d08d6e5fb8d27136e95/g/a/galley_ii_sandle_wood_left.jpg', colour: 'blue', user_id: 1)
gs2 = Garment.create(category: 'shoes', image_url: 'https://www.chatham.co.uk/media/catalog/product/cache/1/thumbnail/256x/9df78eab33525d08d6e5fb8d27136e95/c/h/chatham_shoes_beacon_tan_pair_1.jpg', colour: 'brown', user_id: 1)
gs3 = Garment.create(category: 'shoes', image_url: 'https://www.chatham.co.uk/media/catalog/product/cache/1/thumbnail/256x/9df78eab33525d08d6e5fb8d27136e95/c/h/chatham_shoes_sienna_dark_brown_right-thumb.jpg', colour: 'maroon', user_id: 1)
gs4 = Garment.create(category: 'shoes', image_url: 'https://cdn.shopify.com/s/files/1/2446/4739/products/9e7cf621b033263ffb384321745df342ad8a83c9_580x.jpg?v=1538668079', colour: 'brown', user_id: 1)
gs5 = Garment.create(category: 'shoes', image_url: 'https://golfsupport.com/uploads/products/small/195849770Puma%20Ignite%20PWRAdapt%20Junior%20Golf%20Shoes%20White.jpg', colour: 'white', user_id: 1)
gs6 = Garment.create(category: 'shoes', image_url: 'https://charnwoodfootwear.co.uk/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/o/d/odessablack1.jpg', colour: 'black', user_id: 1)
gs7 = Garment.create(category: 'shoes', image_url: 'https://www.chatham.co.uk/media/catalog/product/cache/1/thumbnail/256x/9df78eab33525d08d6e5fb8d27136e95/f/a/faraday_azure02_copy_1.jpg', colour: 'blue', user_id: 1)
gs8 = Garment.create(category: 'shoes', image_url: 'http://www.pplandscape-gardening.co.uk/images/6mibsYZgW5q/nike-men-grey-white-orange-air-max-247-06OB.jpg', colour: 'multi', user_id: 1)
gs9 = Garment.create(category: 'shoes', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa6fF5vfrtKdhdjCIYPwn75EATR55NsUZcP73MR2MjXij7ReR', colour: 'orange', user_id: 1)
gs10 = Garment.create(category: 'shoes', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgSh4Vdi3quVrlVttoUG8upNIapCf7lRRyxuljQSbqS_wwOpY', colour: 'green', user_id: 1)

ga1 = Garment.create(category: 'accessories', image_url: 'https://divelife-2220-static.myshopblocks.com/images/2018/01/contain/256x256/e407e6957d778480bbc580e5938dfff6.jpg', colour: 'green', user_id: 1 )
ga2 = Garment.create(category: 'accessories', image_url: 'https://media.uretilalt.dk/media/catalog/product/cache/5/small_image/256x/bcf7ce64d63d93f1f374273bba74938d/7/8/7839_inex-a69424ss5i.jpg', colour: 'black', user_id: 1 )
ga3 = Garment.create(category: 'accessories', image_url: 'https://divelife-2220-static.myshopblocks.com/images/2018/01/crop/256x256/e69e3235fe84e2cc9c4b2639f2c03f18.jpg', colour: 'blue', user_id: 1 )
ga4 = Garment.create(category: 'accessories', image_url: 'https://i5.walmartimages.com/asr/11cef16b-7bf0-4f8a-a603-4db40ddfbf91_1.8740fa439a7eddd9eff75408e78207ad.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff', colour: 'red', user_id: 1 )
ga5 = Garment.create(category: 'accessories', image_url: 'https://zangra.com/media/cache/sylius_medium/translations/ProductVariant/2068/en/5835/clock013_007_s-casio-vintage-retro-gold-goud-or-horloge-montre-watch.jpeg', colour: 'gold', user_id: 1 )
ga6 = Garment.create(category: 'accessories', image_url: 'https://www.iconicwatches.co.uk/media/catalog/product/cache/1/small_image/256x/9df78eab33525d08d6e5fb8d27136e95/l/5/l5.512.0.71.6_square.jpg', colour: 'silver', user_id: 1 )
ga7 = Garment.create(category: 'accessories', image_url: 'https://silverpennies-static.myshopblocks.com/images/2018/05/contain/256x256/5e23bebd81651cb93a1f79d1fb688078.jpg', colour: 'gold', user_id: 1 )
ga8 = Garment.create(category: 'accessories', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnGY_L-gpUV-ahJWFpsJehi7ufMniWkEZPhg0N0isLELBOsrG', colour: 'purple', user_id: 1 ) 
ga9 = Garment.create(category: 'accessories', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNo7Tecasg1zTPsKCqcCOKjSiMCpVsx_z2C5fKq-rFBvirEje', colour: 'brown', user_id: 1 )
ga10 = Garment.create(category: 'accessories', image_url: 'https://media.uretilalt.dk/media/catalog/product/cache/5/small_image/256x/bcf7ce64d63d93f1f374273bba74938d/1/8/1814_perigaum-p-1403-irbk-bk.jpg', colour: 'black', user_id: 1 )