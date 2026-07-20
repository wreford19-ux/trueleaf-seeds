import { useState, useMemo, useEffect } from "react";

const WA = "27832309883";
const EMAIL = "wreford19@gmail.com";
const PHONE = "+27 83 230 9883";
const LOGO = "https://i.ibb.co/Qj1wGkfJ/Trueleaf-Seeds-Logo.jpg";
const ADMIN_PW = "Wreford99#";
const PUDO_FEE = 50;
const PACKAGING_FEE = 15;

const ALL_CATS = ["Capsicums","Crop Cover & Lawns","Flowers","Fruit","Gourds","Herbs","Microgreens","Peanuts","Sprouts","Trees","Vegetables"];


const RAW=[
  ["CCBJ","Capsicum Bhut Jolokia Red","Capsicums","https://i.ibb.co/k2F22zB4/Capsicum-Bhut-Jolokia-Red.png"],["CCBE","Capsicum Bird's Eye","Capsicums","https://i.ibb.co/v4Jc3FX3/Capsicum-Birds-Eye.png"],["CCBC","Capsicum Bishop's Crown","Capsicums","https://i.ibb.co/1Y2Tfc7s/Capsicum-Bishops-Crown.png"],
  ["CCWo","Capsicum California Wonder","Capsicums","https://i.ibb.co/0jPmWqw8/Capsicum-California-Wonder.png"],["CCCR","Capsicum Carolina Reaper","Capsicums","https://i.ibb.co/NnfyWsRN/Capsicum-Carolina-Reaper.png"],["CCCa","Capsicum Cayenne","Capsicums","https://i.ibb.co/Kczfvgwp/Capsicum-Cayenne.png"],
  ["CCCH","Capsicum Chocolate Habanero","Capsicums","https://i.ibb.co/k2kFY3TL/Capsicum-Chocolate-Habanero.png"],["CCHO","Capsicum Habanero Orange","Capsicums","https://i.ibb.co/CsS3g3Sm/Capsicum-Habanero-Orange.png"],["CCJa","Capsicum Jalapeno","Capsicums","https://i.ibb.co/JFSsrJdM/Capsicum-Jalapeno.png"],
  ["CCPa","Capsicum Paprika","Capsicums","https://i.ibb.co/7tTwzg8F/Capsicum-Paprika.png"],["CCPe","Capsicum Peppadew","Capsicums","https://i.ibb.co/HfXtxQnw/Capsicum-Peppadew.png"],["CCPo","Capsicum Polombo","Capsicums","https://i.ibb.co/GvJ9W5cf/Capsicum-Polombo.png"],
  ["CCST","Capsicum Scorpion Tongue Black","Capsicums","https://i.ibb.co/3Y9LPxHc/Capsicum-Scorpion-Tongue-Black.png"],["CCSB","Capsicum Scotch Bonnet","Capsicums","https://i.ibb.co/MxS84vYM/Capsicum-Scotch-Bonnet.png"],["CCTM","Capsicum Trinidad Moruga Scorpion","Capsicums","https://i.ibb.co/WW7dRQr7/Capsicum-Trinidad-Scropion-Moruga.png"],
  ["LDWL","Dichondra Wonder Lawn","Crop Cover & Lawns","https://i.ibb.co/zHsTVWGg/Dichondra-Wonder-Lawn.png"],["CCIH","Industrial Hemp","Crop Cover & Lawns","https://i.ibb.co/C5TS7dDh/Hemp-Industrial-Hemp.png"],["LLML","LM Lawn","Crop Cover & Lawns","https://i.ibb.co/VYzw44GQ/Lawn-LM-Lawn.png"],
  ["CCLE","Loofah European","Crop Cover & Lawns","https://i.ibb.co/WNYNHGSH/Loofah-European.png"],["LPGr","Pets Grass","Crop Cover & Lawns","https://i.ibb.co/9H3VPWt9/Grass-Pets-Grass.png"],["CPPC","Poultry Pasture Cool Season Mix","Crop Cover & Lawns",""],
  ["CPPCa","Poultry Pasture Cool Season Mix 100g","Crop Cover & Lawns",""],["CPPCd","Poultry Pasture Cool Season Mix 1kg","Crop Cover & Lawns",""],["CPPCb","Poultry Pasture Cool Season Mix 250g","Crop Cover & Lawns",""],
  ["CPPCc","Poultry Pasture Cool Season Mix 500g","Crop Cover & Lawns",""],["CPPW","Poultry Pasture Warm Season Mix","Crop Cover & Lawns","https://i.ibb.co/WrGtzbR/Pasture-Mix-Poultry-Pasture-Mix.jpg"],["CPPWa","Poultry Pasture Warm Season Mix 100g","Crop Cover & Lawns",""],
  ["CPPWd","Poultry Pasture Warm Season Mix 1kg","Crop Cover & Lawns",""],["CPPWb","Poultry Pasture Warm Season Mix 250g","Crop Cover & Lawns",""],["CPPWc","Poultry Pasture Warm Season Mix 500g","Crop Cover & Lawns",""],
  ["CCRs","Rapeseed","Crop Cover & Lawns","https://i.ibb.co/bRYYtDpd/Brassica-Rape-Seed.png"],["CTVG","Tobacco Virginia Gold","Crop Cover & Lawns","https://i.ibb.co/9kPRRr7S/Tobacco.jpg"],["FABl","Agapanthus Blue","Flowers","https://i.ibb.co/dJgKb5xt/Agapanthus-Blue.png"],
  ["FAWh","Alyssum White","Flowers","https://i.ibb.co/FLpSBLhT/Alyssum-White.png"],["FAMa","Ammi Majus","Flowers","https://i.ibb.co/C3w0bfNZ/Ammi-Majus.png"],["Faqu","Aquilegia","Flowers","https://i.ibb.co/WvYrQYTj/Aquilegia-Mix.png"],
  ["FBal","Balsam","Flowers","https://i.ibb.co/qMSxGXXS/Balsam-Mix.png"],["FCMi","Calendula Mix","Flowers","https://i.ibb.co/s9TXHfXn/Calendula-Mix.png"],["FCel","Celosia","Flowers","https://i.ibb.co/rGyZnwN1/Celosia-Mix.png"],
  ["FCSD","Cineraria Silverdust Dusty Miller","Flowers","https://i.ibb.co/HTjBW5hG/Dusty-Miller-Cinematic-Silverdust.png"],["FCle","Cleome","Flowers","https://i.ibb.co/mFPk2Lzd/Cleome-Mix.png"],["FCBB","Cornflower Blue Boy","Flowers","https://i.ibb.co/jkLhqR4Z/Cornflower-Blue-Boy.png"],
  ["FCLa","Cosmos Laced","Flowers","https://i.ibb.co/9mdB4J5k/Cosmos-Laced.png"],["FCSS","Cosmos Sea Shell Pink","Flowers","https://i.ibb.co/r25zRzVK/Cosmos-Seashell-Pink.png"],["FCSM","Cosmos Sensation Mix","Flowers","https://i.ibb.co/whymqWK6/Cosmos-Sensation-Mix.png"],
  ["FCVe","Cosmos Veldfire","Flowers","https://i.ibb.co/RpL0R9wL/Cosmos-Veldfire.png"],["FDah","Dahlia","Flowers","https://i.ibb.co/tMqdkvvk/Dahlia-Mix.png"],["FDel","Delphinium","Flowers","https://i.ibb.co/gbtpCfd1/Delphinium.png"],
  ["FDMi","Dianthus","Flowers","https://i.ibb.co/Pz5tXS98/Dianthus-Mix.png"],["FDAN","Dimorphotheca African/Namakwal. Daisy","Flowers","https://i.ibb.co/jcN8PrZ/Dimorphotheca-African-Namaqualand-Daisy.png"],["FEWh","Erigeron White","Flowers","https://i.ibb.co/Gfh7wT8w/Erigeron-White.png"],
  ["FFFM","Foxglove Mix","Flowers","https://i.ibb.co/23HXfz58/Foxglove-Foxy-Mix.png"],["FFLa","French Lavender","Flowers","https://i.ibb.co/8L1QjnBn/Lavender-French.png"],["FHSa","Hibiscus Sabdariffa","Flowers","https://i.ibb.co/b59sMBtf/Hibiscus-Sabdariffa-Roselle.png"],
  ["FHMa","Hollyhock Maroon","Flowers","https://i.ibb.co/HTCcpn4P/Hollyhock-Maroon.png"],["FHMi","Hollyhock Mix","Flowers","https://i.ibb.co/YB1KpJ5C/Hollyhock-Mix.png"],["FHWh","Hollyhock White","Flowers","https://i.ibb.co/TBGqwTJy/Hollyhock-White.png"],
  ["FKPr","King Protea","Flowers","https://i.ibb.co/3mH19z9K/Protea-King.png"],["FLar","Larkspur","Flowers","https://i.ibb.co/Kj1XLS12/Larkspur-Mix.png"],["FLob","Lobelia","Flowers","https://i.ibb.co/848RfBzS/Lobelia.png"],
  ["FMAf","Marigold African","Flowers","https://i.ibb.co/sdZMSpJL/Marigold-African.png"],["FMBR","Marigold Bronza Red","Flowers","https://i.ibb.co/fzsw7w5Q/Marigold-Bronze-Red.png"],["FMYe","Marigold Yellow","Flowers","https://i.ibb.co/mrNvHnHJ/Marigold-Yellow.png"],
  ["FMBV","Mesembryanthemum Bokbaai Vygie","Flowers","https://i.ibb.co/dwyYSjj2/Mesembryanthem-Bokbaai-Vygie-Mix.png"],["FNAM","Nasturtium Alaska Mix","Flowers","https://i.ibb.co/svvLgHBG/Nasturtium-Alaska-Mix.png"],["FOst","Osteospermum","Flowers","https://i.ibb.co/9344ypMX/Osteospermum-Mix.png"],
  ["FPBD","Poppy Black Dragon","Flowers","https://i.ibb.co/Xxq6k48Q/Poppy-Black-Dragon.png"],["FPCa","Poppy California","Flowers","https://i.ibb.co/67PF5ZXW/Poppy-California.png"],["FPFR","Poppy Flanders Red","Flowers","https://i.ibb.co/v4g1SxWb/Poppy-Flanders-Red.png"],
  ["FPMi","Poppy Mix","Flowers","https://i.ibb.co/ZRwzB1BW/Poppy-Mix.png"],["FPPL","Poppy Peony Lavender","Flowers","https://i.ibb.co/tMjbRDh4/Poppy-Peony-Lavender.png"],["FPPM","Poppy Peony Mix","Flowers","https://i.ibb.co/xtyD4sMM/Poppy-Peony-Mix.png"],
  ["FPPPi","Poppy Peony Pink","Flowers","https://i.ibb.co/7FTD9cS/Poppy-Peony-Pink.png"],["FPPPu","Poppy Peony Purple","Flowers","https://i.ibb.co/pG2vwcd/Poppy-Peony-Purple.png"],["FPPR","Poppy Peony Red","Flowers","https://i.ibb.co/nZch0DZ/Poppy-Peony-Red.png"],
  ["FPPRe","Poppy Pepperbox Red","Flowers","https://i.ibb.co/Q38FGJtQ/Poppy-Pepperbox-Red.png"],["FPPi","Poppy Pink","Flowers","https://i.ibb.co/LXQbZXdn/Poppy-Pink.png"],["FPPu","Poppy Purple","Flowers","https://i.ibb.co/p6srV4F5/Poppy-Purple.png"],
  ["FPWh","Poppy White","Flowers","https://i.ibb.co/RTjmPqBQ/Poppy-White.png"],["FPor","Portulaca","Flowers","https://i.ibb.co/xrVyKrM/Portulaca-Mix.png"],["FRud","Rudbeckia","Flowers","https://i.ibb.co/4Zkv6xGF/Rudbeckia.png"],
  ["FSTT","Snapdragon Tom Thumb Mix","Flowers","https://i.ibb.co/Y7BcQtqf/Snapdragon-Tom-Thumb-Mix.png"],["FSNi","Strelitzia Nicolai","Flowers","https://i.ibb.co/qX03DMJ/Strelitzia-Nicoli.png"],["FSRe","Strelitzia Reginae","Flowers","https://i.ibb.co/39Q2fXvG/Strelitzia-Regina.png"],
  ["FSMM","Summer Meadow Mix","Flowers","https://i.ibb.co/NhnrHKx/Wildflower-Summer-Meadows-Mix.png"],["FSBA","Sunflower Burnt Amber","Flowers","https://i.ibb.co/7xKLW1Tv/Sunflower-Burnt-Amber.png"],["FSES","Sunflower Evening Star","Flowers","https://i.ibb.co/VWtnfqZV/Sunflower-Evening-Star.png"],
  ["FSMi","Sunflower Mixed","Flowers","https://i.ibb.co/Sw4mhsST/Sunflower-Mix.png"],["FSNO","Sunflower Nigerian Oil","Flowers","https://i.ibb.co/LDqGvfdF/Sunflower-Nigerian-Oil.png"],["FSTa","Sunflower Tarahumara","Flowers","https://i.ibb.co/G4SwDqYQ/Sunflower-Tarahumara.png"],
  ["FSTE","Sunflower Tiger Eye","Flowers","https://i.ibb.co/Fb5x5PpM/Sunflower-Tiger-Eye.png"],["FSTi","Sunflower Titan","Flowers","https://i.ibb.co/fd48jsZ6/Sunflower-Titan.png"],["FSWM","Sweet William Mix","Flowers","https://i.ibb.co/jvCC8crk/Sweet-William-Mix.png"],
  ["FTul","Tulbaghia","Flowers","https://i.ibb.co/YJmdzv7/Tulbaghia.png"],["FVio","Viola","Flowers","https://i.ibb.co/ynsPzxyN/Viola.png"],["FWMM","Winter Meadow Mix","Flowers","https://i.ibb.co/5xg20csY/wildflower-Winter-Meadow-Mix.png"],
  ["FYPP","Yellow Pinchushion Protea","Flowers","https://i.ibb.co/Tx8jk7wk/Protea-Yellow-Pincushion.png"],["FZMi","Zinnia Mix","Flowers","https://i.ibb.co/cSQc0P9V/Zinnia-Mix.png"],["FCGo","Cape Gooseberry","Fruit","https://i.ibb.co/mCdkdQRJ/Cape-Gooseberry.png"],
  ["FGPP","Green Prickly Pear","Fruit","https://i.ibb.co/YT0gnf2H/Green-Prickly-Pear.png"],["FHuc","Huckleberry","Fruit","https://i.ibb.co/pB9vjJYN/Huckleberry.png"],["FMHG","Melon Honeydew Green","Fruit","https://i.ibb.co/nswLFSKk/Melon-Honeydew-Green.png"],
  ["FMHY","Melon Honeydew Yellow","Fruit","https://i.ibb.co/FGv3SzQ/Melon-Honeydew-Yellow.png"],["FMMM","Melon Minnesota Midget","Fruit","https://i.ibb.co/wNxWsQGD/Melon-Minnesota-Midget.png"],["FMPD","Melon Piel De Sapo","Fruit","https://i.ibb.co/VYJHgLXt/Melon-Piel-De-Sapo.jpg"],
  ["FMRS","Melon Rich Sweetness","Fruit","https://i.ibb.co/rfTRNKhf/Melon-Rich-Sweetness-132.png"],["FWAS","Watermelon All Sweet","Fruit","https://i.ibb.co/fVYfRCNb/Watermelon-All-Sweet.png"],["FWBD","Watermelon Black Diamond","Fruit","https://i.ibb.co/GfPHnZWs/Watermelon-Black-Diamond.png"],
  ["FWGH","Watermelon Golden Honey","Fruit","https://i.ibb.co/bRKmM75s/Watermelon-Golden-Honey.png"],["FWMa","Watermelon Maketaan","Fruit","https://i.ibb.co/cKWct0yP/Watermelon-Maketaan.png"],["FWMi","Watermelon Mix","Fruit","https://i.ibb.co/Y40WgDV9/Watermelon-Mix.png"],
  ["FWTS","Watermelon Tender Sweet Orange","Fruit","https://i.ibb.co/ymQDVnVj/Watermelon-Tender-Sweet-Orange.png"],["GGAC","Gourd African Calabash","Gourds","https://i.ibb.co/Fk0BnQgx/Gourd-African-Calabash.png"],["GGCB","Gourd Calabash Birdhouse","Gourds","https://i.ibb.co/93Zynp8P/Gourd-Calabash-Birdhouse.png"],
  ["GGCC","Gourd Caveman Club","Gourds","https://i.ibb.co/23KSr7fz/Gourd-Caveman-Club.png"],["GGCu","Gourd Cuzzuza","Gourds","https://i.ibb.co/kV0KQz9h/Gourd-Cuzzuza.png"],["GGDi","Gourd Dipper","Gourds","https://i.ibb.co/7dYH92Cm/Gourd-Dipper.png"],
  ["GGDE","Gourd Dipper Extra Length","Gourds","https://i.ibb.co/kZJ6Sd7/Gourd-Dipper-Extra-Length.png"],["GGGB","Gourd Giant Bullet Headwax","Gourds","https://i.ibb.co/spqy9NNB/Gourd-Giant-Bullet-Headwax.png"],["GGLe","Gourd Lerka","Gourds","https://i.ibb.co/sd9PyC0Z/Gourd-Lerka.png"],
  ["GGMH","Gourd Martin House Bottle","Gourds","https://i.ibb.co/HLNfNZvf/Gourd-Martin-House-Bottle.png"],["GGMi","Gourd Mix","Gourds","https://i.ibb.co/99Nhg1hM/Gourd-Mix.png"],["GGSn","Gourd Snake","Gourds","https://i.ibb.co/1GwzTjMX/Gourd-Snake.png"],
  ["GGSS","Gourd Speckled Swan","Gourds","https://i.ibb.co/39Kqgx65/Gourd-Speckled-Swan.png"],["HAni","Anise","Herbs","https://i.ibb.co/Ng6Xghqb/Anise.png"],["HAsh","Ashwagandha","Herbs","https://i.ibb.co/7NRHb22B/Ashwagandha.png"],
  ["HBGe","Basil Genovese","Herbs","https://i.ibb.co/nT4vcKq/Basil-Genovese.png"],["HBHT","Basil Holy Tulsi","Herbs","https://i.ibb.co/kgT2j4dW/Basil-Holy-Tulsi.png"],["HBLe","Basil Lemon","Herbs","https://i.ibb.co/mVgtCytb/Basil-Lemon.png"],
  ["HBSw","Basil Sweet","Herbs","https://i.ibb.co/1fbVBdh6/Basil-Sweet.png"],["HBMu","Black Mustard","Herbs","https://i.ibb.co/W4wd8CdY/Black-Mustard.png"],["HBSN","Black Seed (Nigella Sativa)","Herbs","https://i.ibb.co/8DkFpBtG/Black-Seed-Nigella-Sativa.png"],
  ["HBor","Borage","Herbs","https://i.ibb.co/pjQP5hbk/Borage.png"],["HCBu","Cancer Bush (Sutherlandia Frutescens)","Herbs","https://i.ibb.co/x9SvRQ2/Cancer-Bush-Sutherlandia-Frustescens.png"],["HCat","Catnip","Herbs","https://i.ibb.co/dJBgpzk5/Catnip.png"],
  ["HCha","Chamomile","Herbs","https://i.ibb.co/hFr8n3s8/Chamomile.png"],["HCSe","Chia Seed","Herbs","https://i.ibb.co/gLwPwsqr/Chia-Seed.png"],["HChi","Chives","Herbs","https://i.ibb.co/zWkPQJpt/Chives.png"],
  ["HCSa","Clarey Sage","Herbs","https://i.ibb.co/HpMDj4Hv/Clarey-Sage.png"],["HC/B","Cleaver/Bedstraw","Herbs","https://i.ibb.co/yc9pkMPv/Cleaver.png"],["HCor","Coriander","Herbs","https://i.ibb.co/zWXh9wxs/Coriander.png"],
  ["HCTh","Creeping Thyme","Herbs","https://i.ibb.co/TxgY4WCR/Creeping-Thyme.png"],["HDan","Dandelion","Herbs","https://i.ibb.co/4RB2Nbpf/Dandelion.png"],["HDil","Dill","Herbs","https://i.ibb.co/rGtdkJgk/Dill.png"],
  ["HEch","Echinacea","Herbs","https://i.ibb.co/R49VBVxC/Echinacea.png"],["HEPr","Evening Primrose","Herbs","https://i.ibb.co/wNqsxWLb/Evening-Primrose.png"],["HFenn","Fennel","Herbs","https://i.ibb.co/jPPfn7HK/Fennel.png"],
  ["HFenu","Fenugreek","Herbs","https://i.ibb.co/TDJS1PsY/Fenugreek.png"],["HFev","Feverfew","Herbs","https://i.ibb.co/8nvXn98S/Feverfew.png"],["HFla","Flaxseed","Herbs","https://i.ibb.co/TM88YRJx/Flaxseed.png"],
  ["HHWh","Horehound White","Herbs","https://i.ibb.co/svJdVJX5/Horehound-White.png"],["HHys","Hyssop","Herbs","https://i.ibb.co/qYSM0mzQ/Hyssop.png"],["HJJT","Jacob's/Job's Tears (Coix Lacryma)","Herbs","https://i.ibb.co/whx0D9cG/Jacob-Tears.png"],
  ["HLBa","Lemon Balm","Herbs","https://i.ibb.co/ycNSkcfm/Lemon-Balm.png"],["HLov","Lovage","Herbs","https://i.ibb.co/JwcPbq09/Lovage.png"],["HMMi","Mexican Mint (Plectranthus Amboinicus)","Herbs","https://i.ibb.co/FdXfsXB/Mexican-Mint.png"],
  ["HMTh","Milk Thistle (Silybum Marianum)","Herbs","https://i.ibb.co/Jg0gzKS/Milk-Thistle.png"],["HMor","Moringa","Herbs","https://i.ibb.co/Yg5PQBq/Moringa.png"],["HMBe","Mung Beans","Herbs","https://i.ibb.co/wZ2BVMGm/Mung-Bean.png"],
  ["HOre","Oregano","Herbs","https://i.ibb.co/Y4GW2bff/Oregano.png"],["HPFL","Parsley Flat Leaf","Herbs","https://i.ibb.co/8LnqcTFG/Parsley-Flat-Leaf.png"],["HPMC","Parsley Moss Curled","Herbs","https://i.ibb.co/hxtc7DfQ/Parsley-Moss-Curled.png"],
  ["HPur","Purslane","Herbs","https://i.ibb.co/rRnSc5yx/Purslane.png"],["HRMG","Red Mustard Giant Greens","Herbs","https://i.ibb.co/PG8kRB9C/Red-Mustard-Giant-Greens.png"],["HRAr","Rocket Arugula","Herbs","https://i.ibb.co/B2pkQNbG/Rocket-Arugula.png"],
  ["HRSy","Rocket Sylvetta","Herbs","https://i.ibb.co/zK0DTns/Rocket-Sylvetta.png"],["HRue","Rue","Herbs","https://i.ibb.co/TMnKrBCk/Rue-Wynruit.png"],["HSBu","Salad Burnet","Herbs","https://i.ibb.co/3mYsL2xQ/Salad-Burnett.png"],
  ["HSOn","Spring Onion","Herbs","https://i.ibb.co/WTjpMCh/Spring-Onion.png"],["HSNe","Stinging Nettle","Herbs","https://i.ibb.co/23HNj9FL/Stinging-Nettle.png"],["HSun","Sunhemp","Herbs","https://i.ibb.co/35hsZxLX/Sunhemp.png"],
  ["HTar","Tarragon","Herbs","https://i.ibb.co/nsDjbGwW/Tarragon.png"],["HThy","Thyme","Herbs","https://i.ibb.co/yLNrVg3/Thyme.png"],["HTPl","Toothache Plant","Herbs","https://i.ibb.co/zh8SPsM8/Toothache-Plant.png"],
  ["MMAl","Microgreen Alfalfa","Microgreens","https://i.ibb.co/2Yyn64Vf/Microgreen-Alfalfa.png"],["MMAO","Microgreen Asian Oriental Blend","Microgreens","https://i.ibb.co/chH8CTch/Microgreen-Asian-Oriental-Blend.png"],["MMBM","Microgreen Black Mustard","Microgreens","https://i.ibb.co/62QmzSw/Microgreen-Black-Mustard.jpg"],
  ["MMBC","Microgreen Broccoli Calabrese","Microgreens","https://i.ibb.co/tTHDN9QM/Microgreen-Broccoli.png"],["MMCr","Microgreen Cress","Microgreens","https://i.ibb.co/d0h7jJxL/Microgreen-Cress.png"],["MMFe","Microgreen Fenugreek","Microgreens","https://i.ibb.co/rGG5qNhX/Microgreen-Fenugreek.jpg"],
  ["MMGB","Microgreen Green Basil","Microgreens","https://i.ibb.co/BHW0pNxF/Microgreen-Green-Basil-5.jpg"],["MMGS","Microgreen Green Swiss Chard","Microgreens","https://i.ibb.co/wtBMrh5/Microgreen-Green-Swiss-Chard.jpg"],["MMKM","Microgreen Kaleidoscope Mix","Microgreens","https://i.ibb.co/kgfyxhnQ/Microgreen-Kaleidoscope.png"],
  ["MMMGr","Microgreen Mizuna Greens","Microgreens","https://i.ibb.co/TM39QVQf/Microgreen-Mizuno-Green.png"],["MMMu","Microgreen Mungbeans","Microgreens","https://i.ibb.co/GQZKX5Cv/Microgreen-Mungbeans.png"],["MMMGf","Microgreen Mustard Green Frills","Microgreens","https://i.ibb.co/RpHd7f0X/Microgreen-Mustard-Greens-Frills.png"],
  ["MMMRf","Microgreen Mustard Red Frills","Microgreens","https://i.ibb.co/z938tfR/Microgreen-Mustard-Red-Frills.png"],["MMRC","Microgreen Radish Coralette","Microgreens","https://i.ibb.co/qLSCzM7M/Microgreen-Radish-Coralette.png"],["MMRD","Microgreen Radish Daikon","Microgreens","https://i.ibb.co/p87RfY2/Microgreen-Radish-Daikon.png"],
  ["MMRR","Microgreen Radish Rainbow","Microgreens","https://i.ibb.co/byCVjxg/Microgreen-Radish-Rainbow-Mix.png"],["MMRT","Microgreen Radish Tsai Tsai","Microgreens","https://i.ibb.co/ccjrtNNd/Microgreen-Radish-Tsai-Tsai.png"],["MMRA","Microgreen Red Amaranth","Microgreens","https://i.ibb.co/GQsDfMh4/Microgreen-Red-Amaranth.png"],
  ["MMRS","Microgreen Red Swiss Chard","Microgreens","https://i.ibb.co/nN3tVfcs/Microgreen-Red-Swiss-Chard.png"],["MMRo","Microgreen Rocket","Microgreens","https://i.ibb.co/wNgwZBWG/Microgreen-Rocket.png"],["MMSB","Microgreen Stirfry Blend","Microgreens","https://i.ibb.co/PyGC3qY/Microgreen-Stirfry-Blend.png"],
  ["MMSS","Microgreen Striped Sunflower","Microgreens","https://i.ibb.co/8n1Qb9bn/Microgreen-Striped-Sunflowers.png"],["MMWh","Microgreen Wheatgrass","Microgreens","https://i.ibb.co/bRrQMbFR/Microgreen-Wheatgrass.png"],["MMWM","Microgreen White Mustard","Microgreens","https://i.ibb.co/JwNChQ6K/Microgreen-White-Mustard.png"],
  ["MMYM","Microgreen Yellow Mustard","Microgreens","https://i.ibb.co/VYFMvXSH/Microgreen-Yellow-Mustard.png"],["PPMA","Manoko","Peanuts","https://i.ibb.co/s951gnWh/Manoko-PPMA.png"],["PPMU","Mulamje","Peanuts","https://i.ibb.co/CpXLNpp1/Mulamje-PPMU.png"],
  ["PPMu","Mulato","Peanuts","https://i.ibb.co/ZR7t8Hpn/Mulato-PPMu.png"],["PPBG","Peanut Behin Giant Striped","Peanuts","https://i.ibb.co/5XqdsPS5/Peanut-Benih-Giant-Strip.png"],["PPBl","Peanut Black","Peanuts","https://i.ibb.co/RkjfLszQ/Peanut-Black.png"],
  ["PPCh","Peanut Chalimbana","Peanuts","https://i.ibb.co/JwWsxnpd/Peanut-Chalimbana.png"],["PPFP","Peanut Fastigianta Pin Striped","Peanuts","https://i.ibb.co/LMh7d6c/Peanut-Fastigianta-Pin-Stripped.png"],["PPMS","Peanut Malawi Striped","Peanuts","https://i.ibb.co/gFtYRYkN/Peanut-Malawi-Stripe.png"],
  ["PPSE","Senqu","Peanuts","https://i.ibb.co/CpRhVnYN/Senqu-PPSE.png"],["SSML","Sprout Mansoor Lentils","Sprouts","https://i.ibb.co/pBj3ZNL1/Sprouts-Mansoor-Lentils.png"],["SSMB","Sprout Moth Beans","Sprouts","https://i.ibb.co/YBZtYr8k/Sprouts-Moth-Beans.png"],
  ["SSMu","Sprout Mungbeans","Sprouts","https://i.ibb.co/d4HwQBDy/Sprouts-Mungbeans.png"],["SSSP","Sprout Sprouting Peas","Sprouts","https://i.ibb.co/qMQpbPh6/Sprouts-Sprouting-Peas.png"],["SSSB","Sprout Stirfry Blend","Sprouts","https://i.ibb.co/MDCWPKgH/Sprouts-Stirfry-Blend.png"],
  ["SSSS","Sprout Sunflower Seed","Sprouts","https://i.ibb.co/xqL4swx8/Sprouts-Sunflower.png"],["SSTa","Sprout Tatsoi","Sprouts","https://i.ibb.co/pjR9L013/Sprouts-Tatsoi.png"],["SSTK","Sprout Tuscany Kale","Sprouts","https://i.ibb.co/CsXFb1rN/Sprouts-Tuscany-Kale.png"],
  ["SSWC","Sprout White Chickpeas","Sprouts","https://i.ibb.co/h1RFmbsJ/Sprouts-White-Chickpeas.png"],["TBao","Baobab","Trees","https://i.ibb.co/tptsYJ3P/Boabab.png"],["TPCF","California Fan Palm","Trees","https://i.ibb.co/1Y6TWCNt/California-Fan-Palm-TPCF.png"],
  ["TCTT","Camel Thorn Tree","Trees","https://i.ibb.co/tpZNjhvb/Camel-Thorn-Tree.png"],["TCTr","Carol Tree","Trees","https://i.ibb.co/wFdL8jLh/Coral-Tree.png"],["TFTr","Fever Tree","Trees","https://i.ibb.co/DHMzt529/Fever-Tree.jpg"],
  ["THTV","Horned Thorn","Trees","https://i.ibb.co/tPD3YYwT/Horned-Thorn-THTV.png"],["TKCP","Kiepersol","Trees","https://i.ibb.co/tTPc4W9w/Kiepersol-TKCP.png"],["TLTr","Lucern Tree","Trees","https://i.ibb.co/yFDXK0n4/Lucerne-Tree.jpg"],
  ["TMTr","Marula Tree","Trees","https://i.ibb.co/Y7Npf7zV/Marula-Tree.png"],["TMTT","Monkey Thorn Tree","Trees","https://i.ibb.co/LzgDYbkM/Monkey-Thorn-Tree.jpg"],["TSNP","Natal Plum","Trees","https://i.ibb.co/qYYxKXg9/Natal-Plum-TSNP.png"],
  ["TPMF","Palm Mexican Fan Palm","Trees","https://i.ibb.co/SwxcFW76/Palm-Mexican-Fan-Palm-TPMF.png"],["TPTT","Paperback Thorn Tree","Trees","https://i.ibb.co/QvD5J8Sr/Paper-Bark-Thorn-Tree.jpg"],["TSOT","Sand Olive Tree","Trees","https://i.ibb.co/hx0VDmCf/Sand-Olive-Tree.png"],
  ["TSLR","Searsia Lancea","Trees","https://i.ibb.co/B2V7YCs6/Searsia-Lancea-TSLR.png"],["TSKT","Swart Karee Tree","Trees","https://i.ibb.co/7NJLSwvC/Swart-Karee-Tree.png"],["TSTT","Sweet Thorn Tree","Trees","https://i.ibb.co/jkDVTvy9/Sweet-Thorn-Tree.png"],
  ["TWOT","Wild Olive Tree","Trees","https://i.ibb.co/DPdFhHmD/Wild-Olive-Tree.png"],["VAHC","African Horned Cucumber","Vegetables","https://i.ibb.co/rqnzxsx/African-Horned-Cucumber.png"],["VAGG","Artichoke Green Globe","Vegetables","https://i.ibb.co/MDVJ4LjD/Artichoke-Green-Globe.png"],
  ["VAMW","Asparagus Mary Washington","Vegetables","https://i.ibb.co/Q7zS0GRN/Asparagus-Mary-Washington.png"],["VBAB","Bean Appaloosa Bush","Vegetables","https://i.ibb.co/Hppqf9yK/Bean-Appaloosa-Bush.png"],["VBBE","Bean Bird Egg Blue","Vegetables","https://i.ibb.co/WNz347bV/Bean-Bird-Egg-Blue.png"],
  ["VBBT","Bean Black Turtle","Vegetables","https://i.ibb.co/hxZcpc7V/Bean-Black-Turtle.png"],["VBBrb","Bean Broad Bean","Vegetables","https://i.ibb.co/jkdsBBqt/Bean-Broad-Bean.png"],["VBBC","Bean Bush Contender","Vegetables","https://i.ibb.co/Nnb76zwB/Bean-Bush-Contender.png"],
  ["VBLN","Bean Lima Nuguni Pole","Vegetables","https://i.ibb.co/kVz7VZ4B/Bean-Lima-Nuguni-Pole.png"],["VBMa","Bean Madagascar","Vegetables","https://i.ibb.co/MxpNC5PV/Bean-Madagascar.png"],["VBNB","Bean Nonna Blue","Vegetables","https://i.ibb.co/Q71pnbDf/Bean-Nonna-Blue-Agnes.png"],
  ["VBVA","Bean Vermont Appaloosa","Vegetables","https://i.ibb.co/27v5hfXC/Bean-Vermont-Appaloosa.png"],["VBWi","Bean Witsa","Vegetables","https://i.ibb.co/zhtTz2M0/Bean-Witsa.png"],["VBYL","Bean Yard Long","Vegetables","https://i.ibb.co/HpR2nh2g/Bean-Yard-Long.png"],
  ["VBZL","Bean Zebra Lima","Vegetables","https://i.ibb.co/b5ckSNyp/Bean-Zebra-Lima.png"],["VBBu","Beetroot Bulls Blood","Vegetables","https://i.ibb.co/spR3GsJL/Beetroot-Bulls-Blood.png"],["VBCh","Beetroot Chioggia","Vegetables","https://i.ibb.co/1GNHBL8v/Beetroot-Chiaggia.png"],
  ["VBCG","Beetroot Crimson Globe","Vegetables","https://i.ibb.co/PvyqvC1f/Beetroot-Crimson-Globe.png"],["VBDD","Beetroot Detroit Dark Red","Vegetables","https://i.ibb.co/jvVHfKz6/Beetroot-Detroit-Dark-Red.png"],["VBGG","Beetroot Golden Globe","Vegetables","https://i.ibb.co/8n5Y63bB/Beetroot-Golden-Globe.png"],
  ["VBRM","Beetroot Rainbow Mix","Vegetables","https://i.ibb.co/Z6jnQhy8/Beetroot-Rainbow-Mix.png"],["VBRQ","Beetroot Ruby Queen","Vegetables","https://i.ibb.co/whKyN6cn/Beetroot-Ruby-Queen.png"],["VBBi","Brinjal Bianca","Vegetables","https://i.ibb.co/TXncMj3/Brinjal-Bianca.png"],
  ["VBBy","Brinjal Black Beauty","Vegetables","https://i.ibb.co/006y90j/Brinjal-Black-Beauty.png"],["VBPF","Brinjal Purple Fingers","Vegetables","https://i.ibb.co/bg4Vg9pq/Brinjal-Purple-Fingers.png"],["VBCa","Broccoli Calabrese","Vegetables","https://i.ibb.co/vfBdCMj/Broccoli-Calabrese.png"],
  ["VBPS","Broccoli Purple Sprouting","Vegetables","https://i.ibb.co/F4TB2pS7/Broccoli-Purple-Sprouting.png"],["VBRo","Broccoli Romanesca","Vegetables","https://i.ibb.co/mrtj5Fh9/Broccoli-Romanessca.png"],["VBSL","Brussel Sprouts Long Island","Vegetables","https://i.ibb.co/213Xmr4J/Brussels-Sprout.png"],
  ["VCCo","Cabbage Copenhagen","Vegetables","https://i.ibb.co/pvgGXYx6/Cabbage-Copenhagen.png"],["VCDr","Cabbage Drumhead","Vegetables","https://i.ibb.co/Psp3XQS8/Cabbage-Drumhead.png"],["VCSa","Cabbage Savoy","Vegetables","https://i.ibb.co/hRLfHYsv/Cabbage-Savoy.png"],
  ["VCCK","Carrot Chantenay Karoo","Vegetables","https://i.ibb.co/TQ3GgSL/Carrot-Chantenay-Karoo.png"],["VCNR","Carrot Nantes Red","Vegetables","https://i.ibb.co/R4bGKQMx/Carrot-Nantes-Red.png"],["VCRM","Carrot Rainbow Mix","Vegetables","https://i.ibb.co/JR6T4R77/Carrot-Rainbow-Mix.png"],
  ["VCGI","Cauliflower Green Igloo","Vegetables","https://i.ibb.co/YBPfwwFk/Cauliflower-Green-Igloo.png"],["VCMG","Cauliflower Macerata Green","Vegetables","https://i.ibb.co/WWNMP868/Cauliflower-Macerata-Green.png"],["VCMW","Cauliflower Mini White","Vegetables","https://i.ibb.co/MkgDMZNx/Cauliflower-Mini-White.png"],
  ["VCRG","Cauliflower Romanesca Green","Vegetables","https://i.ibb.co/0jryjnv6/Cauliflower-Romanessca-Green.png"],["VCSb","Cauliflower Snowball","Vegetables","https://i.ibb.co/Xf1Fgq6w/Cauliflower-Snowball-White.png"],["VCVS","Cauliflower Violet Sicilian","Vegetables","https://i.ibb.co/k2cBFMNB/Cauliflower-Violet-Sicilian.png"],
  ["VCUT","Celery Utah Tall","Vegetables","https://i.ibb.co/HfTbjWHr/Celery-Utah-Tall.png"],["VCBB","Corn Bloody Butcher","Vegetables","https://i.ibb.co/Kpr2zF7j/Corn-Bloody-Butcher.png"],["VCGG","Corn Glass Gem","Vegetables","https://i.ibb.co/NggBDfTw/Corn-Glass-Gem.png"],
  ["VCGO","Corn Green Oaxacan","Vegetables","https://i.ibb.co/tw9tpwN0/Corn-Green-Oaxacan.png"],["VCAW","Cucumber Armenian White","Vegetables","https://i.ibb.co/Q79zs50g/Cucumber-Arminian-White.png"],["VCAs","Cucumber Ashley","Vegetables","https://i.ibb.co/bRJj0Wrb/Cucumber-Ashley.png"],
  ["VCDY","Cucumber Double Yield","Vegetables","https://i.ibb.co/kVwv1dmX/Cucmber-Double-Yeild.png"],["VCGR","Cucumber Gherkin Rhinish","Vegetables","https://i.ibb.co/6VCHmgh/Cucumber-Gherkin-Rhinish.png"],["VCLe","Cucumber Lemon","Vegetables","https://i.ibb.co/WWbyxbmy/Cucumber-Lemon.png"],
  ["VCLW","Cucumber Long White","Vegetables","https://i.ibb.co/0p3KpGSq/Cucmber-Long-White.png"],["VCSnk","Cucumber Snake","Vegetables","https://i.ibb.co/cGcmBCL/Cucumber-Snake.png"],["VGCR","Garlic Chesnok Red (Seasonal)","Vegetables","https://i.ibb.co/qMhvN3MV/Garlic-Chesnok-Red.jpg"],
  ["VGEW","Garlic Egyptain White (Seasonal)","Vegetables","https://i.ibb.co/V0R9CHCj/Garlic-Egypitain-White.jpg"],["VGER","Garlic Egyptian Red (Seasonal)","Vegetables","https://i.ibb.co/fz70qDpk/Garlic-Egyptian-Red.jpg"],["VGSW","Garlic Spanish White (Seasonal)","Vegetables","https://i.ibb.co/TDkWSVB7/Garlic-Spanish-White.jpg"],
  ["VKBP","Kale Black Palm","Vegetables","https://i.ibb.co/4wrHS0TK/Kale-Black-Palm.png"],["VKRU","Kale Red Ursa","Vegetables","https://i.ibb.co/Kz92cB99/Kale-Red-Ursa.png"],["VKSB","Kale Southern Blue","Vegetables","https://i.ibb.co/N6Jkk5pc/Kale-Southern-Blue.png"],
  ["VKVB","Kale Vates Blue","Vegetables","https://i.ibb.co/vxdTqsMg/Kale-Vates-Blue.png"],["VKWR","Kale White Russian","Vegetables","https://i.ibb.co/Mkkd0QyL/Kale-White-Russain.png"],["VKPV","Kohlrabi Purple Vienna","Vegetables","https://i.ibb.co/WN755px2/Kohlrabi-Purple-Vienna.png"],
  ["VKWV","Kohlrabi White Vienna","Vegetables","https://i.ibb.co/gFWLX6ZZ/Kohlrabi-White-Vienna.png"],["VLEl","Leeks Elephant","Vegetables","https://i.ibb.co/KzjyyDhq/Leeks-Elephant.png"],["VLBu","Lettuce Butterhead","Vegetables","https://i.ibb.co/DgMRCv0C/Lettuce-Butterhead.png"],
  ["VLGM","Lettuce Gourmet Mix","Vegetables","https://i.ibb.co/xqHn6QrF/Lettuce-Gourmet-Mix.png"],["VLGL","Lettuce Great Lakes","Vegetables","https://i.ibb.co/RTqJkTCc/Lettuce-Great-Lakes.png"],["VLGC","Lettuce Green Cos","Vegetables","https://i.ibb.co/KckGxDYZ/Lettuce-Green-Cos.png"],
  ["VLLL","Lettuce Loose Leaf Mix","Vegetables","https://i.ibb.co/bMBC9sr2/Lettuce-Loose-Leaf-Mix.png"],["VLOL","Lettuce Oak Leaf Mix","Vegetables","https://i.ibb.co/Jwf622m2/Lettuce-Oak-Lead-Mix.png"],["VLRM","Lettuce Romain Mix","Vegetables","https://i.ibb.co/8D48wm9X/Lettuce-Romaine-Mix.png"],
  ["VLRF","Lettuce Romaine Freckles","Vegetables","https://i.ibb.co/Vc0GdhVG/Lettuce-Romaine-Freckles.png"],["VMGr","Marog Green","Vegetables","https://i.ibb.co/WNtNXVhm/Marog-Green.png"],["VMSa","Mealie Sahara","Vegetables","https://i.ibb.co/4w99Jtyf/Mealie-Sahara.png"],
  ["VMSp","Mustard Spinach","Vegetables","https://i.ibb.co/1YMhvT8D/Mustard-Green-Spinach.png"],["VOLF","Okra Lady Fingers","Vegetables","https://i.ibb.co/J8h8dvS/Okra-Lady-Fingers.png"],["VOAB","Onion Australian Brown","Vegetables","https://i.ibb.co/NnghSvDT/Onion-Australian-Brown.png"],
  ["VORC","Onion Red Creole","Vegetables","https://i.ibb.co/p6sGnTzs/Onion-Red-Creole.png"],["VOTG","Onion Texas Grano","Vegetables","https://i.ibb.co/VWPwKPZx/Onion-Texas-Grano.png"],["VOAV","Oriental Asian Vegetable Mix","Vegetables","https://i.ibb.co/7xN7TVyM/Oriental-Asain-Blend-Mix.png"],
  ["VPAr","Peas Aragon","Vegetables","https://i.ibb.co/yFw8Cc1Q/Peas-Aargan.png"],["VPFE","Peas First Early May","Vegetables","https://i.ibb.co/ycF2wZns/Peas-First-Early-May.png"],["VPSS","Peas Sugar Snap Mangetout","Vegetables","https://i.ibb.co/HTLZ8crv/Peas-Sugar-Snap-Mange-Tout.png"],
  ["VPSSn","Peas Super Snappy","Vegetables","https://i.ibb.co/zT5wDw5f/Peas-Super-Snappy.png"],["VPDB","Popcorn Dakota Black","Vegetables","https://i.ibb.co/V0jgKmWP/Popcorn-Black-Dakota.png"],["VPQB","Pumpkin Queensland Blue","Vegetables","https://i.ibb.co/hJfGXXT5/Pumpkin-Queensland-Blue.png"],
  ["VPTT","Pumpkin Turks Turban","Vegetables","https://i.ibb.co/bMjqNzgM/Pumpkin-Turks-Turban.png"],["VPWi","Pumpkin Witboer","Vegetables","https://i.ibb.co/5gVS7Pm1/Pumpkin-Witboer.png"],["VRCB","Radish Cherry Belle","Vegetables","https://i.ibb.co/RTWJkCmd/Radish-Cherry-Belle.png"],
  ["VRHW","Radish Hailstone White","Vegetables","https://i.ibb.co/Rp7QjNbx/Radish-Hailstone-White.png"],["VRPP","Radish Purple Plum","Vegetables","https://i.ibb.co/SDrwx91c/Radish-Purple-Plum.png"],["VRRM","Radish Rainbow Mix","Vegetables","https://i.ibb.co/1fJ5b2xN/Radish-Rainbow-Mix.png"],
  ["VRSB","Radish Spanish Black","Vegetables","https://i.ibb.co/ZpbV9Vmx/Radish-Spanish-Black.png"],["VRSp","Radish Sparkler","Vegetables","https://i.ibb.co/7d9XktwJ/Radish-Sparkler.png"],["VRWI","Radish White Icicle","Vegetables","https://i.ibb.co/spk76h6j/Radish-White-Icicle.png"],
  ["VRSC","Red Swiss Chard","Vegetables","https://i.ibb.co/nMJLQtx7/Red-Swiss-Chard.png"],["VRhu","Rhubarb","Vegetables","https://i.ibb.co/hx1tmFKq/Rhubarb.png"],["VSBB","Spinach Baby Black Magic","Vegetables","https://i.ibb.co/xqXtSk96/Spinach-Baby-Black-Magic.png"],
  ["VSPJ","Squah Patty Pan Juane","Vegetables","https://i.ibb.co/QZYzYgv/Squash-Patty-Pan-Juane-Et-Verte.png"],["VSAy","Squash Ayota","Vegetables","https://i.ibb.co/Z6VpBKpR/Squash-Ayota.png"],["VSGR","Squash Gem Rolet","Vegetables","https://i.ibb.co/xtGzD0Rs/Squash-Gem-Rolet.png"],
  ["VSPA","Squash Patty Pan Alba","Vegetables","https://i.ibb.co/1fM1xG1S/Squash-Patty-Pam-Alba-White.png"],["VSPM","Squash Patty Pan Mix","Vegetables","https://i.ibb.co/yBf7txWT/Squahs-Patty-Pan-Mix.png"],["VSPY","Squash Patty Pan Yellow","Vegetables","https://i.ibb.co/Z6Q0fDw3/Squash-Patty-Pan-Yellow.png"],
  ["VSSp","Squash Spaghetti","Vegetables","https://i.ibb.co/Xkbtk4Yq/Squash-Spaghetti.png"],["VSWB","Squash Waltham Butternut","Vegetables","https://i.ibb.co/jPNPfdqL/Squash-Waltham-Butternut.png"],["VSPC","Sweet Potato Combo Pack (Seasonal)","Vegetables","https://i.ibb.co/JRmMj0ZP/Sweet-Potato-Combo-Pack.jpg"],
  ["VSPOk","Sweet Potato Okinawan (Seasonal)","Vegetables","https://i.ibb.co/j9X1H3gZ/Sweet-Potato-Okinawan.jpg"],["VSPOr","Sweet Potato Orange (Seasonal)","Vegetables","https://i.ibb.co/5g1FLkPk/Sweet-Potato-Orange.jpg"],["VSPP","Sweet Potato Purple (Seasonal)","Vegetables","https://i.ibb.co/23MzMhjR/Sweet-Potato-Purple.jpg"],
  ["VSPS","Sweet Potato Purple Skin (Seasonal)","Vegetables","https://i.ibb.co/2YjCXhZW/Sweet-Potato-Purple-Skin.jpg"],["VSPW","Sweet Potato White Flesh (Seasonal)","Vegetables","https://i.ibb.co/HTkm8DSZ/Sweet-Potato-White-Flesh.jpg"],["VSGB","Sweetcorn Golden Bantam","Vegetables","https://i.ibb.co/Gr9bthG/Sweetcorn-Golden-Bantam.png"],
  ["VSCB","Swiss Chard Bright Lights Mix","Vegetables","https://i.ibb.co/HLBMfDxZ/Swiss-Chard-Bright-Lights-Mix.png"],["VSCF","Swiss Chard Fordhook Giant","Vegetables","https://i.ibb.co/6QK85qd/Swiss-Chard-Fordhook-Giant.png"],["VTBL","Tomato Banana Legs","Vegetables","https://i.ibb.co/xKZwd07k/Tomato-Banana-Legs.png"],
  ["VTBe","Tomato Beefsteak","Vegetables","https://i.ibb.co/nsJqKrkr/Tomato-Beefsteak.png"],["VTBZ","Tomato Black Zebra","Vegetables","https://i.ibb.co/G4ftBfBN/Tomato-Black-Zebra.png"],["VTCP","Tomato Cherokee Purple","Vegetables","https://i.ibb.co/v6SftVt5/Tomato-Cherokee-Purple.png"],
  ["VTCB","Tomato Cherry Black","Vegetables","https://i.ibb.co/21B7wH75/Tomato-Cherry-Black.png"],["VTCM","Tomato Cherry Malawi Red","Vegetables","https://i.ibb.co/zWpZtR1r/Tomato-Cherry-Malawi-Red.png"],["VTCPI","Tomato Cherry Pink Ice","Vegetables","https://i.ibb.co/gL2Mf6JK/Tomato-Cherry-Pink-Ice.png"],
  ["VTCY","Tomato Cherry Yellow","Vegetables","https://i.ibb.co/PzzW30s0/Tomato-Cherry-Yellow.png"],["VTCS","Tomato Chocolate Stripe","Vegetables","https://i.ibb.co/j9mNJhbh/Tomato-Chocolate-Stripe.png"],["VTCE","Tomato Cosmic Eclipse","Vegetables","https://i.ibb.co/ns3np2Fp/Tomato-Cosmic-Eclipse.png"],
  ["VTGGo","Tomato Green Goddess","Vegetables","https://i.ibb.co/YTQ8Dw8S/Tomato-Green-Goddess.png"],["VTGS","Tomato Green Sausage","Vegetables","https://i.ibb.co/ZzQyZtHy/Tomato-Green-Sausage.png"],["VTHM","Tomato Heirloom Mix","Vegetables","https://i.ibb.co/YBSj8xDh/Tomato-Heirloom-Mix.png"],
  ["VTMM","Tomato Money Maker","Vegetables","https://i.ibb.co/hJrnjhb3/Tomato-Money-Maker.png"],["VTOx","Tomato Oxheart","Vegetables","https://i.ibb.co/L71kJ0x/Tomato-Oxheart.png"],["VTPP","Tomato Purple Plum","Vegetables","https://i.ibb.co/Y5QHv8J/Tomato-Purple-Plum.png"],
  ["VTRod","Tomato Rodade","Vegetables","https://i.ibb.co/LXFd96XZ/Tomato-Rodade.png"],["VTRom","Tomato Roma","Vegetables","https://i.ibb.co/WpG3zFMb/Tomato-Roma.png"],["VTGG","Turnip Green Globe","Vegetables","https://i.ibb.co/MDdrj2cQ/Turnip-Green-Globe.png"],
  ["VTPT","Turnip Purple Top","Vegetables","https://i.ibb.co/gMPJ3wmd/Turnip-Purple-Top.png"],["VTSW","Turnip Snowball White","Vegetables","https://i.ibb.co/KCg1h2x/Turnip-Snowball-White.png"],["VTYG","Turnip Yellow Globe","Vegetables","https://i.ibb.co/KpGbPSS8/Turnip-Yellow-Globe.png"],
];

