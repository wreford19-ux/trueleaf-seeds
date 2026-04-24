import { useState, useMemo, useEffect } from "react";

const YOCO_PUBLIC_KEY = "pk_test_b6e7873f791noe800c04";
const WA = "27832309883";
const EMAIL = "wreford19@gmail.com";
const PHONE = "+27 83 230 9883";
const LOGO = "https://i.ibb.co/Qj1wGkfJ/Trueleaf-Seeds-Logo.jpg";
const ADMIN_PW = "Wreford99#";
const PUDO_FEE = 50;
const PACKAGING_FEE = 15;

const IMGS = {
  "Alyssum Carpet White":"https://i.ibb.co/Rrk5t2T/Alyssum-White.jpg",
  "African Horned Cucumber":"https://i.ibb.co/5xYSr9f0/African-Horned-Cucumber.jpg",
  "Ammi Majus":"https://i.ibb.co/hFrYrJv4/Ammi-Majus.jpg",
  "Anise":"https://i.ibb.co/G4SsyGrn/Anise.jpg",
  "Ashwagandha":"https://i.ibb.co/7NLLPj3k/Ashwagandha.jpg",
  "Baobab":"https://i.ibb.co/rGd47nvJ/Baobab.jpg",
  "Basil Genovese":"https://i.ibb.co/N29H5xZY/Basil-Genovese.jpg",
  "Basil Holy":"https://i.ibb.co/cKystx61/Basil-Tulsi.jpg",
  "Basil Sweet":"https://i.ibb.co/QFr5BBXb/Basil-Sweet.jpg",
  "Bean Appaloosa Bush":"https://i.ibb.co/W4Cxq8g7/Bean-Appaloosa.jpg",
  "Bean Black Turtle":"https://i.ibb.co/NnYBt93Z/Beans-Black.jpg",
  "Beans Bird Egg Blue":"https://i.ibb.co/DfDNSByD/Beans-Bird-Egg-Blue.jpg",
  "Bean Lima Nuguni Pole Variety":"https://i.ibb.co/KzrTryvq/Beans-Nguni.jpg",
  "Bean Nonna Agnes Blue":"https://i.ibb.co/twm77Fg2/Bean-Nonna.jpg",
  "Bean Vermont Appaloosa":"https://i.ibb.co/TBrjtRbK/Beans-Vermont.jpg",
  "Bean Zebra Lima":"https://i.ibb.co/xqyhncL6/Beans-Zebra.jpg",
  "Beans Bush Contender":"https://i.ibb.co/RGRst3VG/Beans-Contender.jpg",
  "Bean Yard Long":"https://i.ibb.co/tPqJYmNX/Beans-Yard-Long.jpg",
  "Beetroot Bulls Blood":"https://i.ibb.co/QFpZGt8Z/Beetroot-Bulls-Blood.jpg",
  "Beetroot Chioggia":"https://i.ibb.co/LXQVPcwc/Beetroot-Chioggia.jpg",
  "Beetroot Crimson":"https://i.ibb.co/TDkkcgZr/Beetroot-Crimson.jpg",
  "Beetroot Detroit Dark Red":"https://i.ibb.co/4nyTHWPq/Beetroot-Detroit.jpg",
  "Beetroot Golden Globe":"https://i.ibb.co/Pvr2M9Qv/Beetroot-Golden.jpg",
  "Beetroot Rainbow Mix":"https://i.ibb.co/0jq4r7HF/Beetroot-Mix.jpg",
  "Beetroot Ruby Queen":"https://i.ibb.co/3Y1MV5dh/Beetroot-Ruby-Queen.jpg",
  "Black Mustard":"https://i.ibb.co/B5hLQY18/Black-Mustard.jpg",
  "Black Seed (Nigella Sativa)":"https://i.ibb.co/DPPFjZ34/Black-Seed.jpg",
  "Borage":"https://i.ibb.co/k6q6XyXz/Borage.jpg",
  "Broccoli":"https://i.ibb.co/yBbhJy0p/Broccoli-Calabrese.jpg",
  "Broccoli Purple Sprouting":"https://i.ibb.co/k2vGYNk6/Broccoli-Purple-Sprouting.jpg",
  "Broccoli Romanesca":"https://i.ibb.co/vCRGjRpc/Broccoli-Romanesseca.jpg",
  "Brussel Sprouts":"https://i.ibb.co/XZ3xB65w/Brussel-Sprouts.png",
  "Cabbage Copenhagen":"https://i.ibb.co/QFyxkJBK/Cabbage-Copehagen.jpg",
  "Cabbage Drumhead":"https://i.ibb.co/gMd2K7Xd/Cabbage-Drumhead.jpg",
  "Cabbage Savoy":"https://i.ibb.co/DfT28k5x/Cabbage-Savoy.jpg",
  "Calendula Mix":"https://i.ibb.co/0y3S8htf/Calendula-Mix.jpg",
  "Cancer Bush":"https://i.ibb.co/hxm8MsDj/Cancer-Bush.jpg",
  "Cape Gooseberry":"https://i.ibb.co/DFDXsQp/Cape-Gooseberry.jpg",
  "Capsicum California Wonder":"https://i.ibb.co/Pz0vbkxP/Capsicum-California.jpg",
  "Carrot Chantenny Karoo":"https://i.ibb.co/spc3FKGM/Carrot-Chantaney.jpg",
  "Carrots Nantes Scarlet":"https://i.ibb.co/PZvcx4X7/Carrot-Nantes.jpg",
  "Carrots Rainbow Blend":"https://i.ibb.co/5hQVqMT8/Carrot-Rainbow.jpg",
  "Catnip":"https://i.ibb.co/sv9wnS75/Catnip.jpg",
  "Cauliflower Green Igloo":"https://i.ibb.co/Rp1h9X4R/Cauliflower-Green-Igloo.jpg",
  "Cauliflower Macerata Green":"https://i.ibb.co/W4kNY1LC/Cauliflower-Maracata-Green.jpg",
  "Cauliflower Mini White":"https://i.ibb.co/mC5ZGQkG/Cauliflower-Mini-White.jpg",
  "Cauliflower Romanesca Green":"https://i.ibb.co/gZfWRYQf/Cauliflower-Romanesca.jpg",
  "Cauliflower Snowball":"https://i.ibb.co/LDFYVKFt/Cauliflower-Snowball.jpg",
  "Cauliflower Violet Sicilian":"https://i.ibb.co/SXkKynR8/Cauliflower-Violet-Sicilian.jpg",
  "Celery Utah Tall":"https://i.ibb.co/BHbcqPPT/Celery.jpg",
  "Chamomile":"https://i.ibb.co/ZwMCqN5/Chamomile.jpg",
  "Chia Seed":"https://i.ibb.co/HT0hLSqL/Chia-Seeds.jpg",
  "Chilli Birds Eye":"https://i.ibb.co/6c8qbsq3/Capsicum-Birds-Eye.jpg",
  "Chilli Bishops Crown":"https://i.ibb.co/d4wS3Djf/Capsicum-Bishop-Crown.jpg",
  "Chilli Cayenne":"https://i.ibb.co/PJSwxT1/Capsicum-Cayenne.jpg",
  "Chilli Habanero Orange":"https://i.ibb.co/5xwWMHkG/Capsicum-Habanero-Orange.jpg",
  "Chilli Paprika":"https://i.ibb.co/Z6Fjx4QY/Capsicum-Paprika.jpg",
  "Chilli Peppa Dew":"https://i.ibb.co/x8jPRBzm/Capsicum-Peppadew.jpg",
  "Cineraria Dusty Miller":"https://i.ibb.co/5hm1ML73/Cineriria.jpg",
  "Cleaver or Bedstraw":"https://i.ibb.co/0pXxjSDR/Cleaver.jpg",
  "Common Coral Tree":"https://i.ibb.co/PvrK0nN9/Coral-Tree.jpg",
  "Coriander":"https://i.ibb.co/qFcFVmZp/Coriander.jpg",
  "Corn Bloody Butcher":"https://i.ibb.co/pB8DwwPr/Corn-Bloody-Butcher.jpg",
  "Corn Glass Gem":"https://i.ibb.co/pBX9k61b/Corn-Glass-Gem.jpg",
  "Corn Green Oaxacan":"https://i.ibb.co/M58hQvqh/Corn-Green.jpg",
  "Cosmos Laced":"https://i.ibb.co/twD5WyRV/Cosmos-Laced.jpg",
  "Cosmos Sea Shell Pink":"https://i.ibb.co/ZR7xPHpJ/Cosmos-Sea-Shells.jpg",
  "Cosmos Sensation Mix":"https://i.ibb.co/cKsgRdT3/Cosmos-Sensation-Mix.jpg",
  "Cosmos Veldfire":"https://i.ibb.co/20J9M3Mm/Cosmos-Veldfire.jpg",
  "Creeping Thyme":"https://i.ibb.co/ZpMP5fVv/Creeping-Thyme.jpg",
  "Cucumber Ashley":"https://i.ibb.co/svWRDw6W/Cucumber-Ashley.jpg",
  "Cucumber Snake":"https://i.ibb.co/BH4BpD4X/Cucumber-Snake.jpg",
  "Dandelion":"https://i.ibb.co/nMSscJY7/Dandelion.jpg",
  "Dianthus Mix":"https://i.ibb.co/PvBCbcbC/Dianthus-Mix.jpg",
  "Dichondra Wonder Lawn":"https://i.ibb.co/ccxY8TFf/Dichondra.jpg",
  "Dill":"https://i.ibb.co/Q3G3GgMt/Dill.jpg",
  "Eggfruit Brinjal Black Beauty":"https://i.ibb.co/nNqNSg1p/Brinjal-Black-Beauty.jpg",
  "Eggfruit Brinjal Purple Fingers":"https://i.ibb.co/bRGkkR95/Brinjal-Purple-Fingers.jpg",
  "Erigeron Profusion":"https://i.ibb.co/7dZpbWBq/Erigeron.jpg",
  "Evening Primrose Eonothera biennis":"https://i.ibb.co/S4m4FhPj/Evening-Primrose.jpg",
  "Fennel":"https://i.ibb.co/Kc3JY9Yt/Fennel.jpg",
  "Fenugreek":"https://i.ibb.co/cSdprszY/Fenugreek.jpg",
  "Feverfew Tanacetum parthenium":"https://i.ibb.co/pvzDfN27/Feverfew.jpg",
  "Fever Tree":"https://i.ibb.co/mCvCkF1P/Fever-Tree.jpg",
  "Foxglove Foxy Mix":"https://i.ibb.co/TDQs6Dx9/Foxglove.jpg",
  "French Lavender":"https://i.ibb.co/0jSQ3nDR/French-Lavender.jpg",
  "Garlic Chesnok Red":"https://i.ibb.co/MksyrW4N/Garlic-Chesnok-Red.jpg",
  "Garlic Egyptian Red":"https://i.ibb.co/gZk571qQ/Garlic-Egyptian-Red.jpg",
  "Garlic Egyptian White":"https://i.ibb.co/MkKCY5HQ/Garlic-Egyptian-White.jpg",
  "Garlic Spanish White":"https://i.ibb.co/KxbcpjrQ/Garlic-Spanish-White.jpg",
  "Gourd African Calabash":"https://i.ibb.co/0yHnj1V9/African-Calabash.jpg",
  "Gourd Calabash Birdhouse":"https://i.ibb.co/3yQjdXVQ/Calabash-Birdhouse.jpg",
  "Gourd Caveman Club":"https://i.ibb.co/LXYRwDGL/Cavemans-Club.jpg",
  "Gourd Cuccuza":"https://i.ibb.co/Vcs15tXR/Cuzzuza.jpg",
  "Gourd Dipper":"https://i.ibb.co/FbcC8j9x/Dipper.jpg",
  "Gourd Dipper Extra Length":"https://i.ibb.co/Vcs15tXR/Dipper-Extra-Length.jpg",
  "Gourd Giant Bullet Headwax":"https://i.ibb.co/tT86Rprh/Giant-Bullet-Headwax.jpg",
  "Gourd Leraka":"https://i.ibb.co/bMKvRvXV/Lerka.jpg",
  "Gourd Martin House Bottle":"https://i.ibb.co/b5Xcq8x1/Martin-House-Bottle.jpg",
  "Gourd Mix":"https://i.ibb.co/cKzh3KSz/Mix-2.jpg",
  "Gourd Snake":"https://i.ibb.co/8nB3d2kn/Snake.jpg",
  "Gourd Speckled Swan":"https://i.ibb.co/PZ9QnqLq/Speckled-Swan.jpg",
  "Green Prickly Pear":"https://i.ibb.co/q3njNsSS/Green-prickly.jpg",
  "Hollyhock Mix":"https://i.ibb.co/4wsfYSGJ/Hollyhock-Mix.jpg",
  "Hollyhock Maroon":"https://i.ibb.co/V0S6bbGR/hollyhock-Maroon.jpg",
  "Hollyhock White":"https://i.ibb.co/bMXHtd02/Hollyhock-White.jpg",
  "Horehound White Marrubium vulgare":"https://i.ibb.co/BHRd6QX8/Horewhound-White.jpg",
  "Huckleberry":"https://i.ibb.co/9zKPqYH/Huckleyberry.jpg",
  "Hyssop":"https://i.ibb.co/3ZTpwQP/Hyssop.jpg",
  "Industrial Hemp":"https://i.ibb.co/gMbN1Xn6/Industrial-hemp.jpg",
  "Job's Tears Coix lacryma":"https://i.ibb.co/Mxg9sNKc/Jacobs-Tears.jpg",
  "Kale Black Krim":"https://i.ibb.co/Z6ykH7n8/Kale-Black-Palm.jpg",
  "Kale Red Ursa":"https://i.ibb.co/QjMbXY5p/Kale-Red-Urse.jpg",
  "Kale White Russian":"https://i.ibb.co/n8DNFKxf/Kale-WHite-Russian.jpg",
  "Karee Tree - Swart":"https://i.ibb.co/mCFDMvzZ/Swart-Karee.jpg",
  "King Protea":"https://i.ibb.co/CsvRMfxR/King-Protea.jpg",
  "Kohlrabi Purple Vienna":"https://i.ibb.co/bRYGj49R/Kohlrabi-Purple.jpg",
  "Kohlrabi White Vienna":"https://i.ibb.co/Q3gzQTY4/Kohlrabi-White.jpg",
  "LM Lawn":"https://i.ibb.co/Zzvj3Bzb/LM-Lawn.jpg",
  "Leeks Elephant":"https://i.ibb.co/6Jwnx42B/Leeks-Elephant.jpg",
  "Lemon Balm":"https://i.ibb.co/GYsM7mQ/Lemon-Balm.jpg",
  "Lemon Basil":"https://i.ibb.co/0VRBqCGf/Basil-lemon.jpg",
  "Lettuce Freckles":"https://i.ibb.co/gMjKkLGh/Lettuce-Frekkles.jpg",
  "Lettuce Great Lakes":"https://i.ibb.co/NzQ8mRw/Lettuce-Great-Lakes.jpg",
  "Lettuce Loose Leaf Mix":"https://i.ibb.co/RGpDQx1s/Lettuce-Loose-Leaf-Mix.jpg",
  "Lettuce Mix":"https://i.ibb.co/sJ50VQTQ/Lettuce-Gourmet-Mix.jpg",
  "Loofah European":"https://i.ibb.co/kszS0c7D/loofah.jpg",
  "Lucern Tree Chamaecytisus proliferus":"https://i.ibb.co/jvGz6T1J/Lucern-Tree.jpg",
  "Marula":"https://i.ibb.co/1YRR2XwN/Marula-Tree.jpg",
  "Melon Rich Sweetness Cucumis Melo":"https://i.ibb.co/TMX789mQ/Melon-Rich.jpg",
  "Mesembryansthemum Bokbaai Vygie":"https://i.ibb.co/BHc9vkYD/Bokbaai.jpg",
  "Mexican Mint":"https://i.ibb.co/93h7hSqx/Mexican-Mint.jpg",
  "Microgreen Alfalfa":"https://i.ibb.co/TDrzCb68/Microgreens-Alfalfa.jpg",
  "Microgreens Asian Oriental Mix":"https://i.ibb.co/kVYFDy27/Asian-Oriental-Blend.jpg",
  "Microgreens Black Mustard":"https://i.ibb.co/S7sW1vRN/Microgreens-Black-Mustard.jpg",
  "Microgreens Broccoli Calabrese":"https://i.ibb.co/cSN7smJd/Microgreen-Broccoli.jpg",
  "Microgreens Cress":"https://i.ibb.co/Lzmt2y0J/Microgreens-Cress.jpg",
  "Microgreen Fenugreek":"https://i.ibb.co/FbjTtfLB/Microgreens-Fenugreek.jpg",
  "Microgreens Green Basil":"https://i.ibb.co/CpZzcjsd/Microgreens-Green-Basil.jpg",
  "Microgreens Green Swiss Chard":"https://i.ibb.co/bMt19YVk/Microgreens-Green-Swiss-Chard.jpg",
  "Microgreens Mizuno Greens":"https://i.ibb.co/PGXCS6MX/Microgreens-Mizuna-Greens.jpg",
  "Microgreens Mustard Green Frills":"https://i.ibb.co/N6tK8yYZ/Microgreen-Mustard-Green-Frills.jpg",
  "Microgreen Kaleidoscope Mix":"https://i.ibb.co/yFc22mZQ/Microgreen-Kalidescope.jpg",
  "Microgreens Mustard Red Frills":"https://i.ibb.co/sp9hwdRz/Microgreen-Mustard-Red-Frills.jpg",
  "Microgreens Radish Coralette":"https://i.ibb.co/HTFPBwXk/Microgreens-Radish-Coralette.jpg",
  "Microgreens Radish Daikon":"https://i.ibb.co/RGjsFLfZ/Microgreens-Radish-Daikon.jpg",
  "Microgreen Radish Rainbow":"https://i.ibb.co/YFFdGdv4/Microgreen-Rainbow-Radish.jpg",
  "Microgreens Radish Tsai Tsai":"https://i.ibb.co/W4Hkc24v/Microgreens-Radish-Tsai-Tsai.jpg",
  "Microgreens Red Amaranthus":"https://i.ibb.co/JwP8my3R/Microgreen-Red-Amaranth.jpg",
  "Microgreens Red Swiss Chard":"https://i.ibb.co/0R4kfH17/Microgreen-Red-Swiss-Chard.jpg",
  "Microgreens Rocket":"https://i.ibb.co/C4cpNGP/Microgreen-Rocket.jpg",
  "Microgreens Stirfry Blend":"https://i.ibb.co/LXMYZRPS/Microgreen-Stirfry.jpg",
  "Microgreens Striped Sunflower":"https://i.ibb.co/WvBKpZZQ/Microgreens-Striped-Sunflower.jpg",
  "Microgreens Wheatgrass":"https://i.ibb.co/hR9HJPvv/Microgreens-Wheatgrass.jpg",
  "Microgreens Yellow Mustard":"https://i.ibb.co/XxVWt6NY/Microgreen-Yellow-Mustard.jpg",
  "Milk Thistle Silybum marianum":"https://i.ibb.co/6JpkXgzj/Milk-Thistle.jpg",
  "Monkey Thorn":"https://i.ibb.co/WvtKnpgM/Monkey-Thorn.jpg",
  "Moringa":"https://i.ibb.co/sJ15TK9R/Moringa.jpg",
  "Mung Beans":"https://i.ibb.co/bjg5qqvL/Mung-Beans.jpg",
  "Mustard Spinach":"https://i.ibb.co/XZ3nKs3V/Mustard-Spinach.jpg",
  "Namakwaland Daisy":"https://i.ibb.co/Xfs9CBy0/Namak-Daisy.jpg",
  "Nasturtium Alaska Mix":"https://i.ibb.co/g2Py2py/Nasturatium-Alaska-Mix.jpg",
  "Okra Lady Fingers":"https://i.ibb.co/M53DTh0h/Okra.jpg",
  "Onion Red Creole":"https://i.ibb.co/sdtg5JkS/Onion-Red.jpg",
  "Onion Texas Grano":"https://i.ibb.co/ynczF47P/Onion-Texas.jpg",
  "Oregano":"https://i.ibb.co/Qv6N6hcW/Oregano.jpg",
  "Oriental Vegetable Asian Blend Mix":"https://i.ibb.co/ynzQ08Dt/Oriental-Mix.jpg",
  "Osteospermum":"https://i.ibb.co/Q30XcF1P/Osteospermum.jpg",
  "Parsley Flat Leaf":"https://i.ibb.co/35L5czpD/Parsley-Flat.jpg",
  "Parsley Moss":"https://i.ibb.co/VcSMz2g3/Parsley-Moss.jpg",
  "Patty Pan Alba":"https://i.ibb.co/4gJw5sHN/Patty-Pan-White.jpg",
  "Patty Pan Juane et Verte":"https://i.ibb.co/q3RgZKtD/Patty-Pan-Juane-Et-Verte.jpg",
  "Patty Pan Mix":"https://i.ibb.co/kszZ2spY/Patty-Pan-Mix.jpg",
  "Patty Pan Scallop Yellow":"https://i.ibb.co/8gxPzgRR/Patty-Pan-Yellow.jpg",
  "Peanut Benih Giant Striped":"https://i.ibb.co/hFGJzt7n/Peanut-Benih.jpg",
  "Peanut Black":"https://i.ibb.co/9mhMSTGG/Peanut-Black.jpg",
  "Peanut Chalimbana":"https://i.ibb.co/wNgmTQDk/Peanut-Chalimbana.jpg",
  "Peanut Fastigianta Pin Striped":"https://i.ibb.co/svjDvVC7/Peanut-Fastigianta.jpg",
  "Peanut Malawi Striped":"https://i.ibb.co/Rkj629VM/Peanut-Malawi.jpg",
  "Peas First Early May":"https://i.ibb.co/fz51drcw/Pea-Early-May.jpg",
  "Peas Sugar Snap Mangetout":"https://i.ibb.co/SDf1SkCb/Pea-Mange-Tout.jpg",
  "Peas Super Snappy":"https://i.ibb.co/CKKvNyvv/Pea-Super-Snappy.jpg",
  "Pet Grass":"https://i.ibb.co/d0fzjv6C/Pet-Grass.jpg",
  "Popcorn Dakota Black":"https://i.ibb.co/yFm5Kd2r/Popcorn-Dakota-Black.jpg",
  "Poppy Black Dragon":"https://i.ibb.co/B2KgTxTp/Poppy-Black-Dragon.jpg",
  "Poppy Flanders Red":"https://i.ibb.co/3YS95Hnp/Poppy-Flanders.jpg",
  "Poppy Peony Mix":"https://i.ibb.co/WpxpKVHh/Mix.jpg",
  "Poppy Peony Light Purple":"https://i.ibb.co/8DxJZ916/Poppy-Lavender.jpg",
  "Poppy Peony Purple":"https://i.ibb.co/G1q2wm1/Poppy-Single-Purple.jpg",
  "Poppy Peony Red":"https://i.ibb.co/1JMjN5Dg/Poppy-Red.jpg",
  "Poppy Peony Pink":"https://i.ibb.co/4CTdz6d/Poppy-Single-Pink.jpg",
  "Poppy Pepperbox Red":"https://i.ibb.co/dsQ92hBx/Poppy-Pepperbox-Red.jpg",
  "Poppy Mix":"https://i.ibb.co/H9cgxZs/Poppy-Mix.jpg",
  "Poppy Pink":"https://i.ibb.co/wZPfmJFp/Poppy-Pink.jpg",
  "Poppy Purple":"https://i.ibb.co/QFw2t9SK/Poppy-Purple.jpg",
  "Poppy White":"https://i.ibb.co/XrWRzypK/Poppy-Single-White.jpg",
  "Pumpkin Queensland Blue":"https://i.ibb.co/4R1yQMdV/Pumpkin-Queensland.jpg",
  "Pumpkin Turks Turban":"https://i.ibb.co/G4CLGXzK/Pumpkin-Turks.jpg",
  "Pumpkin Witboer":"https://i.ibb.co/nq6HvHSp/Pumpkin-Witboer.jpg",
  "Radish Hailstone White":"https://i.ibb.co/FbL08X0t/Radish-Hailstone.jpg",
  "Radish Purple Plum":"https://i.ibb.co/mF2w2Tyt/Radish-Purple-Plum.jpg",
  "Radish Rainbow Mix":"https://i.ibb.co/CSdYrNw/Radish-Raindow-Mix.jpg",
  "Radish Spanish Black":"https://i.ibb.co/v6rwGgdM/Radish-Spanish-Black.jpg",
  "Radish Sparkler":"https://i.ibb.co/jv55NLQJ/Rashish-Sparkler.jpg",
  "Rape English Giant":"https://i.ibb.co/KcZz2qL0/Rapeseed.jpg",
  "Red Mustard Giant Greens Brassica juncea":"https://i.ibb.co/0yr0vhfP/Red-Mustard.jpg",
  "Red Swiss Chard":"https://i.ibb.co/xtd1jP8H/Red-Swiss-Chard.jpg",
  "Rocket":"https://i.ibb.co/847H3vGh/Rocket-Arugula.jpg",
  "Rocket Wild Sylvetta":"https://i.ibb.co/bjcQ1W1x/Rocket-Wild.jpg",
  "Roselle hibiscus sabdariffa":"https://i.ibb.co/JWWTYSvM/Hibiscus.jpg",
  "Rue":"https://i.ibb.co/0yKRmZ42/Rue.jpg",
  "Salad Burnett Sanguisorba minor":"https://i.ibb.co/mVPZmnJN/Salad-Burnet.jpg",
  "Sand Olive":"https://i.ibb.co/PGKNfsCL/Sand-Olive.jpg",
  "Snapdragon Tom Thumb Mix":"https://i.ibb.co/Kzq3806r/Snaps-Mix.jpg",
  "Spinach Baby Black Magic":"https://i.ibb.co/YFL0mygG/Spinach-Baby-Black-Magic.jpg",
  "Spinach Fordhook Giant":"https://i.ibb.co/S4FGFPB6/Spinach-Fordhook.jpg",
  "Spinach Swiss Chard Bright Lights Mix":"https://i.ibb.co/tpcjRzGr/Spinach-Bright-Lights.jpg",
  "Spring Onion":"https://i.ibb.co/Xrn62LkR/Spring-Onions.jpg",
  "Sprouts Mansoor Lentils":"https://i.ibb.co/5XDTpPhC/Sprouts-Mansoor-Lentils.jpg",
  "Sprouts Moth Beans":"https://i.ibb.co/qMC891sh/Sprouts-Moth-Beans.jpg",
  "Sprouts Mung Beans":"https://i.ibb.co/zVDYV93G/Sprouts-Mungbeans.jpg",
  "Sprouts Peas":"https://i.ibb.co/KjCNXNbs/Sprouts-Sprouting-Peas.jpg",
  "Sprouts Sunflower Seeds":"https://i.ibb.co/JD4Rp47/Sprouts-Sunflower.jpg",
  "Sprouts Tatsoi":"https://i.ibb.co/7d51C07g/Sprouts-Tatsoi.jpg",
  "Sprouts Tuscany Kale":"https://i.ibb.co/QF5qhMyF/Microgreen-Tuscany-Kale.jpg",
  "Sprouts White Chickpeas":"https://i.ibb.co/QvJWtQwv/Sprouts-White-Chickpea.jpg",
  "Squash Butternut Waltham":"https://i.ibb.co/4wrckLQk/Squash-Butternut.jpg",
  "Squash Gem Rolet":"https://i.ibb.co/9kyrCq1Y/Squash-Gem-Rolet.jpg",
  "Squash Spaghetti":"https://i.ibb.co/nN5r7VNW/Squash-Spaghetti.jpg",
  "Stinging Nettle":"https://i.ibb.co/6RwhXwCH/Stinging-Nettle.jpg",
  "Strelitzia Nicolai":"https://i.ibb.co/9kpxTx5L/Strelitzia-Nicolai.jpg",
  "Strelitzia Reginae":"https://i.ibb.co/jkHgCFb9/Strelitzia-Reginae.jpg",
  "Sunflower Burnt Ember":"https://i.ibb.co/4nfPXTJV/Sunflower-Burnt-Amber.jpg",
  "Sunflower Evening Star":"https://i.ibb.co/84D8ffPK/Sunflower-Evenstar.jpg",
  "Sunflower Mixed Packet":"https://i.ibb.co/pBYs1FMt/Sunflower-Mix.jpg",
  "Sunflower Nigerian Oil Seed":"https://i.ibb.co/0V6L5mTF/Sunflower-Nigerian-Oil.jpg",
  "Sunflower Tarahumara":"https://i.ibb.co/CKkg41yp/Sunflower-Tamaharua.jpg",
  "Sunflower Tiger Eye":"https://i.ibb.co/kgCH1vmn/Sunflower-Tiger-Eye.jpg",
  "Sunflower Titan":"https://i.ibb.co/yD0RbDJ/Sunflower-Titan.jpg",
  "Sunhemp":"https://i.ibb.co/HLSYnrbB/Sunhemp.jpg",
  "Sweet Thorn":"https://i.ibb.co/5m7TNdM/Sweet-Thorn.jpg",
  "Sweetcorn Golden Bantam":"https://i.ibb.co/9HCwWx45/Sweetcorn-Bantam.jpg",
  "Sweet William Mix":"https://i.ibb.co/6cg8wXLG/Sweet-William.jpg",
  "Thyme":"https://i.ibb.co/xTNg6KZ/Thyme.jpg",
  "Tomato Chocolate Stripe":"https://i.ibb.co/B2DR08bw/Tomato-Chocolate-Stripe.jpg",
  "Tomato Money Maker":"https://i.ibb.co/dJs11gPf/Tomato-Moneymaker.jpg",
  "Tomato Oxheart":"https://i.ibb.co/VYxNcHsn/Tomato-Oxheart.jpg",
  "Tomato Rodade":"https://i.ibb.co/FbtmcvsB/Tomato-Rodade.jpg",
  "Tomato Roma":"https://i.ibb.co/hRvLpL1F/Tomato-Roma.jpg",
  "Tooth Ache Plant Spilanthes acmella":"https://i.ibb.co/mVs8g4Nf/Toothache-Plant.jpg",
  "Tulbaghia":"https://i.ibb.co/CpzrC7Dt/Tulbaghia.jpg",
  "Turnip Green Globe":"https://i.ibb.co/q34NytNg/Turnip-Green-Globe.png",
  "Turnip Purple Top":"https://i.ibb.co/FbnrndPd/Turnip-Purple-Top.png",
  "Turnip Snowball White":"https://i.ibb.co/jkQzFbH2/Turnip-Snowball.png",
  "Turnip Yellow Globe":"https://i.ibb.co/KzmBnFNN/Turnip-Yellow-Globe.png",
  "Virginia Gold Tobacco":"https://i.ibb.co/9kPRRr7S/Tobacco.jpg",
  "Watermelon All Sweet":"https://i.ibb.co/WpMfFwnP/Watermelon-All-Sweet.jpg",
  "Watermelon Black Diamond":"https://i.ibb.co/gLkRqRvb/Watermelon-Black.jpg",
  "Wild Olive":"https://i.ibb.co/JWWTYSvM/Wild-Olive.jpg",
  "Yellow Pincushion Protea":"https://i.ibb.co/35nLWBZs/Yellow-Pincushion.jpg",
  "Zinnia Mix":"https://i.ibb.co/MDNpvNgP/Zinnia-Mix.jpg",
};

