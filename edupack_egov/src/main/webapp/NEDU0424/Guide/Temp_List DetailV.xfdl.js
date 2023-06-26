(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_ListDetail");
            this.set_titletext("ListDetailV");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"COL_CHK\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"BIRTH_DAY\">19781222</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">CN210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Ted@nexacro.com</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"BIRTH_DAY\">19640204</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">JP020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Diana@nexacro.com</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"BIRTH_DAY\">19720513</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">CN010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Issac@nexacro.com</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"BIRTH_DAY\">19940512</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">CN220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Henry@nexacro.com</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"BIRTH_DAY\">19970926</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">JP130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Dennis@nexacro.com</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"BIRTH_DAY\">19600427</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CN020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Max@nexacro.com</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"BIRTH_DAY\">19691021</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6800</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"BIRTH_DAY\">19700302</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">8600</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"BIRTH_DAY\">19890618</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">7700</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"BIRTH_DAY\">19760227</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lexy</Col><Col id=\"EMPL_ID\">JP040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Lexy@nexacro.com</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"BIRTH_DAY\">19780808</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lucy</Col><Col id=\"EMPL_ID\">JP050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Lucy@nexacro.com</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"BIRTH_DAY\">19770924</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"BIRTH_DAY\">19800206</Col><Col id=\"WEDD_DAY\">20050407</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Juliana</Col><Col id=\"EMPL_ID\">JP110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Juliana@nexacro.com</Col><Col id=\"PHONE_NO\">0108234435</Col><Col id=\"BIRTH_DAY\">19610312</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Maria</Col><Col id=\"EMPL_ID\">JP030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Maria@nexacro.com</Col><Col id=\"PHONE_NO\">0105053225</Col><Col id=\"BIRTH_DAY\">19810531</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Eddy</Col><Col id=\"EMPL_ID\">JP010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Eddy@nexacro.com</Col><Col id=\"PHONE_NO\">0107218351</Col><Col id=\"BIRTH_DAY\">19731019</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Sarah</Col><Col id=\"EMPL_ID\">JP120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Sarah@nexacro.com</Col><Col id=\"PHONE_NO\">0105784137</Col><Col id=\"BIRTH_DAY\">19821130</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"BIRTH_DAY\">19790905</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Noel </Col><Col id=\"EMPL_ID\">CN030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">400</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Noel@nexacro.com</Col><Col id=\"PHONE_NO\">0104794523</Col><Col id=\"BIRTH_DAY\">19970717</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Arnold</Col><Col id=\"EMPL_ID\">CN240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Arnold@nexacro.com</Col><Col id=\"PHONE_NO\">0102255131</Col><Col id=\"BIRTH_DAY\">19920531</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Alex </Col><Col id=\"EMPL_ID\">CN230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Alex@nexacro.com</Col><Col id=\"PHONE_NO\">0106638982</Col><Col id=\"BIRTH_DAY\">19730718</Col><Col id=\"WEDD_DAY\">20010602</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"PHONE_NO\">0109863248</Col><Col id=\"BIRTH_DAY\">19730621</Col><Col id=\"WEDD_DAY\">20090305</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Steven </Col><Col id=\"EMPL_ID\">CN050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Steven@nexacro.com</Col><Col id=\"PHONE_NO\">0103786348</Col><Col id=\"BIRTH_DAY\">19661021</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Donald </Col><Col id=\"EMPL_ID\">JP140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Donald@nexacro.com</Col><Col id=\"PHONE_NO\">0108208010</Col><Col id=\"BIRTH_DAY\">19840814</Col><Col id=\"WEDD_DAY\">20180201</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Ray </Col><Col id=\"EMPL_ID\">CN040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Ray@nexacro.com</Col><Col id=\"PHONE_NO\">0101330259</Col><Col id=\"BIRTH_DAY\">19930402</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div06","10","267",null,"264","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00","119","72","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_01","458","72","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","797","72",null,"38","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_02_01","119","35","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_02","458","35","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","797","35",null,"38","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","0","35","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","0","72","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","339","72","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03","339","35","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static04","678","72","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static06","0","109","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_02","119","109","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static07","339","109","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00","458","109","221","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static08","678","109","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static12","0","0","97","35",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","125","40","154","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("cmb_dept00","464","40","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name","125","77","154","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","463","77","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            obj.set_format("AA-###");
            obj.set_type("string");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","804","77","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("14");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Radio("Radio00","125","114","120","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_visible("true");
            var Div06_form_Radio00_innerdataset = new nexacro.NormalDataset("Div06_form_Radio00_innerdataset", obj);
            Div06_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(Div06_form_Radio00_innerdataset);
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static05","678","35","120","38",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("18");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","804","40","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("19");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_05","119","146",null,"117","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static10","0","146","120","117",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("21");
            obj.set_text("메모");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","152",null,"106","4",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("22");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00","797","109",null,"38","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name01","804","114","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("17");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name00","463","114","163","28",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("16");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static05","10","81","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","116",null,"151","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_scrolltype("none");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"법인\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"입사일자\"/><Cell col=\"6\" text=\"연봉\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CORP_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_corp\" combocodecol=\"CORP_CODE\" combodatacol=\"CORP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:FULL_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarpopupsize=\"156 179\"/><Cell col=\"6\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","8","54","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","54","8","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","156","8","28","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Find");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt01","184","8","162","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","446","8","54","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","500","8","260","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">A</Col></Row><Row><Col id=\"datacolumn\">남자</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">여자</Col><Col id=\"codecolumn\">W</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("화면 유형 - List DetailV");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","530",null,"110","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","35","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_03","119","35","390","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","508","35","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("결혼기념일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","0","72","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("연봉");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_04","119","72","390","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","508","72","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("상여금");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","125","41","250","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","125","77","250","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_format("#,###");
            obj.set_postfixtext("만원");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_03_00","627","35",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_04_00","627","72",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","631","77","250","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_format("#,###");
            obj.set_postfixtext("만원");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","631","41","250","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","0","0","97","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            this.Div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div06.form.cmb_dept","value","ds_emp","CORP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div06.form.cmb_dept00","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div06.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div06.form.MaskEdit00","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div06.form.Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div06.form.edt_name01","value","ds_emp","E_MAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div06.form.edt_name00","value","ds_emp","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div06.form.Radio00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div06.form.TextArea00","value","ds_emp","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div06.form.CheckBox00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Calendar01","value","ds_emp","BIRTH_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.MaskEdit01","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.MaskEdit02","value","ds_emp","BONUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.Calendar02","value","ds_emp","WEDD_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
        };
        this.loadIncludeScript("Temp_List DetailV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
