import { useState, useMemo, useEffect } from "react";


const WA = "27832309883";
const EMAIL = "wreford19@gmail.com";
const PHONE = "+27 83 230 9883";
const LOGO = "https://i.ibb.co/Qj1wGkfJ/Trueleaf-Seeds-Logo.jpg";
const ADMIN_PW = "Wreford99#";
const PUDO_FEE = 50;
const PACKAGING_FEE = 15;


const IMGS = {
  "Poppy Peony Light Purple":"https://i.ibb.co/tMjbRDh4/Poppy-Peony-Lavender.png",
  "Chilli Bhut Jolokia Red":"https://i.ibb.co/k2F22zB4/Capsicum-Bhut-Jolokia-Red.png",
  "Chilli Jalapeno":"https://i.ibb.co/JFSsrJdM/Capsicum-Jalapeno.png",
  "Chilli Polombo":"https://i.ibb.co/GvJ9W5cf/Capsicum-Polombo.png",
  "Chilli Carolina Reaper":"https://i.ibb.co/NnfyWsRN/Capsicum-Carolina-Reaper.png",
  "Chilli Scorpion Tongue Black":"https://i.ibb.co/3Y9LPxHc/Capsicum-Scorpion-Tongue-Black.png",
  "Chilli Scotch Bonnet":"https://i.ibb.co/MxS84vYM/Capsicum-Scotch-Bonnet.png",
  "Chilli Chocolate Habanero":"https://i.ibb.co/k2kFY3TL/Capsicum-Chocolate-Habanero.png",
  "Chilli Trinidad Moruga Scorpion":"https://i.ibb.co/WW7dRQr7/Capsicum-Trinidad-Scropion-Moruga.png",
  "Poultry Pasture Warm Season Mix":"https://i.ibb.co/WrGtzbR/Pasture-Mix-Poultry-Pasture-Mix.jpg",
  "Agapanthus Blue":"https://i.ibb.co/dJgKb5xt/Agapanthus-Blue.png",
  "Larkspur":"https://i.ibb.co/Kj1XLS12/Larkspur-Mix.png",
  "Lobelia":"https://i.ibb.co/848RfBzS/Lobelia.png",
  "Marigold African":"https://i.ibb.co/sdZMSpJL/Marigold-African.png",
  "Aquilegia":"https://i.ibb.co/WvYrQYTj/Aquilegia-Mix.png",
  "Marigold Bronza Red":"https://i.ibb.co/fzsw7w5Q/Marigold-Bronze-Red.png",
  "Balsam":"https://i.ibb.co/qMSxGXXS/Balsam-Mix.png",
  "Marigold Yellow":"https://i.ibb.co/mrNvHnHJ/Marigold-Yellow.png",
  "Celosia":"https://i.ibb.co/rGyZnwN1/Celosia-Mix.png",
  "Cleome":"https://i.ibb.co/mFPk2Lzd/Cleome-Mix.png",
  "Cornflower Blue Boy":"https://i.ibb.co/jkLhqR4Z/Cornflower-Blue-Boy.png",
  "Poppy California":"https://i.ibb.co/67PF5ZXW/Poppy-California.png",
  "Dahlia":"https://i.ibb.co/tMqdkvvk/Dahlia-Mix.png",
  "Delphinium":"https://i.ibb.co/gbtpCfd1/Delphinium.png",
  "Portulaca":"https://i.ibb.co/xrVyKrM/Portulaca-Mix.png",
  "Rudbeckia":"https://i.ibb.co/4Zkv6xGF/Rudbeckia.png",
  "Summer Meadow Mix":"https://i.ibb.co/NhnrHKx/Wildflower-Summer-Meadows-Mix.png",
  "Viola":"https://i.ibb.co/ynsPzxyN/Viola.png",
  "Winter Meadow Mix":"https://i.ibb.co/5xg20csY/wildflower-Winter-Meadow-Mix.png",
  "Watermelon Golden Honey":"https://i.ibb.co/bRKmM75s/Watermelon-Golden-Honey.png",
  "Melon Honeydew Green":"https://i.ibb.co/nswLFSKk/Melon-Honeydew-Green.png",
  "Watermelon Maketaan":"https://i.ibb.co/cKWct0yP/Watermelon-Maketaan.png",
  "Melon Honeydew Yellow":"https://i.ibb.co/FGv3SzQ/Melon-Honeydew-Yellow.png",
  "Watermelon Mix":"https://i.ibb.co/Y40WgDV9/Watermelon-Mix.png",
  "Melon Minnesota Midget":"https://i.ibb.co/wNxWsQGD/Melon-Minnesota-Midget.png",
  "Watermelon Tender Sweet Orange":"https://i.ibb.co/ymQDVnVj/Watermelon-Tender-Sweet-Orange.png",
  "Melon Piel De Sapo":"https://i.ibb.co/VYJHgLXt/Melon-Piel-De-Sapo.jpg",
  "Flaxseed":"https://i.ibb.co/TM88YRJx/Flaxseed.png",
  "Lovage":"https://i.ibb.co/JwcPbq09/Lovage.png",
  "Chives":"https://i.ibb.co/zWkPQJpt/Chives.png",
  "Clarey Sage":"https://i.ibb.co/HpMDj4Hv/Clarey-Sage.png",
  "Purslane":"https://i.ibb.co/rRnSc5yx/Purslane.png",
  "Echinacea":"https://i.ibb.co/R49VBVxC/Echinacea.png",
  "Tarragon":"https://i.ibb.co/nsDjbGwW/Tarragon.png",
  "Microgreen Green Basil":"https://i.ibb.co/BHW0pNxF/Microgreen-Green-Basil-5.jpg",
  "Microgreen White Mustard":"https://i.ibb.co/JwNChQ6K/Microgreen-White-Mustard.png",
  "Microgreen Mungbeans":"https://i.ibb.co/GQZKX5Cv/Microgreen-Mungbeans.png",
  "Sprout Stirfry Blend":"https://i.ibb.co/MDCWPKgH/Sprouts-Stirfry-Blend.png",
  "Camel Thorn":"https://i.ibb.co/tpZNjhvb/Camel-Thorn-Tree.png",
  "Paperback Thorn":"https://i.ibb.co/QvD5J8Sr/Paper-Bark-Thorn-Tree.jpg",
  "Cucumber Lemon":"https://i.ibb.co/WWbyxbmy/Cucumber-Lemon.png",
  "Artichoke Green Globe":"https://i.ibb.co/MDVJ4LjD/Artichoke-Green-Globe.png",
  "Cucumber Long White":"https://i.ibb.co/0p3KpGSq/Cucmber-Long-White.png",
  "Asparagus Mary Washington":"https://i.ibb.co/Q7zS0GRN/Asparagus-Mary-Washington.png",
  "Bean Broad Bean":"https://i.ibb.co/jkdsBBqt/Bean-Broad-Bean.png",
  "Bean Madagascar":"https://i.ibb.co/MxpNC5PV/Bean-Madagascar.png",
  "Kale Southern Blue":"https://i.ibb.co/N6Jkk5pc/Kale-Southern-Blue.png",
  "Kale Vates Blue":"https://i.ibb.co/vxdTqsMg/Kale-Vates-Blue.png",
  "Bean Witsa":"https://i.ibb.co/zhtTz2M0/Bean-Witsa.png",
  "Lettuce Butterhead":"https://i.ibb.co/DgMRCv0C/Lettuce-Butterhead.png",
  "Lettuce Gourmet Mix":"https://i.ibb.co/xqHn6QrF/Lettuce-Gourmet-Mix.png",
  "Lettuce Green Cos":"https://i.ibb.co/KckGxDYZ/Lettuce-Green-Cos.png",
  "Lettuce Oak Leaf Mix":"https://i.ibb.co/Jwf622m2/Lettuce-Oak-Lead-Mix.png",
  "Brinjal Bianca":"https://i.ibb.co/TXncMj3/Brinjal-Bianca.png",
  "Lettuce Romain Mix":"https://i.ibb.co/8D48wm9X/Lettuce-Romaine-Mix.png",
  "Marog Green":"https://i.ibb.co/WNtNXVhm/Marog-Green.png",
  "Mealie Sahara":"https://i.ibb.co/4w99Jtyf/Mealie-Sahara.png",
  "Onion Australian Brown":"https://i.ibb.co/NnghSvDT/Onion-Australian-Brown.png",
  "Peas Aragon":"https://i.ibb.co/yFw8Cc1Q/Peas-Aargan.png",
  "Radish Cherry Belle":"https://i.ibb.co/RTWJkCmd/Radish-Cherry-Belle.png",
  "Cucumber Armenian White":"https://i.ibb.co/Q79zs50g/Cucumber-Arminian-White.png",
  "Radish White Icicle":"https://i.ibb.co/spk76h6j/Radish-White-Icicle.png",
  "Cucumber Double Yield":"https://i.ibb.co/kVwv1dmX/Cucmber-Double-Yeild.png",
  "Rhubarb":"https://i.ibb.co/hx1tmFKq/Rhubarb.png",
  "Cucumber Gherkin Rhinish":"https://i.ibb.co/6VCHmgh/Cucumber-Gherkin-Rhinish.png",
  "Squash Ayota":"https://i.ibb.co/Z6VpBKpR/Squash-Ayota.png",
  "Sweet Potato Combo Pack":"https://i.ibb.co/JRmMj0ZP/Sweet-Potato-Combo-Pack.jpg",
  "Sweet Potato Okinawan":"https://i.ibb.co/j9X1H3gZ/Sweet-Potato-Okinawan.jpg",
  "Sweet Potato Orange":"https://i.ibb.co/5g1FLkPk/Sweet-Potato-Orange.jpg",
  "Sweet Potato Purple":"https://i.ibb.co/23MzMhjR/Sweet-Potato-Purple.jpg",
  "Sweet Potato Purple Skin":"https://i.ibb.co/2YjCXhZW/Sweet-Potato-Purple-Skin.jpg",
  "Sweet Potato White Flesh":"https://i.ibb.co/HTkm8DSZ/Sweet-Potato-White-Flesh.jpg",
  "Tomato Banana Legs":"https://i.ibb.co/xKZwd07k/Tomato-Banana-Legs.png",
  "Tomato Beefsteak":"https://i.ibb.co/nsJqKrkr/Tomato-Beefsteak.png",
  "Tomato Black Zebra":"https://i.ibb.co/G4ftBfBN/Tomato-Black-Zebra.png",
  "Tomato Cherokee Purple":"https://i.ibb.co/v6SftVt5/Tomato-Cherokee-Purple.png",
  "Tomato Cherry Black":"https://i.ibb.co/21B7wH75/Tomato-Cherry-Black.png",
  "Tomato Cherry Malawi Red":"https://i.ibb.co/zWpZtR1r/Tomato-Cherry-Malawi-Red.png",
  "Tomato Cherry Pink Ice":"https://i.ibb.co/gL2Mf6JK/Tomato-Cherry-Pink-Ice.png",
  "Tomato Cherry Yellow":"https://i.ibb.co/PzzW30s0/Tomato-Cherry-Yellow.png",
  "Tomato Cosmic Eclipse":"https://i.ibb.co/ns3np2Fp/Tomato-Cosmic-Eclipse.png",
  "Tomato Green Goddess":"https://i.ibb.co/YTQ8Dw8S/Tomato-Green-Goddess.png",
  "Tomato Green Sausage":"https://i.ibb.co/ZzQyZtHy/Tomato-Green-Sausage.png",
  "Tomato Heirloom Mix":"https://i.ibb.co/YBSj8xDh/Tomato-Heirloom-Mix.png",
  "Tomato Purple Plum":"https://i.ibb.co/Y5QHv8J/Tomato-Purple-Plum.png",
  "Alyssum Carpet White":"https://i.ibb.co/FLpSBLhT/Alyssum-White.png",
  "African Horned Cucumber":"https://i.ibb.co/rqnzxsx/African-Horned-Cucumber.png",
  "Ammi Majus":"https://i.ibb.co/C3w0bfNZ/Ammi-Majus.png",
  "Anise":"https://i.ibb.co/Ng6Xghqb/Anise.png",
  "Ashwagandha":"https://i.ibb.co/7NRHb22B/Ashwagandha.png",
  "Baobab":"https://i.ibb.co/tptsYJ3P/Boabab.png",
  "Basil Genovese":"https://i.ibb.co/nT4vcKq/Basil-Genovese.png",
  "Basil Holy":"https://i.ibb.co/kgT2j4dW/Basil-Holy-Tulsi.png",
  "Basil Sweet":"https://i.ibb.co/1fbVBdh6/Basil-Sweet.png",
  "Bean Appaloosa Bush":"https://i.ibb.co/Hppqf9yK/Bean-Appaloosa-Bush.png",
  "Bean Black Turtle":"https://i.ibb.co/hxZcpc7V/Bean-Black-Turtle.png",
  "Beans Bird Egg Blue":"https://i.ibb.co/WNz347bV/Bean-Bird-Egg-Blue.png",
  "Bean Lima Nuguni Pole Variety":"https://i.ibb.co/kVz7VZ4B/Bean-Lima-Nuguni-Pole.png",
  "Bean Nonna Agnes Blue":"https://i.ibb.co/Q71pnbDf/Bean-Nonna-Blue-Agnes.png",
  "Bean Vermont Appaloosa":"https://i.ibb.co/27v5hfXC/Bean-Vermont-Appaloosa.png",
  "Bean Zebra Lima":"https://i.ibb.co/b5ckSNyp/Bean-Zebra-Lima.png",
  "Beans Bush Contender":"https://i.ibb.co/Nnb76zwB/Bean-Bush-Contender.png",
  "Bean Yard Long":"https://i.ibb.co/HpR2nh2g/Bean-Yard-Long.png",
  "Beetroot Bulls Blood":"https://i.ibb.co/spR3GsJL/Beetroot-Bulls-Blood.png",
  "Beetroot Chioggia":"https://i.ibb.co/1GNHBL8v/Beetroot-Chiaggia.png",
  "Beetroot Crimson":"https://i.ibb.co/PvyqvC1f/Beetroot-Crimson-Globe.png",
  "Beetroot Detroit Dark Red":"https://i.ibb.co/jvVHfKz6/Beetroot-Detroit-Dark-Red.png",
  "Beetroot Golden Globe":"https://i.ibb.co/8n5Y63bB/Beetroot-Golden-Globe.png",
  "Beetroot Rainbow Mix":"https://i.ibb.co/Z6jnQhy8/Beetroot-Rainbow-Mix.png",
  "Beetroot Ruby Queen":"https://i.ibb.co/whKyN6cn/Beetroot-Ruby-Queen.png",
  "Black Mustard":"https://i.ibb.co/W4wd8CdY/Black-Mustard.png",
  "Black Seed (Nigella Sativa)":"https://i.ibb.co/8DkFpBtG/Black-Seed-Nigella-Sativa.png",
  "Borage":"https://i.ibb.co/pjQP5hbk/Borage.png",
  "Broccoli":"https://i.ibb.co/vfBdCMj/Broccoli-Calabrese.png",
  "Broccoli Purple Sprouting":"https://i.ibb.co/F4TB2pS7/Broccoli-Purple-Sprouting.png",
  "Broccoli Romanesca":"https://i.ibb.co/mrtj5Fh9/Broccoli-Romanessca.png",
  "Brussel Sprouts":"https://i.ibb.co/213Xmr4J/Brussels-Sprout.png",
  "Cabbage Copenhagen":"https://i.ibb.co/pvgGXYx6/Cabbage-Copenhagen.png",
  "Cabbage Drumhead":"https://i.ibb.co/Psp3XQS8/Cabbage-Drumhead.png",
  "Cabbage Savoy":"https://i.ibb.co/hRLfHYsv/Cabbage-Savoy.png",
  "Calendula Mix":"https://i.ibb.co/s9TXHfXn/Calendula-Mix.png",
  "Cancer Bush":"https://i.ibb.co/x9SvRQ2/Cancer-Bush-Sutherlandia-Frustescens.png",
  "Cape Gooseberry":"https://i.ibb.co/mCdkdQRJ/Cape-Gooseberry.png",
  "Capsicum California Wonder":"https://i.ibb.co/0jPmWqw8/Capsicum-California-Wonder.png",
  "Carrot Chantenny Karoo":"https://i.ibb.co/TQ3GgSL/Carrot-Chantenay-Karoo.png",
  "Carrots Nantes Scarlet":"https://i.ibb.co/R4bGKQMx/Carrot-Nantes-Red.png",
  "Carrots Rainbow Blend":"https://i.ibb.co/JR6T4R77/Carrot-Rainbow-Mix.png",
  "Catnip":"https://i.ibb.co/dJBgpzk5/Catnip.png",
  "Cauliflower Green Igloo":"https://i.ibb.co/YBPfwwFk/Cauliflower-Green-Igloo.png",
  "Cauliflower Macerata Green":"https://i.ibb.co/WWNMP868/Cauliflower-Macerata-Green.png",
  "Cauliflower Mini White":"https://i.ibb.co/MkgDMZNx/Cauliflower-Mini-White.png",
  "Cauliflower Romanesca Green":"https://i.ibb.co/0jryjnv6/Cauliflower-Romanessca-Green.png",
  "Cauliflower Snowball":"https://i.ibb.co/Xf1Fgq6w/Cauliflower-Snowball-White.png",
  "Cauliflower Violet Sicilian":"https://i.ibb.co/k2cBFMNB/Cauliflower-Violet-Sicilian.png",
  "Celery Utah Tall":"https://i.ibb.co/HfTbjWHr/Celery-Utah-Tall.png",
  "Chamomile":"https://i.ibb.co/hFr8n3s8/Chamomile.png",
  "Chia Seed":"https://i.ibb.co/gLwPwsqr/Chia-Seed.png",
  "Chilli Birds Eye":"https://i.ibb.co/v4Jc3FX3/Capsicum-Birds-Eye.png",
  "Chilli Bishops Crown":"https://i.ibb.co/1Y2Tfc7s/Capsicum-Bishops-Crown.png",
  "Chilli Cayenne":"https://i.ibb.co/Kczfvgwp/Capsicum-Cayenne.png",
  "Chilli Habanero Orange":"https://i.ibb.co/CsS3g3Sm/Capsicum-Habanero-Orange.png",
  "Chilli Paprika":"https://i.ibb.co/7tTwzg8F/Capsicum-Paprika.png",
  "Chilli Peppa Dew":"https://i.ibb.co/HfXtxQnw/Capsicum-Peppadew.png",
  "Cineraria Dusty Miller":"https://i.ibb.co/HTjBW5hG/Dusty-Miller-Cinematic-Silverdust.png",
  "Cleaver or Bedstraw":"https://i.ibb.co/yc9pkMPv/Cleaver.png",
  "Common Coral Tree":"https://i.ibb.co/wFdL8jLh/Coral-Tree.png",
  "Coriander":"https://i.ibb.co/zWXh9wxs/Coriander.png",
  "Corn Bloody Butcher":"https://i.ibb.co/Kpr2zF7j/Corn-Bloody-Butcher.png",
  "Corn Glass Gem":"https://i.ibb.co/NggBDfTw/Corn-Glass-Gem.png",
  "Corn Green Oaxacan":"https://i.ibb.co/tw9tpwN0/Corn-Green-Oaxacan.png",
  "Cosmos Laced":"https://i.ibb.co/9mdB4J5k/Cosmos-Laced.png",
  "Cosmos Sea Shell Pink":"https://i.ibb.co/r25zRzVK/Cosmos-Seashell-Pink.png",
  "Cosmos Sensation Mix":"https://i.ibb.co/whymqWK6/Cosmos-Sensation-Mix.png",
  "Cosmos Veldfire":"https://i.ibb.co/RpL0R9wL/Cosmos-Veldfire.png",
  "Creeping Thyme":"https://i.ibb.co/TxgY4WCR/Creeping-Thyme.png",
  "Cucumber Ashley":"https://i.ibb.co/bRJj0Wrb/Cucumber-Ashley.png",
  "Cucumber Snake":"https://i.ibb.co/cGcmBCL/Cucumber-Snake.png",
  "Dandelion":"https://i.ibb.co/4RB2Nbpf/Dandelion.png",
  "Dianthus Mix":"https://i.ibb.co/Pz5tXS98/Dianthus-Mix.png",
  "Dichondra Wonder Lawn":"https://i.ibb.co/zHsTVWGg/Dichondra-Wonder-Lawn.png",
  "Dill":"https://i.ibb.co/rGtdkJgk/Dill.png",
  "Eggfruit Brinjal Black Beauty":"https://i.ibb.co/006y90j/Brinjal-Black-Beauty.png",
  "Eggfruit Brinjal Purple Fingers":"https://i.ibb.co/bg4Vg9pq/Brinjal-Purple-Fingers.png",
  "Erigeron Profusion":"https://i.ibb.co/Gfh7wT8w/Erigeron-White.png",
  "Evening Primrose Eonothera biennis":"https://i.ibb.co/wNqsxWLb/Evening-Primrose.png",
  "Fennel":"https://i.ibb.co/jPPfn7HK/Fennel.png",
  "Fenugreek":"https://i.ibb.co/TDJS1PsY/Fenugreek.png",
  "Feverfew Tanacetum parthenium":"https://i.ibb.co/8nvXn98S/Feverfew.png",
  "Fever Tree":"https://i.ibb.co/DHMzt529/Fever-Tree.jpg",
  "Foxglove Foxy Mix":"https://i.ibb.co/23HXfz58/Foxglove-Foxy-Mix.png",
  "French Lavender":"https://i.ibb.co/8L1QjnBn/Lavender-French.png",
  "Garlic Chesnok Red":"https://i.ibb.co/qMhvN3MV/Garlic-Chesnok-Red.jpg",
  "Garlic Egyptian Red":"https://i.ibb.co/fz70qDpk/Garlic-Egyptian-Red.jpg",
  "Garlic Egyptian White":"https://i.ibb.co/V0R9CHCj/Garlic-Egypitain-White.jpg",
  "Garlic Spanish White":"https://i.ibb.co/TDkWSVB7/Garlic-Spanish-White.jpg",
  "Gourd African Calabash":"https://i.ibb.co/Fk0BnQgx/Gourd-African-Calabash.png",
  "Gourd Calabash Birdhouse":"https://i.ibb.co/93Zynp8P/Gourd-Calabash-Birdhouse.png",
  "Gourd Caveman Club":"https://i.ibb.co/23KSr7fz/Gourd-Caveman-Club.png",
  "Gourd Cuccuza":"https://i.ibb.co/kV0KQz9h/Gourd-Cuzzuza.png",
  "Gourd Dipper":"https://i.ibb.co/7dYH92Cm/Gourd-Dipper.png",
  "Gourd Dipper Extra Length":"https://i.ibb.co/kZJ6Sd7/Gourd-Dipper-Extra-Length.png",
  "Gourd Giant Bullet Headwax":"https://i.ibb.co/spqy9NNB/Gourd-Giant-Bullet-Headwax.png",
  "Gourd Leraka":"https://i.ibb.co/sd9PyC0Z/Gourd-Lerka.png",
  "Gourd Martin House Bottle":"https://i.ibb.co/HLNfNZvf/Gourd-Martin-House-Bottle.png",
  "Gourd Mix":"https://i.ibb.co/99Nhg1hM/Gourd-Mix.png",
  "Gourd Snake":"https://i.ibb.co/1GwzTjMX/Gourd-Snake.png",
  "Gourd Speckled Swan":"https://i.ibb.co/39Kqgx65/Gourd-Speckled-Swan.png",
  "Green Prickly Pear":"https://i.ibb.co/YT0gnf2H/Green-Prickly-Pear.png",
  "Hollyhock Mix":"https://i.ibb.co/YB1KpJ5C/Hollyhock-Mix.png",
  "Hollyhock Maroon":"https://i.ibb.co/HTCcpn4P/Hollyhock-Maroon.png",
  "Hollyhock White":"https://i.ibb.co/TBGqwTJy/Hollyhock-White.png",
  "Horehound White Marrubium vulgare":"https://i.ibb.co/svJdVJX5/Horehound-White.png",
  "Huckleberry":"https://i.ibb.co/pB9vjJYN/Huckleberry.png",
  "Hyssop":"https://i.ibb.co/qYSM0mzQ/Hyssop.png",
  "Industrial Hemp":"https://i.ibb.co/C5TS7dDh/Hemp-Industrial-Hemp.png",
  "Job's Tears Coix lacryma":"https://i.ibb.co/whx0D9cG/Jacob-Tears.png",
  "Kale Black Krim":"https://i.ibb.co/4wrHS0TK/Kale-Black-Palm.png",
  "Kale Red Ursa":"https://i.ibb.co/Kz92cB99/Kale-Red-Ursa.png",
  "Kale White Russian":"https://i.ibb.co/Mkkd0QyL/Kale-White-Russain.png",
  "Karee Tree - Swart":"https://i.ibb.co/7NJLSwvC/Swart-Karee-Tree.png",
  "King Protea":"https://i.ibb.co/3mH19z9K/Protea-King.png",
  "Kohlrabi Purple Vienna":"https://i.ibb.co/WN755px2/Kohlrabi-Purple-Vienna.png",
  "Kohlrabi White Vienna":"https://i.ibb.co/gFWLX6ZZ/Kohlrabi-White-Vienna.png",
  "LM Lawn":"https://i.ibb.co/VYzw44GQ/Lawn-LM-Lawn.png",
  "Leeks Elephant":"https://i.ibb.co/KzjyyDhq/Leeks-Elephant.png",
  "Lemon Balm":"https://i.ibb.co/ycNSkcfm/Lemon-Balm.png",
  "Lemon Basil":"https://i.ibb.co/mVgtCytb/Basil-Lemon.png",
  "Lettuce Freckles":"https://i.ibb.co/Vc0GdhVG/Lettuce-Romaine-Freckles.png",
  "Lettuce Great Lakes":"https://i.ibb.co/RTqJkTCc/Lettuce-Great-Lakes.png",
  "Lettuce Loose Leaf Mix":"https://i.ibb.co/bMBC9sr2/Lettuce-Loose-Leaf-Mix.png",
  "Lettuce Mix":"https://i.ibb.co/sJ50VQTQ/Lettuce-Gourmet-Mix.jpg",
  "Loofah European":"https://i.ibb.co/WNYNHGSH/Loofah-European.png",
  "Lucern Tree Chamaecytisus proliferus":"https://i.ibb.co/yFDXK0n4/Lucerne-Tree.jpg",
  "Marula":"https://i.ibb.co/Y7Npf7zV/Marula-Tree.png",
  "Melon Rich Sweetness Cucumis Melo":"https://i.ibb.co/rfTRNKhf/Melon-Rich-Sweetness-132.png",
  "Mesembryansthemum Bokbaai Vygie":"https://i.ibb.co/dwyYSjj2/Mesembryanthem-Bokbaai-Vygie-Mix.png",
  "Mexican Mint":"https://i.ibb.co/FdXfsXB/Mexican-Mint.png",
  "Microgreen Alfalfa":"https://i.ibb.co/2Yyn64Vf/Microgreen-Alfalfa.png",
  "Microgreens Asian Oriental Mix":"https://i.ibb.co/chH8CTch/Microgreen-Asian-Oriental-Blend.png",
  "Microgreens Black Mustard":"https://i.ibb.co/62QmzSw/Microgreen-Black-Mustard.jpg",
  "Microgreens Broccoli Calabrese":"https://i.ibb.co/tTHDN9QM/Microgreen-Broccoli.png",
  "Microgreens Cress":"https://i.ibb.co/d0h7jJxL/Microgreen-Cress.png",
  "Microgreen Fenugreek":"https://i.ibb.co/rGG5qNhX/Microgreen-Fenugreek.jpg",
  "Microgreens Green Basil":"https://i.ibb.co/1JJFtdXj/Microgreen-Green-Basil.jpg",
  "Microgreens Green Swiss Chard":"https://i.ibb.co/wtBMrh5/Microgreen-Green-Swiss-Chard.jpg",
  "Microgreens Mizuno Greens":"https://i.ibb.co/TM39QVQf/Microgreen-Mizuno-Green.png",
  "Microgreens Mustard Green Frills":"https://i.ibb.co/RpHd7f0X/Microgreen-Mustard-Greens-Frills.png",
  "Microgreen Kaleidoscope Mix":"https://i.ibb.co/kgfyxhnQ/Microgreen-Kaleidoscope.png",
  "Microgreens Mustard Red Frills":"https://i.ibb.co/z938tfR/Microgreen-Mustard-Red-Frills.png",
  "Microgreens Radish Coralette":"https://i.ibb.co/qLSCzM7M/Microgreen-Radish-Coralette.png",
  "Microgreens Radish Daikon":"https://i.ibb.co/p87RfY2/Microgreen-Radish-Daikon.png",
  "Microgreen Radish Rainbow":"https://i.ibb.co/byCVjxg/Microgreen-Radish-Rainbow-Mix.png",
  "Microgreens Radish Tsai Tsai":"https://i.ibb.co/ccjrtNNd/Microgreen-Radish-Tsai-Tsai.png",
  "Microgreens Red Amaranthus":"https://i.ibb.co/GQsDfMh4/Microgreen-Red-Amaranth.png",
  "Microgreens Red Swiss Chard":"https://i.ibb.co/nN3tVfcs/Microgreen-Red-Swiss-Chard.png",
  "Microgreens Rocket":"https://i.ibb.co/wNgwZBWG/Microgreen-Rocket.png",
  "Microgreens Stirfry Blend":"https://i.ibb.co/PyGC3qY/Microgreen-Stirfry-Blend.png",
  "Microgreens Striped Sunflower":"https://i.ibb.co/8n1Qb9bn/Microgreen-Striped-Sunflowers.png",
  "Microgreens Wheatgrass":"https://i.ibb.co/bRrQMbFR/Microgreen-Wheatgrass.png",
  "Microgreens Yellow Mustard":"https://i.ibb.co/VYFMvXSH/Microgreen-Yellow-Mustard.png",
  "Milk Thistle Silybum marianum":"https://i.ibb.co/Jg0gzKS/Milk-Thistle.png",
  "Monkey Thorn":"https://i.ibb.co/LzgDYbkM/Monkey-Thorn-Tree.jpg",
  "Moringa":"https://i.ibb.co/Yg5PQBq/Moringa.png",
  "Mung Beans":"https://i.ibb.co/wZ2BVMGm/Mung-Bean.png",
  "Mustard Spinach":"https://i.ibb.co/1YMhvT8D/Mustard-Green-Spinach.png",
  "Namakwaland Daisy":"https://i.ibb.co/jcN8PrZ/Dimorphotheca-African-Namaqualand-Daisy.png",
  "Nasturtium Alaska Mix":"https://i.ibb.co/svvLgHBG/Nasturtium-Alaska-Mix.png",
  "Okra Lady Fingers":"https://i.ibb.co/J8h8dvS/Okra-Lady-Fingers.png",
  "Onion Red Creole":"https://i.ibb.co/p6sGnTzs/Onion-Red-Creole.png",
  "Onion Texas Grano":"https://i.ibb.co/VWPwKPZx/Onion-Texas-Grano.png",
  "Oregano":"https://i.ibb.co/Y4GW2bff/Oregano.png",
  "Oriental Vegetable Asian Blend Mix":"https://i.ibb.co/7xN7TVyM/Oriental-Asain-Blend-Mix.png",
  "Osteospermum":"https://i.ibb.co/9344ypMX/Osteospermum-Mix.png",
  "Parsley Flat Leaf":"https://i.ibb.co/8LnqcTFG/Parsley-Flat-Leaf.png",
  "Parsley Moss":"https://i.ibb.co/hxtc7DfQ/Parsley-Moss-Curled.png",
  "Patty Pan Alba":"https://i.ibb.co/1fM1xG1S/Squash-Patty-Pam-Alba-White.png",
  "Patty Pan Juane et Verte":"https://i.ibb.co/QZYzYgv/Squash-Patty-Pan-Juane-Et-Verte.png",
  "Patty Pan Mix":"https://i.ibb.co/yBf7txWT/Squahs-Patty-Pan-Mix.png",
  "Patty Pan Scallop Yellow":"https://i.ibb.co/Z6Q0fDw3/Squash-Patty-Pan-Yellow.png",
  "Peanut Benih Giant Striped":"https://i.ibb.co/5XqdsPS5/Peanut-Benih-Giant-Strip.png",
  "Peanut Black":"https://i.ibb.co/RkjfLszQ/Peanut-Black.png",
  "Peanut Chalimbana":"https://i.ibb.co/JwWsxnpd/Peanut-Chalimbana.png",
  "Peanut Fastigianta Pin Striped":"https://i.ibb.co/LMh7d6c/Peanut-Fastigianta-Pin-Stripped.png",
  "Peanut Malawi Striped":"https://i.ibb.co/gFtYRYkN/Peanut-Malawi-Stripe.png",
  "Peas First Early May":"https://i.ibb.co/ycF2wZns/Peas-First-Early-May.png",
  "Peas Sugar Snap Mangetout":"https://i.ibb.co/HTLZ8crv/Peas-Sugar-Snap-Mange-Tout.png",
  "Peas Super Snappy":"https://i.ibb.co/zT5wDw5f/Peas-Super-Snappy.png",
  "Pet Grass":"https://i.ibb.co/9H3VPWt9/Grass-Pets-Grass.png",
  "Popcorn Dakota Black":"https://i.ibb.co/V0jgKmWP/Popcorn-Black-Dakota.png",
  "Poppy Black Dragon":"https://i.ibb.co/Xxq6k48Q/Poppy-Black-Dragon.png",
  "Poppy Flanders Red":"https://i.ibb.co/v4g1SxWb/Poppy-Flanders-Red.png",
  "Poppy Peony Mix":"https://i.ibb.co/xtyD4sMM/Poppy-Peony-Mix.png",
  "Poppy Peony Light Purple":"https://i.ibb.co/8DxJZ916/Poppy-Lavender.jpg",
  "Poppy Peony Purple":"https://i.ibb.co/pG2vwcd/Poppy-Peony-Purple.png",
  "Poppy Peony Red":"https://i.ibb.co/nZch0DZ/Poppy-Peony-Red.png",
  "Poppy Peony Pink":"https://i.ibb.co/7FTD9cS/Poppy-Peony-Pink.png",
  "Poppy Pepperbox Red":"https://i.ibb.co/Q38FGJtQ/Poppy-Pepperbox-Red.png",
  "Poppy Mix":"https://i.ibb.co/ZRwzB1BW/Poppy-Mix.png",
  "Poppy Pink":"https://i.ibb.co/LXQbZXdn/Poppy-Pink.png",
  "Poppy Purple":"https://i.ibb.co/p6srV4F5/Poppy-Purple.png",
  "Poppy White":"https://i.ibb.co/RTjmPqBQ/Poppy-White.png",
  "Pumpkin Queensland Blue":"https://i.ibb.co/hJfGXXT5/Pumpkin-Queensland-Blue.png",
  "Pumpkin Turks Turban":"https://i.ibb.co/bMjqNzgM/Pumpkin-Turks-Turban.png",
  "Pumpkin Witboer":"https://i.ibb.co/5gVS7Pm1/Pumpkin-Witboer.png",
  "Radish Hailstone White":"https://i.ibb.co/Rp7QjNbx/Radish-Hailstone-White.png",
  "Radish Purple Plum":"https://i.ibb.co/SDrwx91c/Radish-Purple-Plum.png",
  "Radish Rainbow Mix":"https://i.ibb.co/1fJ5b2xN/Radish-Rainbow-Mix.png",
  "Radish Spanish Black":"https://i.ibb.co/ZpbV9Vmx/Radish-Spanish-Black.png",
  "Radish Sparkler":"https://i.ibb.co/7d9XktwJ/Radish-Sparkler.png",
  "Rape English Giant":"https://i.ibb.co/bRYYtDpd/Brassica-Rape-Seed.png",
  "Red Mustard Giant Greens Brassica juncea":"https://i.ibb.co/PG8kRB9C/Red-Mustard-Giant-Greens.png",
  "Red Swiss Chard":"https://i.ibb.co/nMJLQtx7/Red-Swiss-Chard.png",
  "Rocket":"https://i.ibb.co/B2pkQNbG/Rocket-Arugula.png",
  "Rocket Wild Sylvetta":"https://i.ibb.co/zK0DTns/Rocket-Sylvetta.png",
  "Roselle hibiscus sabdariffa":"https://i.ibb.co/b59sMBtf/Hibiscus-Sabdariffa-Roselle.png",
  "Rue":"https://i.ibb.co/TMnKrBCk/Rue-Wynruit.png",
  "Salad Burnett Sanguisorba minor":"https://i.ibb.co/3mYsL2xQ/Salad-Burnett.png",
  "Sand Olive":"https://i.ibb.co/hx0VDmCf/Sand-Olive-Tree.png",
  "Snapdragon Tom Thumb Mix":"https://i.ibb.co/Y7BcQtqf/Snapdragon-Tom-Thumb-Mix.png",
  "Spinach Baby Black Magic":"https://i.ibb.co/xqXtSk96/Spinach-Baby-Black-Magic.png",
  "Spinach Fordhook Giant":"https://i.ibb.co/6QK85qd/Swiss-Chard-Fordhook-Giant.png",
  "Spinach Swiss Chard Bright Lights Mix":"https://i.ibb.co/HLBMfDxZ/Swiss-Chard-Bright-Lights-Mix.png",
  "Spring Onion":"https://i.ibb.co/WTjpMCh/Spring-Onion.png",
  "Sprouts Mansoor Lentils":"https://i.ibb.co/pBj3ZNL1/Sprouts-Mansoor-Lentils.png",
  "Sprouts Moth Beans":"https://i.ibb.co/YBZtYr8k/Sprouts-Moth-Beans.png",
  "Sprouts Mung Beans":"https://i.ibb.co/d4HwQBDy/Sprouts-Mungbeans.png",
  "Sprouts Peas":"https://i.ibb.co/qMQpbPh6/Sprouts-Sprouting-Peas.png",
  "Sprouts Sunflower Seeds":"https://i.ibb.co/xqL4swx8/Sprouts-Sunflower.png",
  "Sprouts Tatsoi":"https://i.ibb.co/pjR9L013/Sprouts-Tatsoi.png",
  "Sprouts Tuscany Kale":"https://i.ibb.co/CsXFb1rN/Sprouts-Tuscany-Kale.png",
  "Sprouts White Chickpeas":"https://i.ibb.co/h1RFmbsJ/Sprouts-White-Chickpeas.png",
  "Squash Butternut Waltham":"https://i.ibb.co/jPNPfdqL/Squash-Waltham-Butternut.png",
  "Squash Gem Rolet":"https://i.ibb.co/xtGzD0Rs/Squash-Gem-Rolet.png",
  "Squash Spaghetti":"https://i.ibb.co/Xkbtk4Yq/Squash-Spaghetti.png",
  "Stinging Nettle":"https://i.ibb.co/23HNj9FL/Stinging-Nettle.png",
  "Strelitzia Nicolai":"https://i.ibb.co/qX03DMJ/Strelitzia-Nicoli.png",
  "Strelitzia Reginae":"https://i.ibb.co/39Q2fXvG/Strelitzia-Regina.png",
  "Sunflower Burnt Ember":"https://i.ibb.co/7xKLW1Tv/Sunflower-Burnt-Amber.png",
  "Sunflower Evening Star":"https://i.ibb.co/VWtnfqZV/Sunflower-Evening-Star.png",
  "Sunflower Mixed Packet":"https://i.ibb.co/Sw4mhsST/Sunflower-Mix.png",
  "Sunflower Nigerian Oil Seed":"https://i.ibb.co/LDqGvfdF/Sunflower-Nigerian-Oil.png",
  "Sunflower Tarahumara":"https://i.ibb.co/G4SwDqYQ/Sunflower-Tarahumara.png",
  "Sunflower Tiger Eye":"https://i.ibb.co/Fb5x5PpM/Sunflower-Tiger-Eye.png",
  "Sunflower Titan":"https://i.ibb.co/fd48jsZ6/Sunflower-Titan.png",
  "Sunhemp":"https://i.ibb.co/35hsZxLX/Sunhemp.png",
  "Sweet Thorn":"https://i.ibb.co/jkDVTvy9/Sweet-Thorn-Tree.png",
  "Sweetcorn Golden Bantam":"https://i.ibb.co/Gr9bthG/Sweetcorn-Golden-Bantam.png",
  "Sweet William Mix":"https://i.ibb.co/jvCC8crk/Sweet-William-Mix.png",
  "Thyme":"https://i.ibb.co/yLNrVg3/Thyme.png",
  "Tomato Chocolate Stripe":"https://i.ibb.co/j9mNJhbh/Tomato-Chocolate-Stripe.png",
  "Tomato Money Maker":"https://i.ibb.co/hJrnjhb3/Tomato-Money-Maker.png",
  "Tomato Oxheart":"https://i.ibb.co/L71kJ0x/Tomato-Oxheart.png",
  "Tomato Rodade":"https://i.ibb.co/LXFd96XZ/Tomato-Rodade.png",
  "Tomato Roma":"https://i.ibb.co/WpG3zFMb/Tomato-Roma.png",
  "Tooth Ache Plant Spilanthes acmella":"https://i.ibb.co/zh8SPsM8/Toothache-Plant.png",
  "Tulbaghia":"https://i.ibb.co/YJmdzv7/Tulbaghia.png",
  "Turnip Green Globe":"https://i.ibb.co/MDdrj2cQ/Turnip-Green-Globe.png",
  "Turnip Purple Top":"https://i.ibb.co/gMPJ3wmd/Turnip-Purple-Top.png",
  "Turnip Snowball White":"https://i.ibb.co/KCg1h2x/Turnip-Snowball-White.png",
  "Turnip Yellow Globe":"https://i.ibb.co/KpGbPSS8/Turnip-Yellow-Globe.png",
  "Virginia Gold Tobacco":"https://i.ibb.co/9kPRRr7S/Tobacco.jpg",
  "Watermelon All Sweet":"https://i.ibb.co/fVYfRCNb/Watermelon-All-Sweet.png",
  "Watermelon Black Diamond":"https://i.ibb.co/GfPHnZWs/Watermelon-Black-Diamond.png",
  "Wild Olive":"https://i.ibb.co/DPdFhHmD/Wild-Olive-Tree.png",
  "Yellow Pincushion Protea":"https://i.ibb.co/Tx8jk7wk/Protea-Yellow-Pincushion.png",
  "Zinnia Mix":"https://i.ibb.co/cSQc0P9V/Zinnia-Mix.png",
};