const RAW = [
  ["Alyssum Carpet White","Flower"],["African Horned Cucumber","Vegetable"],["Ammi Majus","Flower"],["Anise","Herb"],["Ashwagandha","Herb"],["Baobab","Tree"],["Basil Genovese","Herb"],["Basil Holy","Herb"],["Basil Sweet","Vegetable"],["Bean Appaloosa Bush","Vegetable"],["Bean Black Turtle","Vegetable"],["Beans Bird Egg Blue","Vegetable"],["Bean Lima Nuguni Pole Variety","Vegetable"],["Bean Nonna Agnes Blue","Vegetable"],["Bean Vermont Appaloosa","Vegetable"],["Bean Zebra Lima","Vegetable"],["Beans Bush Contender","Vegetable"],["Bean Yard Long","Vegetable"],["Beetroot Bulls Blood","Vegetable"],["Beetroot Chioggia","Vegetable"],["Beetroot Crimson","Vegetable"],["Beetroot Detroit Dark Red","Vegetable"],["Beetroot Golden Globe","Vegetable"],["Beetroot Rainbow Mix","Vegetable"],["Beetroot Ruby Queen","Vegetable"],["Black Mustard","Herb"],["Black Seed (Nigella Sativa)","Herb"],["Borage","Herb"],["Broccoli","Vegetable"],["Broccoli Purple Sprouting","Vegetable"],["Broccoli Romanesca","Vegetable"],["Brussel Sprouts","Vegetable"],["Cabbage Copenhagen","Vegetable"],["Cabbage Drumhead","Vegetable"],["Cabbage Savoy","Vegetable"],["Calendula Mix","Flower"],["Cancer Bush","Herb"],["Cape Gooseberry","Vegetable"],["Capsicum California Wonder","Vegetable"],["Carrot Chantenny Karoo","Vegetable"],["Carrots Nantes Scarlet","Vegetable"],["Carrots Rainbow Blend","Vegetable"],["Catnip","Herb"],["Cauliflower Green Igloo","Vegetable"],["Cauliflower Macerata Green","Vegetable"],["Cauliflower Mini White","Vegetable"],["Cauliflower Romanesca Green","Vegetable"],["Cauliflower Snowball","Vegetable"],["Cauliflower Violet Sicilian","Vegetable"],["Celery Utah Tall","Vegetable"],["Chamomile","Herb"],["Chia Seed","Herb"],["Chilli Birds Eye","Vegetable"],["Chilli Bishops Crown","Vegetable"],["Chilli Cayenne","Vegetable"],["Chilli Habanero Orange","Vegetable"],["Chilli Paprika","Vegetable"],["Chilli Peppa Dew","Vegetable"],["Cineraria Dusty Miller","Flower"],["Cleaver or Bedstraw","Herb"],["Common Coral Tree","Tree"],["Coriander","Herb"],["Corn Bloody Butcher","Vegetable"],["Corn Glass Gem","Vegetable"],["Corn Green Oaxacan","Vegetable"],["Cosmos Laced","Flower"],["Cosmos Sea Shell Pink","Flower"],["Cosmos Sensation Mix","Flower"],["Cosmos Veldfire","Flower"],["Creeping Thyme","Herb"],["Cucumber Ashley","Vegetable"],["Cucumber Snake","Vegetable"],["Dandelion","Herb"],["Dianthus Mix","Flower"],["Dichondra Wonder Lawn","Lawn"],["Dill","Herb"],["Eggfruit Brinjal Black Beauty","Vegetable"],["Eggfruit Brinjal Purple Fingers","Vegetable"],["Erigeron Profusion","Flower"],["Evening Primrose Eonothera biennis","Herb"],["Fennel","Herb"],["Fenugreek","Herb"],["Feverfew Tanacetum parthenium","Herb"],["Fever Tree","Tree"],["Foxglove Foxy Mix","Flower"],["French Lavender","Flower"],["Garlic Chesnok Red","Vegetable"],["Garlic Egyptian Red","Vegetable"],["Garlic Egyptian White","Vegetable"],["Garlic Spanish White","Vegetable"],["Gourd African Calabash","Vegetable"],["Gourd Calabash Birdhouse","Vegetable"],["Gourd Caveman Club","Vegetable"],["Gourd Cuccuza","Vegetable"],["Gourd Dipper","Vegetable"],["Gourd Dipper Extra Length","Vegetable"],["Gourd Giant Bullet Headwax","Vegetable"],["Gourd Leraka","Vegetable"],["Gourd Martin House Bottle","Vegetable"],["Gourd Mix","Vegetable"],["Gourd Snake","Vegetable"],["Gourd Speckled Swan","Vegetable"],["Green Prickly Pear","Vegetable"],["Hollyhock Mix","Flower"],["Hollyhock Maroon","Flower"],["Hollyhock White","Flower"],["Horehound White Marrubium vulgare","Herb"],["Huckleberry","Vegetable"],["Hyssop","Herb"],["Industrial Hemp","Crop Cover"],["Job's Tears Coix lacryma","Herb"],["Kale Black Krim","Vegetable"],["Kale Red Ursa","Vegetable"],["Kale White Russian","Vegetable"],["Karee Tree - Swart","Tree"],["King Protea","Flower"],["Kohlrabi Purple Vienna","Vegetable"],["Kohlrabi White Vienna","Vegetable"],["LM Lawn","Lawn"],["Leeks Elephant","Vegetable"],["Lemon Balm","Herb"],["Lemon Basil","Herb"],["Lettuce Freckles","Vegetable"],["Lettuce Great Lakes","Vegetable"],["Lettuce Loose Leaf Mix","Vegetable"],["Lettuce Mix","Vegetable"],["Loofah European","Crop Cover"],["Lucern Tree Chamaecytisus proliferus","Tree"],["Marula","Tree"],["Melon Rich Sweetness Cucumis Melo","Vegetable"],["Mesembryansthemum Bokbaai Vygie","Flower"],["Mexican Mint","Herb"],["Microgreen Alfalfa","Microgreen"],["Microgreens Asian Oriental Mix","Microgreen"],["Microgreens Black Mustard","Microgreen"],["Microgreens Broccoli Calabrese","Microgreen"],["Microgreens Cress","Microgreen"],["Microgreen Fenugreek","Microgreen"],["Microgreens Green Basil","Microgreen"],["Microgreens Green Swiss Chard","Microgreen"],["Microgreens Mizuno Greens","Microgreen"],["Microgreens Mustard Green Frills","Microgreen"],["Microgreen Kaleidoscope Mix","Microgreen"],["Microgreens Mustard Red Frills","Microgreen"],["Microgreens Radish Coralette","Microgreen"],["Microgreens Radish Daikon","Microgreen"],["Microgreen Radish Rainbow","Microgreen"],["Microgreens Radish Tsai Tsai","Microgreen"],["Microgreens Red Amaranthus","Microgreen"],["Microgreens Red Swiss Chard","Microgreen"],["Microgreens Rocket","Microgreen"],["Microgreens Stirfry Blend","Microgreen"],["Microgreens Striped Sunflower","Microgreen"],["Microgreens Wheatgrass","Microgreen"],["Microgreens Yellow Mustard","Microgreen"],["Milk Thistle Silybum marianum","Herb"],["Monkey Thorn","Tree"],["Moringa","Herb"],["Mung Beans","Herb"],["Mustard Spinach","Vegetable"],["Namakwaland Daisy","Flower"],["Nasturtium Alaska Mix","Flower"],["Okra Lady Fingers","Vegetable"],["Onion Red Creole","Vegetable"],["Onion Texas Grano","Vegetable"],["Oregano","Herb"],["Oriental Vegetable Asian Blend Mix","Vegetable"],["Osteospermum","Flower"],["Parsley Flat Leaf","Herb"],["Parsley Moss","Herb"],["Patty Pan Alba","Vegetable"],["Patty Pan Juane et Verte","Vegetable"],["Patty Pan Mix","Vegetable"],["Patty Pan Scallop Yellow","Vegetable"],["Peanut Benih Giant Striped","Vegetable"],["Peanut Black","Vegetable"],["Peanut Chalimbana","Vegetable"],["Peanut Fastigianta Pin Striped","Vegetable"],["Peanut Malawi Striped","Vegetable"],["Peas First Early May","Vegetable"],["Peas Sugar Snap Mangetout","Vegetable"],["Peas Super Snappy","Vegetable"],["Pet Grass","Lawn"],["Popcorn Dakota Black","Vegetable"],["Poppy Black Dragon","Flower"],["Poppy Flanders Red","Flower"],["Poppy Peony Mix","Flower"],["Poppy Peony Light Purple","Flower"],["Poppy Peony Purple","Flower"],["Poppy Peony Red","Flower"],["Poppy Peony Pink","Flower"],["Poppy Pepperbox Red","Flower"],["Poppy Mix","Flower"],["Poppy Pink","Flower"],["Poppy Purple","Flower"],["Poppy White","Flower"],["Pumpkin Queensland Blue","Vegetable"],["Pumpkin Turks Turban","Vegetable"],["Pumpkin Witboer","Vegetable"],["Radish Hailstone White","Vegetable"],["Radish Purple Plum","Vegetable"],["Radish Rainbow Mix","Vegetable"],["Radish Spanish Black","Vegetable"],["Radish Sparkler","Vegetable"],["Rape English Giant","Crop Cover"],["Red Mustard Giant Greens Brassica juncea","Herb"],["Red Swiss Chard","Vegetable"],["Rocket","Herb"],["Rocket Wild Sylvetta","Herb"],["Roselle hibiscus sabdariffa","Herb"],["Rue","Herb"],["Salad Burnett Sanguisorba minor","Herb"],["Sand Olive","Tree"],["Snapdragon Tom Thumb Mix","Flower"],["Spinach Baby Black Magic","Vegetable"],["Spinach Fordhook Giant","Vegetable"],["Spinach Swiss Chard Bright Lights Mix","Vegetable"],["Spring Onion","Herb"],["Sprouts Mansoor Lentils","Sprouts"],["Sprouts Moth Beans","Sprouts"],["Sprouts Mung Beans","Sprouts"],["Sprouts Peas","Sprouts"],["Sprouts Sunflower Seeds","Sprouts"],["Sprouts Tatsoi","Sprouts"],["Sprouts Tuscany Kale","Sprouts"],["Sprouts White Chickpeas","Sprouts"],["Squash Butternut Waltham","Vegetable"],["Squash Gem Rolet","Vegetable"],["Squash Spaghetti","Vegetable"],["Stinging Nettle","Herb"],["Strelitzia Nicolai","Flower"],["Strelitzia Reginae","Flower"],["Sunflower Burnt Ember","Flower"],["Sunflower Evening Star","Flower"],["Sunflower Mixed Packet","Flower"],["Sunflower Nigerian Oil Seed","Flower"],["Sunflower Tarahumara","Flower"],["Sunflower Tiger Eye","Flower"],["Sunflower Titan","Flower"],["Sunhemp","Herb"],["Sweet Thorn","Tree"],["Sweetcorn Golden Bantam","Vegetable"],["Sweet William Mix","Flower"],["Thyme","Herb"],["Tomato Chocolate Stripe","Vegetable"],["Tomato Money Maker","Vegetable"],["Tomato Oxheart","Vegetable"],["Tomato Rodade","Vegetable"],["Tomato Roma","Vegetable"],["Tooth Ache Plant Spilanthes acmella","Herb"],["Tulbaghia","Flower"],["Turnip Green Globe","Vegetable"],["Turnip Purple Top","Vegetable"],["Turnip Snowball White","Vegetable"],["Turnip Yellow Globe","Vegetable"],["Virginia Gold Tobacco","Crop Cover"],["Watermelon All Sweet","Vegetable"],["Watermelon Black Diamond","Vegetable"],["Wild Olive","Tree"],["Yellow Pincushion Protea","Flower"],["Zinnia Mix","Flower"]
];

