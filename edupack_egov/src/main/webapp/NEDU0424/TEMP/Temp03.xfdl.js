(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"COL_CHK\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"BIRTH_DAY\">19781222</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">CN210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Ted@nexacro.com</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"BIRTH_DAY\">19640204</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">JP020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Diana@nexacro.com</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"BIRTH_DAY\">19720513</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">CN010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Issac@nexacro.com</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"BIRTH_DAY\">19940512</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">CN220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Henry@nexacro.com</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"BIRTH_DAY\">19970926</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">JP130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Dennis@nexacro.com</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"BIRTH_DAY\">19600427</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CN020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Max@nexacro.com</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"BIRTH_DAY\">19691021</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6800</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"BIRTH_DAY\">19700302</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">8600</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"BIRTH_DAY\">19890618</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">7700</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"BIRTH_DAY\">19760227</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lexy</Col><Col id=\"EMPL_ID\">JP040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Lexy@nexacro.com</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"BIRTH_DAY\">19780808</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lucy</Col><Col id=\"EMPL_ID\">JP050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Lucy@nexacro.com</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"BIRTH_DAY\">19770924</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"BIRTH_DAY\">19800206</Col><Col id=\"WEDD_DAY\">20050407</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Juliana</Col><Col id=\"EMPL_ID\">JP110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Juliana@nexacro.com</Col><Col id=\"PHONE_NO\">0108234435</Col><Col id=\"BIRTH_DAY\">19610312</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Maria</Col><Col id=\"EMPL_ID\">JP030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Maria@nexacro.com</Col><Col id=\"PHONE_NO\">0105053225</Col><Col id=\"BIRTH_DAY\">19810531</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Eddy</Col><Col id=\"EMPL_ID\">JP010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Eddy@nexacro.com</Col><Col id=\"PHONE_NO\">0107218351</Col><Col id=\"BIRTH_DAY\">19731019</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Sarah</Col><Col id=\"EMPL_ID\">JP120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Sarah@nexacro.com</Col><Col id=\"PHONE_NO\">0105784137</Col><Col id=\"BIRTH_DAY\">19821130</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"BIRTH_DAY\">19790905</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Noel </Col><Col id=\"EMPL_ID\">CN030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">400</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Noel@nexacro.com</Col><Col id=\"PHONE_NO\">0104794523</Col><Col id=\"BIRTH_DAY\">19970717</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Arnold</Col><Col id=\"EMPL_ID\">CN240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Arnold@nexacro.com</Col><Col id=\"PHONE_NO\">0102255131</Col><Col id=\"BIRTH_DAY\">19920531</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Alex </Col><Col id=\"EMPL_ID\">CN230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Alex@nexacro.com</Col><Col id=\"PHONE_NO\">0106638982</Col><Col id=\"BIRTH_DAY\">19730718</Col><Col id=\"WEDD_DAY\">20010602</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"PHONE_NO\">0109863248</Col><Col id=\"BIRTH_DAY\">19730621</Col><Col id=\"WEDD_DAY\">20090305</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Steven </Col><Col id=\"EMPL_ID\">CN050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Steven@nexacro.com</Col><Col id=\"PHONE_NO\">0103786348</Col><Col id=\"BIRTH_DAY\">19661021</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Donald </Col><Col id=\"EMPL_ID\">JP140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Donald@nexacro.com</Col><Col id=\"PHONE_NO\">0108208010</Col><Col id=\"BIRTH_DAY\">19840814</Col><Col id=\"WEDD_DAY\">20180201</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Ray </Col><Col id=\"EMPL_ID\">CN040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Ray@nexacro.com</Col><Col id=\"PHONE_NO\">0101330259</Col><Col id=\"BIRTH_DAY\">19930402</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","348","8","78","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("그룹명칭");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","7","8","78","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","81","8","167","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","426","8","167","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","693","8","78","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","771","8","167","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"0","140","35","438",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","10","650","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,null,"140","10","438","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01",null,null,"140","10","708","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"81","140","35","688",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","180","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("화면 유형 - List Detail List");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","10","81","177","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","116","340",null,null,"10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"CORP_CODE\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"FULL_NAME\"/><Cell col=\"4\" text=\"EMPL_ID\"/><Cell col=\"5\" text=\"POS_CODE\"/><Cell col=\"6\" text=\"HIRE_DATE\"/><Cell col=\"7\" text=\"SALARY\"/><Cell col=\"8\" text=\"BONUS\"/><Cell col=\"9\" text=\"GENDER\"/><Cell col=\"10\" text=\"PHONE_NO\"/><Cell col=\"11\" text=\"E_MAIL\"/><Cell col=\"12\" text=\"BIRTH_DAY\"/><Cell col=\"13\" text=\"MARRIED\"/><Cell col=\"14\" text=\"WEDD_DAY\"/><Cell col=\"15\" text=\"IMG_URL\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:POS_CODE\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\"/><Cell col=\"7\" text=\"bind:SALARY\"/><Cell col=\"8\" text=\"bind:BONUS\"/><Cell col=\"9\" text=\"bind:GENDER\"/><Cell col=\"10\" text=\"bind:PHONE_NO\"/><Cell col=\"11\" text=\"bind:E_MAIL\"/><Cell col=\"12\" text=\"bind:BIRTH_DAY\"/><Cell col=\"13\" text=\"bind:MARRIED\"/><Cell col=\"14\" text=\"bind:WEDD_DAY\"/><Cell col=\"15\" text=\"bind:IMG_URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","360","336",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"CORP_CODE\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"FULL_NAME\"/><Cell col=\"4\" text=\"EMPL_ID\"/><Cell col=\"5\" text=\"POS_CODE\"/><Cell col=\"6\" text=\"HIRE_DATE\"/><Cell col=\"7\" text=\"SALARY\"/><Cell col=\"8\" text=\"BONUS\"/><Cell col=\"9\" text=\"GENDER\"/><Cell col=\"10\" text=\"PHONE_NO\"/><Cell col=\"11\" text=\"E_MAIL\"/><Cell col=\"12\" text=\"BIRTH_DAY\"/><Cell col=\"13\" text=\"MARRIED\"/><Cell col=\"14\" text=\"WEDD_DAY\"/><Cell col=\"15\" text=\"IMG_URL\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:CORP_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:POS_CODE\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\"/><Cell col=\"7\" text=\"bind:SALARY\"/><Cell col=\"8\" text=\"bind:BONUS\"/><Cell col=\"9\" text=\"bind:GENDER\"/><Cell col=\"10\" text=\"bind:PHONE_NO\"/><Cell col=\"11\" text=\"bind:E_MAIL\"/><Cell col=\"12\" text=\"bind:BIRTH_DAY\"/><Cell col=\"13\" text=\"bind:MARRIED\"/><Cell col=\"14\" text=\"bind:WEDD_DAY\"/><Cell col=\"15\" text=\"bind:IMG_URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","360","116",null,"185","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-2","-1","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","-2","36","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("간략설명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","-2","73","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("입력일시");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","-2","110","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","-2","147","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","118","-1","215","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","118","36",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_01","118","73","215","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02","118","110","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_03","118","147",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","333","73","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","453","73","215","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","333","110","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","453","110","215","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","333","-1","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("그룹명칭");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","453","-1","215","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","127","6","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_format("####");
            obj.set_type("string");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","44","520","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_value("management");
            obj.set_text("management");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","464","5","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","127","79","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","127","119","185","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","464","77","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","464","119","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","127","151","183","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00",null,"81","140","35","308",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","350","170","10","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("W10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","371","81","177","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","-2","186","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00",null,"301","140","35","284",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("h35");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","371","300","177","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.registerScript("Temp03.xfdl", function() {

        this.Static00_00_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Static00_00_00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Temp03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