const INIT=RAW.map((r,i)=>({id:i+1,code:r[0],name:r[1],category:r[2],image:r[3],cost:25,price:45,stock:true,outOfStock:false}));
const CATS=["All",...Array.from(new Set(INIT.map(p=>p.category))).sort()];
const CS={Vegetables:{bg:"#e8f5ee",color:"#2d6a3f",icon:"🥦"},Flowers:{bg:"#fdf0f8",color:"#8b3a72",icon:"🌸"},Herbs:{bg:"#fdf8e8",color:"#7a5c00",icon:"🌿"},Trees:{bg:"#eef5e8",color:"#2d4a1e",icon:"🌳"},Microgreens:{bg:"#e8f8f8",color:"#0a6060",icon:"🌱"},Sprouts:{bg:"#e8eef8",color:"#1a3a7a",icon:"🫘"},"Crop Cover & Lawns":{bg:"#f5efe8",color:"#6b3a00",icon:"🌾"},Capsicums:{bg:"#fdeaea",color:"#a32020",icon:"🌶️"},Fruit:{bg:"#fdf1e3",color:"#9a5000",icon:"🍎"},Gourds:{bg:"#f3f0e2",color:"#6a5a10",icon:"🎃"},Peanuts:{bg:"#f4ece2",color:"#6b4423",icon:"🥜"}};
const C={darkGreen:"#2d4a1e",midGreen:"#3d6b28",parchment:"#f5edd8",parchmentDark:"#e8d5a3",brown:"#5c3d1e",cream:"#faf7f0",offwhite:"#f7f4ec",border:"#ddd5b8",text:"#2a2015",textMid:"#5c4a2a",textLight:"#8a7a5a"};
const SC={Pending:{bg:"#fff3cd",color:"#856404",border:"#ffc107"},Packed:{bg:"#cfe2ff",color:"#084298",border:"#0d6efd"},Dispatched:{bg:"#d1ecf1",color:"#0c5460",border:"#17a2b8"},Delivered:{bg:"#d4edda",color:"#155724",border:"#28a745"}};

