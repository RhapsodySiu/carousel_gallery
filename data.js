var gallery_data = {
    count: 100,
    dropContainer: "#drops-container",
    imgContainer: "#img-container",
    defaultBgColor: "Moccasin",
    defaultBtnBgColor: "Orange",
    defaultBtnBgColorHover: "LightSalmon",
    defaultTextColor: "Black",
	defaultBtnColor: "White",
    customBtnBgColors: ["orange","orange","orange","wheat","wheat",
					   "wheat","wheat","wheat","orange","orange",
					   "wheat","wheat","orange","wheat","orange",
					   "orange","orange","orange","wheat","orange",
					   "wheat","wheat","wheat","wheat","wheat",
					   "wheat","wheat","wheat","wheat","orange",
					   "orange","wheat","wheat","wheat","wheat",
					   "wheat","wheat","orange","orange","wheat",
					   "orange","wheat","wheat","wheat","wheat",
					   "orange","wheat","wheat","orange","wheat",
					   "wheat","wheat","wheat","wheat","wheat",
					   "orange","wheat","wheat","wheat","orange",
					   "wheat","orange","wheat","wheat","wheat",
					   "wheat","wheat","wheat","wheat","wheat",
					   "wheat","wheat","wheat","wheat","wheat",
					   "orange","orange","wheat","wheat","wheat",
					   "wheat","wheat","wheat","wheat","wheat",
					   "wheat","wheat","wheat","wheat","wheat",
					   "wheat","orange","wheat","wheat","orange",
					   "wheat","wheat","wheat","orange","wheat"],
    customBtnBgColorsHover: [],
	customBtnColors: [],
    customTextColors: ["lightslategrey","cornsilk","lightsalmon","brown","brown",
					   "brown","brown","brown","#ffcc81","lightgray",
					   "brown","brown","darkolivegreen","brown","#cdd7ff",
					   "#bce7e3","lightgray","darkcyan","brown","magenta",
					   "brown","brown","brown","brown","brown",
					   "brown","brown","brown","brown","brown",
					   "orange","brown","brown","brown","brown",
					   "brown","brown","yellow","#595e05","brown",
					   "orange","brown","brown","brown","brown",
					   "darkmagenta","brown","brown","lightcyan","brown",
					   "brown","brown","brown","brown","brown",
					   "#423928","brown","brown","brown","#4f3a1b",
					   "brown","lightyellow","brown","brown","brown",
					   "brown","brown","brown","brown","brown",
					   "brown","brown","brown","brown","brown",
					   "#fff","lightpink","brown","brown","brown",
					   "brown","brown","brown","brown","brown",
					   "brown","brown","brown","brown","brown",
					   "brown","#ded9d5","brown","brown","#fff",
					   "brown","brown","brown","#f2ff9f","brown"],
    imgNames: ["0","1","2","n","n",
			   "n","n","n","8","9",
			   "n","n","12","n","14",
			   "15","16","17","n","19",
			   "n","n","n","n","n",
			   "n","n","n","n","29",
			   "30","n","n","n","n",
			   "n","n","37","38","n",
			   "40","n","n","n","n",
			   "45","n","n","48","n",
			   "n","n","n","n","n",
			   "55","n","n","n","59",
			   "n","61","n","n","n",
			   "n","n","n","n","n",
			   "n","n","n","n","n",
			   "75","76","n","n","n",
			   "n","n","n","n","n",
			   "n","n","n","n","n",
			   "n","91","n","n","94",
			   "n","n","n","98","n"],
    itemTags: [],
    itemNames: ["Amniotic Acid",//1
                "Blood",
                "Tear",
                "",//Sweat
                "", //5, Saliva
                "", //Gastric Acid
                "", //Semen
                "", //Urine
                "Pus",
                "Holy Water", //10
                "", //Bubble
                "", //Cloud
                "Dew",
                "", //Mist
                "Rain", //15
                "Snow",
                "Ice",
                "Steam",
                "", //Hot Spring
                "Poison", //20
                "", //Chili Sauce
                "", //Soy Sauce
                "", //Ketchup
                "", //Mayonnaise
                "", //25, Venom
                "", //Soup
                "", //Vinegar
                "", //Butter
                "", //Jelly
                "Caramel", //30
                "Maple Syrup",
                "", //Agave Nectar
                "", //Corn Syrup
                "", //Essential Oil
                "", //35, Chocolate
                "", //Ice Cream
                "", //Pudding
                "Honey",
                "Nectar",
                "", //40,Resin
                "Lava",
                "", //Mud
                "", //Comet Tail
                "", //Clay
                "", //45, Lime
                "Silk",
                "", //Latex
                "", //Synthetic resin
                "Glass",
                "", //50.Slime
                "", //Acid
                "", //Plastic
                "", //Aurora
                "", //Juice
                "", //55,Coffee
                "Milk",
                "", //Soft Drink
                "", //Coconut juice
                "", //Balm
                "Perfume", //60
                "", //Pigment
                "Wax",
                "", //Wastewater
                "", //Alcohol
                "",//65.Gel
                "", //Cleanser
                "", //Cement
                "", //Glue
                "", //Liquid Crystal
                "",//70.Silicone
                "", //Petrol
                "", //Diesel
                "", //Kerosene
                "", //Bitumen
                "", //75.Fuel Oil
                "Mercury",
                "Wine",
                "", //Brandy
                "", //Beer
                "", //80,Whiskey
                "", //Vodka
                "", //Cider
                "", //Gin
                "", //Tequila
                "", //85,Rum
                "", //Cocktail
                "", //Sake
                "", //Champagne
                "", //Rice Wine
                "", //90,Soju
                "", //White Tea
                "Green Tea",
                "", //Butter tea
                "", //Oolong Tea
                "Black Tea",//95
                "",//Puerh Tea
                "",//Herbal Tea
                "",//Matcha Tea
                "Chai Tea",//Chai Tea
                ""],//Boba Tea
    itemDescriptions: ["<q>Giving birth and being born brings us into the essence of creation, where the human spirit is courageous and bold and the body, a miracle of wisdom</q><br><span class='author'>Harriette Hartigan</span>",
                      "No pestilence had ever been so fatal, or so hideous. Blood was its Avatar and its seal --the redness and the horror of blood. There were sharp pains, and sudden dizziness, and then profuse bleeding at the pores, with dissolution. The scarlet stains upon the body and especially upon the face of the victim, were the pest ban which shut him out from the aid and from the sympathy of his fellow-men. And the whole seizure, progress and termination of the disease, were the incidents of half an hour. <p><cite>THE MASQUE OF THE RED DEATH</cite><br><span class='author'>Edgar Allan Poe</span></p>",
                      "<p>We wear the mask that grins and lies, <br /> It hides our cheeks and shades our eyes,&mdash; <br /> This debt we pay to human guile; <br /> With torn and bleeding hearts we smile <br /> And mouth with myriad subtleties,</p> <p>Why should the world be over-wise, <br /> In counting all our tears and sighs? <br /> Nay, let them only see us, while <br /> We wear the mask.</p> <p>We smile, but oh great Christ, our cries <br /> To thee from tortured souls arise. <br /> We sing, but oh the clay is vile <br /> Beneath our feet, and long the mile, <br /> But let the world dream otherwise, <br /> We wear the mask!</p> <p><cite>We Wear the Mask</cite><br><span class='author'>Paul Laurence Dunbar</span></p>",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "<q>Whoever refuses to remember the inhumanity is prone to new risks of infection.</q><span class='author'>Richard von Weizsaecker</span>",
                      "<p>&ldquo;Peter replied, &ldquo;Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.&rdquo;</p><p><cite>Acts 2:38</cite></p>",
                      "",
                      "",
                      "<p>Above the east horizon,<br /> The great red flower of the dawn<br /> Opens slowly, petal by petal;<br /> The trees emerge from darkness<br /> With ghostly silver leaves,<br /> Dew powdered.<br /> Now consciousness emerges<br /> Reluctantly out of tides of sleep;<br /> Finding with cold surprise<br /> No strange new thing to match its dreams,<br /> But merely the familiar shapes<br /> Of bedpost, window-pane, and wall.</p> <p>Within the city,<br /> The streets which were the last to fall to sleep,<br /> Hold yet stale fragments of the night.<br /> Sleep oozes out of stagnant ash-barrels,<br /> Sleep drowses over litter in the streets.<br /> Sleep nods upon the milkcans by back doors.<br /> And, in shut rooms,<br /> Behind the lowered window-blinds,<br /> Drawn white faces unwittingly flout the day.</p> <p>But, at the edges of the city,<br /> Sleep is already washed away;<br /> Light filters through the moist green leaves,<br /> It runs into the cups of flowers,<br /> It leaps in sparks through drops of dew,<br /> It whirls against the window-panes<br /> With waking birds;<br /> Blinds are rolled up and chimneys smoke,<br /> Feet clatter past in silent paths,<br /> And down white vanishing ways of steel,<br /> A dozen railway trains converge<br /> Upon night&rsquo;s stronghold.</p><p><cite>Dawn</cite><br><span class='author'>John Gould Fletcher</span></p>",
                      "",
                      "<q><p>City of rain, city where the bleak wind batters the hard drops once and again, sousing a shivering, cursing beggar who clings amid the stiff Apostles on the cathedral portico; City where the glare is dull and lowering, city where the clouds flare and flicker as they pass upwards, where sputtering lamps stare into the muddy pools beneath them; City where the winds shriek up the streets and tear into the squares, city whose cobbles quiver and whose pinnacles waver before the buzzing chatter of raindrops in their flight; City of midnight, Drench me with your rain of sorrow.</p></q><p><cite>In the City of Midnight</cite><br><span class='author'>John Gould Fletcher</span></p>",//rain
                      "<p>Yesterday the fields were only grey with scattered snow,<br /> And now the longest grass-leaves hardly emerge;<br /> Yet her deep footsteps mark the snow, and go<br /> On towards the pines at the hills&rsquo; white verge.</p> <p>I cannot see her, since the mist&rsquo;s white scarf<br /> Obscures the dark wood and the dull orange sky;<br /> But she&rsquo;s waiting, I know, impatient and cold, half<br /> Sobs struggling into her frosty sigh.</p> <p>Why does she come so promptly, when she must know<br /> That she&rsquo;s only the nearer to the inevitable farewell;<br /> The hill is steep, on the snow my steps are slow &ndash;<br /> Why does she come, when she knows what I have to tell?</p><p><cite>A Winter&#39;s Tale</cite><br><span class='author'>D. H. Lawrence</span></p>",//snow
                      "<q>Not unlike water, which after long journeying, has been compressed into blocks of green glass, the glaciers lie here, so that one huge mass of ice is heaped on the other. The rushing stream roars below and melts snow and ice; within, hollow caverns and mighty clefts open, this is a wonderful palace of ice, and in it dwells the Ice-Maiden, the Queen of the glaciers. She, the murderess, the destroyer, is half a child of air and half the powerful ruler of the streams; therefore, she had received the power, to elevate herself with the speed of the chamois to the highest pinnacle of the snow-topped mountain; where the most daring mountaineer had to hew his way, in order to take firm foot-hold. She sails up the rushing river on a slender fir-branch—springs from one cliff to another, with her long snow-white hair, fluttering around her, and with her bluish-green mantle, which resembles the water of the deep Swiss lakes.</q><p><cite>The Ice Maiden</cite><br><span class='author'>Hans Christian Anderson</span></p>",//ice
                      "<q>The First Industrial Revolution used water and steam power to mechanize production. </q><br><span class='author'>Klaus Schwab</span>",
                      "",
                      "<p>When Socrates saw the man he said: &ldquo;You, my good man, since you are experienced in these matters, should tell me what needs to be done.&rdquo; The man answered: &ldquo;You need to drink it, that&rsquo;s all. Then walk around until you feel a heaviness in your legs. Then lie down. This way, the poison will do its thing.&rdquo; While the man was saying this, he handed the cup to Socrates. And Socrates took it in a cheerful way, not flinching or getting pale or grimacing.</p><p><cite>Phaedo</cite><br><span class='author'>Plato</span></p>", //Poison
					  "", //Chili Sauce
						"", //Soy Sauce
						"", //Ketchup
						"", //Mayonnaise
						"", //25, Venom
						"", //Soup
						"", //Vinegar
						"", //Butter
						"", //Jelly
						"<q>A layer of light colored caramel, capped by a layer of dark chocolate caramel, makes a candy both good- looking and delicious.</q><p><cite>Our Candy Recipes</cite><br><span class='author'>Van Arsdale, May Belle; Monroe, Day; Barber, Mary I., joint author</span></p>", //30
						"<q>From the green wound of the Maple-tree, drips, during the Spring, the limpid sap that the thawing trunk is setting free, like tears spouting out of the tap. Transformed into nectar by the flame, our maple syrup wins all its fame by putting our province on the map.</q><p><span>J.H. Lovoie</span></p>",
						"", //Agave Nectar
						"", //Corn Syrup
						"", //Essential Oil
						"", //35, Chocolate
						"", //Ice Cream
						"", //Pudding
						"<q>Life is the flower for which love is the honey.</q><br><span class='author'>Victor Hugo</span>",
						"<p>Nectar in flower,<br> The bee is there.<br> Love is nectar<br> In this world,<br> We the creatures<br> Are the bees<br> With our dreams<br> That is blossoming<br> And making the world<br> The incomparable heaven.<br> Don't be sad<br> My dear friends,<br> Get here everything<br> In this life-nectar.</p><cite>Nectar in Flower</cite><br/><span class='author'>Gajanan Mishra</span>", //Nectar
						"", //40,Resin
						"<q>Zeal is a volcano, the peak of which the grass of indecisiveness does not grow.</q><br><span class='author'>Khali Gibran</span>",
						"", //Mud
						"", //Comet Tail
						"", //Clay
						"", //45, Lime
						"&#39;Biologically inspired materials could revolutionize materials science. People looking at spider silk and abalone shells are looking for new ways to make materials better, cheaper, and with less toxic byproducts.&#39;<br><span class='author'>Janine Benyus</span>",
						"", //Latex
						"", //Synthetic resin
						"<p>What is poetry? Is it a mosaic <br /> Of coloured stones which curiously are wrought <br /> Into a pattern? Rather glass that&rsquo;s taught <br /> By patient labor any hue to take <br /> And glowing with a sumptuous splendor, make <br /> Beauty a thing of awe; where sunbeams caught, <br /> Transmuted fall in sheafs of rainbows fraught <br /> With storied meaning for religion&rsquo;s sake.</p><p><cite>Fragment</cite><br><span class='author'>Amy Lowell</span></p>",
						"", //50.Slime
						"", //Acid
						"", //Plastic
						"", //Aurora
						"", //Juice
						"", //55,Coffee
						"In Hindu cosmology, the Ocean of milk (kṣīroda, kṣīrābdhi or Kṣīra Sāgara) is the fifth from the center of the seven oceans. It surrounds the continent known as Krauncha. According to Hindu mythology, the devas and asuras worked together for a millennium to churn the ocean and release Amrita the nectar of immortal life. It is spoken of in the Samudra manthana chapter of the Puranas, a body of ancient Hindu legends. It is called as Thirupaalkadal in Tamil and is the place where Vishnu reclines over Shesha Naga along with his consort Lakshmi.<p><cite>Wikipedia</cite></p>",
						"", //Soft Drink
						"", //Coconut juice
						"", //Balm
						"<q>Little things seem nothing, but they give peace, like those meadow flowers which individually seem odorless but all together perfume the air.</q><br><span class='author'>Georges Bernanos</span>",//60
						"", //Pigment
						"&#39;Politeness is to human nature what warmth is to wax.&#39;<br><span class='author'>Arthur Schopenhauer</span>",
						"", //Wastewater
						"", //Alcohol
						"",//65.Gel
						"", //Cleanser
						"", //Cement
						"", //Glue
						"", //Liquid Crystal
						"",//70.Silicone
						"", //Petrol
						"", //Diesel
						"", //Kerosene
						"", //Bitumen
						"", //75.Fuel Oil
						"<p>In China and Tibet, mercury use was thought to prolong life, heal fractures, and maintain generally good health, although it is now known that exposure to mercury vapor leads to serious adverse health effects.<br /> The first emperor of China, Q&iacute;n Sh&#464; Hu&aacute;ng D&igrave;&mdash;allegedly buried in a tomb that contained rivers of flowing mercury on a model of the land he ruled, representative of the rivers of China&mdash;was killed by drinking a mercury and powdered jade mixture formulated by Qin alchemists (causing liver failure, mercury poisoning, and brain death) who intended to give him eternal life.<br /> Khumarawayh ibn Ahmad ibn Tulun, the second Tulunid ruler of Egypt (r. 884&ndash;896), known for his extravagance and profligacy, reportedly built a basin filled with mercury, on which he would lie on top of air-filled cushions and be rocked to sleep.</p><br><span class='author'>Wikipedia</span>",
						"<q>Wine is sunlight, held together by water</q><br><span class='author'>Galileo Galilei</span>",
						"", //Brandy
						"", //Beer
						"", //80,Whiskey
						"", //Vodka
						"", //Cider
						"", //Gin
						"", //Tequila
						"", //85,Rum
						"", //Cocktail
						"", //Sake
						"", //Champagne In victory you deserve Champagne. In defeat, you need it" - Napoleon Bonaparte.
						"", //Rice Wine
						"", //90,Soju
						"", //White Tea
						"<q>The first cup moistens my lips and throat;<br/>The second cup breaks my loneliness;<br/>The third cup searches my barren entrail but to find therein some thousand volumes of odd ideographs;<br/>The fourth cup raises a slight perspiration-all the wrongs of life pass out through my pores;<br/>At the fifth cup I am purified;<br/>The sixth cup calls me to the realms of the immortals.<br/>The seventh cup-ah, but I could take no more! I only feel the breath of the cool wind that raises in my sleeves.<br/>Where is Elysium? Let me ride on this sweet breeze and waft away thither.</q><br/><span class='author'>Lu Tong</span>", //Green Tea
						"", //Yellow Tea
						"", //Oolong Tea
						"<p>The sound of nightingales, of flushing strawberries<br>in his hand held out to me<br>weak morning tea<br>agitated ease<br>somehow we had grown used to living like culprits<br><br>where, where should we hide them<br>our souls that he closed we closed tightly<br>now (for the first time?) brush off one another<br>the sea flattened out flattened out and disappeared<br>we in a dream, but for the sound of the boats of the fishermen<br>the mountains dark and violet<br>surely so surely they approached and overran us<br>we the lost in the land of the lost<br>brushed<br>silence with the wing of a sparrow<br><br>we denied<br>the sky, the heavy clouds, the bay<br>all that sank without a trace<br>the evening, passing through the old voices of the neighbors<br>in the taste of apple and yoghurt<br><br>drew us down into the depths</p><cite>TEA</cite><br/><span class='author'>Gülten Akın</span>",//95,Black Tea
						"",//Puerh Tea
						"",//Herbal Tea
						"",//Matcha Tea
						"<q>I like the pause that tea allows.</q><br/><span class='author'>Waris Ahluwalia</span>",//Milk Tea
						""],
    itemBgColors: ["#183848","darkred","darkslategray","wheat","wheat",
				   "wheat","wheat","wheat","#485624","dimgray",
				   "wheat","wheat","#ADD26B","wheat","#805FD4",
				   "steelblue","#677C7F","#000","wheat","#6e43a7",
				   "wheat","wheat","wheat","wheat","wheat",
				   "wheat","wheat","wheat","wheat","#FFD372",
				   "#e84a30","wheat","wheat","wheat","wheat",
				   "wheat","wheat","darkblue","#bfdbaa","wheat",
				   "#2d2544","wheat","wheat","wheat","wheat",
				   "#A893A6","wheat","wheat","#005CFF","wheat",
				   "wheat","wheat","wheat","wheat","wheat",
				   "#ab9774","wheat","wheat","wheat","#ffb9b9",
				   "wheat","#aaa","wheat","wheat","wheat",
				   "wheat","wheat","wheat","wheat","wheat",
				   "wheat","wheat","wheat","wheat","wheat",
				   "#de3838","#8f4c5e","wheat","wheat","wheat",
				   "wheat","wheat","wheat","wheat","wheat",
				   "wheat","wheat","wheat","wheat","wheat",
				   "wheat","#2a4d32","wheat","wheat","#0c1463",
				   "wheat","wheat","wheat","#962e0d","wheat"],
  };