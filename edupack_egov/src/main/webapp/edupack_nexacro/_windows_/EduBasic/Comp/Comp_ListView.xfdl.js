(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("Comp_ListView");this.set_titletext("Component-ListView");if(Form==this.constructor){this._setFormPosition(1038,650);}_a=new Dataset("ds_emp",this);_a._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"PROFILE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp13.png</Col><Col id=\"COL_CHK\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">01053397552</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp19.png</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"BIRTH_DAY\">19781222</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">CN210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp19.png</Col><Col id=\"E_MAIL\">Ted@nexacro.com</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"BIRTH_DAY\">19640204</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">JP020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp11.png</Col><Col id=\"E_MAIL\">Diana@nexacro.com</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"BIRTH_DAY\">19720513</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">CN010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp10.png</Col><Col id=\"E_MAIL\">Issac@nexacro.com</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"BIRTH_DAY\">19940512</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">CN220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp20.png</Col><Col id=\"E_MAIL\">Henry@nexacro.com</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"BIRTH_DAY\">19970926</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">JP130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp17.png</Col><Col id=\"E_MAIL\">Dennis@nexacro.com</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"BIRTH_DAY\">19600427</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CN020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp11.png</Col><Col id=\"E_MAIL\">Max@nexacro.com</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"BIRTH_DAY\">19691021</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6800</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp11.png</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"BIRTH_DAY\">19700302</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">8600</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp12.png</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"BIRTH_DAY\">19890618</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">7700</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp14.png</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"BIRTH_DAY\">19760227</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lexy</Col><Col id=\"EMPL_ID\">JP040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp13.png</Col><Col id=\"E_MAIL\">Lexy@nexacro.com</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"BIRTH_DAY\">19780808</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lucy</Col><Col id=\"EMPL_ID\">JP050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp14.png</Col><Col id=\"E_MAIL\">Lucy@nexacro.com</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"BIRTH_DAY\">19770924</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp15.png</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"BIRTH_DAY\">19800206</Col><Col id=\"WEDD_DAY\">20050407</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Juliana</Col><Col id=\"EMPL_ID\">JP110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp15.png</Col><Col id=\"E_MAIL\">Juliana@nexacro.com</Col><Col id=\"PHONE_NO\">0108234435</Col><Col id=\"BIRTH_DAY\">19610312</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Maria</Col><Col id=\"EMPL_ID\">JP030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp12.png</Col><Col id=\"E_MAIL\">Maria@nexacro.com</Col><Col id=\"PHONE_NO\">0105053225</Col><Col id=\"BIRTH_DAY\">19810531</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Eddy</Col><Col id=\"EMPL_ID\">JP010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp10.png</Col><Col id=\"E_MAIL\">Eddy@nexacro.com</Col><Col id=\"PHONE_NO\">0107218351</Col><Col id=\"BIRTH_DAY\">19731019</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Sarah</Col><Col id=\"EMPL_ID\">JP120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp16.png</Col><Col id=\"E_MAIL\">Sarah@nexacro.com</Col><Col id=\"PHONE_NO\">01057841372</Col><Col id=\"BIRTH_DAY\">19821130</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp16.png</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"BIRTH_DAY\">19790905</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Noel </Col><Col id=\"EMPL_ID\">CN030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">400</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp12.png</Col><Col id=\"E_MAIL\">Noel@nexacro.com</Col><Col id=\"PHONE_NO\">0104794523</Col><Col id=\"BIRTH_DAY\">19970717</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Arnold</Col><Col id=\"EMPL_ID\">CN240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp10.png</Col><Col id=\"E_MAIL\">Arnold@nexacro.com</Col><Col id=\"PHONE_NO\">0102255131</Col><Col id=\"BIRTH_DAY\">19920531</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Alex </Col><Col id=\"EMPL_ID\">CN230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp14.png</Col><Col id=\"E_MAIL\">Alex@nexacro.com</Col><Col id=\"PHONE_NO\">0106638982</Col><Col id=\"BIRTH_DAY\">19730718</Col><Col id=\"WEDD_DAY\">20010602</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp10.png</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"PHONE_NO\">01098632481</Col><Col id=\"BIRTH_DAY\">19730621</Col><Col id=\"WEDD_DAY\">20090305</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Steven </Col><Col id=\"EMPL_ID\">CN050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp14.png</Col><Col id=\"E_MAIL\">Steven@nexacro.com</Col><Col id=\"PHONE_NO\">0103786348</Col><Col id=\"BIRTH_DAY\">19661021</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Donald </Col><Col id=\"EMPL_ID\">JP140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"PROFILE\">imagerc::img_emp18.png</Col><Col id=\"E_MAIL\">Donald@nexacro.com</Col><Col id=\"PHONE_NO\">0108208010</Col><Col id=\"BIRTH_DAY\">19840814</Col><Col id=\"WEDD_DAY\">20180201</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Ray </Col><Col id=\"EMPL_ID\">CN040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"PROFILE\">imagerc::img_emp13.png</Col><Col id=\"E_MAIL\">Ray@nexacro.com</Col><Col id=\"PHONE_NO\">0101330259</Col><Col id=\"BIRTH_DAY\">19930402</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text(" Default");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new ListView("ListView00","10","73",null,"281","10",null,null,null,null,null,this);_a.set_taborder("1");_a.set_binddataset("ds_emp");_a.set_bandinitstatus("collapse");_a.set_enableevent("false");_a.set_scrollbarincbuttonsize("0");_a.set_scrollbardecbuttonsize("0");_a._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"40\" expandbartype=\"true\" expandbarsize=\"30 17\"><Cell id=\"Cell01\" left=\"5\" top=\"0\" width=\"155\" height=\"40\" text=\"bind:FULL_NAME\" cssclass=\"lstv_WF_BdyCName\"/><Cell id=\"Cell05\" left=\"303\" top=\"0\" width=\"76\" height=\"40\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\" cssclass=\"lstV_bdcell_Gender\"/><Cell id=\"Cell04\" left=\"Cell05:-6\" top=\"0\" width=\"23\" height=\"40\" border=\"0px none #ffffff\" text=\"|\" font=\"25px Gulim\"/><Cell id=\"Cell00\" left=\"Cell04:3\" top=\"0\" width=\"127\" height=\"40\" text=\"bind:PHONE_NO\" displaytype=\"mask\" maskeditformat=\"expr:PHONE_NO.length == &quot;10&quot; ? &quot;###-###-####&quot; : &quot;###-####-####&quot;\" maskedittype=\"string\" cssclass=\"lstV_bdcell_Gender\"/><Cell id=\"Cell06\" left=\"Cell00:3\" top=\"0\" width=\"23\" height=\"40\" border=\"0px none #ffffff\" text=\"|\" font=\"25px Gulim\"/><Cell id=\"Cell02\" left=\"Cell06:3\" top=\"0\" width=\"179\" height=\"40\" text=\"bind:E_MAIL\" border=\"0px none #ffffff\" cssclass=\"lstV_bdcell_Gender\"/><Cell id=\"Cell03\" left=\"155\" top=\"0\" width=\"125\" height=\"40\" text=\"bind:EMPL_ID\" cssclass=\"lstv_WF_BdyCId\"/><Cell id=\"Cell07\" left=\"265\" top=\"0\" width=\"36\" height=\"40\" displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_gender_m.png&quot; : &quot;imagerc::img_gender_w.png&quot;\"/></Band><Band id=\"detail\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20\" top=\"0\" width=\"177\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\"/><Cell id=\"Cell02\" left=\"218\" top=\"5\" width=\"119\" height=\"35\" text=\"Name\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell03\" left=\"218\" top=\"50\" width=\"119\" height=\"35\" text=\"Salary\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell04\" left=\"218\" top=\"95\" width=\"119\" height=\"35\" text=\"Bonus\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell05\" left=\"218\" top=\"140\" width=\"119\" height=\"35\" text=\"Hire Date\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell06\" left=\"355\" top=\"5\" width=\"232\" height=\"35\" text=\"bind:FULL_NAME\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell07\" left=\"355\" top=\"50\" width=\"232\" height=\"35\" text=\"bind:SALARY\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell08\" left=\"355\" top=\"95\" width=\"232\" height=\"35\" text=\"bind:BONUS\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell09\" left=\"355\" top=\"140\" width=\"232\" height=\"35\" text=\"bind:HIRE_DATE\" cssclass=\"lstv_WF_DtailCValue\"/></Band></Format><Format id=\"format1\"><Band id=\"body\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20\" top=\"0\" width=\"177\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/><Cell id=\"Cell01\" left=\"676\" top=\"127\" width=\"88\" displaytype=\"buttoncontrol\" edittype=\"button\" height=\"50\" text=\"상세팝업\" border=\"0px none #dbdee2\"/><Cell id=\"Cell02\" left=\"218\" top=\"6\" width=\"119\" height=\"39\" text=\"성명\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell03\" left=\"218\" top=\"50\" width=\"119\" height=\"39\" text=\"부서\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell04\" left=\"218\" top=\"94\" width=\"119\" height=\"39\" text=\"직급\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell05\" left=\"218\" top=\"138\" width=\"119\" height=\"39\" text=\"입사일자\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell06\" left=\"355\" top=\"6\" width=\"232\" height=\"39\" text=\"bind:FULL_NAME\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\" textAlign=\"left\"/><Cell id=\"Cell07\" left=\"355\" top=\"50\" width=\"232\" height=\"39\" text=\"개발팀\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\" textAlign=\"left\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell id=\"Cell08\" left=\"355\" top=\"94\" width=\"232\" height=\"39\" text=\"수석 연구원\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\" textAlign=\"left\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell id=\"Cell09\" left=\"355\" top=\"138\" width=\"232\" height=\"39\" text=\"bind:HIRE_DATE\" border=\"0px none #dbdee2\" font=\"normal bold 18px/normal &quot;Gulim&quot;\" textAlign=\"left\"/></Band></Format><Format id=\"format2\"><Band id=\"body\" width=\"33%\" height=\"180\"><Cell id=\"Cell00\" left=\"30\" top=\"0\" width=\"196\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/></Band><Band id=\"detail\" width=\"33%\" height=\"180\"><Cell id=\"Cell02\" left=\"8\" top=\"6\" width=\"82\" height=\"39\" text=\"성명\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell03\" left=\"8\" top=\"50\" width=\"82\" height=\"39\" text=\"부서\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell04\" left=\"8\" top=\"94\" width=\"82\" height=\"39\" text=\"직급\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell05\" left=\"8\" top=\"138\" width=\"82\" height=\"39\" text=\"입사일자\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell06\" left=\"104\" top=\"6\" width=\"129\" height=\"39\" text=\"bind:FULL_NAME\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\" textAlign=\"left\"/><Cell id=\"Cell07\" left=\"104\" top=\"50\" width=\"129\" height=\"39\" text=\"회계팀\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\" textAlign=\"left\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell id=\"Cell08\" left=\"104\" top=\"94\" width=\"129\" height=\"39\" text=\"선임 연구원\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\" textAlign=\"left\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell id=\"Cell09\" left=\"104\" top=\"138\" width=\"129\" height=\"39\" text=\"bind:HIRE_DATE\" border=\"0px none #dbdee2\" font=\"normal bold 16px/normal &quot;Gulim&quot;\" textAlign=\"left\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","10","396","250","28",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text(" Base Properties");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static03","20","429","163","28",null,null,null,null,null,null,this);_a.set_taborder("3");_a.set_text("bandexpandtype");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Static("Static01","20","495","113","28",null,null,null,null,null,null,this);_a.set_taborder("4");_a.set_text("bandinitstatus");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_bandexpandtype","30","462","345","28",null,null,null,null,null,null,this);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _b=new nexacro.NormalDataset("rdo_bandexpandtype_innerdataset",_a);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">expand</Col><Col id=\"datacolumn\">expand</Col></Row><Row><Col id=\"codecolumn\">accordion</Col><Col id=\"datacolumn\">accordion</Col></Row><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">popup</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_text("expand");_a.set_value("expand");_a.set_index("1");this.addChild(_a.name,_a);_a=new Radio("rdo_bandinitstatus","30","528","195","28",null,null,null,null,null,null,this);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _c=new nexacro.NormalDataset("rdo_bandinitstatus_innerdataset",_a);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">expand</Col><Col id=\"datacolumn\">expand</Col></Row><Row><Col id=\"codecolumn\">collapse</Col><Col id=\"datacolumn\">collapse</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_text("collapse");_a.set_value("collapse");_a.set_index("1");this.addChild(_a.name,_a);_a=new Static("Static02","20","561","263","28",null,null,null,null,null,null,this);_a.set_taborder("7");_a.set_text("No Data Text (Prop. nodatatext)");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Edit("edt_noData","30","594","160","28",null,null,null,null,null,null,this);_a.set_taborder("8");_a.set_value("No Data...");this.addChild(_a.name,_a);_a=new Button("btn_apply","195","594","78","28",null,null,null,null,null,null,this);_a.set_taborder("9");_a.set_text("Apply");this.addChild(_a.name,_a);_a=new Button("btn_reset","278","594","78","28",null,null,null,null,null,null,this);_a.set_taborder("10");_a.set_text("reset");this.addChild(_a.name,_a);_a=new ListView("ListView01","10","73",null,"362","10",null,null,null,null,null,this);_a.set_taborder("11");_a.set_binddataset("ds_emp");_a.set_bandinitstatus("collapse");_a.set_autoupdatetype("comboselect");_a.set_cellcombopopuptype("center");_a.set_positionstep("1");_a.set_scrollbarincbuttonsize("0");_a.set_scrollbardecbuttonsize("0");_a._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"40\" expandbartype=\"true\" expandbarsize=\"30 17\"><Cell id=\"Cell01\" left=\"5\" top=\"0\" width=\"155\" height=\"40\" text=\"bind:FULL_NAME\" cssclass=\"lstv_WF_BdyCName\"/><Cell id=\"Cell03\" left=\"155\" top=\"0\" width=\"125\" height=\"40\" text=\"bind:EMPL_ID\" cssclass=\"lstv_WF_BdyCId\"/><Cell id=\"Cell05\" left=\"303\" top=\"0\" width=\"76\" height=\"40\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\" border=\"0px none #ffffff\" font=\"normal bold 15px/normal &quot;Gulim&quot;\"/><Cell id=\"Cell04\" left=\"Cell05:-6\" top=\"0\" width=\"23\" height=\"40\" border=\"0px none #ffffff\" text=\"|\" font=\"25px Gulim\"/><Cell id=\"Cell00\" left=\"Cell04:3\" top=\"0\" width=\"127\" height=\"40\" text=\"bind:PHONE_NO\" displaytype=\"mask\" maskeditformat=\"expr:PHONE_NO.length == &quot;10&quot; ? &quot;###-###-####&quot; : &quot;###-####-####&quot;\" maskedittype=\"string\" cssclass=\"lstV_bdcell_Gender\"/><Cell id=\"Cell06\" left=\"Cell00:3\" top=\"0\" width=\"23\" height=\"40\" border=\"0px none #ffffff\" text=\"|\" font=\"25px Gulim\"/><Cell id=\"Cell02\" left=\"Cell06:3\" top=\"0\" width=\"179\" height=\"40\" text=\"bind:E_MAIL\" cssclass=\"lstV_bdcell_Gender\"/><Cell id=\"Cell07\" left=\"264\" top=\"0\" width=\"36\" height=\"40\" displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_gender_m.png&quot; : &quot;imagerc::img_gender_w.png&quot;\" border=\"0px none\"/></Band><Band id=\"detail\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20\" top=\"0\" width=\"177\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\"/><Cell id=\"Cell02\" left=\"218\" top=\"5\" width=\"119\" height=\"35\" text=\"Name\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell03\" left=\"218\" top=\"47\" width=\"119\" height=\"39\" text=\"Salary\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell04\" left=\"218\" top=\"93\" width=\"119\" height=\"39\" text=\"Bonus\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell05\" left=\"218\" top=\"139\" width=\"119\" height=\"35\" text=\"Hire Date\" cssclass=\"lstv_WF_DtailCLabel\"/><Cell id=\"Cell06\" left=\"355\" top=\"5\" width=\"232\" height=\"35\" text=\"bind:FULL_NAME\" textAlign=\"left\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell07\" left=\"355\" top=\"49\" width=\"232\" height=\"35\" textAlign=\"left\" text=\"bind:SALARY\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell08\" left=\"355\" top=\"93\" width=\"232\" height=\"35\" text=\"bind:BONUS\" textAlign=\"left\" cssclass=\"lstv_WF_DtailCValue\"/><Cell id=\"Cell09\" left=\"355\" top=\"137\" width=\"232\" height=\"35\" text=\"bind:HIRE_DATE\" textAlign=\"left\" cssclass=\"lstv_WF_DtailCValue\"/></Band></Format><Format id=\"format1\"><Band id=\"body\" width=\"100%\" height=\"180\" cssclass=\"lstV_bd_format1\"><Cell id=\"Cell00\" left=\"20\" top=\"0\" width=\"177\" height=\"180\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/><Cell id=\"Cell06\" left=\"355\" top=\"5\" width=\"232\" height=\"35\" text=\"bind:FULL_NAME\" cssclass=\"lstV_bdcell_value\"/><Cell id=\"Cell07\" left=\"355\" top=\"49\" width=\"232\" height=\"35\" text=\"bind:SALARY\" cssclass=\"lstV_bdcell_value\"/><Cell id=\"Cell08\" left=\"355\" top=\"93\" width=\"232\" height=\"35\" text=\"bind:BONUS\" cssclass=\"lstV_bdcell_value\"/><Cell id=\"Cell09\" left=\"355\" top=\"137\" width=\"232\" height=\"35\" text=\"bind:HIRE_DATE\" cssclass=\"lstV_bdcell_value\"/><Cell id=\"Cell02\" left=\"218\" top=\"5\" width=\"119\" height=\"35\" text=\"Name\" cssclass=\"lstV_dtcell_label\"/><Cell id=\"Cell03\" left=\"218\" top=\"47\" width=\"119\" height=\"39\" text=\"Salary\" cssclass=\"lstV_dtcell_label\"/><Cell id=\"Cell04\" left=\"218\" top=\"93\" width=\"119\" height=\"39\" text=\"Bonus\" cssclass=\"lstV_dtcell_label\"/><Cell id=\"Cell05\" left=\"218\" top=\"139\" width=\"119\" height=\"35\" text=\"Hire Date\" cssclass=\"lstV_dtcell_label\"/></Band></Format><Format id=\"format2\"><Band id=\"body\" width=\"33.3%\" height=\"180\" cssclass=\"lstV_bd_format2\"><Cell id=\"Cell00\" left=\"30\" top=\"0\" width=\"196\" height=\"130\" displaytype=\"imagecontrol\" text=\"bind:PROFILE\" border=\"0px none #dbdee2\"/><Cell id=\"Cell01\" left=\"28\" top=\"127\" width=\"196\" bottom=\"0\" text=\"bind:FULL_NAME\" textAlign=\"center\" cssclass=\"lstV_bdcell_Name\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_format","105","40","72","28",null,null,null,null,null,null,this);_a.set_taborder("12");_a.set_text("default");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_default","182","40","72","28",null,null,null,null,null,null,this);_a.set_taborder("13");_a.set_text("format1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Button("btn_default00","259","40","73","28",null,null,null,null,null,null,this);_a.set_taborder("14");_a.set_text("format2");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static04","10","40","90","28",null,null,null,null,null,null,this);_a.set_taborder("15");_a.set_text(" Format");_a.set_cssclass("sta_WF_TitleType1");_a.set_positionstep("1");this.addChild(_a.name,_a);_a=new Static("Static06","500","396","250","28",null,null,null,null,null,null,this);_a.set_taborder("16");_a.set_text(" Body Expand");_a.set_cssclass("sta_WF_TitleType1");this.addChild(_a.name,_a);_a=new Static("Static09","520","429","112","28",null,null,null,null,null,null,this);_a.set_taborder("17");_a.set_text("expandbartype");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Radio("rdo_expandbartype","650","429","204","28",null,null,null,null,null,null,this);_a.set_taborder("18");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_rowcount("-1");_a.set_enable("true");_a.set_columncount("-1");var _d=new nexacro.NormalDataset("rdo_expandbartype_innerdataset",_a);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_text("true");_a.set_value("true");_a.set_index("0");this.addChild(_a.name,_a);_a=new Static("Static10","520","462","112","28",null,null,null,null,null,null,this);_a.set_taborder("19");_a.set_text("expandbarsize");_a.set_cssclass("sta_WF_LabelTxt12");this.addChild(_a.name,_a);_a=new Button("btn_apply00","630","495","78","28",null,null,null,null,null,null,this);_a.set_taborder("20");_a.set_text("Apply");this.addChild(_a.name,_a);_a=new Button("btn_reset00","713","495","78","28",null,null,null,null,null,null,this);_a.set_taborder("21");_a.set_text("reset");this.addChild(_a.name,_a);_a=new Edit("edt_expandbarsize","520","495","105","28",null,null,null,null,null,null,this);_a.set_taborder("22");_a.set_value("40 30");_a.set_text("40 30");this.addChild(_a.name,_a);_a=new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);_a.set_taborder("23");_a.set_text("ListView");_a.set_cssclass("sta_WF_TitleMain");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Layout("default","",1038,650,this,function(_e){});_a.set_mobileorientation("landscape");_a.set_stepcount("2");this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("Comp_ListView.xfdl",function(){this.rdo_bandexpandtype_onitemchanged=function(_a,_b){this.ListView00.set_bandexpandtype(_b.postvalue);};this.rdo_bandinitstatus_onitemchanged=function(_a,_b){this.ListView00.set_bandinitstatus(_b.postvalue);};this.btn_apply_onclick=function(_a,_b){this.ds_emp.deleteAll();this.ListView00.set_nodatatext(this.edt_noData.value);};this.btn_reset_onclick=function(_a,_b){this.ds_emp.reset();};this.rdo_expandbartype_onitemchanged=function(_a,_b){this.ListView00.setBandProperty("body","expandbartype",_b.postvalue);};this.btn_apply00_onclick=function(_a,_b){this.ListView00.setBandProperty("body","expandbarsize",this.edt_expandbarsize.text);};this.btn_reset00_onclick=function(_a,_b){this.ListView00.setBandProperty("body","expandbarsize","17 17");};this.btn_format_onclick=function(_a,_b){this.ListView01.set_formatid(_a.text);};});this.on_initEvent=function(){this.rdo_bandexpandtype.addEventHandler("onitemchanged",this.rdo_bandexpandtype_onitemchanged,this);this.rdo_bandinitstatus.addEventHandler("onitemchanged",this.rdo_bandinitstatus_onitemchanged,this);this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);this.btn_format.addEventHandler("onclick",this.btn_format_onclick,this);this.btn_default.addEventHandler("onclick",this.btn_format_onclick,this);this.btn_default00.addEventHandler("onclick",this.btn_format_onclick,this);this.rdo_expandbartype.addEventHandler("onitemchanged",this.rdo_expandbartype_onitemchanged,this);this.btn_apply00.addEventHandler("onclick",this.btn_apply00_onclick,this);this.btn_reset00.addEventHandler("onclick",this.btn_reset00_onclick,this);this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);};this.loadIncludeScript("Comp_ListView.xfdl");this.loadPreloadList();_a=null;};})();