const INIT = RAW.map((r,i)=>({id:i+1,name:r[0],category:r[1],cost:25,price:45,stock:true,outOfStock:false,image:IMGS[r[0]]||""}));
const CATS = ["All",...Array.from(new Set(INIT.map(p=>p.category))).sort()];
const catStyle = {
  Vegetable:{bg:"#e8f5ee",color:"#2d6a3f",icon:"🥦"},Flower:{bg:"#fdf0f8",color:"#8b3a72",icon:"🌸"},
  Herb:{bg:"#fdf8e8",color:"#7a5c00",icon:"🌿"},Tree:{bg:"#eef5e8",color:"#2d4a1e",icon:"🌳"},
  Microgreen:{bg:"#e8f8f8",color:"#0a6060",icon:"🌱"},Sprouts:{bg:"#e8eef8",color:"#1a3a7a",icon:"🫘"},
  "Crop Cover":{bg:"#f5efe8",color:"#6b3a00",icon:"🌾"},Lawn:{bg:"#eef5e0",color:"#3a6000",icon:"🍀"},
};
const C = {
  darkGreen:"#2d4a1e",midGreen:"#3d6b28",parchment:"#f5edd8",parchmentDark:"#e8d5a3",
  brown:"#5c3d1e",cream:"#faf7f0",offwhite:"#f7f4ec",border:"#ddd5b8",
  text:"#2a2015",textMid:"#5c4a2a",textLight:"#8a7a5a",
};

