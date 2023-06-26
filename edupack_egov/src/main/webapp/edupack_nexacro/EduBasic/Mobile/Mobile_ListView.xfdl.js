(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Work");
            this.set_titletext("리스트뷰 영화컨텐츠");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_movie", this);
            obj._setContents("<ColumnInfo><Column id=\"TITEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"STARRING\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"GENRE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"RUNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOVIE_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITEL\">Avatar</Col><Col id=\"STARRING\">Michelle Rodriguez, Sam Worthington, Sigourney Weaver</Col><Col id=\"YEAR\">2009</Col><Col id=\"SUMMARY\">Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth&apos;s energy crisis. Because Pandora&apos;s atmosphere is toxic, they have created the Avatar Program, in which human &quot;drivers&quot; have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na&apos;vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na&apos;vi, who have become a major obstacle to mining the precious ore. But a beautiful Na&apos;vi female, Neytiri, saves Jake&apos;s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake&apos;s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na&apos;vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world</Col><Col id=\"PRODUCTION\">Twentieth Century Fox Film Corporation</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">162 min</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"SITE\">http://www.avatarmovie.com/</Col><Col id=\"MOVIE_IMG\">theme://images/m_avata.jpg</Col><Col id=\"GRADE\">9.07</Col></Row><Row><Col id=\"TITEL\">Titanic</Col><Col id=\"STARRING\">Kate Winslet, Leonardo DiCaprio</Col><Col id=\"YEAR\">1997</Col><Col id=\"SUMMARY\">A fictional romantic tale of a rich girl (Winslet) and a poor bohemian boy (DiCaprio) who meet on the ill-fated voyage of the &apos;unsinkable&apos; ship.</Col><Col id=\"PRODUCTION\">Paramount Pictures</Col><Col id=\"RUNTIME\">194 min</Col><Col id=\"GENRE\">Drama, Romance</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"MOVIE_IMG\">theme://images/m_titanic.jpg</Col><Col id=\"GRADE\">9.86</Col></Row><Row><Col id=\"TITEL\">FROZEN</Col><Col id=\"STARRING\">Idina Menzel, Josh Gad, Kristen Bell</Col><Col id=\"SUMMARY\">Anna sets off on an epic journey—teaming up with rugged mountain man Kristoff and his loyal reindeer Sven—to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom</Col><Col id=\"YEAR\">2013</Col><Col id=\"PRODUCTION\">Walt Disney Studios Motion Pictures</Col><Col id=\"DIRECTOR\">Chris Buck and Jennifer Lee</Col><Col id=\"GENRE\">Fantasy, Comedy, Romance</Col><Col id=\"RUNTIME\">102 min</Col><Col id=\"SITE\">http://movies.disney.com/frozen</Col><Col id=\"WRITER\">Chris Buck and Dean Wellins</Col><Col id=\"MOVIE_IMG\">theme://images/m_frozen.jpg</Col><Col id=\"GRADE\">9.20</Col></Row><Row><Col id=\"TITEL\">Iron Man 3</Col><Col id=\"STARRING\">Don Cheadle, Guy Pearce, Gwyneth Paltrow, Robert Downey Jr.</Col><Col id=\"PRODUCTION\">Walt Disney Studios Motion Pictures</Col><Col id=\"YEAR\">2013</Col><Col id=\"SUMMARY\">Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy’s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?</Col><Col id=\"DIRECTOR\">Shane Black</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Thriller, Fantasy</Col><Col id=\"RUNTIME\">130 min</Col><Col id=\"WRITER\">Adi Granov</Col><Col id=\"SITE\">http://marvel.com/ironman3</Col><Col id=\"MOVIE_IMG\">theme://images/m_ironman.jpg</Col><Col id=\"GRADE\">8.86</Col></Row><Row><Col id=\"TITEL\">Star Wars</Col><Col id=\"PRODUCTION\">Twentieth Century Fox Film Corporation</Col><Col id=\"STARRING\">Ewan McGregor, Liam Neeson, Natalie Portman</Col><Col id=\"YEAR\">1999</Col><Col id=\"SUMMARY\">Stranded on the desert planet Tatooine after rescuing young Queen Amidala from the impending invasion of Naboo, Jedi apprentice Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn discover nine-year-old Anakin Skywalker, a young slave unusually strong in the Force. Anakin wins a thrilling Podrace and with it his freedom as he leaves his home to be trained as a Jedi. The heroes return to Naboo where Anakin and the Queen face massive invasion forces while the two Jedi contend with a deadly foe named Darth Maul. Only then do they realize the invasion is merely the first step in a sinister scheme by the re-emergent forces of darkness known as the Sith.</Col><Col id=\"DIRECTOR\">George Lucas</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">136 min</Col><Col id=\"SITE\">http://www.starwars.com/films/star-wars-episode-i-the-phantom-menace</Col><Col id=\"WRITER\">George Lucas</Col><Col id=\"MOVIE_IMG\">theme://images/m_starwars.jpg</Col><Col id=\"GRADE\">7.80</Col></Row><Row><Col id=\"TITEL\">Inception</Col><Col id=\"STARRING\">Ellen Page, Joseph Gordon-Levitt, Ken Watanabe, Leonardo DiCaprio</Col><Col id=\"PRODUCTION\">Warner Bros. Pictures</Col><Col id=\"SUMMARY\">Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb&apos;s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. This summer, your mind is the scene of the crime</Col><Col id=\"YEAR\">2010</Col><Col id=\"DIRECTOR\">Christopher Nolan</Col><Col id=\"GENRE\">Action, Sci-Fi, Drama, Mystery, Thriller</Col><Col id=\"RUNTIME\">148 min</Col><Col id=\"WRITER\">Christopher Nolan</Col><Col id=\"MOVIE_IMG\">theme://images/m_inception.jpg</Col><Col id=\"GRADE\">9.22</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView00","0","0","480",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_movie");
            obj.set_scrolltype("vertical");
            obj.set_bandinitstatus("collapse");
            obj.set_bandexpandtype("accordion");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_scrollbarsize("15");
            obj.set_scrollbartrackbarsize("100");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"200\" expandbartype=\"true\" expandbarsize=\"40 28\"><Cell id=\"Cell10\" left=\"230\" top=\"59\" width=\"65\" height=\"20\" displaytype=\"imagecontrol\" cssclass=\"lstV_bdcell_starN\"/><Cell id=\"Cell01\" left=\"120\" top=\"10\" width=\"100\" height=\"40\" text=\"bind:TITEL\"/><Cell id=\"Cell00\" left=\"10\" top=\"20\" width=\"98\" height=\"145\" displaytype=\"imagecontrol\" text=\"bind:MOVIE_IMG\"/><Cell id=\"Cell02\" left=\"230\" top=\"81\" width=\"242\" height=\"30\" text=\"bind:DIRECTOR\"/><Cell id=\"Cell03\" left=\"120\" top=\"81\" width=\"100\" height=\"30\" text=\"Director\"/><Cell id=\"Cell04\" left=\"230\" top=\"112\" width=\"242\" height=\"30\" text=\"bind:RUNTIME\"/><Cell id=\"Cell05\" left=\"120\" top=\"112\" width=\"100\" height=\"30\" text=\"Show time\"/><Cell id=\"Cell06\" left=\"230\" top=\"143\" width=\"212\" height=\"50\" text=\"bind:GENRE\" cssclass=\"lstV_bdcell_filmtype\"/><Cell id=\"Cell07\" left=\"120\" top=\"143\" width=\"100\" height=\"30\" text=\"Genre\"/><Cell id=\"Cell08\" left=\"340\" top=\"50\" width=\"121\" height=\"30\" text=\"bind:GRADE\"/><Cell id=\"Cell09\" left=\"230\" top=\"59\" width=\"65\" height=\"20\" displaytype=\"imagecontrol\" cssclass=\"lstV_bdcell_starO\"/><Cell id=\"Cell12\" left=\"120\" top=\"46\" width=\"310\" height=\"3\" cssclass=\"lstV_bdcell_line\"/><Cell id=\"Cell11\" left=\"Cell01:10\" top=\"10\" width=\"150\" height=\"40\" text=\"bind:YEAR\" cssclass=\"lstV_bdcell_filmyear\"/><Cell id=\"Cell13\" left=\"120\" top=\"50\" width=\"100\" height=\"30\" text=\"Grade\"/></Band><Band id=\"detail\" width=\"100%\" height=\"25%\"><Cell id=\"Cell02\" left=\"10\" top=\"10\" width=\"100\" height=\"35\" text=\"Production\" cssclass=\"lstV_detcell_title\"/><Cell id=\"Cell06\" left=\"120\" top=\"10\" width=\"340\" height=\"35\" text=\"bind:PRODUCTION\" textAlign=\"left\"/><Cell id=\"Cell07\" left=\"10\" top=\"50\" width=\"459\" height=\"68.51%\" text=\"bind:SUMMARY\" displaytype=\"textareacontrol\" cssclass=\"lstV_detcell_summary\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("리스트뷰 영화컨텐츠");

                p.ListView00.set_taborder("1");
                p.ListView00.set_binddataset("ds_movie");
                p.ListView00.set_scrolltype("vertical");
                p.ListView00.set_bandinitstatus("collapse");
                p.ListView00.set_bandexpandtype("accordion");
                p.ListView00.set_scrollbardecbuttonsize("0");
                p.ListView00.set_scrollbarincbuttonsize("0");
                p.ListView00.set_scrollbarsize("15");
                p.ListView00.set_scrollbartrackbarsize("100");
                p.ListView00.set_maxwidth("");
                p.ListView00.move("0","0","480",null,null,"0");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","screen_phone",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_ListView.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.ds_movie.set_enableevent(false);
        	this.ListView00.set_enableredraw(false);
        	this.ListView00.set_enableevent(false);

        	for(var i=0; i<this.ds_movie.rowcount; i++){
        		var nBaseSize = this.ListView00.getCellProperty("body", "Cell10" , "width");
        		var nMaxValue = 10;
        		var nValue = this.ds_movie.getColumn(i, "GRADE");

        		var nSize = nBaseSize * nValue / nMaxValue;
        		this.ListView00.setCellProperty("body", "Cell09" , "width", nSize);
        	}

        	this.ds_movie.set_enableevent(true);
        	this.ListView00.set_enableredraw(true);
        	this.ListView00.set_enableevent(true);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.Mobile_Work_onbindingvaluechanged,this);
            this.ds_movie.addEventHandler("onrowsetchanged",this.Dataset00_onrowsetchanged,this);
        };
        this.loadIncludeScript("Mobile_ListView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