const RAW=[["Alyssum Carpet White","Flower"],["African Horned Cucumber","Vegetable"],["Ammi Majus","Flower"],["Anise","Herb"],["Ashwagandha","Herb"],["Baobab","Tree"],["Basil Genovese","Herb"],["Basil Holy","Herb"],["Basil Sweet","Vegetable"],["Bean Appaloosa Bush","Vegetable"],["Bean Black Turtle","Vegetable"],["Beans Bird Egg Blue","Vegetable"],["Bean Lima Nuguni Pole Variety","Vegetable"],["Bean Nonna Agnes Blue","Vegetable"],["Bean Vermont Appaloosa","Vegetable"],["Bean Zebra Lima","Vegetable"],["Beans Bush Contender","Vegetable"],["Bean Yard Long","Vegetable"],["Beetroot Bulls Blood","Vegetable"],["Beetroot Chioggia","Vegetable"],["Beetroot Crimson","Vegetable"],["Beetroot Detroit Dark Red","Vegetable"],["Beetroot Golden Globe","Vegetable"],["Beetroot Rainbow Mix","Vegetable"],["Beetroot Ruby Queen","Vegetable"],["Black Mustard","Herb"],["Black Seed (Nigella Sativa)","Herb"],["Borage","Herb"],["Broccoli","Vegetable"],["Broccoli Purple Sprouting","Vegetable"],["Broccoli Romanesca","Vegetable"],["Brussel Sprouts","Vegetable"],["Cabbage Copenhagen","Vegetable"],["Cabbage Drumhead","Vegetable"],["Cabbage Savoy","Vegetable"],["Calendula Mix","Flower"],["Cancer Bush","Herb"],["Cape Gooseberry","Vegetable"],["Capsicum California Wonder","Vegetable"],["Carrot Chantenny Karoo","Vegetable"],["Carrots Nantes Scarlet","Vegetable"],["Carrots Rainbow Blend","Vegetable"],["Catnip","Herb"],["Cauliflower Green Igloo","Vegetable"],["Cauliflower Macerata Green","Vegetable"],["Cauliflower Mini White","Vegetable"],["Cauliflower Romanesca Green","Vegetable"],["Cauliflower Snowball","Vegetable"],["Cauliflower Violet Sicilian","Vegetable"],["Celery Utah Tall","Vegetable"],["Chamomile","Herb"],["Chia Seed","Herb"],["Chilli Birds Eye","Vegetable"],["Chilli Bishops Crown","Vegetable"],["Chilli Cayenne","Vegetable"],["Chilli Habanero Orange","Vegetable"],["Chilli Paprika","Vegetable"],["Chilli Peppa Dew","Vegetable"],["Cineraria Dusty Miller","Flower"],["Cleaver or Bedstraw","Herb"],["Common Coral Tree","Tree"],["Coriander","Herb"],["Corn Bloody Butcher","Vegetable"],["Corn Glass Gem","Vegetable"],["Corn Green Oaxacan","Vegetable"],["Cosmos Laced","Flower"],["Cosmos Sea Shell Pink","Flower"],["Cosmos Sensation Mix","Flower"],["Cosmos Veldfire","Flower"],["Creeping Thyme","Herb"],["Cucumber Ashley","Vegetable"],["Cucumber Snake","Vegetable"],["Dandelion","Herb"],["Dianthus Mix","Flower"],["Dichondra Wonder Lawn","Lawn"],["Dill","Herb"],["Eggfruit Brinjal Black Beauty","Vegetable"],["Eggfruit Brinjal Purple Fingers","Vegetable"],["Erigeron Profusion","Flower"],["Evening Primrose Eonothera biennis","Herb"],["Fennel","Herb"],["Fenugreek","Herb"],["Feverfew Tanacetum parthenium","Herb"],["Fever Tree","Tree"],["Foxglove Foxy Mix","Flower"],["French Lavender","Flower"],["Garlic Chesnok Red","Vegetable"],["Garlic Egyptian Red","Vegetable"],["Garlic Egyptian White","Vegetable"],["Garlic Spanish White","Vegetable"],["Gourd African Calabash","Vegetable"],["Gourd Calabash Birdhouse","Vegetable"],["Gourd Caveman Club","Vegetable"],["Gourd Cuccuza","Vegetable"],["Gourd Dipper","Vegetable"],["Gourd Dipper Extra Length","Vegetable"],["Gourd Giant Bullet Headwax","Vegetable"],["Gourd Leraka","Vegetable"],["Gourd Martin House Bottle","Vegetable"],["Gourd Mix","Vegetable"],["Gourd Snake","Vegetable"],["Gourd Speckled Swan","Vegetable"],["Green Prickly Pear","Vegetable"],["Hollyhock Mix","Flower"],["Hollyhock Maroon","Flower"],["Hollyhock White","Flower"],["Horehound White Marrubium vulgare","Herb"],["Huckleberry","Vegetable"],["Hyssop","Herb"],["Industrial Hemp","Crop Cover"],["Job's Tears Coix lacryma","Herb"],["Kale Black Krim","Vegetable"],["Kale Red Ursa","Vegetable"],["Kale White Russian","Vegetable"],["Karee Tree - Swart","Tree"],["King Protea","Flower"],["Kohlrabi Purple Vienna","Vegetable"],["Kohlrabi White Vienna","Vegetable"],["LM Lawn","Lawn"],["Leeks Elephant","Vegetable"],["Lemon Balm","Herb"],["Lemon Basil","Herb"],["Lettuce Freckles","Vegetable"],["Lettuce Great Lakes","Vegetable"],["Lettuce Loose Leaf Mix","Vegetable"],["Lettuce Mix","Vegetable"],["Loofah European","Crop Cover"],["Lucern Tree Chamaecytisus proliferus","Tree"],["Marula","Tree"],["Melon Rich Sweetness Cucumis Melo","Vegetable"],["Mesembryansthemum Bokbaai Vygie","Flower"],["Mexican Mint","Herb"],["Microgreen Alfalfa","Microgreen"],["Microgreens Asian Oriental Mix","Microgreen"],["Microgreens Black Mustard","Microgreen"],["Microgreens Broccoli Calabrese","Microgreen"],["Microgreens Cress","Microgreen"],["Microgreen Fenugreek","Microgreen"],["Microgreens Green Basil","Microgreen"],["Microgreens Green Swiss Chard","Microgreen"],["Microgreens Mizuno Greens","Microgreen"],["Microgreens Mustard Green Frills","Microgreen"],["Microgreen Kaleidoscope Mix","Microgreen"],["Microgreens Mustard Red Frills","Microgreen"],["Microgreens Radish Coralette","Microgreen"],["Microgreens Radish Daikon","Microgreen"],["Microgreen Radish Rainbow","Microgreen"],["Microgreens Radish Tsai Tsai","Microgreen"],["Microgreens Red Amaranthus","Microgreen"],["Microgreens Red Swiss Chard","Microgreen"],["Microgreens Rocket","Microgreen"],["Microgreens Stirfry Blend","Microgreen"],["Microgreens Striped Sunflower","Microgreen"],["Microgreens Wheatgrass","Microgreen"],["Microgreens Yellow Mustard","Microgreen"],["Milk Thistle Silybum marianum","Herb"],["Monkey Thorn","Tree"],["Moringa","Herb"],["Mung Beans","Herb"],["Mustard Spinach","Vegetable"],["Namakwaland Daisy","Flower"],["Nasturtium Alaska Mix","Flower"],["Okra Lady Fingers","Vegetable"],["Onion Red Creole","Vegetable"],["Onion Texas Grano","Vegetable"],["Oregano","Herb"],["Oriental Vegetable Asian Blend Mix","Vegetable"],["Osteospermum","Flower"],["Parsley Flat Leaf","Herb"],["Parsley Moss","Herb"],["Patty Pan Alba","Vegetable"],["Patty Pan Juane et Verte","Vegetable"],["Patty Pan Mix","Vegetable"],["Patty Pan Scallop Yellow","Vegetable"],["Peanut Benih Giant Striped","Vegetable"],["Peanut Black","Vegetable"],["Peanut Chalimbana","Vegetable"],["Peanut Fastigianta Pin Striped","Vegetable"],["Peanut Malawi Striped","Vegetable"],["Peas First Early May","Vegetable"],["Peas Sugar Snap Mangetout","Vegetable"],["Peas Super Snappy","Vegetable"],["Pet Grass","Lawn"],["Popcorn Dakota Black","Vegetable"],["Poppy Black Dragon","Flower"],["Poppy Flanders Red","Flower"],["Poppy Peony Mix","Flower"],["Poppy Peony Light Purple","Flower"],["Poppy Peony Purple","Flower"],["Poppy Peony Red","Flower"],["Poppy Peony Pink","Flower"],["Poppy Pepperbox Red","Flower"],["Poppy Mix","Flower"],["Poppy Pink","Flower"],["Poppy Purple","Flower"],["Poppy White","Flower"],["Pumpkin Queensland Blue","Vegetable"],["Pumpkin Turks Turban","Vegetable"],["Pumpkin Witboer","Vegetable"],["Radish Hailstone White","Vegetable"],["Radish Purple Plum","Vegetable"],["Radish Rainbow Mix","Vegetable"],["Radish Spanish Black","Vegetable"],["Radish Sparkler","Vegetable"],["Rape English Giant","Crop Cover"],["Red Mustard Giant Greens Brassica juncea","Herb"],["Red Swiss Chard","Vegetable"],["Rocket","Herb"],["Rocket Wild Sylvetta","Herb"],["Roselle hibiscus sabdariffa","Herb"],["Rue","Herb"],["Salad Burnett Sanguisorba minor","Herb"],["Sand Olive","Tree"],["Snapdragon Tom Thumb Mix","Flower"],["Spinach Baby Black Magic","Vegetable"],["Spinach Fordhook Giant","Vegetable"],["Spinach Swiss Chard Bright Lights Mix","Vegetable"],["Spring Onion","Herb"],["Sprouts Mansoor Lentils","Sprouts"],["Sprouts Moth Beans","Sprouts"],["Sprouts Mung Beans","Sprouts"],["Sprouts Peas","Sprouts"],["Sprouts Sunflower Seeds","Sprouts"],["Sprouts Tatsoi","Sprouts"],["Sprouts Tuscany Kale","Sprouts"],["Sprouts White Chickpeas","Sprouts"],["Squash Butternut Waltham","Vegetable"],["Squash Gem Rolet","Vegetable"],["Squash Spaghetti","Vegetable"],["Stinging Nettle","Herb"],["Strelitzia Nicolai","Flower"],["Strelitzia Reginae","Flower"],["Sunflower Burnt Ember","Flower"],["Sunflower Evening Star","Flower"],["Sunflower Mixed Packet","Flower"],["Sunflower Nigerian Oil Seed","Flower"],["Sunflower Tarahumara","Flower"],["Sunflower Tiger Eye","Flower"],["Sunflower Titan","Flower"],["Sunhemp","Herb"],["Sweet Thorn","Tree"],["Sweetcorn Golden Bantam","Vegetable"],["Sweet William Mix","Flower"],["Thyme","Herb"],["Tomato Chocolate Stripe","Vegetable"],["Tomato Money Maker","Vegetable"],["Tomato Oxheart","Vegetable"],["Tomato Rodade","Vegetable"],["Tomato Roma","Vegetable"],["Tooth Ache Plant Spilanthes acmella","Herb"],["Tulbaghia","Flower"],["Turnip Green Globe","Vegetable"],["Turnip Purple Top","Vegetable"],["Turnip Snowball White","Vegetable"],["Turnip Yellow Globe","Vegetable"],["Virginia Gold Tobacco","Crop Cover"],["Watermelon All Sweet","Vegetable"],["Watermelon Black Diamond","Vegetable"],["Wild Olive","Tree"],["Yellow Pincushion Protea","Flower"],["Zinnia Mix","Flower"],["Chilli Bhut Jolokia Red","Vegetable"],["Chilli Jalapeno","Vegetable"],["Chilli Polombo","Vegetable"],["Chilli Carolina Reaper","Vegetable"],["Chilli Scorpion Tongue Black","Vegetable"],["Chilli Scotch Bonnet","Vegetable"],["Chilli Chocolate Habanero","Vegetable"],["Chilli Trinidad Moruga Scorpion","Vegetable"],["Poultry Pasture Warm Season Mix","Crop Cover"],["Poultry Pasture Cool Season Mix","Crop Cover"],["Agapanthus Blue","Flower"],["Larkspur","Flower"],["Lobelia","Flower"],["Marigold African","Flower"],["Aquilegia","Flower"],["Marigold Bronza Red","Flower"],["Balsam","Flower"],["Marigold Yellow","Flower"],["Celosia","Flower"],["Cleome","Flower"],["Cornflower Blue Boy","Flower"],["Poppy California","Flower"],["Dahlia","Flower"],["Delphinium","Flower"],["Portulaca","Flower"],["Rudbeckia","Flower"],["Summer Meadow Mix","Flower"],["Viola","Flower"],["Winter Meadow Mix","Flower"],["Watermelon Golden Honey","Vegetable"],["Melon Honeydew Green","Vegetable"],["Watermelon Maketaan","Vegetable"],["Melon Honeydew Yellow","Vegetable"],["Watermelon Mix","Vegetable"],["Melon Minnesota Midget","Vegetable"],["Watermelon Tender Sweet Orange","Vegetable"],["Melon Piel De Sapo","Vegetable"],["Flaxseed","Herb"],["Lovage","Herb"],["Chives","Herb"],["Clarey Sage","Herb"],["Purslane","Herb"],["Echinacea","Herb"],["Tarragon","Herb"],["Microgreen Green Basil","Microgreen"],["Microgreen White Mustard","Microgreen"],["Microgreen Mungbeans","Microgreen"],["Sprout Stirfry Blend","Sprouts"],["Camel Thorn","Tree"],["Paperback Thorn","Tree"],["Cucumber Lemon","Vegetable"],["Artichoke Green Globe","Vegetable"],["Cucumber Long White","Vegetable"],["Asparagus Mary Washington","Vegetable"],["Bean Broad Bean","Vegetable"],["Bean Madagascar","Vegetable"],["Kale Southern Blue","Vegetable"],["Kale Vates Blue","Vegetable"],["Bean Witsa","Vegetable"],["Lettuce Butterhead","Vegetable"],["Lettuce Gourmet Mix","Vegetable"],["Lettuce Green Cos","Vegetable"],["Lettuce Oak Leaf Mix","Vegetable"],["Brinjal Bianca","Vegetable"],["Lettuce Romain Mix","Vegetable"],["Marog Green","Vegetable"],["Mealie Sahara","Vegetable"],["Onion Australian Brown","Vegetable"],["Peas Aragon","Vegetable"],["Radish Cherry Belle","Vegetable"],["Cucumber Armenian White","Vegetable"],["Radish White Icicle","Vegetable"],["Cucumber Double Yield","Vegetable"],["Rhubarb","Vegetable"],["Cucumber Gherkin Rhinish","Vegetable"],["Squash Ayota","Vegetable"],["Sweet Potato Combo Pack","Vegetable"],["Sweet Potato Okinawan","Vegetable"],["Sweet Potato Orange","Vegetable"],["Sweet Potato Purple","Vegetable"],["Sweet Potato Purple Skin","Vegetable"],["Sweet Potato White Flesh","Vegetable"],["Tomato Banana Legs","Vegetable"],["Tomato Beefsteak","Vegetable"],["Tomato Black Zebra","Vegetable"],["Tomato Cherokee Purple","Vegetable"],["Tomato Cherry Black","Vegetable"],["Tomato Cherry Malawi Red","Vegetable"],["Tomato Cherry Pink Ice","Vegetable"],["Tomato Cherry Yellow","Vegetable"],["Tomato Cosmic Eclipse","Vegetable"],["Tomato Green Goddess","Vegetable"],["Tomato Green Sausage","Vegetable"],["Tomato Heirloom Mix","Vegetable"],["Tomato Purple Plum","Vegetable"]];