const STATUS_COLORS = {
  "Pending":{bg:"#fff3cd",color:"#856404",border:"#ffc107"},
  "Packed":{bg:"#cfe2ff",color:"#084298",border:"#0d6efd"},
  "Dispatched":{bg:"#d1ecf1",color:"#0c5460",border:"#17a2b8"},
  "Delivered":{bg:"#d4edda",color:"#155724",border:"#28a745"},
};

export default function App() {
  const [products,setProducts] = useState(INIT);
  const [orders,setOrders] = useState([]);
  const [view,setView] = useState("store");
  const [adminTab,setAdminTab] = useState("orders");
  const [adminAuth,setAdminAuth] = useState(false);
  const [adminPw,setAdminPw] = useState("");
  const [adminErr,setAdminErr] = useState(false);
  const [search,setSearch] = useState("");
  const [cat,setCat] = useState("All");
  const [cart,setCart] = useState([]);
  const [editId,setEditId] = useState(null);
  const [editData,setEditData] = useState({});
  const [cartOpen,setCartOpen] = useState(false);
  const [step,setStep] = useState(0);
  const [cust,setCust] = useState({name:"",phone:"",email:"",street:"",suburb:"",city:"",province:"",postal:""});
  const [toast,setToast] = useState("");
  const [bulkPrice,setBulkPrice] = useState("");
  const [bulkCat,setBulkCat] = useState("All");
  const [payLoading,setPayLoading] = useState(false);
  const [payError,setPayError] = useState("");
  const [paymentStatus,setPaymentStatus] = useState(null);
  const [orderFilter,setOrderFilter] = useState("All");
  const [expandedOrder,setExpandedOrder] = useState(null);

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    if(params.get("payment")==="success") setPaymentStatus("success");
    if(params.get("payment")==="cancelled") setPaymentStatus("cancelled");
    // Load saved orders
    try { const saved = localStorage.getItem("tl_orders"); if(saved) setOrders(JSON.parse(saved)); } catch{}
  },[]);

  const saveOrders = (o) => { setOrders(o); try{localStorage.setItem("tl_orders",JSON.stringify(o));}catch{} };

  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(""),2500); };

  const filtered = useMemo(()=>products.filter(p=>
    (cat==="All"||p.category===cat)&&p.name.toLowerCase().includes(search.toLowerCase())&&p.stock
  ),[products,cat,search]);

  const addCart = p => {
    if(p.outOfStock) return;
    setCart(c=>{const ex=c.find(x=>x.id===p.id); return ex?c.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x):[...c,{...p,qty:1}];});
    showToast(p.name+" added to cart!");
  };

  const cartTotal = cart.reduce((s,x)=>s+x.price*x.qty,0);
  const cartCount = cart.reduce((s,x)=>s+x.qty,0);
  const closeCart = ()=>{setCartOpen(false);setStep(0);};

  const waMsg = encodeURIComponent(
    "Hi Trueleaf! I have just placed an order:\n\n"+
    cart.map(x=>"- "+x.qty+"x "+x.name+" @ R"+x.price+" = R"+(x.price*x.qty).toFixed(2)).join("\n")+
    "\n\nTotal: R"+cartTotal.toFixed(2)+
    "\n\nName: "+cust.name+"\nPhone: "+cust.phone+"\nEmail: "+cust.email+
    "\nAddress: "+cust.street+", "+cust.suburb+", "+cust.city+", "+cust.province+" "+cust.postal+
    "\n\nDelivery: Pudo Locker"
  );

  const handlePay = async()=>{
    // Save order before payment
    const newOrder = {
      id:"ORD-"+Date.now(),
      date:new Date().toLocaleString("en-ZA"),
      customer:{...cust},
      items:cart.map(x=>({name:x.name,qty:x.qty,price:x.price,image:x.image})),
      total:cartTotal,
      status:"Pending",
      pudoRef:"",
      notes:"",
    };
    const updated = [newOrder,...orders];
    saveOrders(updated);

    setPayLoading(true); setPayError("");
    try{
      const res = await fetch("/.netlify/functions/create-payment",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({amount:Math.round(cartTotal*100)})
      });
      const data = await res.json();
      if(data.redirectUrl){
        window.open("https://wa.me/"+WA+"?text="+waMsg,"_blank");
        window.location.href = data.redirectUrl;
      } else { setPayError("Payment could not be created. Please try again."); }
    } catch { setPayError("Something went wrong. Please try again."); }
    setPayLoading(false);
  };

  const updateOrderStatus = (id,status)=>{
    const updated = orders.map(o=>o.id===id?{...o,status}:o);
    saveOrders(updated);
  };
  const updateOrderField = (id,field,val)=>{
    const updated = orders.map(o=>o.id===id?{...o,[field]:val}:o);
    saveOrders(updated);
  };
  const deleteOrder = id=>{ const updated=orders.filter(o=>o.id!==id); saveOrders(updated); showToast("Order deleted"); };

  const handleAdminLogin=()=>{ if(adminPw===ADMIN_PW){setAdminAuth(true);setAdminErr(false);}else{setAdminErr(true);setAdminPw("");} };
  const startEdit=p=>{setEditId(p.id);setEditData({...p});};
  const saveEdit=()=>{setProducts(ps=>ps.map(p=>p.id===editId?{...p,...editData,price:Number(editData.price),cost:Number(editData.cost)}:p));setEditId(null);showToast("Saved!");};
  const applyBulk=()=>{if(!bulkPrice)return;setProducts(ps=>ps.map(p=>(bulkCat==="All"||p.category===bulkCat)?{...p,price:Number(bulkPrice)}:p));showToast("Bulk price applied!");setBulkPrice("");};
  const addNew=()=>{const n={id:Date.now(),name:"New Product",category:"Vegetable",cost:25,price:45,stock:true,outOfStock:false,image:""};setProducts(ps=>[n,...ps]);startEdit(n);};
  const del=id=>{setProducts(ps=>ps.filter(p=>p.id!==id));showToast("Deleted");};

  const iStyle={width:"100%",padding:"9px 12px",borderRadius:6,border:"1px solid "+C.border,fontSize:13,boxSizing:"border-box",background:C.cream,fontFamily:"Georgia,serif",color:C.text};
  const bGreen={border:"none",borderRadius:6,padding:"10px 18px",cursor:"pointer",background:C.darkGreen,color:"#fff",fontFamily:"Georgia,serif",fontSize:13,fontWeight:600};
  const bParch={border:"1px solid "+C.border,borderRadius:6,padding:"10px 18px",cursor:"pointer",background:C.parchment,color:C.brown,fontFamily:"Georgia,serif",fontSize:13,fontWeight:600};
  const modalStyle={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(30,20,5,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100};
  const boxStyle={background:C.cream,borderRadius:12,padding:"1.5rem",width:"min(500px,95vw)",maxHeight:"90vh",overflowY:"auto",border:"1px solid "+C.border};
  const pudoNote={background:"#eef5e8",border:"1px solid #c8ddb0",borderRadius:8,padding:"0.6rem 0.8rem",fontSize:12,color:C.darkGreen};

  const filteredOrders = orders.filter(o=>orderFilter==="All"||o.status===orderFilter);
  const orderCounts = {All:orders.length,Pending:orders.filter(o=>o.status==="Pending").length,Packed:orders.filter(o=>o.status==="Packed").length,Dispatched:orders.filter(o=>o.status==="Dispatched").length,Delivered:orders.filter(o=>o.status==="Delivered").length};

  if(paymentStatus==="success") return (
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{...boxStyle,textAlign:"center",maxWidth:480}}>
        <img src={LOGO} alt="Trueleaf Seeds" style={{maxWidth:220,width:"80%",marginBottom:"1rem"}} onError={e=>e.target.style.display="none"} />
        <div style={{fontSize:48,marginBottom:"0.5rem"}}>🌱</div>
        <h2 style={{color:C.darkGreen,margin:"0 0 0.5rem",fontSize:22}}>Thank you for your support!</h2>
        <p style={{color:C.textMid,fontSize:14,lineHeight:1.8,margin:"0 0 1rem"}}>Your payment was successful. We truly appreciate your support of heirloom seeds and sustainable growing in Africa.</p>
        <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:10,padding:"1rem",marginBottom:"1rem",fontSize:13,color:C.brown,lineHeight:1.8}}>
          <strong>What happens next?</strong><br/>We will confirm your order and arrange your <strong>Pudo locker delivery</strong> within 1 business day. You will receive an SMS from Pudo when your seeds are ready.<br/><br/>Questions? Call us on <strong>{PHONE}</strong>
        </div>
        <button style={{...bGreen,width:"100%",padding:12,marginBottom:8}} onClick={()=>{window.history.replaceState({},"","/");setPaymentStatus(null);setCart([]);setCust({name:"",phone:"",email:"",street:"",suburb:"",city:"",province:"",postal:""});}}>Continue shopping</button>
        <a href={"https://wa.me/"+WA} target="_blank" rel="noreferrer" style={{...bParch,display:"block",textAlign:"center",textDecoration:"none",padding:10}}>WhatsApp us</a>
      </div>
    </div>
  );

  if(paymentStatus==="cancelled") return (
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{...boxStyle,textAlign:"center",maxWidth:440}}>
        <div style={{fontSize:48,marginBottom:"0.5rem"}}>🌿</div>
        <h2 style={{color:C.darkGreen,margin:"0 0 0.5rem"}}>Payment cancelled</h2>
        <p style={{color:C.textMid,fontSize:14,lineHeight:1.7,margin:"0 0 1rem"}}>No worries — your cart is still waiting for you. Come back anytime!</p>
        <button style={{...bGreen,width:"100%",padding:12}} onClick={()=>{window.history.replaceState({},"","/");setPaymentStatus(null);}}>Back to store</button>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,color:C.text}}>
      {toast&&<div style={{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",background:C.darkGreen,color:"#fff",padding:"9px 20px",borderRadius:20,fontSize:13,zIndex:200,whiteSpace:"nowrap"}}>{toast}</div>}

      <a href={"https://wa.me/"+WA+"?text="+encodeURIComponent("Hi! I have a question about your seeds.")} target="_blank" rel="noreferrer"
        style={{position:"fixed",bottom:24,right:24,background:"#25D366",color:"#fff",borderRadius:"50%",width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,zIndex:150,textDecoration:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>
        💬
      </a>

      <div style={{background:C.darkGreen,color:"#e8d5a3",fontSize:12,textAlign:"center",padding:"5px",letterSpacing:"0.5px"}}>
        Organically Grown | Non-GMO | Open-Pollinated | Selected for African Growing Conditions
      </div>

      <nav style={{background:C.parchment,borderBottom:"2px solid "+C.border,padding:"0 1rem",display:"flex",alignItems:"center",gap:"0.5rem",minHeight:64,flexWrap:"wrap"}}>
        <div style={{flex:1,display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="Trueleaf Seeds" style={{height:48,objectFit:"contain"}} onError={e=>e.target.style.display="none"} />
          <div>
            <p style={{margin:0,fontSize:16,fontWeight:700,color:C.darkGreen,letterSpacing:"0.5px",lineHeight:1.1}}>TRUELEAF</p>
            <p style={{margin:0,fontSize:10,color:C.brown,letterSpacing:"2px",fontFamily:"system-ui,sans-serif"}}>SEED CO.</p>
          </div>
        </div>
        <button style={{...bParch,background:view==="store"?C.darkGreen:"transparent",color:view==="store"?"#fff":C.brown,border:"none",fontSize:13}} onClick={()=>setView("store")}>Shop</button>
        <button style={{...bParch,background:view==="admin"?C.darkGreen:"transparent",color:view==="admin"?"#fff":C.brown,border:"none",fontSize:13,position:"relative"}} onClick={()=>{setView("admin");setAdminAuth(false);setAdminPw("");}}>
          Admin {orderCounts.Pending>0&&<span style={{position:"absolute",top:-4,right:-4,background:"#e8762a",color:"#fff",borderRadius:"50%",width:16,height:16,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{orderCounts.Pending}</span>}
        </button>
        <button style={{...bGreen,display:"flex",alignItems:"center",gap:6}} onClick={()=>setCartOpen(true)}>
          🛒 Cart {cartCount>0&&<span style={{background:"#e8762a",color:"#fff",borderRadius:10,padding:"0 6px",fontSize:11,fontWeight:700}}>{cartCount}</span>}
        </button>
      </nav>

      {view==="store"&&<div>
        <div style={{background:C.parchment,borderBottom:"2px solid "+C.border,display:"flex",flexDirection:"column",alignItems:"center",padding:"1.5rem 1rem",textAlign:"center"}}>
          <img src={LOGO} alt="Trueleaf Seeds Logo" style={{maxWidth:380,width:"85%",objectFit:"contain",marginBottom:"0.5rem"}} onError={e=>e.target.style.display="none"} />
          <p style={{margin:0,fontSize:12,color:C.textLight,letterSpacing:"2px",fontFamily:"system-ui,sans-serif",textTransform:"uppercase"}}>Heirloom Seeds That Grow With You</p>
        </div>
        <div style={{background:"linear-gradient(160deg,"+C.darkGreen+" 0%,#3d6b28 100%)",color:"#fff",padding:"2.5rem 1.5rem",textAlign:"center"}}>
          <div style={{maxWidth:640,margin:"0 auto"}}>
            <p style={{color:C.parchmentDark,fontSize:12,letterSpacing:"2px",textTransform:"uppercase",margin:"0 0 0.5rem",fontFamily:"system-ui,sans-serif"}}>Heirloom · Open-Pollinated · Non-GMO</p>
            <h1 style={{fontSize:28,fontWeight:700,margin:"0 0 0.5rem",color:"#fff"}}>Seeds That Grow With You</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:15,margin:"0 0 1.25rem",lineHeight:1.7}}>Rooted in tradition. Grown for the future. Carefully selected heirloom varieties that thrive in African growing conditions.</p>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
              {["Organically grown","Save your own seeds","Support local growers","African adapted"].map(t=>(
                <span key={t} style={{fontSize:11,color:C.midGreen,background:"#eef5e8",border:"1px solid #c8ddb0",borderRadius:20,padding:"3px 10px"}}>✔ {t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{background:C.parchment,borderBottom:"1px solid "+C.border,padding:"1rem",display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          {[["1. Browse","260+ heirloom varieties"],["2. Checkout","Pay securely via YOCO"],["3. Pudo","Collect from your nearest locker"],["4. Grow","Save seeds year after year"]].map(([t,d])=>(
            <div key={t} style={{textAlign:"center",maxWidth:160}}>
              <p style={{margin:0,fontWeight:700,fontSize:13,color:C.darkGreen}}>{t}</p>
              <p style={{margin:"2px 0 0",fontSize:11,color:C.textMid}}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:8,padding:"0.75rem 1rem",flexWrap:"wrap",alignItems:"center",background:"#fff",borderBottom:"1px solid "+C.border}}>
          <input style={{...iStyle,flex:1,minWidth:140}} placeholder="Search seeds..." value={search} onChange={e=>setSearch(e.target.value)} />
          <select style={{...iStyle,width:"auto"}} value={cat} onChange={e=>setCat(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
          <span style={{fontSize:12,color:C.textLight}}>{filtered.length} products</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12,padding:"1rem"}}>
          {filtered.map(p=>{
            const cs=catStyle[p.category]||{bg:"#f0f0f0",color:"#555",icon:"🌿"};
            return (
              <div key={p.id} style={{background:"#fff",borderRadius:10,border:"1px solid "+C.border,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <div style={{width:"100%",height:130,background:cs.bg,overflow:"hidden",flexShrink:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {p.image&&<img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.style.display="none";}} />}
                  {!p.image&&<span style={{fontSize:36}}>{cs.icon}</span>}
                  {p.outOfStock&&<div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{background:"#c00",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:20}}>OUT OF STOCK</span></div>}
                </div>
                <div style={{padding:"10px 12px 12px",flex:1,display:"flex",flexDirection:"column"}}>
                  <p style={{margin:"0 0 5px",fontWeight:700,fontSize:13,color:C.text,lineHeight:1.3}}>{p.name}</p>
                  <span style={{display:"inline-block",padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:600,marginBottom:6,background:cs.bg,color:cs.color}}>{cs.icon} {p.category}</span>
                  <p style={{fontSize:11,color:C.textLight,margin:"0 0 6px",fontStyle:"italic"}}>Open-pollinated · Heirloom</p>
                  <p style={{fontSize:17,fontWeight:700,color:p.outOfStock?"#999":C.darkGreen,margin:"auto 0 8px"}}>R{p.price.toFixed(2)}</p>
                  <button style={{...bGreen,padding:"8px",fontSize:12,width:"100%",opacity:p.outOfStock?0.5:1,background:p.outOfStock?"#999":C.darkGreen,cursor:p.outOfStock?"not-allowed":"pointer"}} onClick={()=>addCart(p)} disabled={p.outOfStock}>
                    {p.outOfStock?"Out of stock":"+ Add to cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{background:C.darkGreen,color:"#fff",padding:"2.5rem 1.5rem",marginTop:"1rem"}}>
          <h2 style={{textAlign:"center",fontSize:20,fontWeight:700,margin:"0 0 1.5rem",color:C.parchmentDark}}>Why Choose Trueleaf Seeds?</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16,maxWidth:720,margin:"0 auto"}}>
            {[["Better Flavour","Grown for taste, not transport."],["Save Your Seeds","Harvest and replant year after year."],["Support Biodiversity","Preserve rare traditional varieties."],["Locally Adapted","Sourced from African growers."]].map(([t,d])=>(
              <div key={t} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:"1rem",border:"1px solid rgba(255,255,255,0.1)"}}>
                <p style={{margin:"0 0 4px",fontWeight:700,fontSize:13,color:C.parchmentDark}}>✔ {t}</p>
                <p style={{margin:0,fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.5}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <footer style={{background:C.brown,color:C.parchment,padding:"1.5rem",textAlign:"center",fontSize:12}}>
          <p style={{margin:"0 0 6px",fontSize:13,fontWeight:700}}>TRUELEAF SEEDS</p>
          <p style={{margin:"0 0 4px",opacity:.8}}>📞 <a href={"tel:"+PHONE} style={{color:C.parchmentDark}}>{PHONE}</a> | ✉️ <a href={"mailto:"+EMAIL} style={{color:C.parchmentDark}}>{EMAIL}</a></p>
          <p style={{margin:"0 0 8px",opacity:.7}}><a href={"https://wa.me/"+WA} target="_blank" rel="noreferrer" style={{color:"#90EE90"}}>💬 WhatsApp us</a></p>
          <p style={{margin:"8px 0 0",opacity:.5,fontSize:10}}>All seeds are organically grown, open-pollinated and non-GMO. © 2026 Trueleaf Seeds. All rights reserved.</p>
        </footer>
      </div>}

      {view==="admin"&&(
        !adminAuth?(
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"}}>
            <div style={{background:C.cream,borderRadius:12,padding:"1.5rem",width:"min(340px,95vw)",border:"1px solid "+C.border,textAlign:"center"}}>
              <div style={{fontSize:36,marginBottom:"0.5rem"}}>🔒</div>
              <h3 style={{margin:"0 0 0.25rem",color:C.darkGreen}}>Admin access</h3>
              <p style={{fontSize:13,color:C.textLight,margin:"0 0 1rem"}}>Enter your password to continue</p>
              <input style={{...iStyle,textAlign:"center",letterSpacing:"2px",marginBottom:8}} type="password" placeholder="Password" value={adminPw} onChange={e=>setAdminPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAdminLogin()} />
              {adminErr&&<p style={{fontSize:12,color:"#c00",margin:"0 0 8px"}}>Incorrect password. Please try again.</p>}
              <button style={{...bGreen,width:"100%",padding:"10px"}} onClick={handleAdminLogin}>Login</button>
            </div>
          </div>
        ):(
          <div style={{padding:"1.25rem",maxWidth:960,margin:"0 auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
              <h2 style={{fontSize:18,fontWeight:700,color:C.darkGreen,margin:0}}>Admin panel</h2>
              <button style={{...bParch,fontSize:12,padding:"6px 14px"}} onClick={()=>setAdminAuth(false)}>Logout</button>
            </div>

            {/* Tabs */}
            <div style={{display:"flex",gap:4,marginBottom:"1.5rem",borderBottom:"2px solid "+C.border}}>
              {[["orders","📦 Orders",""],["products","🌱 Products",""],["bulk","💰 Pricing",""]].map(([tab,label])=>(
                <button key={tab} style={{...bParch,border:"none",borderBottom:adminTab===tab?"3px solid "+C.darkGreen:"3px solid transparent",borderRadius:"6px 6px 0 0",background:adminTab===tab?C.cream:"transparent",color:adminTab===tab?C.darkGreen:C.textLight,padding:"8px 16px",fontSize:13,fontWeight:adminTab===tab?700:400,position:"relative"}} onClick={()=>setAdminTab(tab)}>
                  {label}
                  {tab==="orders"&&orderCounts.Pending>0&&<span style={{marginLeft:6,background:"#e8762a",color:"#fff",borderRadius:10,padding:"1px 6px",fontSize:10,fontWeight:700}}>{orderCounts.Pending}</span>}
                </button>
              ))}
            </div>

            {/* ORDERS TAB */}
            {adminTab==="orders"&&<div>
              <div style={{display:"flex",gap:6,marginBottom:"1rem",flexWrap:"wrap"}}>
                {Object.entries(orderCounts).map(([status,count])=>(
                  <button key={status} style={{...bParch,padding:"5px 12px",fontSize:12,background:orderFilter===status?C.darkGreen:C.parchment,color:orderFilter===status?"#fff":C.brown}} onClick={()=>setOrderFilter(status)}>
                    {status} <span style={{opacity:.7}}>({count})</span>
                  </button>
                ))}
              </div>
              {filteredOrders.length===0&&<div style={{textAlign:"center",padding:"3rem",color:C.textLight}}><p style={{fontSize:32,margin:"0 0 0.5rem"}}>📭</p><p>No orders yet</p></div>}
              {filteredOrders.map(o=>{
                const sc = STATUS_COLORS[o.status]||STATUS_COLORS.Pending;
                const isExp = expandedOrder===o.id;
                return (
                  <div key={o.id} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:10,marginBottom:10,overflow:"hidden"}}>
                    <div style={{padding:"12px 14px",display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>setExpandedOrder(isExp?null:o.id)}>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                          <p style={{margin:0,fontWeight:700,fontSize:14,color:C.text}}>{o.customer.name}</p>
                          <span style={{fontSize:11,padding:"2px 8px",borderRadius:10,background:sc.bg,color:sc.color,border:"1px solid "+sc.border,fontWeight:600}}>{o.status}</span>
                          <span style={{fontSize:11,color:C.textLight}}>{o.id}</span>
                        </div>
                        <p style={{margin:"2px 0 0",fontSize:12,color:C.textLight}}>{o.date} · {o.items.length} item{o.items.length!==1?"s":""} · <strong style={{color:C.darkGreen}}>R{o.total.toFixed(2)}</strong> · 📞 {o.customer.phone}</p>
                      </div>
                      <span style={{fontSize:18,color:C.textLight}}>{isExp?"▲":"▼"}</span>
                    </div>
                    {isExp&&<div style={{borderTop:"1px solid "+C.border,padding:"14px"}}>
                      {/* Items */}
                      <div style={{background:C.parchment,borderRadius:8,padding:"10px",marginBottom:12}}>
                        {o.items.map((it,i)=>(
                          <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",borderBottom:i<o.items.length-1?"1px solid "+C.border:"none"}}>
                            {it.image&&<img src={it.image} alt={it.name} style={{width:32,height:32,objectFit:"cover",borderRadius:4}} onError={e=>e.target.style.display="none"} />}
                            <span style={{flex:1,fontSize:13}}>{it.qty}× {it.name}</span>
                            <span style={{fontSize:13,fontWeight:600,color:C.darkGreen}}>R{(it.price*it.qty).toFixed(2)}</span>
                          </div>
                        ))}
                        <div style={{borderTop:"1px solid "+C.border,marginTop:6,paddingTop:6,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:14}}>
                          <span>Total</span><span style={{color:C.darkGreen}}>R{o.total.toFixed(2)}</span>
                        </div>
                      </div>
                      {/* Customer details */}
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12,fontSize:12,color:C.textMid}}>
                        <div><strong>📧</strong> {o.customer.email}</div>
                        <div><strong>📞</strong> {o.customer.phone}</div>
                        <div style={{gridColumn:"1/-1"}}><strong>📍</strong> {o.customer.street}, {o.customer.suburb}, {o.customer.city}, {o.customer.province} {o.customer.postal}</div>
                      </div>
                      {/* Status */}
                      <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
                        {["Pending","Packed","Dispatched","Delivered"].map(s=>(
                          <button key={s} style={{...bParch,padding:"5px 12px",fontSize:12,background:o.status===s?STATUS_COLORS[s].bg:C.parchment,color:o.status===s?STATUS_COLORS[s].color:C.brown,border:"1px solid "+(o.status===s?STATUS_COLORS[s].border:C.border),fontWeight:o.status===s?700:400}} onClick={()=>updateOrderStatus(o.id,s)}>{s}</button>
                        ))}
                      </div>
                      {/* Pudo ref */}
                      <div style={{display:"flex",gap:8,marginBottom:10}}>
                        <input style={{...iStyle,flex:1}} placeholder="Pudo tracking reference..." value={o.pudoRef} onChange={e=>updateOrderField(o.id,"pudoRef",e.target.value)} />
                      </div>
                      {/* Notes */}
                      <textarea style={{...iStyle,height:60,resize:"vertical"}} placeholder="Internal notes..." value={o.notes} onChange={e=>updateOrderField(o.id,"notes",e.target.value)} />
                      {/* Actions */}
                      <div style={{display:"flex",gap:8,marginTop:10}}>
                        <a href={"https://wa.me/27"+o.customer.phone.replace(/\D/g,"").replace(/^0/,"")} target="_blank" rel="noreferrer" style={{...bGreen,textDecoration:"none",background:"#25D366",padding:"7px 14px",fontSize:12}}>💬 WhatsApp</a>
                        <a href={"mailto:"+o.customer.email} style={{...bParch,textDecoration:"none",padding:"7px 14px",fontSize:12}}>✉️ Email</a>
                        <button style={{...bGreen,background:"#b00",marginLeft:"auto",padding:"7px 12px",fontSize:12}} onClick={()=>deleteOrder(o.id)}>Delete</button>
                      </div>
                    </div>}
                  </div>
                );
              })}
            </div>}

            {/* PRODUCTS TAB */}
            {adminTab==="products"&&<div>
              <button style={{...bGreen,background:"#2d5a8e",marginBottom:"1rem"}} onClick={addNew}>+ Add product</button>
              {products.map(p=>(
                <div key={p.id} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"9px 12px",display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                  {p.image&&<img src={p.image} alt={p.name} style={{width:40,height:40,objectFit:"cover",borderRadius:6,flexShrink:0}} onError={e=>e.target.style.display="none"} />}
                  <div style={{flex:1,minWidth:0}}>
                    <p style={{margin:0,fontWeight:600,fontSize:13,color:C.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</p>
                    <p style={{margin:0,fontSize:11,color:C.textLight}}>{p.category} · R{p.price} · Profit: R{p.price-p.cost}</p>
                  </div>
                  <button style={{fontSize:11,padding:"3px 8px",borderRadius:8,border:"none",cursor:"pointer",background:p.outOfStock?"#c00":"#eef5e8",color:p.outOfStock?"#fff":C.midGreen,fontWeight:600}} onClick={()=>setProducts(ps=>ps.map(x=>x.id===p.id?{...x,outOfStock:!x.outOfStock}:x))}>
                    {p.outOfStock?"In stock":"Out of stock"}
                  </button>
                  <span style={{fontSize:11,padding:"2px 8px",borderRadius:10,background:p.stock?"#eef5e8":"#fce8e8",color:p.stock?C.midGreen:"#c00"}}>{p.stock?"Live":"Hidden"}</span>
                  <button style={{...bGreen,padding:"5px 12px",fontSize:12}} onClick={()=>startEdit(p)}>Edit</button>
                  <button style={{...bGreen,background:"#b00",padding:"5px 9px",fontSize:12}} onClick={()=>del(p.id)}>x</button>
                </div>
              ))}
            </div>}

            {/* BULK PRICING TAB */}
            {adminTab==="bulk"&&<div>
              <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:10,padding:"1.25rem",maxWidth:480}}>
                <h3 style={{margin:"0 0 1rem",color:C.darkGreen,fontSize:15}}>Bulk price update</h3>
                <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:4}}>Category</label>
                <select style={{...iStyle,marginBottom:12}} value={bulkCat} onChange={e=>setBulkCat(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
                <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:4}}>New retail price (R)</label>
                <input style={{...iStyle,marginBottom:12}} type="number" placeholder="e.g. 50" value={bulkPrice} onChange={e=>setBulkPrice(e.target.value)} />
                <button style={{...bGreen,width:"100%",padding:12}} onClick={applyBulk}>Apply to {bulkCat==="All"?products.length:products.filter(p=>p.category===bulkCat).length} products</button>
              </div>
            </div>}
          </div>
        )
      )}

      {editId&&(
        <div style={modalStyle} onClick={e=>e.target===e.currentTarget&&setEditId(null)}>
          <div style={boxStyle}>
            <h3 style={{margin:"0 0 1rem",color:C.darkGreen}}>Edit product</h3>
            {[["Name","name","text"],["Cost price (R)","cost","number"],["Retail price (R)","price","number"],["Image URL","image","text"]].map(([label,key,type])=>(
              <div key={key}>
                <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:10}}>{label}</label>
                <input style={iStyle} type={type} value={editData[key]||""} onChange={e=>setEditData(d=>({...d,[key]:e.target.value}))} />
              </div>
            ))}
            <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:10}}>Category</label>
            <select style={iStyle} value={editData.category||""} onChange={e=>setEditData(d=>({...d,category:e.target.value}))}>
              {CATS.filter(c=>c!=="All").map(c=><option key={c}>{c}</option>)}
            </select>
            {editData.price&&editData.cost&&<p style={{fontSize:11,color:C.textLight,margin:"4px 0 0"}}>Profit: R{editData.price-editData.cost} per pack</p>}
            <label style={{fontSize:12,color:C.textMid,display:"flex",alignItems:"center",gap:6,marginTop:10,cursor:"pointer"}}>
              <input type="checkbox" checked={editData.stock||false} onChange={e=>setEditData(d=>({...d,stock:e.target.checked}))} /> Show in store
            </label>
            <label style={{fontSize:12,color:"#c00",display:"flex",alignItems:"center",gap:6,marginTop:8,cursor:"pointer"}}>
              <input type="checkbox" checked={editData.outOfStock||false} onChange={e=>setEditData(d=>({...d,outOfStock:e.target.checked}))} /> Mark as out of stock
            </label>
            <div style={{display:"flex",gap:8,marginTop:14}}>
              <button style={{...bParch,flex:1}} onClick={()=>setEditId(null)}>Cancel</button>
              <button style={{...bGreen,flex:1}} onClick={saveEdit}>Save changes</button>
            </div>
          </div>
        </div>
      )}

      {cartOpen&&(
        <div style={modalStyle} onClick={e=>e.target===e.currentTarget&&closeCart()}>
          <div style={boxStyle}>
            {step===0&&<div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                <h3 style={{margin:0,color:C.darkGreen}}>Your cart</h3>
                <button style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:C.textLight}} onClick={closeCart}>✕</button>
              </div>
              {cart.length===0?<p style={{color:C.textLight,textAlign:"center",padding:"2rem 0"}}>Your cart is empty</p>:(
                <div>
                  {cart.map(x=>(
                    <div key={x.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid "+C.border}}>
                      {x.image&&<img src={x.image} alt={x.name} style={{width:36,height:36,objectFit:"cover",borderRadius:6}} onError={e=>e.target.style.display="none"} />}
                      <span style={{flex:1,fontSize:13}}>{x.name}</span>
                      <button style={{background:"none",border:"1px solid "+C.border,borderRadius:5,width:24,height:24,cursor:"pointer"}} onClick={()=>setCart(c=>c.map(i=>i.id===x.id?{...i,qty:Math.max(0,i.qty-1)}:i).filter(i=>i.qty>0))}>-</button>
                      <span style={{width:18,textAlign:"center",fontSize:13}}>{x.qty}</span>
                      <button style={{background:"none",border:"1px solid "+C.border,borderRadius:5,width:24,height:24,cursor:"pointer"}} onClick={()=>setCart(c=>c.map(i=>i.id===x.id?{...i,qty:i.qty+1}:i))}>+</button>
                      <span style={{minWidth:60,textAlign:"right",fontWeight:700,color:C.darkGreen,fontSize:13}}>R{(x.price*x.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0 0",fontWeight:700,fontSize:15}}>
                    <span>Total</span><span style={{color:C.darkGreen}}>R{cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{...pudoNote,marginTop:10}}>📦 Delivery via Pudo Locker — collect from a locker near you.</div>
                  <div style={{display:"flex",gap:8,marginTop:12}}>
                    <button style={{...bParch,flex:1}} onClick={closeCart}>Cancel</button>
                    <button style={{...bGreen,flex:1}} onClick={()=>setStep(1)}>Checkout →</button>
                  </div>
                </div>
              )}
            </div>}
            {step===1&&<div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.25rem"}}>
                <h3 style={{margin:0,color:C.darkGreen}}>Your details</h3>
                <button style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:C.textLight}} onClick={closeCart}>✕</button>
              </div>
              <p style={{fontSize:12,color:C.textLight,margin:"0 0 0.75rem"}}>So we can confirm and arrange your Pudo delivery</p>
              {[["Full name","name","text","Jane Smith"],["Phone / WhatsApp","phone","tel","+27 82 000 0000"],["Email address","email","email","you@example.com"]].map(([l,k,t,ph])=>(
                <div key={k}>
                  <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:10}}>{l}</label>
                  <input style={iStyle} type={t} placeholder={ph} value={cust[k]} onChange={e=>setCust(d=>({...d,[k]:e.target.value}))} />
                </div>
              ))}
              <p style={{fontSize:12,fontWeight:600,color:C.darkGreen,margin:"14px 0 4px"}}>Delivery address</p>
              {[["Street address","street","123 Main Street"],["Suburb","suburb","Sandton"],["City","city","Johannesburg"],["Province","province","Gauteng"],["Postal code","postal","2196"]].map(([l,k,ph])=>(
                <div key={k}>
                  <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:8}}>{l}</label>
                  <input style={iStyle} placeholder={ph} value={cust[k]} onChange={e=>setCust(d=>({...d,[k]:e.target.value}))} />
                </div>
              ))}
              <div style={{...pudoNote,marginTop:12}}>📦 We will send your seeds to the nearest Pudo locker. You will receive an SMS when ready.</div>
              <div style={{display:"flex",gap:8,marginTop:14}}>
                <button style={{...bParch,flex:1}} onClick={()=>setStep(0)}>← Back</button>
                <button style={{...bGreen,flex:1}} onClick={()=>setStep(2)} disabled={!cust.name||!cust.phone||!cust.street}>Review order →</button>
              </div>
            </div>}
            {step===2&&<div>
              <h3 style={{margin:"0 0 0.75rem",color:C.darkGreen}}>Review & pay</h3>
              <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:8,padding:"0.75rem",marginBottom:"0.75rem"}}>
                {cart.map(x=>(
                  <div key={x.id} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"3px 0"}}>
                    <span>{x.qty}× {x.name}</span><span style={{fontWeight:600}}>R{(x.price*x.qty).toFixed(2)}</span>
                  </div>
                ))}
                <div style={{borderTop:"1px solid "+C.border,marginTop:6,paddingTop:6,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:14}}>
                  <span>Total</span><span style={{color:C.darkGreen}}>R{cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <div style={{background:"#fff8e8",border:"1px solid #e8d08a",borderRadius:8,padding:"0.8rem",fontSize:12,color:C.brown,marginBottom:"0.9rem",lineHeight:1.7}}>
                Clicking Pay now opens a secure YOCO payment page with the exact amount pre-filled. Your order is saved automatically and a WhatsApp message will be sent to us.
              </div>
              {payError&&<p style={{fontSize:12,color:"#c00",margin:"0 0 8px"}}>{payError}</p>}
              <button style={{...bGreen,width:"100%",padding:12,fontSize:14,marginBottom:8,opacity:payLoading?0.7:1}} onClick={handlePay} disabled={payLoading}>
                {payLoading?"Saving order & opening payment...":"Pay R"+cartTotal.toFixed(2)+" securely via YOCO →"}
              </button>
              <button style={{...bParch,width:"100%"}} onClick={()=>setStep(1)}>← Back</button>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
}
