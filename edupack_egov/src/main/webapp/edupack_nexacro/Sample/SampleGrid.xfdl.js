(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGrid");
            this.set_titletext("그리드 기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindReplace", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">9999</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">계좌이체</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">sdfsdf</Col><Col id=\"test11\">tttttttttttttttttt</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">3333</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">개인계좌</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gaewqr</Col><Col id=\"test11\">tttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">6666</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">라라라</Col><Col id=\"notest\">ghq2erwett</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">45464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsf</Col><Col id=\"test11\">wwwwwwww</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">11</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">tqrewrwe</Col><Col id=\"test11\">1111111111</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">8798</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsfsd</Col><Col id=\"test11\">tttttttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST44</Col><Col id=\"nocharge\">5464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">agsdfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">0</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsdfewrwe</Col><Col id=\"test11\">ssssssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">4564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">gadfsdfccc</Col><Col id=\"test11\">sfffffff</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">564</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsdfsdg</Col><Col id=\"test11\">zzzzzzzzzzzzzz</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">45688</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsghweee</Col><Col id=\"test11\">zasaaaaaaaaaa</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">99</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">afdsfqfdsfds</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">77</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">sdfsdfcccc</Col><Col id=\"test11\">sssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">1111</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">yyerjfgdfdsa</Col><Col id=\"test11\">rrrrrrrrrrrrrrrrrrr</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">100</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfhyeertwq</Col><Col id=\"test11\">eeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">212</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsdsfsd</Col><Col id=\"test11\">wwwwwwwwwww</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1546</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">무통장입금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gsdfsdf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckbox", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col></Row><Row><Col id=\"Column0\">떵이</Col></Row><Row><Col id=\"Column0\">호치</Col></Row><Row><Col id=\"Column0\">새초미</Col></Row><Row><Col id=\"Column0\">드라곤</Col></Row><Row><Col id=\"Column0\">요롱이</Col></Row><Row><Col id=\"Column0\">마초</Col></Row><Row><Col id=\"Column0\">미미</Col></Row><Row><Col id=\"Column0\">몽키</Col></Row><Row><Col id=\"Column0\">키키</Col></Row><Row><Col id=\"Column0\">강다리</Col></Row><Row><Col id=\"Column0\">찡찡이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMultiheader", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col><Col id=\"Column4\">가나다라</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col><Col id=\"Column4\">가다라마</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col><Col id=\"Column4\">가라마바</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col><Col id=\"Column4\">나다라마</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col><Col id=\"Column4\">나라마하</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col><Col id=\"Column4\">다라마바</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col><Col id=\"Column4\">아자차카</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col><Col id=\"Column4\">다마바아</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col><Col id=\"Column4\">다바아자</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col><Col id=\"Column4\">차카타파</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col><Col id=\"Column4\">카타파하</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col><Col id=\"Column4\">차타파하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRowfix", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">test1</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"editControl\">test</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"editControl\">test</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhide", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">9999</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">계좌이체</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">sdfsdf</Col><Col id=\"test11\">tttttttttttttttttt</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">3333</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">개인계좌</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gaewqr</Col><Col id=\"test11\">tttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">6666</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">라라라</Col><Col id=\"notest\">ghq2erwett</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">45464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsf</Col><Col id=\"test11\">wwwwwwww</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">11</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">tqrewrwe</Col><Col id=\"test11\">1111111111</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">8798</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsfsd</Col><Col id=\"test11\">tttttttttttttttt</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST44</Col><Col id=\"nocharge\">5464</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">agsdfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">0</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">gafsdfewrwe</Col><Col id=\"test11\">ssssssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">how</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">4564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">gadfsdfccc</Col><Col id=\"test11\">sfffffff</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">who</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">564</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsdfsdg</Col><Col id=\"test11\">zzzzzzzzzzzzzz</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">where</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">45688</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">asfdsghweee</Col><Col id=\"test11\">zasaaaaaaaaaa</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">99</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">afdsfqfdsfds</Col><Col id=\"test11\">eeeeeeeeeeeee</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">77</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it</Col><Col id=\"stlStatus\">카드</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">sdfsdfcccc</Col><Col id=\"test11\">sssssssssssss</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST55</Col><Col id=\"nocharge\">1111</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">yyerjfgdfdsa</Col><Col id=\"test11\">rrrrrrrrrrrrrrrrrrr</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">100</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfhyeertwq</Col><Col id=\"test11\">eeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">why</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">212</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">현금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsdsfsd</Col><Col id=\"test11\">wwwwwwwwwww</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">when</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST3344</Col><Col id=\"nocharge\">1546</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it</Col><Col id=\"stlStatus\">무통장입금</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">gsdfsdf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserheader", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"decoText\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"mask\" type=\"STRING\" size=\"256\"/><Column id=\"maskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"textArea\" type=\"STRING\" size=\"256\"/><Column id=\"headTest1\" type=\"STRING\" size=\"256\"/><Column id=\"headTest12\" type=\"STRING\" size=\"256\"/><Column id=\"headTest13\" type=\"STRING\" size=\"256\"/><Column id=\"headTest14\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8508301</Col><Col id=\"maskEdit\">8508301</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">aa</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">aa</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8303301</Col><Col id=\"maskEdit\">8303301</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">bb</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">aa</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">Test</Col><Col id=\"mask\">8902022</Col><Col id=\"maskEdit\">8902022</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col><Col id=\"textArea\">Test</Col><Col id=\"headTest1\">cc</Col><Col id=\"headTest12\">aa</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">test1</Col><Col id=\"mask\">9201012</Col><Col id=\"maskEdit\">9201012</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col><Col id=\"textArea\">test1</Col><Col id=\"headTest1\">dd</Col><Col id=\"headTest12\">bb</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;i v=&apos;true&apos;&gt;TE&lt;/i&gt;&lt;i v=&apos;false&apos;&gt;ST&lt;/i&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">8702022</Col><Col id=\"maskEdit\">8702022</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시gsdfdsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Col><Col id=\"headTest1\">ee</Col><Col id=\"headTest12\">bbb</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;u v=&apos;true&apos;&gt;TE&lt;/u&gt;&lt;u v=&apos;false&apos;&gt;ST&lt;/u&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">8801012</Col><Col id=\"maskEdit\">8801012</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">ff</Col><Col id=\"headTest12\">bb</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">bb</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;s v=&apos;true&apos;&gt;TE&lt;/s&gt;&lt;s v=&apos;false&apos;&gt;ST&lt;/s&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">9008301</Col><Col id=\"maskEdit\">9008301</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시</Col><Col id=\"headTest1\">gg</Col><Col id=\"headTest12\">cc</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">9103301</Col><Col id=\"maskEdit\">9103301</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">hh</Col><Col id=\"headTest12\">ccc</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">경기도</Col><Col id=\"mask\">9205052</Col><Col id=\"maskEdit\">9205052</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col><Col id=\"textArea\">경기도</Col><Col id=\"headTest1\">ii</Col><Col id=\"headTest12\">ccc</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">cc</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"mask\">9208302</Col><Col id=\"maskEdit\">9208302</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col><Col id=\"textArea\">서울특별시</Col><Col id=\"headTest1\">jj</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8508301</Col><Col id=\"maskEdit\">8508301</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">kk</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"decoText\">&lt;i v=&apos;true&apos;&gt;TE&lt;/i&gt;&lt;i v=&apos;false&apos;&gt;ST&lt;/i&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8303301</Col><Col id=\"maskEdit\">8303301</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">ll</Col><Col id=\"headTest12\">ddd</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">dd</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"decoText\">&lt;u v=&apos;true&apos;&gt;TE&lt;/u&gt;&lt;u v=&apos;false&apos;&gt;ST&lt;/u&gt;</Col><Col id=\"editControl\">Test</Col><Col id=\"mask\">8902022</Col><Col id=\"maskEdit\">8902022</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col><Col id=\"textArea\">Test</Col><Col id=\"headTest1\">nn</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"decoText\">&lt;fs v=&apos;16&apos;&gt;TEST&lt;/fs&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">9201012</Col><Col id=\"maskEdit\">9201012</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">mm</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">bb</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"decoText\">&lt;fc v=&apos;red&apos;&gt;T&lt;/fc&gt;&lt;fc v=&apos;orange&apos;&gt;E&lt;/fc&gt;&lt;fc v=&apos;purple&apos;&gt;S&lt;/fc&gt;&lt;fc v=&apos;green&apos;&gt;E&lt;/fc&gt;</Col><Col id=\"editControl\">test</Col><Col id=\"mask\">8702022</Col><Col id=\"maskEdit\">8702022</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col><Col id=\"textArea\">test</Col><Col id=\"headTest1\">oo</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"decoText\">&lt;ff v=&apos;굴림&apos;&gt;TEST&lt;/ff&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">8801012</Col><Col id=\"maskEdit\">8801012</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">pp</Col><Col id=\"headTest12\">eee</Col><Col id=\"headTest13\">cc</Col><Col id=\"headTest14\">ee</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"decoText\">&lt;b v=&apos;true&apos;&gt;TE&lt;/b&gt;&lt;b v=&apos;false&apos;&gt;ST&lt;/b&gt;</Col><Col id=\"editControl\">TEST</Col><Col id=\"mask\">9008301</Col><Col id=\"maskEdit\">9008301</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col><Col id=\"textArea\">TEST</Col><Col id=\"headTest1\">qq</Col><Col id=\"headTest12\">ee</Col><Col id=\"headTest13\">aa</Col><Col id=\"headTest14\">ee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix", this);
            obj._setContents("<ColumnInfo><Column id=\"normal\" type=\"STRING\" size=\"256\"/><Column id=\"button\" type=\"STRING\" size=\"256\"/><Column id=\"calendar\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"combo\" type=\"STRING\" size=\"256\"/><Column id=\"comboText\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"editControl\" type=\"STRING\" size=\"256\"/><Column id=\"number\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">9999999999999</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">7777777777</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test1</Col><Col id=\"button\">test1</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">test1</Col><Col id=\"number\">88888888888</Col><Col id=\"text\">test1</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">9999999999</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">8888888888</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">0</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">4444444444</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">5555555555</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">경기도</Col><Col id=\"button\">경기도</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">0</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">경기도</Col><Col id=\"number\">11111111111</Col><Col id=\"text\">경기도</Col></Row><Row><Col id=\"normal\">서울특별시</Col><Col id=\"button\">서울특별시</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">서울특별시</Col><Col id=\"number\">2</Col><Col id=\"text\">서울특별시</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">19890810</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890810</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">222222222</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890826</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19890826</Col><Col id=\"editControl\">test</Col><Col id=\"number\">2</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">Test</Col><Col id=\"button\">Test</Col><Col id=\"calendar\">19880826</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">19880826</Col><Col id=\"editControl\">Test</Col><Col id=\"number\">555555555</Col><Col id=\"text\">Test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19890912</Col><Col id=\"check\">1</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">19890912</Col><Col id=\"editControl\">test</Col><Col id=\"number\">233</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">test</Col><Col id=\"button\">test</Col><Col id=\"calendar\">19880810</Col><Col id=\"check\">1</Col><Col id=\"combo\">all</Col><Col id=\"comboText\">all</Col><Col id=\"date\">19880810</Col><Col id=\"editControl\">test</Col><Col id=\"number\">555555</Col><Col id=\"text\">test</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171019</Col><Col id=\"check\">1</Col><Col id=\"combo\">prev</Col><Col id=\"comboText\">prev</Col><Col id=\"date\">20171019</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">4444444</Col><Col id=\"text\">TEST</Col></Row><Row><Col id=\"normal\">TEST</Col><Col id=\"button\">TEST</Col><Col id=\"calendar\">20171018</Col><Col id=\"check\">0</Col><Col id=\"combo\">next</Col><Col id=\"comboText\">next</Col><Col id=\"date\">20171018</Col><Col id=\"editControl\">TEST</Col><Col id=\"number\">1111111</Col><Col id=\"text\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">user1</Col><Col id=\"NAME\">사용자1</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaste", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"Column1\">피카추</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">123</Col></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"Column1\">라이츄</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">234</Col></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"Column1\">파이리</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"Column1\">꼬부기</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">456</Col></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"Column1\">버터플</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">567</Col></Row><Row><Col id=\"Column0\">요롱이</Col><Col id=\"Column1\">야도란</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">678</Col></Row><Row><Col id=\"Column0\">마초</Col><Col id=\"Column1\">피존투</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">890</Col></Row><Row><Col id=\"Column0\">미미</Col><Col id=\"Column1\">또가스</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">321</Col></Row><Row><Col id=\"Column0\">몽키</Col><Col id=\"Column1\">망나뇽</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">214</Col></Row><Row><Col id=\"Column0\">키키</Col><Col id=\"Column1\">어니부기</Col><Col id=\"Column2\">bbbb</Col><Col id=\"Column3\">543</Col></Row><Row><Col id=\"Column0\">강다리</Col><Col id=\"Column1\">거북킹</Col><Col id=\"Column2\">aaaa</Col><Col id=\"Column3\">345</Col></Row><Row><Col id=\"Column0\">찡찡이</Col><Col id=\"Column1\">지우</Col><Col id=\"Column2\">cccc</Col><Col id=\"Column3\">765</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd07","510","1192","480","290",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColfix");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!filter,!initial");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("그리드 기능");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"470","10",null,"980",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드기능\r\n - 체크박스(checkbox), 순번(no), 상태(status), 정렬(sort), 행고정(rowfix), 열고정(colfix), 필터(filter), \r\n    찾기/바꾸기(replace), 컬럼숨기기/보이기(colhide), 엑셀내려받기(export), 엑셀올리기(import), \r\n    그리드개인화(personal), 초기화(initial), 유저헤더그리드(userheader) , 셀copy&paste(cellcopypaste) 기능이 제공된다.\r\n\r\n - 그리드에 아무것도 설정하지 않을 시,  [정렬, 행고정, 열고정, 필터, 초기화] 기능을 사용 할 수 있다.\r\n\r\n - 기본기능외 다른 기능을 추가 할 경우 그리드에 userproperties를 추가하여 사용한다\r\n    ※ 추가방법 :  그리드를 선택하고 프로퍼티창에서 마우스 우클릭 - add properties 를 선택하여 유저 프로퍼티를 추가 후 \r\n         사용할 기능을 콤마(,)로 구분하여 나열한다.\r\n          예] user property name : griduserproperty\r\n                 user property value : status,no,checkbox,colhide,personal\r\n\r\n - 기본 기능 중 사용하지 않을 기능 앞엔 느낌표(!)를 붙여 명시한다.\r\n    예] !rowfix,!sort\r\n\r\n  - 그리드 헤더와 로우가 매칭이 되지않는 복잡한 그리드의 경우 userheader 속성을 사용 하여 \r\n     필터, 찾기/바꾸기, 소트 등을 손쉽게 이용 할 수 있다.\r\n     단 각 헤더정보에 기능을 이용할 바인딩 정보가 매칭되어야 하고 현재 [calendarweekformat] 속성에 해당 기능이 매칭 되어 있다.\r\n\r\n  - 체크박스, 순번, 상태, 소트의 기능을 제외한 기능은 마우스 우클릭시 나오는 팝업메뉴를 띄워 제공한다.");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","515","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1) 체크박스");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","10","548","250","241",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCheckbox");
            obj.getSetter("griduserproperty").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"꾸러기수비대\" expandchar=\"etorangers\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","290","515","168","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2) 순번");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","290","548","250","241",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsNo");
            obj.getSetter("griduserproperty").set("no,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"꾸러기수비대\" expandchar=\"etorangers\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","570","515","168","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("3) 상태");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","570","548","250","241",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsStatus");
            obj.getSetter("griduserproperty").set("status,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"꾸러기수비대\" expandchar=\"etorangers\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","756","515","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","789","515","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","830","228","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("4) 정렬 (ctrl key= multisort)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","10","863","490","271",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsSort");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05","510","863","480","271",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsSortMultiheader");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!initial,!filter");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell row=\"1\" colspan=\"2\" text=\"Column3\"/><Cell row=\"1\" col=\"2\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell row=\"1\" colspan=\"2\" text=\"bind:Column3\"/><Cell row=\"1\" col=\"2\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd06","10","1192","490","290",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsRowfix");
            obj.getSetter("griduserproperty").set("!sort,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","1159","208","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("5) 행고정");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","510","1159","208","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("6) 열고정");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","1837","690","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("8) 그리드필터");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd08","10","1870","980","282",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsFilter");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!initial,!colfix");
            obj.set_scrollpixel("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","2177","640","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("9) 기본기능 + 그리드찾기/바꾸기");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","2210","980","272",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsFindReplace");
            obj.getSetter("griduserproperty").set("replace");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"nocharge\"/><Cell col=\"3\" text=\"todayw\"/><Cell col=\"4\" text=\"sun\"/><Cell col=\"5\" text=\"rain\"/><Cell col=\"6\" text=\"stlStatus\"/><Cell col=\"7\" text=\"stlYN\"/><Cell col=\"8\" text=\"stn\"/><Cell col=\"9\" text=\"nochargeyn\"/><Cell col=\"10\" text=\"yestest\"/><Cell col=\"11\" text=\"notest\"/><Cell col=\"12\" text=\"test11\"/><Cell col=\"13\" text=\"test22\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:nocharge\"/><Cell col=\"3\" text=\"bind:todayw\"/><Cell col=\"4\" text=\"bind:sun\"/><Cell col=\"5\" text=\"bind:rain\"/><Cell col=\"6\" text=\"bind:stlStatus\"/><Cell col=\"7\" text=\"bind:stlYN\"/><Cell col=\"8\" text=\"bind:stn\"/><Cell col=\"9\" text=\"bind:nochargeyn\"/><Cell col=\"10\" text=\"bind:yestest\"/><Cell col=\"11\" text=\"bind:notest\"/><Cell col=\"12\" text=\"bind:test11\"/><Cell col=\"13\" text=\"bind:test22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","2507","378","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10) 기본기능 + 그리드컬럼 숨기기/보이기 + 그리드개인화");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09","10","2540","980","281",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsColhide");
            obj.getSetter("griduserproperty").set("colhide,personal");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"nocharge\"/><Cell col=\"3\" text=\"todayw\"/><Cell col=\"4\" text=\"sun\"/><Cell col=\"5\" text=\"rain\"/><Cell col=\"6\" text=\"stlStatus\"/><Cell col=\"7\" text=\"stlYN\"/><Cell col=\"8\" text=\"stn\"/><Cell col=\"9\" text=\"nochargeyn\"/><Cell col=\"10\" text=\"yestest\"/><Cell col=\"11\" text=\"notest\"/><Cell col=\"12\" text=\"test11\"/><Cell col=\"13\" text=\"test22\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:nocharge\"/><Cell col=\"3\" text=\"bind:todayw\"/><Cell col=\"4\" text=\"bind:sun\"/><Cell col=\"5\" text=\"bind:rain\"/><Cell col=\"6\" text=\"bind:stlStatus\"/><Cell col=\"7\" text=\"bind:stlYN\"/><Cell col=\"8\" text=\"bind:stn\"/><Cell col=\"9\" text=\"bind:nochargeyn\"/><Cell col=\"10\" text=\"bind:yestest\"/><Cell col=\"11\" text=\"bind:notest\"/><Cell col=\"12\" text=\"bind:test11\"/><Cell col=\"13\" text=\"bind:test22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","2846","388","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("11) 복잡한 그리드(헤더와 바디가 매칭되지 않는 그리드)사용");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd10","10","2879","980","457",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsUserheader");
            obj.set_autofittype("none");
            obj.getSetter("griduserproperty").set("replace,colhide,userheader");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"텍스트모드\" expandchar=\"comp.textmode\"/><Cell col=\"6\" rowspan=\"2\" text=\"달력\" expandchar=\"comp.calendar\"/><Cell col=\"7\" rowspan=\"2\" text=\"체크박스\" expandchar=\"comp.check\"/><Cell col=\"8\" rowspan=\"2\" text=\"콤보\" expandchar=\"comp.combo\"/><Cell col=\"9\" rowspan=\"4\" colspan=\"2\" text=\"테스트\" expandchar=\"comp.test\"/><Cell row=\"1\" colspan=\"4\" text=\"텍스트\" expandchar=\"comp.text\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"숫자\" expandchar=\"comp.number\"/><Cell row=\"2\" text=\"normal\" calendarweekformat=\"bind:normal\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"text\" calendarweekformat=\"bind:text\"/><Cell row=\"2\" col=\"2\" text=\"editControl\" calendarweekformat=\"bind:editControl\"/><Cell row=\"2\" col=\"3\" rowspan=\"2\" text=\"textArea\" calendarweekformat=\"bind:textArea\"/><Cell row=\"2\" col=\"4\" text=\"maskedit\" calendarweekformat=\"bind:maskEdit\"/><Cell row=\"2\" col=\"5\" rowspan=\"2\" text=\"number\" calendarweekformat=\"bind:number\"/><Cell row=\"2\" col=\"6\" text=\"calendar\" calendarweekformat=\"bind:calendar\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" text=\"checkbox\"/><Cell row=\"2\" col=\"8\" text=\"combo\"/><Cell row=\"3\" text=\"button\" calendarweekformat=\"bind:button\"/><Cell row=\"3\" col=\"2\" text=\"decoText\" calendarweekformat=\"bind:decoText\"/><Cell row=\"3\" col=\"4\" text=\"mask\" calendarweekformat=\"bind:mask\"/><Cell row=\"3\" col=\"6\" text=\"date\" calendarweekformat=\"bind:date\"/><Cell row=\"3\" col=\"8\" text=\"comboText\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:editControl\" displaytype=\"editcontrol\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:textArea\" displaytype=\"textareacontrol\"/><Cell col=\"4\" text=\"bind:maskEdit\" displaytype=\"maskeditcontrol\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" text=\"bind:number\"/><Cell col=\"6\" text=\"bind:calendar\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:check\" displaytype=\"checkboxcontrol\"/><Cell col=\"8\" text=\"bind:combo\" displaytype=\"combocontrol\"/><Cell col=\"9\" text=\"bind:headTest1\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:headTest13\" displaytype=\"editcontrol\"/><Cell row=\"1\" text=\"bind:button\" displaytype=\"buttoncontrol\"/><Cell row=\"1\" col=\"2\" text=\"bind:decoText\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"4\" text=\"bind:mask\" displaytype=\"mask\"/><Cell row=\"1\" col=\"6\" text=\"bind:date\" displaytype=\"date\"/><Cell row=\"1\" col=\"8\" text=\"bind:comboText\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"9\" text=\"bind:headTest12\" displaytype=\"editcontrol\"/><Cell row=\"1\" col=\"10\" text=\"bind:headTest14\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","1507","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("7) 엑셀 export/import");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd11","10","1540","980","272",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!sort,!filter,export,import");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"380\"/><Column size=\"90\"/><Column size=\"103\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사용자아이디\" expandchar=\"user.id\"/><Cell col=\"1\" text=\"사용자 성명\" expandchar=\"user\"/><Cell col=\"2\" text=\"설명\" expandchar=\"description\"/><Cell col=\"3\" text=\"사용여부\" expandchar=\"useflg\"/><Cell col=\"4\" text=\"등록자\" expandchar=\"reguser\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","3361","388","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("12) cell copy and paste");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd12","10","3394","400","301",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("dsCopy");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd13","590","3394","400","301",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("dsPaste");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","420","3394","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("selecttype = cell");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","420","3427","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("selecttype = row");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","420","3460","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("selecttype = multirow");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","420","3493","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("selecttype = area");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","892","1507","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("데이타 초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("grd14","826","360","162","129",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("dsNo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGrid.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 기능
        *  @FileName 	SampleGrid.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */




        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.fnSetMultiLanguage();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 엑셀 임포트 CallBack 함수(선택)
        */
        this.fnImportCallback = function(importId)
        {
        	trace("importId : " + importId + "\n" +this.dsExcel.saveXML());
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 다국어 설정
        */
        this.fnSetMultiLanguage = function ()
        {
        	this.Static00.set_text("1) " + this.gfnGetWord("cmm.checkbox"));//1) 체크박스
        	this.Static01.set_text("2) " + this.gfnGetWord("cmm.no"));		//2) 순번
        	this.Static02.set_text("3) " + this.gfnGetWord("cmm.status"));	//3) 상태

        	this.Static03.set_text("4) " + this.gfnGetWord("sort") +" (ctrl key= multisort)");	//4) 정렬 (ctrl key= multisort)
        	this.Static04.set_text("5) " + this.gfnGetWord("rowfix"));		//5) 행고정
        	this.Static05.set_text("6) " + this.gfnGetWord("colfix"));		//6) 열고정
        	this.Static10.set_text("7) " + this.gfnGetWord("excel") + " export/import");	//7) 엑셀 export/import
        	this.Static06.set_text("8) " + this.gfnGetWord("popup.datafiltersetting"));	//8) 데이터 필터 설정
        	this.Static07.set_text("9) " + this.gfnGetWord("basicfunction") + " + " + this.gfnGetWord("popup.datafindreplace"));	//9) 기본기능 + 데이터 찾기/바꾸기
        	this.Static08.set_text("10) " + this.gfnGetWord("basicfunction") + " + " + this.gfnGetWord("popup.colshwohide") + " + " + this.gfnGetWord("gridpersonal"));	//10) 기본기능 + 그리드컬럼 숨기기/보이기 + 그리드개인화
        	this.Static09.set_text("11) " + this.gfnGetWord("complicatedgrid"));	//11) 복잡한 그리드(헤더와 바디가 매칭되지 않는 그리드)사용
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 상태 [+]버튼 이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	var nRow = this.dsStatus.addRow();
        	this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        };

        /**
         * @description 상태 [-]버튼 이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	var nRow = this.dsStatus.rowposition;
        	this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        };

        /**
         * @description 상태 업데이트표시
        */
        this.dsStatus_oncolumnchanged = function(obj,e)
        {
        	var nRow = e.row;
        	this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_UPDATE);
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("cell");
        	this.grd13.set_selecttype("cell");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("row");
        	this.grd13.set_selecttype("row");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn04_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("multirow");
        	this.grd13.set_selecttype("multirow");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn05_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("area");
        	this.grd13.set_selecttype("area");
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.dsExcel.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.dsStatus.addEventHandler("oncolumnchanged",this.dsStatus_oncolumnchanged,this);
        };
        this.loadIncludeScript("SampleGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