const INIT=RAW.map((r,i)=>({id:i+1,name:r[0],category:r[1],cost:25,price:45,stock:true,outOfStock:false,image:IMGS[r[0]]||""}));
const CATS=["All",...Array.from(new Set(INIT.map(p=>p.category))).sort()];
const CAT_STYLE={
  Vegetable:{bg:"#e8f5ee",color:"#2d6a3f",icon:"🥦"},Flower:{bg:"#fdf0f8",color:"#8b3a72",icon:"🌸"},
  Herb:{bg:"#fdf8e8",color:"#7a5c00",icon:"🌿"},Tree:{bg:"#eef5e8",color:"#2d4a1e",icon:"🌳"},
  Microgreen:{bg:"#e8f8f8",color:"#0a6060",icon:"🌱"},Sprouts:{bg:"#e8eef8",color:"#1a3a7a",icon:"🫘"},
  "Crop Cover":{bg:"#f5efe8",color:"#6b3a00",icon:"🌾"},Lawn:{bg:"#eef5e0",color:"#3a6000",icon:"🍀"},
};
const C={darkGreen:"#2d4a1e",midGreen:"#3d6b28",parchment:"#f5edd8",parchmentDark:"#e8d5a3",brown:"#5c3d1e",cream:"#faf7f0",offwhite:"#f7f4ec",border:"#ddd5b8",text:"#2a2015",textMid:"#5c4a2a",textLight:"#8a7a5a"};
const SC={Pending:{bg:"#fff3cd",color:"#856404",border:"#ffc107"},Packed:{bg:"#cfe2ff",color:"#084298",border:"#0d6efd"},Dispatched:{bg:"#d1ecf1",color:"#0c5460",border:"#17a2b8"},Delivered:{bg:"#d4edda",color:"#155724",border:"#28a745"}};