const BLANK_PRODUCT={code:"",name:"",category:"Vegetables",cost:25,price:45,stock:true,outOfStock:false,image:""};

export default function App(){
  const [products,setProducts]=useState(INIT);
  const [orders,setOrders]=useState([]);
  const [view,setView]=useState("store");
  const [adminTab,setAdminTab]=useState("orders");
  const [adminAuth,setAdminAuth]=useState(false);
  const [adminPw,setAdminPw]=useState("");
  const [adminErr,setAdminErr]=useState(false);
  const [authPw,setAuthPw]=useState("");
  const [blobsHadProducts,setBlobsHadProducts]=useState(false);
  const [productsLoaded,setProductsLoaded]=useState(false);
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState("All");
  const [prodSearch,setProdSearch]=useState("");
  const [prodCat,setProdCat]=useState("All");
  const [cart,setCart]=useState([]);
  const [editId,setEditId]=useState(null);
  const [editData,setEditData]=useState({});
  const [isNewProduct,setIsNewProduct]=useState(false);
  const [deleteConfirm,setDeleteConfirm]=useState(null);
  const [cartOpen,setCartOpen]=useState(false);
  const [step,setStep]=useState(0);
  const [cust,setCust]=useState({name:"",phone:"",email:"",street:"",suburb:"",city:"",province:"",postal:""});
  const [toast,setToast]=useState("");
  const [bulkPrice,setBulkPrice]=useState("");
  const [bulkCat,setBulkCat]=useState("All");
  const [payLoading,setPayLoading]=useState(false);
  const [payError,setPayError]=useState("");
  const [payStatus,setPayStatus]=useState(null);
  const [orderFilter,setOrderFilter]=useState("All");
  const [expandedOrder,setExpandedOrder]=useState(null);

  useEffect(()=>{
    const p=new URLSearchParams(window.location.search);
    if(p.get("payment")==="success") setPayStatus("success");
    if(p.get("payment")==="cancelled") setPayStatus("cancelled");
    (async()=>{try{const r=await fetch("/.netlify/functions/get-products");const d=await r.json();if(d&&Array.isArray(d.products)&&d.products.length){setProducts(d.products);setBlobsHadProducts(true);}}catch{}finally{setProductsLoaded(true);}})();
  },[]);

  const loadOrders=async(pw)=>{try{const r=await fetch("/.netlify/functions/get-orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:pw})});const d=await r.json();if(Array.isArray(d.orders))setOrders(d.orders);}catch{}};
  const persistOrder=(id,updates)=>{fetch("/.netlify/functions/update-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:authPw,orderId:id,updates})}).catch(()=>{});};
  const saveProducts=(p,pw)=>{setProducts(p);const key=pw||authPw;fetch("/.netlify/functions/save-products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:key,products:p})}).catch(()=>{});};
  const showToast=msg=>{setToast(msg);setTimeout(()=>setToast(""),2500);};

  const storeFiltered=useMemo(()=>{const q=search.toLowerCase().trim();return products.filter(p=>(cat==="All"||p.category===cat)&&(q===""||p.name.toLowerCase().includes(q)||(p.code||"").toLowerCase().includes(q))&&p.stock);},[products,cat,search]);
  const adminFiltered=useMemo(()=>{const q=prodSearch.toLowerCase().trim();return products.filter(p=>(prodCat==="All"||p.category===prodCat)&&(q===""||p.name.toLowerCase().includes(q)||(p.code||"").toLowerCase().includes(q)));},[products,prodCat,prodSearch]);

  const addCart=p=>{
    if(p.outOfStock)return;
    setCart(c=>{const ex=c.find(x=>x.id===p.id);return ex?c.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x):[...c,{...p,qty:1}];});
    showToast(p.name+" added to cart!");
  };

  const seedsTotal=cart.reduce((s,x)=>s+x.price*x.qty,0);
  const cartTotal=cart.length>0?seedsTotal+PUDO_FEE+PACKAGING_FEE:0;
  const cartCount=cart.reduce((s,x)=>s+x.qty,0);
  const closeCart=()=>{setCartOpen(false);setStep(0);};


  const handlePay=async()=>{
    const newOrder={id:"ORD-"+Date.now(),date:new Date().toLocaleString("en-ZA"),customer:{...cust},items:cart.map(x=>({name:x.name,qty:x.qty,price:x.price,image:x.image})),seedsTotal,total:cartTotal,status:"Pending",pudoRef:"",notes:""};
    setPayLoading(true);setPayError("");
    try{
      const res=await fetch("/.netlify/functions/create-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:Math.round(cartTotal*100),order:newOrder})});
      const data=await res.json();
      if(data.redirectUrl){window.location.href=data.redirectUrl;}
      else{setPayError("Payment could not be created. Please try again.");}
    }catch{setPayError("Something went wrong. Please try again.");}
    setPayLoading(false);
  };

  const updateOrderStatus=(id,status)=>{setOrders(os=>os.map(o=>o.id===id?{...o,status}:o));persistOrder(id,{status});};
  const updateOrderField=(id,field,val)=>setOrders(os=>os.map(o=>o.id===id?{...o,[field]:val}:o));
  const persistOrderField=(id,field,val)=>persistOrder(id,{[field]:val});
  const deleteOrder=id=>{setOrders(os=>os.filter(o=>o.id!==id));fetch("/.netlify/functions/delete-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:authPw,orderId:id})}).catch(()=>{});showToast("Order deleted");};

  const handleAdminLogin=()=>{if(adminPw===ADMIN_PW){setAdminAuth(true);setAdminErr(false);setAuthPw(adminPw);loadOrders(adminPw);if(productsLoaded&&!blobsHadProducts){setBlobsHadProducts(true);fetch("/.netlify/functions/save-products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:adminPw,products})}).catch(()=>{});}}else{setAdminErr(true);setAdminPw("");}};

  const openNewProduct=()=>{setIsNewProduct(true);setEditId("new");setEditData({...BLANK_PRODUCT});};
  const openEdit=p=>{setIsNewProduct(false);setEditId(p.id);setEditData({...p});};

  const saveProduct=()=>{
    if(!editData.name.trim()){showToast("Please enter a product name");return;}
    if(isNewProduct){
      const n={...editData,id:Date.now(),code:(editData.code||"").trim(),price:Number(editData.price),cost:Number(editData.cost)};
      saveProducts([...products,n]);
      showToast(n.name+" added!");
    }else{
      saveProducts(products.map(p=>p.id===editId?{...p,...editData,price:Number(editData.price),cost:Number(editData.cost)}:p));
      showToast("Saved!");
    }
    setEditId(null);
  };

  const confirmDelete=id=>{setDeleteConfirm(id);};
  const doDelete=()=>{saveProducts(products.filter(p=>p.id!==deleteConfirm));setDeleteConfirm(null);showToast("Product deleted");};
  const toggleOutOfStock=id=>saveProducts(products.map(p=>p.id===id?{...p,outOfStock:!p.outOfStock}:p));
  const toggleHide=id=>saveProducts(products.map(p=>p.id===id?{...p,stock:!p.stock}:p));
  const applyBulk=()=>{if(!bulkPrice)return;saveProducts(products.map(p=>(bulkCat==="All"||p.category===bulkCat)?{...p,price:Number(bulkPrice)}:p));showToast("Bulk price applied!");setBulkPrice("");};

  const iS={width:"100%",padding:"9px 12px",borderRadius:6,border:"1px solid "+C.border,fontSize:13,boxSizing:"border-box",background:C.cream,fontFamily:"Georgia,serif",color:C.text};
  const bG={border:"none",borderRadius:6,padding:"10px 18px",cursor:"pointer",background:C.darkGreen,color:"#fff",fontFamily:"Georgia,serif",fontSize:13,fontWeight:600};
  const bP={border:"1px solid "+C.border,borderRadius:6,padding:"10px 18px",cursor:"pointer",background:C.parchment,color:C.brown,fontFamily:"Georgia,serif",fontSize:13,fontWeight:600};
  const mS={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(30,20,5,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100};
  const bxS={background:C.cream,borderRadius:12,padding:"1.5rem",width:"min(520px,95vw)",maxHeight:"90vh",overflowY:"auto",border:"1px solid "+C.border};
  const pN={background:"#eef5e8",border:"1px solid #c8ddb0",borderRadius:8,padding:"0.6rem 0.8rem",fontSize:12,color:C.darkGreen};

  const filteredOrders=orders.filter(o=>orderFilter==="All"||o.status===orderFilter);
  const oc={All:orders.length,Pending:orders.filter(o=>o.status==="Pending").length,Packed:orders.filter(o=>o.status==="Packed").length,Dispatched:orders.filter(o=>o.status==="Dispatched").length,Delivered:orders.filter(o=>o.status==="Delivered").length};

  if(payStatus==="success") return(
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{...bxS,textAlign:"center",maxWidth:480}}>
        <img src={LOGO} alt="Trueleaf" style={{maxWidth:220,width:"80%",marginBottom:"1rem"}} onError={e=>e.target.style.display="none"}/>
        <div style={{fontSize:48,marginBottom:"0.5rem"}}>🌱</div>
        <h2 style={{color:C.darkGreen,margin:"0 0 0.5rem",fontSize:22}}>Thank you for your support!</h2>
        <p style={{color:C.textMid,fontSize:14,lineHeight:1.8,margin:"0 0 1rem"}}>Your payment was successful. We truly appreciate your support of heirloom seeds and sustainable growing in Africa.</p>
        <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:10,padding:"1rem",marginBottom:"1rem",fontSize:13,color:C.brown,lineHeight:1.8}}>
          <strong>What happens next?</strong><br/>We will confirm your order and arrange your Pudo locker delivery within 1 business day. You will receive an SMS from Pudo when your seeds are ready.<br/><br/>Questions? Call us on <strong>{PHONE}</strong>
        </div>
        <button style={{...bG,width:"100%",padding:12,marginBottom:8}} onClick={()=>{window.history.replaceState({},"","/");setPayStatus(null);setCart([]);setCust({name:"",phone:"",email:"",street:"",suburb:"",city:"",province:"",postal:""});}}>Continue shopping</button>
        <a href={"https://wa.me/"+WA} target="_blank" rel="noreferrer" style={{...bP,display:"block",textAlign:"center",textDecoration:"none",padding:10}}>WhatsApp us</a>
      </div>
    </div>
  );

  if(payStatus==="cancelled") return(
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{...bxS,textAlign:"center",maxWidth:440}}>
        <div style={{fontSize:48,marginBottom:"0.5rem"}}>🌿</div>
        <h2 style={{color:C.darkGreen,margin:"0 0 0.5rem"}}>Payment cancelled</h2>
        <p style={{color:C.textMid,fontSize:14,lineHeight:1.7,margin:"0 0 1rem"}}>No worries — your cart is still waiting. Come back anytime!</p>
        <button style={{...bG,width:"100%",padding:12}} onClick={()=>{window.history.replaceState({},"","/");setPayStatus(null);}}>Back to store</button>
      </div>
    </div>
  );

  return(
    <div style={{fontFamily:"Georgia,serif",minHeight:"100vh",background:C.offwhite,color:C.text}}>
      {toast&&<div style={{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",background:C.darkGreen,color:"#fff",padding:"9px 20px",borderRadius:20,fontSize:13,zIndex:200,whiteSpace:"nowrap"}}>{toast}</div>}

      <a href={"https://wa.me/"+WA+"?text="+encodeURIComponent("Hi! I have a question about your seeds.")} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:24,right:24,background:"#25D366",color:"#fff",borderRadius:"50%",width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,zIndex:150,textDecoration:"none",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>💬</a>

      <div style={{background:C.darkGreen,color:"#e8d5a3",fontSize:12,textAlign:"center",padding:"5px",letterSpacing:"0.5px"}}>Organically Grown | Non-GMO | Open-Pollinated | Selected for African Growing Conditions</div>

      <nav style={{background:C.parchment,borderBottom:"2px solid "+C.border,padding:"0 1rem",display:"flex",alignItems:"center",gap:"0.5rem",minHeight:64,flexWrap:"wrap"}}>
        <div style={{flex:1,display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="Trueleaf Seeds" style={{height:48,objectFit:"contain"}} onError={e=>e.target.style.display="none"}/>
          <div><p style={{margin:0,fontSize:16,fontWeight:700,color:C.darkGreen,letterSpacing:"0.5px",lineHeight:1.1}}>TRUELEAF</p><p style={{margin:0,fontSize:10,color:C.brown,letterSpacing:"2px",fontFamily:"system-ui,sans-serif"}}>SEED CO.</p></div>
        </div>
        <button style={{...bP,background:view==="store"?C.darkGreen:"transparent",color:view==="store"?"#fff":C.brown,border:"none",fontSize:13}} onClick={()=>setView("store")}>Shop</button>
        <button style={{...bP,background:view==="admin"?C.darkGreen:"transparent",color:view==="admin"?"#fff":C.brown,border:"none",fontSize:13,position:"relative"}} onClick={()=>{setView("admin");setAdminAuth(false);setAdminPw("");}}>
          Admin{oc.Pending>0&&<span style={{position:"absolute",top:-4,right:-4,background:"#e8762a",color:"#fff",borderRadius:"50%",width:16,height:16,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{oc.Pending}</span>}
        </button>
        <button style={{...bG,display:"flex",alignItems:"center",gap:6}} onClick={()=>setCartOpen(true)}>🛒 Cart {cartCount>0&&<span style={{background:"#e8762a",color:"#fff",borderRadius:10,padding:"0 6px",fontSize:11,fontWeight:700}}>{cartCount}</span>}</button>
      </nav>

      {view==="store"&&<div>
        <div style={{background:C.parchment,borderBottom:"2px solid "+C.border,display:"flex",flexDirection:"column",alignItems:"center",padding:"1.5rem 1rem",textAlign:"center"}}>
          <img src={LOGO} alt="Trueleaf Seeds Logo" style={{maxWidth:380,width:"85%",objectFit:"contain",marginBottom:"0.5rem"}} onError={e=>e.target.style.display="none"}/>
          <p style={{margin:0,fontSize:12,color:C.textLight,letterSpacing:"2px",fontFamily:"system-ui,sans-serif",textTransform:"uppercase"}}>Heirloom Seeds That Grow With You</p>
        </div>
        <div style={{background:"linear-gradient(160deg,"+C.darkGreen+" 0%,#3d6b28 100%)",color:"#fff",padding:"2.5rem 1.5rem",textAlign:"center"}}>
          <div style={{maxWidth:640,margin:"0 auto"}}>
            <p style={{color:C.parchmentDark,fontSize:12,letterSpacing:"2px",textTransform:"uppercase",margin:"0 0 0.5rem",fontFamily:"system-ui,sans-serif"}}>Heirloom · Open-Pollinated · Non-GMO</p>
            <h1 style={{fontSize:28,fontWeight:700,margin:"0 0 0.5rem",color:"#fff"}}>Seeds That Grow With You</h1>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:15,margin:"0 0 1.25rem",lineHeight:1.7}}>Rooted in tradition. Grown for the future. Carefully selected heirloom varieties that thrive in African growing conditions.</p>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
              {["Organically grown","Save your own seeds","Support local growers","African adapted"].map(t=><span key={t} style={{fontSize:11,color:C.midGreen,background:"#eef5e8",border:"1px solid #c8ddb0",borderRadius:20,padding:"3px 10px"}}>✔ {t}</span>)}
            </div>
          </div>
        </div>
        <div style={{background:C.parchment,borderBottom:"1px solid "+C.border,padding:"1rem",display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          {[["1. Browse","270+ heirloom varieties"],["2. Checkout","Pay securely via YOCO"],["3. Pudo","Collect from your nearest locker"],["4. Grow","Save seeds year after year"]].map(([t,d])=>(
            <div key={t} style={{textAlign:"center",maxWidth:160}}><p style={{margin:0,fontWeight:700,fontSize:13,color:C.darkGreen}}>{t}</p><p style={{margin:"2px 0 0",fontSize:11,color:C.textMid}}>{d}</p></div>
          ))}
        </div>
        <div style={{display:"flex",gap:8,padding:"0.75rem 1rem",flexWrap:"wrap",alignItems:"center",background:"#fff",borderBottom:"1px solid "+C.border}}>
          <input style={{...iS,flex:1,minWidth:140}} placeholder="Search seeds..." value={search} onChange={e=>setSearch(e.target.value)}/>
          <select style={{...iS,width:"auto"}} value={cat} onChange={e=>setCat(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
          <span style={{fontSize:12,color:C.textLight}}>{storeFiltered.length} products</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12,padding:"1rem"}}>
          {storeFiltered.map(p=>{
            const cs=CS[p.category]||{bg:"#f0f0f0",color:"#555",icon:"🌿"};
            return(
              <div key={p.id} style={{background:"#fff",borderRadius:10,border:"1px solid "+C.border,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <div style={{width:"100%",height:130,background:cs.bg,overflow:"hidden",flexShrink:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {p.image?<img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>e.target.style.display="none"}/>:<span style={{fontSize:36}}>{cs.icon}</span>}
                  {p.outOfStock&&<div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{background:"#c00",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:20}}>OUT OF STOCK</span></div>}
                </div>
                <div style={{padding:"10px 12px 12px",flex:1,display:"flex",flexDirection:"column"}}>
                  <p style={{margin:"0 0 5px",fontWeight:700,fontSize:13,color:C.text,lineHeight:1.3}}>{p.name}</p>
                  <span style={{display:"inline-block",padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:600,marginBottom:6,background:cs.bg,color:cs.color}}>{cs.icon} {p.category}</span>
                  <p style={{fontSize:11,color:C.textLight,margin:"0 0 6px",fontStyle:"italic"}}>Open-pollinated · Heirloom</p>
                  <p style={{fontSize:17,fontWeight:700,color:p.outOfStock?"#999":C.darkGreen,margin:"auto 0 8px"}}>R{p.price.toFixed(2)}</p>
                  <button style={{...bG,padding:"8px",fontSize:12,width:"100%",opacity:p.outOfStock?0.5:1,background:p.outOfStock?"#999":C.darkGreen,cursor:p.outOfStock?"not-allowed":"pointer"}} onClick={()=>addCart(p)} disabled={p.outOfStock}>{p.outOfStock?"Out of stock":"+ Add to cart"}</button>
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

      {view==="admin"&&(!adminAuth?(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"}}>
          <div style={{background:C.cream,borderRadius:12,padding:"1.5rem",width:"min(340px,95vw)",border:"1px solid "+C.border,textAlign:"center"}}>
            <div style={{fontSize:36,marginBottom:"0.5rem"}}>🔒</div>
            <h3 style={{margin:"0 0 0.25rem",color:C.darkGreen}}>Admin access</h3>
            <p style={{fontSize:13,color:C.textLight,margin:"0 0 1rem"}}>Enter your password to continue</p>
            <input style={{...iS,textAlign:"center",letterSpacing:"2px",marginBottom:8}} type="password" placeholder="Password" value={adminPw} onChange={e=>setAdminPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleAdminLogin()}/>
            {adminErr&&<p style={{fontSize:12,color:"#c00",margin:"0 0 8px"}}>Incorrect password. Please try again.</p>}
            <button style={{...bG,width:"100%",padding:"10px"}} onClick={handleAdminLogin}>Login</button>
          </div>
        </div>
      ):(
        <div style={{padding:"1.25rem",maxWidth:960,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
            <h2 style={{fontSize:18,fontWeight:700,color:C.darkGreen,margin:0}}>Admin panel</h2>
            <button style={{...bP,fontSize:12,padding:"6px 14px"}} onClick={()=>{setAdminAuth(false);setAuthPw("");}}>Logout</button>
          </div>
          <div style={{display:"flex",gap:4,marginBottom:"1.5rem",borderBottom:"2px solid "+C.border}}>
            {[["orders","📦 Orders"],["products","🌱 Products"],["bulk","💰 Pricing"]].map(([tab,label])=>(
              <button key={tab} style={{...bP,border:"none",borderBottom:adminTab===tab?"3px solid "+C.darkGreen:"3px solid transparent",borderRadius:"6px 6px 0 0",background:adminTab===tab?C.cream:"transparent",color:adminTab===tab?C.darkGreen:C.textLight,padding:"8px 16px",fontSize:13,fontWeight:adminTab===tab?700:400,position:"relative"}} onClick={()=>setAdminTab(tab)}>
                {label}{tab==="orders"&&oc.Pending>0&&<span style={{marginLeft:6,background:"#e8762a",color:"#fff",borderRadius:10,padding:"1px 6px",fontSize:10,fontWeight:700}}>{oc.Pending}</span>}
              </button>
            ))}
          </div>

          {adminTab==="orders"&&<div>
            <div style={{display:"flex",gap:6,marginBottom:"1rem",flexWrap:"wrap"}}>
              {Object.entries(oc).map(([s,count])=>(
                <button key={s} style={{...bP,padding:"5px 12px",fontSize:12,background:orderFilter===s?C.darkGreen:C.parchment,color:orderFilter===s?"#fff":C.brown}} onClick={()=>setOrderFilter(s)}>{s} ({count})</button>
              ))}
              <button style={{...bP,padding:"5px 12px",fontSize:12,marginLeft:"auto"}} onClick={()=>loadOrders(authPw)}>↻ Refresh</button>
            </div>
            {filteredOrders.length===0&&<div style={{textAlign:"center",padding:"3rem",color:C.textLight}}><p style={{fontSize:32,margin:"0 0 0.5rem"}}>📭</p><p>No orders yet</p></div>}
            {filteredOrders.map(o=>{
              const sc=SC[o.status]||SC.Pending;
              const isExp=expandedOrder===o.id;
              return(
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
                    <div style={{background:C.parchment,borderRadius:8,padding:"10px",marginBottom:12}}>
                      {o.items.map((it,i)=>(
                        <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",borderBottom:i<o.items.length-1?"1px solid "+C.border:"none"}}>
                          {it.image&&<img src={it.image} alt={it.name} style={{width:32,height:32,objectFit:"cover",borderRadius:4}} onError={e=>e.target.style.display="none"}/>}
                          <span style={{flex:1,fontSize:13}}>{it.qty}x {it.name}</span>
                          <span style={{fontSize:13,fontWeight:600,color:C.darkGreen}}>R{(it.price*it.qty).toFixed(2)}</span>
                        </div>
                      ))}
                      <div style={{borderTop:"1px solid "+C.border,marginTop:6,paddingTop:6}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:C.textMid,padding:"2px 0"}}><span>Seeds subtotal</span><span>R{o.seedsTotal?o.seedsTotal.toFixed(2):"—"}</span></div>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:C.textMid,padding:"2px 0"}}><span>Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:C.textMid,padding:"2px 0"}}><span>Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                        <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:14,padding:"4px 0 0"}}><span>Total paid</span><span style={{color:C.darkGreen}}>R{o.total.toFixed(2)}</span></div>
                      </div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12,fontSize:12,color:C.textMid}}>
                      <div><strong>Email:</strong> {o.customer.email}</div>
                      <div><strong>Phone:</strong> {o.customer.phone}</div>
                      <div style={{gridColumn:"1/-1"}}><strong>Address:</strong> {o.customer.street}, {o.customer.suburb}, {o.customer.city}, {o.customer.province} {o.customer.postal}</div>
                    </div>
                    <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
                      {["Pending","Packed","Dispatched","Delivered"].map(s=>(
                        <button key={s} style={{...bP,padding:"5px 12px",fontSize:12,background:o.status===s?SC[s].bg:C.parchment,color:o.status===s?SC[s].color:C.brown,border:"1px solid "+(o.status===s?SC[s].border:C.border),fontWeight:o.status===s?700:400}} onClick={()=>updateOrderStatus(o.id,s)}>{s}</button>
                      ))}
                    </div>
                    <input style={{...iS,marginBottom:8}} placeholder="Pudo tracking reference..." value={o.pudoRef} onChange={e=>updateOrderField(o.id,"pudoRef",e.target.value)} onBlur={e=>persistOrderField(o.id,"pudoRef",e.target.value)}/>
                    <textarea style={{...iS,height:60,resize:"vertical"}} placeholder="Internal notes..." value={o.notes} onChange={e=>updateOrderField(o.id,"notes",e.target.value)} onBlur={e=>persistOrderField(o.id,"notes",e.target.value)}/>
                    <div style={{display:"flex",gap:8,marginTop:10}}>
                      <a href={"https://wa.me/27"+o.customer.phone.replace(/\D/g,"").replace(/^0/,"")} target="_blank" rel="noreferrer" style={{...bG,textDecoration:"none",background:"#25D366",padding:"7px 14px",fontSize:12}}>💬 WhatsApp</a>
                      <a href={"mailto:"+o.customer.email} style={{...bP,textDecoration:"none",padding:"7px 14px",fontSize:12}}>✉️ Email</a>
                      <button style={{...bG,background:"#b00",marginLeft:"auto",padding:"7px 12px",fontSize:12}} onClick={()=>deleteOrder(o.id)}>Delete</button>
                    </div>
                  </div>}
                </div>
              );
            })}
          </div>}

          {adminTab==="products"&&<div>
            {/* Toolbar */}
            <div style={{display:"flex",gap:8,marginBottom:"1rem",flexWrap:"wrap",alignItems:"center"}}>
              <input style={{...iS,flex:1,minWidth:160}} placeholder="Search by name or code..." value={prodSearch} onChange={e=>setProdSearch(e.target.value)}/>
              <select style={{...iS,width:"auto"}} value={prodCat} onChange={e=>setProdCat(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
              <span style={{fontSize:12,color:C.textLight}}>{adminFiltered.length} products</span>
              <button style={{...bG,background:"#2d5a8e",padding:"9px 16px",fontSize:13}} onClick={openNewProduct}>+ Add new product</button>
            </div>

            {/* Product list */}
            {adminFiltered.map(p=>{
              const cs=CS[p.category]||{bg:"#f0f0f0",color:"#555",icon:"🌿"};
              return(
                <div key={p.id} style={{background:"#fff",border:"1px solid "+C.border,borderRadius:8,padding:"9px 12px",display:"flex",alignItems:"center",gap:8,marginBottom:6,opacity:!p.stock?0.6:1}}>
                  <div style={{width:44,height:44,borderRadius:6,overflow:"hidden",flexShrink:0,background:cs.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {p.image?<img src={p.image} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>e.target.style.display="none"}/>:<span style={{fontSize:20}}>{cs.icon}</span>}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <p style={{margin:0,fontWeight:600,fontSize:13,color:C.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</p>
                    <p style={{margin:0,fontSize:11,color:C.textLight}}>{p.code&&<span style={{fontFamily:"ui-monospace,Menlo,monospace",fontWeight:700,color:C.brown}}>{p.code}</span>}{p.code&&" · "}{p.category} · R{p.price} · Profit: R{p.price-p.cost}</p>
                  </div>
                  {/* Status badges */}
                  <div style={{display:"flex",gap:4,flexShrink:0}}>
                    <button title={p.outOfStock?"Mark in stock":"Mark out of stock"} style={{fontSize:11,padding:"3px 8px",borderRadius:6,border:"none",cursor:"pointer",background:p.outOfStock?"#fce8e8":"#eef5e8",color:p.outOfStock?"#c00":C.midGreen,fontWeight:600}} onClick={()=>toggleOutOfStock(p.id)}>{p.outOfStock?"Out of stock":"In stock"}</button>
                    <button title={p.stock?"Hide from store":"Show in store"} style={{fontSize:11,padding:"3px 8px",borderRadius:6,border:"none",cursor:"pointer",background:p.stock?"#e8f0fe":"#f5f5f5",color:p.stock?"#1a4a8e":"#888",fontWeight:600}} onClick={()=>toggleHide(p.id)}>{p.stock?"Visible":"Hidden"}</button>
                  </div>
                  <button style={{...bG,padding:"5px 12px",fontSize:12}} onClick={()=>openEdit(p)}>Edit</button>
                  <button style={{...bG,background:"#b00",padding:"5px 9px",fontSize:12}} onClick={()=>confirmDelete(p.id)} title="Delete product">🗑</button>
                </div>
              );
            })}
          </div>}

          {adminTab==="bulk"&&<div>
            <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:10,padding:"1.25rem",maxWidth:480}}>
              <h3 style={{margin:"0 0 1rem",color:C.darkGreen,fontSize:15}}>Bulk price update</h3>
              <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:4}}>Category</label>
              <select style={{...iS,marginBottom:12}} value={bulkCat} onChange={e=>setBulkCat(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
              <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:4}}>New retail price (R)</label>
              <input style={{...iS,marginBottom:12}} type="number" placeholder="e.g. 50" value={bulkPrice} onChange={e=>setBulkPrice(e.target.value)}/>
              <button style={{...bG,width:"100%",padding:12}} onClick={applyBulk}>Apply to {bulkCat==="All"?products.length:products.filter(p=>p.category===bulkCat).length} products</button>
            </div>
          </div>}
        </div>
      ))}

      {/* ADD / EDIT PRODUCT MODAL */}
      {editId&&(
        <div style={mS} onClick={e=>e.target===e.currentTarget&&setEditId(null)}>
          <div style={bxS}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
              <h3 style={{margin:0,color:C.darkGreen}}>{isNewProduct?"Add new product":"Edit product"}</h3>
              <button style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:C.textLight}} onClick={()=>setEditId(null)}>✕</button>
            </div>

            {/* Image preview */}
            {editData.image&&(
              <div style={{width:"100%",height:140,borderRadius:8,overflow:"hidden",marginBottom:"1rem",background:"#f0f0f0",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src={editData.image} alt="Preview" style={{width:"100%",height:"100%",objectFit:"cover"}} onError={e=>{e.target.style.display="none";}}/>
              </div>
            )}

            <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Product code</label>
            <input style={{...iS,marginBottom:12,fontFamily:"ui-monospace,Menlo,monospace",textTransform:"uppercase"}} placeholder="e.g. VTMM" value={editData.code||""} onChange={e=>setEditData(d=>({...d,code:e.target.value.toUpperCase()}))}/>
            <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Product name *</label>
            <input style={{...iS,marginBottom:12}} placeholder="e.g. Basil Genovese" value={editData.name||""} onChange={e=>setEditData(d=>({...d,name:e.target.value}))}/>

            <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Category *</label>
            <select style={{...iS,marginBottom:12}} value={editData.category||"Vegetables"} onChange={e=>setEditData(d=>({...d,category:e.target.value}))}>
              {ALL_CATS.map(c=><option key={c}>{c}</option>)}
            </select>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div>
                <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Cost price (R)</label>
                <input style={iS} type="number" value={editData.cost||25} onChange={e=>setEditData(d=>({...d,cost:e.target.value}))}/>
              </div>
              <div>
                <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Retail price (R)</label>
                <input style={iS} type="number" value={editData.price||45} onChange={e=>setEditData(d=>({...d,price:e.target.value}))}/>
              </div>
            </div>
            {editData.price&&editData.cost&&<p style={{fontSize:11,color:C.midGreen,margin:"-8px 0 12px",fontWeight:600}}>Profit per pack: R{Number(editData.price)-Number(editData.cost)}</p>}

            <label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3}}>Image URL (from imgbb.com)</label>
            <input style={{...iS,marginBottom:4}} placeholder="https://i.ibb.co/..." value={editData.image||""} onChange={e=>setEditData(d=>({...d,image:e.target.value}))}/>
            <p style={{fontSize:11,color:C.textLight,margin:"0 0 12px"}}>Upload to imgbb.com → copy the direct link (ends in .jpg or .png)</p>

            <div style={{display:"flex",gap:16,marginBottom:16}}>
              <label style={{fontSize:13,color:C.textMid,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                <input type="checkbox" checked={editData.stock!==false} onChange={e=>setEditData(d=>({...d,stock:e.target.checked}))}/> Show in store
              </label>
              <label style={{fontSize:13,color:"#c00",display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                <input type="checkbox" checked={editData.outOfStock||false} onChange={e=>setEditData(d=>({...d,outOfStock:e.target.checked}))}/> Out of stock
              </label>
            </div>

            <div style={{display:"flex",gap:8}}>
              <button style={{...bP,flex:1}} onClick={()=>setEditId(null)}>Cancel</button>
              <button style={{...bG,flex:2}} onClick={saveProduct}>{isNewProduct?"Add product":"Save changes"}</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteConfirm&&(
        <div style={mS} onClick={e=>e.target===e.currentTarget&&setDeleteConfirm(null)}>
          <div style={{...bxS,maxWidth:380,textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:"0.5rem"}}>🗑️</div>
            <h3 style={{margin:"0 0 0.5rem",color:"#b00"}}>Delete product?</h3>
            <p style={{fontSize:13,color:C.textMid,margin:"0 0 1.5rem"}}>
              <strong>{products.find(p=>p.id===deleteConfirm)?.name}</strong><br/>
              This cannot be undone. Consider hiding the product instead.
            </p>
            <div style={{display:"flex",gap:8}}>
              <button style={{...bP,flex:1}} onClick={()=>setDeleteConfirm(null)}>Cancel — hide it instead</button>
              <button style={{...bG,flex:1,background:"#b00"}} onClick={doDelete}>Yes, delete permanently</button>
            </div>
          </div>
        </div>
      )}

      {/* CART MODAL */}
      {cartOpen&&(
        <div style={mS} onClick={e=>e.target===e.currentTarget&&closeCart()}>
          <div style={bxS}>
            {step===0&&<div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                <h3 style={{margin:0,color:C.darkGreen}}>Your cart</h3>
                <button style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:C.textLight}} onClick={closeCart}>✕</button>
              </div>
              {cart.length===0?<p style={{color:C.textLight,textAlign:"center",padding:"2rem 0"}}>Your cart is empty</p>:(
                <div>
                  {cart.map(x=>(
                    <div key={x.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid "+C.border}}>
                      {x.image&&<img src={x.image} alt={x.name} style={{width:36,height:36,objectFit:"cover",borderRadius:6}} onError={e=>e.target.style.display="none"}/>}
                      <span style={{flex:1,fontSize:13}}>{x.name}</span>
                      <button style={{background:"none",border:"1px solid "+C.border,borderRadius:5,width:24,height:24,cursor:"pointer"}} onClick={()=>setCart(c=>c.map(i=>i.id===x.id?{...i,qty:Math.max(0,i.qty-1)}:i).filter(i=>i.qty>0))}>-</button>
                      <span style={{width:18,textAlign:"center",fontSize:13}}>{x.qty}</span>
                      <button style={{background:"none",border:"1px solid "+C.border,borderRadius:5,width:24,height:24,cursor:"pointer"}} onClick={()=>setCart(c=>c.map(i=>i.id===x.id?{...i,qty:i.qty+1}:i))}>+</button>
                      <span style={{minWidth:60,textAlign:"right",fontWeight:700,color:C.darkGreen,fontSize:13}}>R{(x.price*x.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div style={{marginTop:10,borderTop:"1px solid "+C.border,paddingTop:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"3px 0"}}><span>Seeds subtotal</span><span>R{seedsTotal.toFixed(2)}</span></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"3px 0"}}><span>📦 Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"3px 0",borderBottom:"1px solid "+C.border,paddingBottom:8}}><span>🛡️ Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                    <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15,paddingTop:8}}><span>Total</span><span style={{color:C.darkGreen}}>R{cartTotal.toFixed(2)}</span></div>
                  </div>
                  <div style={{...pN,marginTop:10}}>📦 Delivery via Pudo Locker — collect from a locker near you.</div>
                  <div style={{display:"flex",gap:8,marginTop:12}}>
                    <button style={{...bP,flex:1}} onClick={closeCart}>Cancel</button>
                    <button style={{...bG,flex:1}} onClick={()=>setStep(1)}>Checkout →</button>
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
                <div key={k}><label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:10}}>{l}</label><input style={iS} type={t} placeholder={ph} value={cust[k]} onChange={e=>setCust(d=>({...d,[k]:e.target.value}))}/></div>
              ))}
              <p style={{fontSize:12,fontWeight:600,color:C.darkGreen,margin:"14px 0 4px"}}>Delivery address</p>
              {[["Street address","street","123 Main Street"],["Suburb","suburb","Sandton"],["City","city","Johannesburg"],["Province","province","Gauteng"],["Postal code","postal","2196"]].map(([l,k,ph])=>(
                <div key={k}><label style={{fontSize:12,color:C.textMid,display:"block",marginBottom:3,marginTop:8}}>{l}</label><input style={iS} placeholder={ph} value={cust[k]} onChange={e=>setCust(d=>({...d,[k]:e.target.value}))}/></div>
              ))}
              <div style={{...pN,marginTop:12}}>📦 We will send your seeds to the nearest Pudo locker. You will receive an SMS when ready.</div>
              <div style={{display:"flex",gap:8,marginTop:14}}>
                <button style={{...bP,flex:1}} onClick={()=>setStep(0)}>← Back</button>
                <button style={{...bG,flex:1}} onClick={()=>setStep(2)} disabled={!cust.name||!cust.phone||!cust.street}>Review order →</button>
              </div>
            </div>}

            {step===2&&<div>
              <h3 style={{margin:"0 0 0.75rem",color:C.darkGreen}}>Review and pay</h3>
              <div style={{background:C.parchment,border:"1px solid "+C.border,borderRadius:8,padding:"0.75rem",marginBottom:"0.75rem"}}>
                {cart.map(x=><div key={x.id} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"3px 0"}}><span>{x.qty}x {x.name}</span><span style={{fontWeight:600}}>R{(x.price*x.qty).toFixed(2)}</span></div>)}
                <div style={{borderTop:"1px solid "+C.border,marginTop:6,paddingTop:6}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"2px 0"}}><span>Seeds subtotal</span><span>R{seedsTotal.toFixed(2)}</span></div>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"2px 0"}}><span>📦 Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.textMid,padding:"2px 0"}}><span>🛡️ Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                </div>
                <div style={{borderTop:"1px solid "+C.border,marginTop:6,paddingTop:6,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15}}><span>Total</span><span style={{color:C.darkGreen}}>R{cartTotal.toFixed(2)}</span></div>
              </div>
              <div style={{background:"#fff8e8",border:"1px solid #e8d08a",borderRadius:8,padding:"0.8rem",fontSize:12,color:C.brown,marginBottom:"0.9rem",lineHeight:1.7}}>
                Clicking Pay now opens a secure YOCO payment page with the exact amount pre-filled. Your order is saved automatically and you will receive a confirmation email.
              </div>
              {payError&&<p style={{fontSize:12,color:"#c00",margin:"0 0 8px"}}>{payError}</p>}
              <button style={{...bG,width:"100%",padding:12,fontSize:14,marginBottom:8,opacity:payLoading?0.7:1}} onClick={handlePay} disabled={payLoading}>{payLoading?"Saving order...":"Pay R"+cartTotal.toFixed(2)+" securely via YOCO →"}</button>
              <button style={{...bP,width:"100%"}} onClick={()=>setStep(1)}>← Back</button>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
}