// ── localStorage helpers ──────────────────────────────────────────────────────
const lsGet = (key, fallback) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
const lsSet = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

// ── Progress indicator component ──────────────────────────────────────────────
const STEPS = ["Cart", "Details", "Review"];
function ProgressBar({ step }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", gap: 0 }}>
      {STEPS.map((label, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: done ? C.darkGreen : active ? C.midGreen : C.border,
                color: done || active ? "#fff" : C.textLight,
                fontSize: 12, fontWeight: 700, transition: "all 0.2s",
                border: active ? "2px solid " + C.darkGreen : "2px solid transparent",
              }}>
                {done ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: 10, color: active ? C.darkGreen : done ? C.midGreen : C.textLight, fontWeight: active ? 700 : 400, whiteSpace: "nowrap" }}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ width: 40, height: 2, background: done ? C.darkGreen : C.border, margin: "0 4px", marginBottom: 14, transition: "background 0.2s" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  // ── State ───────────────────────────────────────────────────────────────────
  const [products, setProducts] = useState(INIT);
  const [orders, setOrders] = useState(() => lsGet("tl_orders", []));
  const [view, setView] = useState("store");
  const [adminTab, setAdminTab] = useState("orders");
  const [adminAuth, setAdminAuth] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminErr, setAdminErr] = useState(false);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("default");

  // Cart is session-only: starts empty on every page load so no stale/other order persists
  const [cart, setCart] = useState([]);
  const saveCart = (newCart) => { setCart(newCart); };

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState(0);

  // Customer details persisted to localStorage so returning customers don't retype
  const [cust, setCust] = useState(() => lsGet("tl_cust", {name:"",phone:"",email:"",street:"",suburb:"",city:"",province:"",postal:""}));
  const saveCust = (newCust) => { setCust(newCust); lsSet("tl_cust", newCust); };

  const [toast, setToast] = useState("");
  const [bulkPrice, setBulkPrice] = useState("");
  const [bulkCat, setBulkCat] = useState("All");
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState("");
  const [payStatus, setPayStatus] = useState(null);
  const [orderFilter, setOrderFilter] = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    // Remove any cart left in storage by the previous version so no old order reappears
    try { localStorage.removeItem("tl_cart"); } catch {}
    const p = new URLSearchParams(window.location.search);
    if (p.get("payment") === "success") { setPayStatus("success"); saveCart([]); }
    if (p.get("payment") === "cancelled") setPayStatus("cancelled");
  }, []);

  const saveOrders = o => { setOrders(o); lsSet("tl_orders", o); };
  const showToast = msg => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  const filtered = useMemo(() => {
    let list = products.filter(p =>
      (cat === "All" || p.category === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.stock
    );
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "za") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [products, cat, search, sort]);

  const addCart = p => {
    if (p.outOfStock) return;
    const updated = (() => {
      const ex = cart.find(x => x.id === p.id);
      return ex ? cart.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x) : [...cart, { ...p, qty: 1 }];
    })();
    saveCart(updated);
    showToast(p.name + " added to cart!");
  };

  const updateCartQty = (id, delta) => {
    const updated = cart.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0);
    saveCart(updated);
  };

  const clearCart = () => { saveCart([]); showToast("Cart cleared"); };

  const seedsTotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const cartTotal = cart.length > 0 ? seedsTotal + PUDO_FEE + PACKAGING_FEE : 0;
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);
  const closeCart = () => { setCartOpen(false); setStep(0); };

  const handlePay = async () => {
    const newOrder = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleString("en-ZA"),
      customer: { ...cust },
      items: cart.map(x => ({ name: x.name, qty: x.qty, price: x.price, image: x.image })),
      seedsTotal,
      total: cartTotal,
      status: "Pending",
      pudoRef: "",
      notes: "",
    };
    setPayLoading(true);
    setPayError("");
    try {
      const res = await fetch("/.netlify/functions/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(cartTotal * 100),
          order: newOrder,
        })
      });
      const data = await res.json();
      if (data.redirectUrl) {
        saveOrders([newOrder, ...orders]);
        window.location.href = data.redirectUrl;
      } else {
        setPayError("Payment could not be created. Please try again.");
      }
    } catch {
      setPayError("Something went wrong. Please try again.");
    }
    setPayLoading(false);
  };

  const loadServerOrders = async (pw) => {
    try {
      const res = await fetch("/.netlify/functions/get-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw })
      });
      const data = await res.json();
      if (data.orders && data.orders.length > 0) {
        const serverIds = new Set(data.orders.map(o => o.id));
        const localOnly = orders.filter(o => !serverIds.has(o.id));
        const merged = [...data.orders, ...localOnly]
          .sort((a, b) => (b.id || "").localeCompare(a.id || ""));
        setOrders(merged);
        showToast(data.orders.length + " orders loaded from server");
      } else {
        showToast("No server orders found");
      }
    } catch (err) {
      console.error("loadServerOrders failed:", err);
      showToast("Showing local orders only");
    }
  };

  const updateOrderStatus = async (id, status) => {
    saveOrders(orders.map(o => o.id === id ? { ...o, status } : o));
    try {
      await fetch("/.netlify/functions/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: ADMIN_PW, orderId: id, updates: { status } })
      });
    } catch (e) { console.error("Status sync failed:", e); }
  };
  const updateOrderField = async (id, field, val) => {
    saveOrders(orders.map(o => o.id === id ? { ...o, [field]: val } : o));
    try {
      await fetch("/.netlify/functions/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: ADMIN_PW, orderId: id, updates: { [field]: val } })
      });
    } catch (e) { console.error("Field sync failed:", e); }
  };
  const deleteOrder = id => { saveOrders(orders.filter(o => o.id !== id)); showToast("Order deleted"); };
  const handleAdminLogin = () => {
    if (adminPw === ADMIN_PW) {
      setAdminAuth(true);
      setAdminErr(false);
      loadServerOrders(adminPw);
    } else {
      setAdminErr(true);
      setAdminPw("");
    }
  };
  const startEdit = p => { setEditId(p.id); setEditData({ ...p }); };
  const saveEdit = () => { setProducts(ps => ps.map(p => p.id === editId ? { ...p, ...editData, price: Number(editData.price), cost: Number(editData.cost) } : p)); setEditId(null); showToast("Saved!"); };
  const applyBulk = () => { if (!bulkPrice) return; setProducts(ps => ps.map(p => (bulkCat === "All" || p.category === bulkCat) ? { ...p, price: Number(bulkPrice) } : p)); showToast("Applied!"); setBulkPrice(""); };
  const addNew = () => { const n = { id: Date.now(), name: "New Product", category: "Vegetable", cost: 25, price: 45, stock: true, outOfStock: false, image: "" }; setProducts(ps => [n, ...ps]); startEdit(n); };
  const del = id => { setProducts(ps => ps.filter(p => p.id !== id)); showToast("Deleted"); };

  // ── Shared styles ───────────────────────────────────────────────────────────
  const iS = { width: "100%", padding: "9px 12px", borderRadius: 6, border: "1px solid " + C.border, fontSize: 13, boxSizing: "border-box", background: C.cream, fontFamily: "Georgia,serif", color: C.text };
  const bG = { border: "none", borderRadius: 6, padding: "10px 18px", cursor: "pointer", background: C.darkGreen, color: "#fff", fontFamily: "Georgia,serif", fontSize: 13, fontWeight: 600 };
  const bP = { border: "1px solid " + C.border, borderRadius: 6, padding: "10px 18px", cursor: "pointer", background: C.parchment, color: C.brown, fontFamily: "Georgia,serif", fontSize: 13, fontWeight: 600 };
  const mS = { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(30,20,5,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 };
  const bxS = { background: C.cream, borderRadius: 12, padding: "1.5rem", width: "min(500px,95vw)", maxHeight: "90vh", overflowY: "auto", border: "1px solid " + C.border };
  const pN = { background: "#eef5e8", border: "1px solid #c8ddb0", borderRadius: 8, padding: "0.6rem 0.8rem", fontSize: 12, color: C.darkGreen };

  // Sticky footer for cart modal steps
  const stickyFooter = { position: "sticky", bottom: 0, background: C.cream, paddingTop: "0.75rem", paddingBottom: "0.25rem", marginTop: "0.75rem", borderTop: "1px solid " + C.border };

  const filteredOrders = orders.filter(o => orderFilter === "All" || o.status === orderFilter);
  const oc = { All: orders.length, Pending: orders.filter(o => o.status === "Pending").length, Packed: orders.filter(o => o.status === "Packed").length, Dispatched: orders.filter(o => o.status === "Dispatched").length, Delivered: orders.filter(o => o.status === "Delivered").length };

  // ── Success / Cancelled pages ───────────────────────────────────────────────
  if (payStatus === "success") return (
    <div style={{ fontFamily: "Georgia,serif", minHeight: "100vh", background: C.offwhite, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ ...bxS, textAlign: "center", maxWidth: 480 }}>
        <img src={LOGO} alt="Trueleaf" style={{ maxWidth: 220, width: "80%", marginBottom: "1rem" }} onError={e => e.target.style.display = "none"} />
        <div style={{ fontSize: 48, marginBottom: "0.5rem" }}>🌱</div>
        <h2 style={{ color: C.darkGreen, margin: "0 0 0.5rem", fontSize: 22 }}>Thank you for your support!</h2>
        <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.8, margin: "0 0 1rem" }}>Your payment was successful. We truly appreciate your support of heirloom seeds and sustainable growing in Africa.</p>
        <div style={{ background: C.parchment, border: "1px solid " + C.border, borderRadius: 10, padding: "1rem", marginBottom: "1rem", fontSize: 13, color: C.brown, lineHeight: 1.8 }}>
          <strong>What happens next?</strong><br />We will confirm your order and arrange your Pudo locker delivery within 1 business day. You will receive an SMS from Pudo when your seeds are ready for collection.<br /><br />Questions? Call us on <strong>{PHONE}</strong>
        </div>
        <button style={{ ...bG, width: "100%", padding: 12, marginBottom: 8 }} onClick={() => { window.history.replaceState({}, "", "/"); setPayStatus(null); saveCust({ name: "", phone: "", email: "", street: "", suburb: "", city: "", province: "", postal: "" }); }}>Continue shopping</button>
        <a href={"https://wa.me/" + WA} target="_blank" rel="noreferrer" style={{ ...bP, display: "block", textAlign: "center", textDecoration: "none", padding: 10 }}>WhatsApp us</a>
      </div>
    </div>
  );

  if (payStatus === "cancelled") return (
    <div style={{ fontFamily: "Georgia,serif", minHeight: "100vh", background: C.offwhite, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ ...bxS, textAlign: "center", maxWidth: 440 }}>
        <div style={{ fontSize: 48, marginBottom: "0.5rem" }}>🌿</div>
        <h2 style={{ color: C.darkGreen, margin: "0 0 0.5rem" }}>Payment cancelled</h2>
        <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.7, margin: "0 0 1rem" }}>No worries — your cart is still waiting for you. Come back anytime!</p>
        <button style={{ ...bG, width: "100%", padding: 12 }} onClick={() => { window.history.replaceState({}, "", "/"); setPayStatus(null); }}>Back to store</button>
      </div>
    </div>
  );

  // ── Main render ─────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "Georgia,serif", minHeight: "100vh", background: C.offwhite, color: C.text }}>
      {toast && <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", background: C.darkGreen, color: "#fff", padding: "9px 20px", borderRadius: 20, fontSize: 13, zIndex: 200, whiteSpace: "nowrap" }}>{toast}</div>}
      <a href={"https://wa.me/" + WA + "?text=" + encodeURIComponent("Hi! I have a question about your seeds.")} target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25D366", color: "#fff", borderRadius: "50%", width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, zIndex: 150, textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>💬</a>

      <div style={{ background: C.darkGreen, color: "#e8d5a3", fontSize: 12, textAlign: "center", padding: "5px", letterSpacing: "0.5px" }}>Organically Grown | Non-GMO | Open-Pollinated | Selected for African Growing Conditions</div>

      <nav style={{ background: C.parchment, borderBottom: "2px solid " + C.border, padding: "0 1rem", display: "flex", alignItems: "center", gap: "0.5rem", minHeight: 64, flexWrap: "wrap" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
          <img src={LOGO} alt="Trueleaf Seeds" style={{ height: 48, objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
          <div><p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: C.darkGreen, letterSpacing: "0.5px", lineHeight: 1.1 }}>TRUELEAF</p><p style={{ margin: 0, fontSize: 10, color: C.brown, letterSpacing: "2px", fontFamily: "system-ui,sans-serif" }}>SEED CO.</p></div>
        </div>
        <button style={{ ...bP, background: view === "store" ? C.darkGreen : "transparent", color: view === "store" ? "#fff" : C.brown, border: "none", fontSize: 13 }} onClick={() => setView("store")}>Shop</button>
        <button style={{ ...bP, background: view === "admin" ? C.darkGreen : "transparent", color: view === "admin" ? "#fff" : C.brown, border: "none", fontSize: 13, position: "relative" }} onClick={() => { setView("admin"); setAdminAuth(false); setAdminPw(""); }}>
          Admin{oc.Pending > 0 && <span style={{ position: "absolute", top: -4, right: -4, background: "#e8762a", color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{oc.Pending}</span>}
        </button>
        <button style={{ ...bG, display: "flex", alignItems: "center", gap: 6 }} onClick={() => setCartOpen(true)}>
          🛒 Cart {cartCount > 0 && <span style={{ background: "#e8762a", color: "#fff", borderRadius: 10, padding: "0 6px", fontSize: 11, fontWeight: 700 }}>{cartCount}</span>}
        </button>
      </nav>

      {view === "store" && <div>
        <div style={{ background: C.parchment, borderBottom: "2px solid " + C.border, display: "flex", flexDirection: "column", alignItems: "center", padding: "1.5rem 1rem", textAlign: "center" }}>
          <img src={LOGO} alt="Trueleaf Seeds Logo" style={{ maxWidth: 380, width: "85%", objectFit: "contain", marginBottom: "0.5rem" }} onError={e => e.target.style.display = "none"} />
          <p style={{ margin: 0, fontSize: 12, color: C.textLight, letterSpacing: "2px", fontFamily: "system-ui,sans-serif", textTransform: "uppercase" }}>Heirloom Seeds That Grow With You</p>
        </div>
        <div style={{ background: "linear-gradient(160deg," + C.darkGreen + " 0%,#3d6b28 100%)", color: "#fff", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <p style={{ color: C.parchmentDark, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 0.5rem", fontFamily: "system-ui,sans-serif" }}>Heirloom · Open-Pollinated · Non-GMO</p>
            <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 0.5rem", color: "#fff" }}>Seeds That Grow With You</h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: "0 0 1.25rem", lineHeight: 1.7 }}>Rooted in tradition. Grown for the future. Carefully selected heirloom varieties that thrive in African growing conditions.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {["Organically grown", "Save your own seeds", "Support local growers", "African adapted"].map(t => <span key={t} style={{ fontSize: 11, color: C.midGreen, background: "#eef5e8", border: "1px solid #c8ddb0", borderRadius: 20, padding: "3px 10px" }}>✔ {t}</span>)}
            </div>
          </div>
        </div>
        <div style={{ background: C.parchment, borderBottom: "1px solid " + C.border, padding: "1rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {[["1. Browse", "260+ heirloom varieties"], ["2. Checkout", "Pay securely via YOCO"], ["3. Pudo", "Collect from your nearest locker"], ["4. Grow", "Save seeds year after year"]].map(([t, d]) => (
            <div key={t} style={{ textAlign: "center", maxWidth: 160 }}><p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.darkGreen }}>{t}</p><p style={{ margin: "2px 0 0", fontSize: 11, color: C.textMid }}>{d}</p></div>
          ))}
        </div>
        <div style={{ padding: "0.75rem 1rem", background: "#fff", borderBottom: "1px solid " + C.border }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 10 }}>
            <input style={{ ...iS, flex: 1, minWidth: 140 }} placeholder="Search seeds..." value={search} onChange={e => setSearch(e.target.value)} />
            <select style={{ ...iS, width: "auto" }} value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Sort: Featured</option>
              <option value="az">Name: A–Z</option>
              <option value="za">Name: Z–A</option>
            </select>
            <span style={{ fontSize: 12, color: C.textLight, whiteSpace: "nowrap" }}>{filtered.length} products</span>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {CATS.map(c => {
              const active = cat === c;
              const cs = CAT_STYLE[c] || { icon: "🌱" };
              return (
                <button key={c} onClick={() => setCat(c)} style={{
                  padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  border: "1px solid " + (active ? C.darkGreen : C.border),
                  background: active ? C.darkGreen : "#fff",
                  color: active ? "#fff" : C.textMid,
                  display: "inline-flex", alignItems: "center", gap: 4
                }}>
                  <span>{c === "All" ? "🌱" : cs.icon}</span>{c}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12, padding: "1rem" }}>
          {filtered.map(p => {
            const cs = CAT_STYLE[p.category] || { bg: "#f0f0f0", color: "#555", icon: "🌿" };
            return (
              <div key={p.id} style={{ background: "#fff", borderRadius: 10, border: "1px solid " + C.border, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "100%", height: 130, background: cs.bg, overflow: "hidden", flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ position: "absolute", fontSize: 36 }}>{cs.icon}</span>
                  {p.image && <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative" }} onError={e => e.target.style.display = "none"} />}
                  {p.outOfStock && <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ background: "#c00", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>OUT OF STOCK</span></div>}
                </div>
                <div style={{ padding: "10px 12px 12px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: "0 0 5px", fontWeight: 700, fontSize: 13, color: C.text, lineHeight: 1.3 }}>{p.name}</p>
                  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600, marginBottom: 6, background: cs.bg, color: cs.color }}>{cs.icon} {p.category}</span>
                  <p style={{ fontSize: 11, color: C.textLight, margin: "0 0 6px", fontStyle: "italic" }}>Open-pollinated · Heirloom</p>
                  <p style={{ fontSize: 17, fontWeight: 700, color: p.outOfStock ? "#999" : C.darkGreen, margin: "auto 0 8px" }}>R{p.price.toFixed(2)}</p>
                  <button style={{ ...bG, padding: "8px", fontSize: 12, width: "100%", opacity: p.outOfStock ? 0.5 : 1, background: p.outOfStock ? "#999" : C.darkGreen, cursor: p.outOfStock ? "not-allowed" : "pointer" }} onClick={() => addCart(p)} disabled={p.outOfStock}>{p.outOfStock ? "Out of stock" : "+ Add to cart"}</button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ background: C.darkGreen, color: "#fff", padding: "2.5rem 1.5rem", marginTop: "1rem" }}>
          <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 700, margin: "0 0 1.5rem", color: C.parchmentDark }}>Why Choose Trueleaf Seeds?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, maxWidth: 720, margin: "0 auto" }}>
            {[["Better Flavour", "Grown for taste, not transport."], ["Save Your Seeds", "Harvest and replant year after year."], ["Support Biodiversity", "Preserve rare traditional varieties."], ["Locally Adapted", "Sourced from African growers."]].map(([t, d]) => (
              <div key={t} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "1rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 13, color: C.parchmentDark }}>✔ {t}</p>
                <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <footer style={{ background: C.brown, color: C.parchment, padding: "1.5rem", textAlign: "center", fontSize: 12 }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 700 }}>TRUELEAF SEEDS</p>
          <p style={{ margin: "0 0 4px", opacity: .8 }}>📞 <a href={"tel:" + PHONE} style={{ color: C.parchmentDark }}>{PHONE}</a> | ✉️ <a href={"mailto:" + EMAIL} style={{ color: C.parchmentDark }}>{EMAIL}</a></p>
          <p style={{ margin: "0 0 8px", opacity: .7 }}><a href={"https://wa.me/" + WA} target="_blank" rel="noreferrer" style={{ color: "#90EE90" }}>💬 WhatsApp us</a></p>
          <p style={{ margin: "8px 0 0", opacity: .5, fontSize: 10 }}>All seeds are organically grown, open-pollinated and non-GMO. © 2026 Trueleaf Seeds. All rights reserved.</p>
        </footer>
      </div>}

      {/* ── Admin panel ─────────────────────────────────────────────────────── */}
      {view === "admin" && (!adminAuth ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
          <div style={{ background: C.cream, borderRadius: 12, padding: "1.5rem", width: "min(340px,95vw)", border: "1px solid " + C.border, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: "0.5rem" }}>🔒</div>
            <h3 style={{ margin: "0 0 0.25rem", color: C.darkGreen }}>Admin access</h3>
            <p style={{ fontSize: 13, color: C.textLight, margin: "0 0 1rem" }}>Enter your password to continue</p>
            <input style={{ ...iS, textAlign: "center", letterSpacing: "2px", marginBottom: 8 }} type="password" placeholder="Password" value={adminPw} onChange={e => setAdminPw(e.target.value)} onKeyDown={e => e.key === "Enter" && handleAdminLogin()} />
            {adminErr && <p style={{ fontSize: 12, color: "#c00", margin: "0 0 8px" }}>Incorrect password. Please try again.</p>}
            <button style={{ ...bG, width: "100%", padding: "10px" }} onClick={handleAdminLogin}>Login</button>
          </div>
        </div>
      ) : (
        <div style={{ padding: "1.25rem", maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: C.darkGreen, margin: 0 }}>Admin panel</h2>
            <button style={{ ...bP, fontSize: 12, padding: "6px 14px" }} onClick={() => setAdminAuth(false)}>Logout</button>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", borderBottom: "2px solid " + C.border }}>
            {[["orders", "📦 Orders"], ["products", "🌱 Products"], ["bulk", "💰 Pricing"]].map(([tab, label]) => (
              <button key={tab} style={{ ...bP, border: "none", borderBottom: adminTab === tab ? "3px solid " + C.darkGreen : "3px solid transparent", borderRadius: "6px 6px 0 0", background: adminTab === tab ? C.cream : "transparent", color: adminTab === tab ? C.darkGreen : C.textLight, padding: "8px 16px", fontSize: 13, fontWeight: adminTab === tab ? 700 : 400, position: "relative" }} onClick={() => setAdminTab(tab)}>
                {label}{tab === "orders" && oc.Pending > 0 && <span style={{ marginLeft: 6, background: "#e8762a", color: "#fff", borderRadius: 10, padding: "1px 6px", fontSize: 10, fontWeight: 700 }}>{oc.Pending}</span>}
              </button>
            ))}
          </div>

          {adminTab === "orders" && <div>
            <div style={{ display: "flex", gap: 6, marginBottom: "1rem", flexWrap: "wrap" }}>
              {Object.entries(oc).map(([s, count]) => (
                <button key={s} style={{ ...bP, padding: "5px 12px", fontSize: 12, background: orderFilter === s ? C.darkGreen : C.parchment, color: orderFilter === s ? "#fff" : C.brown }} onClick={() => setOrderFilter(s)}>{s} ({count})</button>
              ))}
            </div>
            {filteredOrders.length === 0 && <div style={{ textAlign: "center", padding: "3rem", color: C.textLight }}><p style={{ fontSize: 32, margin: "0 0 0.5rem" }}>📭</p><p>No orders yet</p></div>}
            {filteredOrders.map(o => {
              const sc = SC[o.status] || SC.Pending;
              const isExp = expandedOrder === o.id;
              return (
                <div key={o.id} style={{ background: "#fff", border: "1px solid " + C.border, borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
                  <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => setExpandedOrder(isExp ? null : o.id)}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: C.text }}>{o.customer.name}</p>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: sc.bg, color: sc.color, border: "1px solid " + sc.border, fontWeight: 600 }}>{o.status}</span>
                        <span style={{ fontSize: 11, color: C.textLight }}>{o.id}</span>
                      </div>
                      <p style={{ margin: "2px 0 0", fontSize: 12, color: C.textLight }}>{o.date} · {o.items.length} item{o.items.length !== 1 ? "s" : ""} · <strong style={{ color: C.darkGreen }}>R{o.total.toFixed(2)}</strong> · 📞 {o.customer.phone}</p>
                    </div>
                    <span style={{ fontSize: 18, color: C.textLight }}>{isExp ? "▲" : "▼"}</span>
                  </div>
                  {isExp && <div style={{ borderTop: "1px solid " + C.border, padding: "14px" }}>
                    <div style={{ background: C.parchment, borderRadius: 8, padding: "10px", marginBottom: 12 }}>
                      {o.items.map((it, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0", borderBottom: i < o.items.length - 1 ? "1px solid " + C.border : "none" }}>
                          {it.image && <img src={it.image} alt={it.name} style={{ width: 32, height: 32, objectFit: "cover", borderRadius: 4 }} onError={e => e.target.style.display = "none"} />}
                          <span style={{ flex: 1, fontSize: 13 }}>{it.qty}x {it.name}</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: C.darkGreen }}>R{(it.price * it.qty).toFixed(2)}</span>
                        </div>
                      ))}
                      <div style={{ borderTop: "1px solid " + C.border, marginTop: 6, paddingTop: 6 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: C.textMid, padding: "2px 0" }}><span>Seeds subtotal</span><span>R{o.seedsTotal ? o.seedsTotal.toFixed(2) : "—"}</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: C.textMid, padding: "2px 0" }}><span>Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: C.textMid, padding: "2px 0" }}><span>Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14, padding: "4px 0 0" }}><span>Total paid</span><span style={{ color: C.darkGreen }}>R{o.total.toFixed(2)}</span></div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12, fontSize: 12, color: C.textMid }}>
                      <div><strong>Email:</strong> {o.customer.email}</div>
                      <div><strong>Phone:</strong> {o.customer.phone}</div>
                      <div style={{ gridColumn: "1/-1" }}><strong>Address:</strong> {o.customer.street}, {o.customer.suburb}, {o.customer.city}, {o.customer.province} {o.customer.postal}</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                      {["Pending", "Packed", "Dispatched", "Delivered"].map(s => (
                        <button key={s} style={{ ...bP, padding: "5px 12px", fontSize: 12, background: o.status === s ? SC[s].bg : C.parchment, color: o.status === s ? SC[s].color : C.brown, border: "1px solid " + (o.status === s ? SC[s].border : C.border), fontWeight: o.status === s ? 700 : 400 }} onClick={() => updateOrderStatus(o.id, s)}>{s}</button>
                      ))}
                    </div>
                    <input style={{ ...iS, marginBottom: 8 }} placeholder="Pudo tracking reference..." value={o.pudoRef} onChange={e => updateOrderField(o.id, "pudoRef", e.target.value)} />
                    <textarea style={{ ...iS, height: 60, resize: "vertical" }} placeholder="Internal notes..." value={o.notes} onChange={e => updateOrderField(o.id, "notes", e.target.value)} />
                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                      <a href={"https://wa.me/27" + o.customer.phone.replace(/\D/g, "").replace(/^0/, "")} target="_blank" rel="noreferrer" style={{ ...bG, textDecoration: "none", background: "#25D366", padding: "7px 14px", fontSize: 12 }}>💬 WhatsApp</a>
                      <a href={"mailto:" + o.customer.email} style={{ ...bP, textDecoration: "none", padding: "7px 14px", fontSize: 12 }}>✉️ Email</a>
                      <button style={{ ...bG, background: "#b00", marginLeft: "auto", padding: "7px 12px", fontSize: 12 }} onClick={() => deleteOrder(o.id)}>Delete</button>
                    </div>
                  </div>}
                </div>
              );
            })}
          </div>}

          {adminTab === "products" && <div>
            <button style={{ ...bG, background: "#2d5a8e", marginBottom: "1rem" }} onClick={addNew}>+ Add product</button>
            {products.map(p => (
              <div key={p.id} style={{ background: "#fff", border: "1px solid " + C.border, borderRadius: 8, padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                {p.image && <img src={p.image} alt={p.name} style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 6, flexShrink: 0 }} onError={e => e.target.style.display = "none"} />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 13, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: C.textLight }}>{p.category} · R{p.price} · Profit: R{p.price - p.cost}</p>
                </div>
                <button style={{ fontSize: 11, padding: "3px 8px", borderRadius: 8, border: "none", cursor: "pointer", background: p.outOfStock ? "#c00" : "#eef5e8", color: p.outOfStock ? "#fff" : C.midGreen, fontWeight: 600 }} onClick={() => setProducts(ps => ps.map(x => x.id === p.id ? { ...x, outOfStock: !x.outOfStock } : x))}>{p.outOfStock ? "In stock" : "Out of stock"}</button>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: p.stock ? "#eef5e8" : "#fce8e8", color: p.stock ? C.midGreen : "#c00" }}>{p.stock ? "Live" : "Hidden"}</span>
                <button style={{ ...bG, padding: "5px 12px", fontSize: 12 }} onClick={() => startEdit(p)}>Edit</button>
                <button style={{ ...bG, background: "#b00", padding: "5px 9px", fontSize: 12 }} onClick={() => del(p.id)}>x</button>
              </div>
            ))}
          </div>}

          {adminTab === "bulk" && <div>
            <div style={{ background: C.parchment, border: "1px solid " + C.border, borderRadius: 10, padding: "1.25rem", maxWidth: 480 }}>
              <h3 style={{ margin: "0 0 1rem", color: C.darkGreen, fontSize: 15 }}>Bulk price update</h3>
              <label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 4 }}>Category</label>
              <select style={{ ...iS, marginBottom: 12 }} value={bulkCat} onChange={e => setBulkCat(e.target.value)}>{CATS.map(c => <option key={c}>{c}</option>)}</select>
              <label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 4 }}>New retail price (R)</label>
              <input style={{ ...iS, marginBottom: 12 }} type="number" placeholder="e.g. 50" value={bulkPrice} onChange={e => setBulkPrice(e.target.value)} />
              <button style={{ ...bG, width: "100%", padding: 12 }} onClick={applyBulk}>Apply to {bulkCat === "All" ? products.length : products.filter(p => p.category === bulkCat).length} products</button>
            </div>
          </div>}
        </div>
      ))}

      {/* ── Edit product modal ───────────────────────────────────────────────── */}
      {editId && (
        <div style={mS} onClick={e => e.target === e.currentTarget && setEditId(null)}>
          <div style={bxS}>
            <h3 style={{ margin: "0 0 1rem", color: C.darkGreen }}>Edit product</h3>
            {[["Name", "name", "text"], ["Cost price (R)", "cost", "number"], ["Retail price (R)", "price", "number"], ["Image URL", "image", "text"]].map(([label, key, type]) => (
              <div key={key}><label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 3, marginTop: 10 }}>{label}</label><input style={iS} type={type} value={editData[key] || ""} onChange={e => setEditData(d => ({ ...d, [key]: e.target.value }))} /></div>
            ))}
            <label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 3, marginTop: 10 }}>Category</label>
            <select style={iS} value={editData.category || ""} onChange={e => setEditData(d => ({ ...d, category: e.target.value }))}>{CATS.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}</select>
            {editData.price && editData.cost && <p style={{ fontSize: 11, color: C.textLight, margin: "4px 0 0" }}>Profit: R{editData.price - editData.cost} per pack</p>}
            <label style={{ fontSize: 12, color: C.textMid, display: "flex", alignItems: "center", gap: 6, marginTop: 10, cursor: "pointer" }}><input type="checkbox" checked={editData.stock || false} onChange={e => setEditData(d => ({ ...d, stock: e.target.checked }))} /> Show in store</label>
            <label style={{ fontSize: 12, color: "#c00", display: "flex", alignItems: "center", gap: 6, marginTop: 8, cursor: "pointer" }}><input type="checkbox" checked={editData.outOfStock || false} onChange={e => setEditData(d => ({ ...d, outOfStock: e.target.checked }))} /> Mark as out of stock</label>
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <button style={{ ...bP, flex: 1 }} onClick={() => setEditId(null)}>Cancel</button>
              <button style={{ ...bG, flex: 1 }} onClick={saveEdit}>Save changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Cart modal ───────────────────────────────────────────────────────── */}
      {cartOpen && (
        <div style={mS} onClick={e => e.target === e.currentTarget && closeCart()}>
          <div style={bxS}>

            {/* Progress bar — shown on steps 1 and 2 */}
            {step > 0 && <ProgressBar step={step} />}

            {/* ── Step 0: Cart ── */}
            {step === 0 && <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0, color: C.darkGreen }}>Your cart</h3>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {cart.length > 0 && <button style={{ background: "none", border: "none", fontSize: 11, color: C.textLight, cursor: "pointer", textDecoration: "underline" }} onClick={clearCart}>Clear all</button>}
                  <button style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.textLight }} onClick={closeCart}>✕</button>
                </div>
              </div>
              {cart.length === 0 ? <p style={{ color: C.textLight, textAlign: "center", padding: "2rem 0" }}>Your cart is empty</p> : (
                <div>
                  {cart.map(x => (
                    <div key={x.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: "1px solid " + C.border }}>
                      {x.image && <img src={x.image} alt={x.name} style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 6 }} onError={e => e.target.style.display = "none"} />}
                      <span style={{ flex: 1, fontSize: 13 }}>{x.name}</span>
                      <button style={{ background: "none", border: "1px solid " + C.border, borderRadius: 5, width: 24, height: 24, cursor: "pointer" }} onClick={() => updateCartQty(x.id, -1)}>-</button>
                      <span style={{ width: 18, textAlign: "center", fontSize: 13 }}>{x.qty}</span>
                      <button style={{ background: "none", border: "1px solid " + C.border, borderRadius: 5, width: 24, height: 24, cursor: "pointer" }} onClick={() => updateCartQty(x.id, 1)}>+</button>
                      <span style={{ minWidth: 60, textAlign: "right", fontWeight: 700, color: C.darkGreen, fontSize: 13 }}>R{(x.price * x.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 10, borderTop: "1px solid " + C.border, paddingTop: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "3px 0" }}><span>Seeds subtotal</span><span>R{seedsTotal.toFixed(2)}</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "3px 0" }}><span>📦 Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "3px 0", borderBottom: "1px solid " + C.border, paddingBottom: 8 }}><span>🛡️ Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15, paddingTop: 8 }}><span>Total</span><span style={{ color: C.darkGreen }}>R{cartTotal.toFixed(2)}</span></div>
                  </div>
                  <div style={{ ...pN, marginTop: 10 }}>📦 Delivery via Pudo Locker — collect from a locker near you.</div>
                  {/* Sticky footer */}
                  <div style={stickyFooter}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ ...bP, flex: 1 }} onClick={closeCart}>Cancel</button>
                      <button style={{ ...bG, flex: 2 }} onClick={() => setStep(1)}>Checkout →</button>
                    </div>
                  </div>
                </div>
              )}
            </div>}

            {/* ── Step 1: Details ── */}
            {step === 1 && <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <h3 style={{ margin: 0, color: C.darkGreen }}>Your details</h3>
                <button style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.textLight }} onClick={closeCart}>✕</button>
              </div>
              <p style={{ fontSize: 12, color: C.textLight, margin: "0 0 0.75rem" }}>
                {cust.name ? `Welcome back, ${cust.name.split(" ")[0]}! Your details are pre-filled.` : "So we can confirm and arrange your Pudo delivery"}
              </p>
              {[["Full name", "name", "text", "Jane Smith"], ["Phone / WhatsApp", "phone", "tel", "+27 82 000 0000"], ["Email address", "email", "email", "you@example.com"]].map(([l, k, t, ph]) => (
                <div key={k}><label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 3, marginTop: 10 }}>{l}</label><input style={iS} type={t} placeholder={ph} value={cust[k]} onChange={e => saveCust({ ...cust, [k]: e.target.value })} /></div>
              ))}
              <p style={{ fontSize: 12, fontWeight: 600, color: C.darkGreen, margin: "14px 0 4px" }}>Delivery address</p>
              {[["Street address", "street", "123 Main Street"], ["Suburb", "suburb", "Sandton"], ["City", "city", "Johannesburg"], ["Province", "province", "Gauteng"], ["Postal code", "postal", "2196"]].map(([l, k, ph]) => (
                <div key={k}><label style={{ fontSize: 12, color: C.textMid, display: "block", marginBottom: 3, marginTop: 8 }}>{l}</label><input style={iS} placeholder={ph} value={cust[k]} onChange={e => saveCust({ ...cust, [k]: e.target.value })} /></div>
              ))}
              <div style={{ ...pN, marginTop: 12 }}>📦 We will send your seeds to the nearest Pudo locker. You will receive an SMS when ready.</div>
              {/* Sticky footer */}
              <div style={stickyFooter}>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ ...bP, flex: 1 }} onClick={() => setStep(0)}>← Back</button>
                  <button style={{ ...bG, flex: 2 }} onClick={() => setStep(2)} disabled={!cust.name || !cust.phone || !cust.street}>Review order →</button>
                </div>
              </div>
            </div>}

            {/* ── Step 2: Review & Pay ── */}
            {step === 2 && <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <h3 style={{ margin: 0, color: C.darkGreen }}>Review and pay</h3>
                <button style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.textLight }} onClick={closeCart}>✕</button>
              </div>
              <div style={{ background: C.parchment, border: "1px solid " + C.border, borderRadius: 8, padding: "0.75rem", marginBottom: "0.75rem" }}>
                {cart.map(x => <div key={x.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "3px 0" }}><span>{x.qty}x {x.name}</span><span style={{ fontWeight: 600 }}>R{(x.price * x.qty).toFixed(2)}</span></div>)}
                <div style={{ borderTop: "1px solid " + C.border, marginTop: 6, paddingTop: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "2px 0" }}><span>Seeds subtotal</span><span>R{seedsTotal.toFixed(2)}</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "2px 0" }}><span>📦 Pudo delivery</span><span>R{PUDO_FEE}.00</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMid, padding: "2px 0" }}><span>🛡️ Packaging</span><span>R{PACKAGING_FEE}.00</span></div>
                </div>
                <div style={{ borderTop: "1px solid " + C.border, marginTop: 6, paddingTop: 6, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15 }}><span>Total</span><span style={{ color: C.darkGreen }}>R{cartTotal.toFixed(2)}</span></div>
              </div>
              {/* Delivery summary */}
              <div style={{ background: "#f0f5ff", border: "1px solid #c0d0f0", borderRadius: 8, padding: "0.75rem", fontSize: 12, color: "#2a3a6a", marginBottom: "0.75rem", lineHeight: 1.6 }}>
                📍 <strong>Delivering to:</strong> {cust.name} · {cust.street}, {cust.suburb}, {cust.city}<br />
                📞 {cust.phone} · ✉️ {cust.email}
              </div>
              <div style={{ background: "#fff8e8", border: "1px solid #e8d08a", borderRadius: 8, padding: "0.8rem", fontSize: 12, color: C.brown, marginBottom: "0.9rem", lineHeight: 1.7 }}>
                Clicking Pay now opens a secure YOCO payment page. Your order is saved automatically and you will receive a confirmation email.
              </div>
              {payError && <p style={{ fontSize: 12, color: "#c00", margin: "0 0 8px" }}>{payError}</p>}
              {/* Sticky footer */}
              <div style={stickyFooter}>
                <button style={{ ...bG, width: "100%", padding: 13, fontSize: 14, marginBottom: 8, opacity: payLoading ? 0.7 : 1 }} onClick={handlePay} disabled={payLoading}>
                  {payLoading ? "Saving order..." : "🔒 Pay R" + cartTotal.toFixed(2) + " securely via YOCO →"}
                </button>
                <button style={{ ...bP, width: "100%" }} onClick={() => setStep(1)}>← Back</button>
              </div>
            </div>}

          </div>
        </div>
      )}
    </div>
  );
}
