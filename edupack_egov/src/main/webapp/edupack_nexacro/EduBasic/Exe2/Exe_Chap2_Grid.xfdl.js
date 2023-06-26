(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Chap2_Grid");
            this.set_titletext("Exe_Chap2_Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset2", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset4", this);
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"WEDD_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_NAME\">nexacro</Col><Col id=\"ORG_CODE\">NP</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"ORG_NAME\">Korea Corporation</Col><Col id=\"ORG_CODE\">KR</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"ORG_NAME\">Joseph</Col><Col id=\"ORG_CODE\">KR000</Col><Col id=\"LEVEL\">2</Col><Col id=\"POSITION\">Chairman</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"E_MAIL\">Joseph@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Management Group</Col><Col id=\"ORG_CODE\">KR1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"ORG_NAME\">Anne</Col><Col id=\"ORG_CODE\">KR010</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Division Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"E_MAIL\">Anne@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"ORG_NAME\">Education Team</Col><Col id=\"ORG_CODE\">KR11</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">John </Col><Col id=\"ORG_CODE\">KR101</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"ORG_NAME\">Jackson</Col><Col id=\"ORG_CODE\">KR102</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"ORG_NAME\">Adam</Col><Col id=\"ORG_CODE\">KR103</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Melon</Col><Col id=\"ORG_CODE\">KR104</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Kate </Col><Col id=\"ORG_CODE\">KR105</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Sales Team</Col><Col id=\"ORG_CODE\">KR12</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">Bts</Col><Col id=\"ORG_CODE\">KR106</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Andrew </Col><Col id=\"ORG_CODE\">KR107</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Belle</Col><Col id=\"ORG_CODE\">KR108</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"ORG_NAME\">Elsa</Col><Col id=\"ORG_CODE\">KR109</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"E_MAIL\">Ann@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"ORG_NAME\">Marketing Team</Col><Col id=\"ORG_CODE\">KR13</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"E_MAIL\">Lyle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"ORG_NAME\">Kein </Col><Col id=\"ORG_CODE\">KR111</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Ivy</Col><Col id=\"ORG_CODE\">KR112</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Kara</Col><Col id=\"ORG_CODE\">KR113</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050203</Col></Row><Row><Col id=\"ORG_NAME\">Twice</Col><Col id=\"ORG_CODE\">KR114</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Japen Corporation</Col><Col id=\"ORG_CODE\">JP</Col><Col id=\"LEVEL\">1</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Isaiah@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Oleg</Col><Col id=\"ORG_CODE\">JP000</Col><Col id=\"LEVEL\">2</Col><Col id=\"POSITION\">Chairman</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"E_MAIL\">Oleg@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Management Group</Col><Col id=\"ORG_CODE\">JP1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"ORG_NAME\">Aladdin</Col><Col id=\"ORG_CODE\">JP010</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Division Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"E_MAIL\">Aladdin@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"ORG_NAME\">Education Team</Col><Col id=\"ORG_CODE\">JP11</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"E_MAIL\">Evelyn@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880623</Col></Row><Row><Col id=\"ORG_NAME\">Cameron</Col><Col id=\"ORG_CODE\">JP101</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"E_MAIL\">Cameron@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"ORG_NAME\">Duncan</Col><Col id=\"ORG_CODE\">JP102</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"E_MAIL\">Duncan@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"ORG_NAME\">September</Col><Col id=\"ORG_CODE\">JP103</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"E_MAIL\">September@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Daquan</Col><Col id=\"ORG_CODE\">JP104</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"E_MAIL\">Daquan@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Channing</Col><Col id=\"ORG_CODE\">JP105</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"E_MAIL\">Channing@nexacro.com</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"ORG_NAME\">Sales Team</Col><Col id=\"ORG_CODE\">JP12</Col><Col id=\"LEVEL\">3</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"E_MAIL\">Lenore@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"ORG_NAME\">Curran</Col><Col id=\"ORG_CODE\">JP106</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"E_MAIL\">Curran@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"ORG_NAME\">Idona</Col><Col id=\"ORG_CODE\">JP107</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"E_MAIL\">Idona@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">20150531</Col></Row><Row><Col id=\"ORG_NAME\">Sopoline</Col><Col id=\"ORG_CODE\">JP108</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"E_MAIL\">Sopoline@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"ORG_NAME\">Cedric</Col><Col id=\"ORG_CODE\">JP109</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">7000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"E_MAIL\">Cedric@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"ORG_NAME\">Lyle</Col><Col id=\"ORG_CODE\">JP110</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Supervisor</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"E_MAIL\">Lyle@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"ORG_NAME\">Marketing Team</Col><Col id=\"ORG_CODE\">JP13</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"ORG_NAME\">Adam</Col><Col id=\"ORG_CODE\">JP111</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"E_MAIL\">Adam@nexacro.com</Col><Col id=\"MARRIED\">0</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"ORG_NAME\">Hyatt</Col><Col id=\"ORG_CODE\">JP112</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Department Manager</Col><Col id=\"SALARY\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"E_MAIL\">Hyatt@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"ORG_NAME\">Melanie</Col><Col id=\"ORG_CODE\">JP113</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"E_MAIL\">Melanie@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050203</Col></Row><Row><Col id=\"ORG_NAME\">Isaiah</Col><Col id=\"ORG_CODE\">JP114</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Assistant Manager</Col><Col id=\"SALARY\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"E_MAIL\">Isaiah@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"ORG_NAME\">Dakota</Col><Col id=\"ORG_CODE\">JP115</Col><Col id=\"LEVEL\">4</Col><Col id=\"POSITION\">Officer</Col><Col id=\"SALARY\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"E_MAIL\">Dakota@nexacro.com</Col><Col id=\"MARRIED\">1</Col><Col id=\"WEDD_DAY\">20050407</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp10.png</Col><Col id=\"PHONE_NO\">0104293599</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp11.png</Col><Col id=\"PHONE_NO\">0107726763</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp12.png</Col><Col id=\"PHONE_NO\">0107314011</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp13.png</Col><Col id=\"PHONE_NO\">0109086335</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp14.png</Col><Col id=\"PHONE_NO\">0102320795</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp15.png</Col><Col id=\"PHONE_NO\">0106348086</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp16.png</Col><Col id=\"PHONE_NO\">0101251107</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp17.png</Col><Col id=\"PHONE_NO\">0104457429</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp18.png</Col><Col id=\"PHONE_NO\">0109825316</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp19.png</Col><Col id=\"PHONE_NO\">0103173402</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp20.png</Col><Col id=\"PHONE_NO\">0104643738</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp14.png</Col><Col id=\"PHONE_NO\">0102989094</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Ann@nexacro.com</Col><Col id=\"IMG_URL\">Exe::img_emp10.png</Col><Col id=\"PHONE_NO\">0107956572</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">K</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">K</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">K</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset5", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"BONUS\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Adam</Col><Col id=\"ID\">KR103</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Melon</Col><Col id=\"ID\">KR104</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kara</Col><Col id=\"ID\">KR112</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\">4000</Col><Col id=\"BONUS\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset6", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset7", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset8", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">10</Col></Row><Row><Col id=\"Column4\">20</Col></Row><Row><Col id=\"Column4\">30</Col></Row><Row><Col id=\"Column4\">40</Col></Row><Row><Col id=\"Column4\">50</Col></Row><Row><Col id=\"Column4\">60</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exe 1 - Grid1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1","10","70","490","193",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","10","70","980","235",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"139\"/><Column size=\"155\"/><Column size=\"99\"/><Column size=\"143\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"135\"/><Column size=\"192\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Dept\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"Date\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Bonus\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Phone No\"/><Cell col=\"10\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:BONUS\"/><Cell col=\"7\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:PHONE_NO\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1_1","510","70","480","193",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"125\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" rowspan=\"2\" text=\"MARRIED\"/><Cell row=\"1\" text=\"NAME\"/><Cell row=\"1\" col=\"1\" text=\"HIRE DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" text=\"bind:FULL_NAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","510","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Exe 1 - Grid1_1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","273","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_3","10","313","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1_3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","363","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Exe 2 - Grid2");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid2","10","393",null,"162","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","569","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","609","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe 3 - Grid3");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","10","313","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("3_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_2","10","353","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","10","393","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_4","510","313","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","510","353","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_6","510","393","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3_6");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3_1","10","433","480","230",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"/><Format id=\"format00\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3_2","510","433","480","230",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Exe 4 - Grid4");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid4","10","70",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("Dataset4");
            obj.set_positionstep("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"251\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"131\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ORG_NAME\"/><Cell col=\"1\" text=\"POSITION\"/><Cell col=\"2\" text=\"GENDER\"/><Cell col=\"3\" text=\"PHONE_NO\"/><Cell col=\"4\" text=\"E_MAIL\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\"/><Cell col=\"1\" text=\"bind:POSITION\"/><Cell col=\"2\" text=\"bind:GENDER\"/><Cell col=\"3\" text=\"bind:PHONE_NO\"/><Cell col=\"4\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Exe 5 - Grid5");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_1","10","528","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5_1");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_2","10","568","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5_2");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid5","10","70",null,"448","10",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("3");
            obj.set_binddataset("Dataset5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"CORP\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"getRowLevel\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowLevel(currow) == 2 ? CORP + &quot; Sum&quot; : CORP)\"/><Cell col=\"1\" text=\"expr:(dataset.getRowLevel(currow) == 0 ? DEPT : (dataset.getRowLevel(currow) == 1 ? DEPT + &quot; Sum&quot; : &quot;&quot;))\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_3","10","608","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("5_3");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","273","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Grid1과 Grid1_1의 Body 밴드 Column과 Cell의 개수. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","80","313","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Cell에 바인드 되어있는 Dataset 컬럼 ID 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","80","569","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Dataset2에 “COL_CHK” 컬럼을 추가하고 초기값을 “0”으로 지정.  \r\nGrid2의 맨 앞쪽에 빈 컬럼을 추가하고 생성한 Dataset컬럼(COL_CHK) 바인딩 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","80","609","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("해당 컬럼의 Head와 Body Cell을 “checkbox” 형태로 표현. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","80","313","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("컬럼 이동, 사이즈 변경 가능하게 속성 변경. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","80","353","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("3번째 컬럼(Name)까지 고정, 3번째 Row까지 고정 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","80","393","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("컬럼고정, Row고정 해제. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","580","313","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("3번째 컬럼(Name) 사이즈 100px로 지정, 6번째 컬럼(Salary) 숨기기 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","580","353","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("컬럼 숨기기 취소 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","580","393","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("원본 그리드 포맷과 현재 변경한 그리드 포맷 비교. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","80","528","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("법인(CORP), 부서(DEPT)별 소계 표현하기.");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","80","568","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Summary 밴드 추가하고 SALARY 컬럼 총 합계 표현. ");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","80","608","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("소계와 Summary 밴드를 상단에 표현하기.");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","9","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Exe 6 - Grid6");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_1","12","474","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("6_1");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_2","12","514","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("6_2");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_3","12","554","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("6_3");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid6","10","70",null,"354","10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_binddataset("Dataset6");
            obj.set_positionstep("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_1","80","474","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Grid 에 스크롤 없이 전체 Column이 표시되도록 Column의 너비를 자동조절.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_2","80","514","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Grid 에서 선택되는 단위 설정.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_3","80","554","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Grid 에서 세로 스크롤 시 팝업으로 표시되는 Row 의 위치를 설정.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_4","12","594","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("6_4");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_4","80","594","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Edit 컴포넌트의 데이터를 바인딩 된 DataSet 에 즉시 반영시키기");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Edit("editInput","13","434","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio06","295","514","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_positionstep("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio06_innerdataset = new nexacro.NormalDataset("Radio06_innerdataset", obj);
            Radio06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">row</Col><Col id=\"datacolumn\">row</Col></Row><Row><Col id=\"codecolumn\">multirow</Col><Col id=\"datacolumn\">multirow</Col></Row><Row><Col id=\"codecolumn\">cell</Col><Col id=\"datacolumn\">cell</Col></Row><Row><Col id=\"codecolumn\">area</Col><Col id=\"datacolumn\">area</Col></Row><Row><Col id=\"codecolumn\">multiarea</Col><Col id=\"datacolumn\">multiarea</Col></Row></Rows>");
            obj.set_innerdataset(Radio06_innerdataset);
            obj.set_text("row");
            obj.set_value("row");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","790","434","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("6_3을 위한 데이터 생성");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","7","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Exe 7 - Grid7");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid7","10","70","970","354",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_binddataset("Dataset7");
            obj.set_positionstep("5");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"108\"/><Column size=\"174\"/><Column size=\"121\"/><Column size=\"94\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"80\"/><Column size=\"108\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_1","10","434","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("7_1");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_1","80","434","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Grid 편집모드 활성화 방법");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_2","10","474","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("7_2");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_2","80","474","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Grid에 다양한 포멧을 표현하기");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_3","10","514","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("7_3");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_2_00","80","514","240","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Grid에 변경 전 포멧으로 표현하기");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Exercise - Grid");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","70","960","568",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset8");
            obj.set_useselcolor("true");
            obj.set_selecttype("cell");
            obj.set_positionstep("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"144\"/><Column size=\"148\"/><Column size=\"131\"/><Column size=\"61\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"this.col\"/><Cell col=\"1\" text=\"this.col\"/><Cell col=\"2\" text=\"dataset.rowcount\"/><Cell col=\"3\" text=\"dataset.rowposition\"/><Cell col=\"4\" text=\"comp.currentcell\"/><Cell col=\"5\" text=\"currow\"/></Band><Band id=\"body\"><Cell expr=\"expr:this.col\"/><Cell col=\"1\" expr=\"expr:this.col\"/><Cell col=\"2\" expr=\"expr:dataset.rowcount\"/><Cell col=\"3\" expr=\"expr:dataset.rowposition\"/><Cell col=\"4\" expr=\"expr:comp.currentcell\"/><Cell col=\"5\" expr=\"expr:currow\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Exe 8 - expr에 의한 Grid 셀의 표현(Scope 지정 방법)");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("6");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("7");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","editInput","value","Dataset6","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap2_Grid.xfdl", function() {
        // Exercise 1 ================================================================
        // Exe 1-1
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var nColCnt1  = this.Grid1.getFormatColCount();
        	var nCellCnt1 = this.Grid1.getCellCount("body");

        	var nColCnt1_1  = this.Grid1_1.getFormatColCount();
        	var nCellCnt1_1 = this.Grid1_1.getCellCount("body");

        	trace("Grid1 Col=" + nColCnt1 + " : Cell=" + nCellCnt1);
        	trace("Grid1_1 Col=" + nColCnt1_1 + " : Cell=" + nCellCnt1_1);
        };

        // Exe 1-2
        this.Grid_oncellclick = function(obj,e)
        {
        	trace(" e.col=" + e.col + " : e.cell=" + e.cell);
        };

        // Exe 1-3
        this.btn_Exe1_3_onclick = function(obj,e)
        {
        	var nCellCnt = this.Grid1.getCellCount("body");
        	for(var i=0; i<nCellCnt; i++)
        	{
        		var sColID = this.Grid1.getCellProperty("body", i, "text");
        		trace(sColID);
        		var arrCol = sColID.split(":");
        		trace("ColumnID=" + arrCol[1]);
        	}
        };

        // Exe Sort
        this.Grid1_onheadclick = function(obj,e)
        {

        };

        // Exercise 2 ================================================================
        // Exe 2-1
        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	this.Dataset2.addColumn("COL_CHK", "STRING");
        	for(var i=0; i<this.Dataset2.rowcount; i++){
        		this.Dataset2.setColumn(i, "COL_CHK", "0");
        	}

        	this.Grid2.insertContentsCol("body", 0);
        	this.Grid2.setCellProperty("body", 0, "text", "bind:COL_CHK");

        };

        // Exe 2-2
        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	this.Grid2.setCellProperty("body", 0, "displaytype", "checkboxcontrol");
        	this.Grid2.setCellProperty("body", 0, "edittype"   , "checkbox");

        	this.Grid2.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.Grid2.setCellProperty("head", 0, "edittype"   , "checkbox");
        };

        // Exe 2 Check All
        this.Grid2_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){

            }

        };

        // Exe 2 Check One
        this.Dataset2_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "COL_CHK"){

            }
        };

        // Exercise 3 ================================================================
        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	this.Grid3.set_cellmovingtype("col");
        	this.Grid3.set_cellsizingtype("col");
        };

        // Exe 3-2
        this.btn_Exe3_2_onclick = function(obj,e)
        {
        	//Column Fix
        	this.Grid3.setFormatColProperty(2, "band", "left");

        	//Row Fix
        	this.Grid3.setFixedRow(2);
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	for(var i=0; i<this.Grid3.getFormatColCount(); i++){
        		this.Grid3.setFormatColProperty(i, "band", "body");
        	}

        	this.Grid3.setFixedRow(-1);
        };

        // Exe 3-4
        this.btn_Exe3_4_onclick = function(obj,e)
        {
        	this.Grid3.setFormatColProperty(2, "size", 100);
        	this.Grid3.setFormatColProperty(5, "size", 0);
        };

        // Exe 3-5
        this.btn_Exe3_5_onclick = function(obj,e)
        {
        	this.Grid3.setFormatColProperty(5, "size", 80);
        };

        // Exe 3 Hide
        this.Grid3.arrHide = [];
        this.Grid3_oncelldblclick = function(obj,e)
        {
            // getRealColSize()
        };

        // Exe 3 Hide Cancel
        this.btn_Cancel_onclick = function(obj,e)
        {

        };

        // Exe 3-6
        this.btn_Exe3_6_onclick = function(obj,e)
        {
        	var sCurFormat = this.Grid3.getCurFormatString();
        	this.Grid3_1.set_formats("<Formats>" + sCurFormat + "</Formats>");

         	var sOrgFormat = this.Grid3.getCurFormatString(true);
        	this.Grid3_2.set_formats("<Formats>" + sOrgFormat + "</Formats>");
        };

        // Exercise 4 ================================================================
        // Exe 4-2
        this.Grid4_oncellclick = function(obj,e)
        {
        	var nGridRow = this.Grid4.getTreeRow(e.row);
        	var nStatus  = this.Grid4.getTreeStatus(nGridRow);
        	trace("e.row=" + e.row + " : TreeRow=" + nGridRow + " : Status=" + nStatus);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);

        	this.Grid4.setTreeStatus(nGridRow, nStatus);

        };


        // Exercise 5 ================================================================
        // Exe 5-1
        this.btn_Exe5_1_onclick = function(obj,e)
        {
        	this.Dataset5.set_keystring("G:-CORP,+DEPT");
        	var sExpr = "expr:(dataset.getRowLevel(currow) == 2 ? CORP+' Sum' : CORP)";
        	this.Grid5.setCellProperty("body", 0, "text", sExpr);
        	sExpr = "expr:(dataset.getRowLevel(currow) == 0 ? DEPT : (dataset.getRowLevel(currow) == 1 ? DEPT + ' Sum' : ''))";
        	this.Grid5.setCellProperty("body", 1, "text", sExpr);
        };

        // Exe 5-2
        this.btn_Exe5_2_onclick = function(obj,e)
        {
        	this.Grid5.appendContentsRow("summary");
        	this.Grid5.setCellProperty("summary", 4, "text", this.Dataset5.getSum("SALARY"));
        };

        // Exe 5-3
        this.btn_Exe5_3_onclick = function(obj,e)
        {
        	this.Dataset5.set_reversesubsum(true);
        	this.Grid5.set_summarytype("top");
        };

        this.fn_level = function(pRow)
        {
        	var nMaxLevel = 2;
        	var nLevel = nMaxLevel-pRow;
        	return nLevel;
        }



        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;
        this.fn_sort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
        	var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = obj.getCellText(-1, e.cell);

        	if(sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        		objDs.set_keystring("S:-" + sColId[1]);
        	}
        	else if(sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}
        	else{
        		obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}

        	if(this.nPrevCell > -1 && this.nPrevCell != e.cell){
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
        	}

        	this.nPrevCell = e.cell;
        }

        // * 기타 Grid2에서 예제 시연
        // autoenter 속성이 select 인 경우 한번에 그리드에서 콤보와 캘린더를 표현하는 방법
        //
        //this.Grid2_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        //{
        //	if(e.col == 2){
        //		this.Grid2.dropdownCombo();
        //	}else if(e.col == 3){
        //		this.Grid2.dropdownCalendar();
        //	}
        //};
        //
        // autofittype - 전체 Column이 표시되도록 Column의 너비를 자동조절할지 설정하는 속성입니다.
        // grid format 변경 - Grid2 안에 formatid 를 복사하여 생성 할 수 있습니다.
        // selecttype - Grid 에서 선택되는 단위를 설정하는 속성입니다.
        // autosizingtype - Grid 에 데이터가 모두 표시되도록 Row, Column 의 크기를 자동조절 할 지 설정하는 속성입니다.
        // fastvscrolltype = "centerdisplay" - 속성 변경 후 실행화면의 그리드 스크롤 속도 확인
        //
        // this.Grid00.updateToDataset(); // 편집중인 값을 Dataset에 즉시 반영
        //
        // this.Grid2_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)
        // {
        // 	obj.updateToDataset();
        // };




        // Exe 6-1
        this.btn_Exe6_1_onclick = function(obj,e)
        {
        	this.Grid6.set_autofittype("col");
        };

        this.Radio06_onitemchanged = function(obj,e)
        {
        	this.Grid6.set_selecttype(this.Radio06.value);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset6.set_enableevent(false);
        	for(var i=1;i<10000;i++)
        	{
        		var toRow = this.Dataset6.addRow();
        		this.Dataset6.copyRow(toRow,this.Dataset6, 0);
        		this.Dataset6.setColumn(toRow,"FULL_NAME",this.Dataset6.getColumn(0,"FULL_NAME") + i);
        	}
        	this.Dataset6.set_enableevent(true);
        };

        this.btn_Exe6_3_onclick = function(obj,e)
        {
        	this.Grid6.set_fastvscrolltype("centerdisplay");
        };


        this.btn_Exe6_4_onclick = function(obj,e)
        {
        	this.editInput.addEventHandler("oninput", this.fn_oninput, this);
        };

        this.fn_oninput = function(obj,e)
        {
        	obj.updateToDataset();
        };



        this.btn_Exe7_1_onclick = function(obj,e)
        {
        	this.Grid7.set_autoenter("select");
        	/*
        	none 	: Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.
        	select 	: 편집모드용 컨트롤이 자동으로 활성화
        	key 	:  Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.
        	*/
        };


        this.Grid7_oncellclick = function(obj,e)
        {
        	if(e.col == 2)
        	{
        		this.Grid7.dropdownCombo();
        	} else if(e.col == 3)
        	{
        		this.Grid7.dropdownCalendar();
        	}
        };

        this.btn_Exe7_2_onclick = function(obj,e)
        {
        	this.Grid7.set_formatid("default_00");
        };

        this.btn_Exe7_3_onclick = function(obj,e)
        {
        	this.Grid7.set_formatid("default");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid1.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.Grid1.addEventHandler("onheadclick",this.Grid1_onheadclick,this);
            this.Grid3.addEventHandler("oncelldblclick",this.Grid3_oncelldblclick,this);
            this.Grid1_1.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_3.addEventHandler("onclick",this.btn_Exe1_3_onclick,this);
            this.Grid2.addEventHandler("onheadclick",this.Grid2_onheadclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
            this.btn_Exe3_6.addEventHandler("onclick",this.btn_Exe3_6_onclick,this);
            this.Grid4.addEventHandler("oncelldblclick",this.Grid4_oncellclick,this);
            this.btn_Exe5_1.addEventHandler("onclick",this.btn_Exe5_1_onclick,this);
            this.btn_Exe5_2.addEventHandler("onclick",this.btn_Exe5_2_onclick,this);
            this.btn_Exe5_3.addEventHandler("onclick",this.btn_Exe5_3_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static14.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static15.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe6_1.addEventHandler("onclick",this.btn_Exe6_1_onclick,this);
            this.btn_Exe6_3.addEventHandler("onclick",this.btn_Exe6_3_onclick,this);
            this.Static6_1.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static6_2.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static6_3.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe6_4.addEventHandler("onclick",this.btn_Exe6_4_onclick,this);
            this.Static6_4.addEventHandler("onclick",this.Static08_onclick,this);
            this.Radio06.addEventHandler("onitemchanged",this.Radio06_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid7.addEventHandler("oninput",this.Grid7_oninput,this);
            this.Grid7.addEventHandler("oncellclick",this.Grid7_oncellclick,this);
            this.btn_Exe7_1.addEventHandler("onclick",this.btn_Exe7_1_onclick,this);
            this.Static7_1.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe7_2.addEventHandler("onclick",this.btn_Exe7_2_onclick,this);
            this.Static7_2.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe7_3.addEventHandler("onclick",this.btn_Exe7_3_onclick,this);
            this.Static7_2_00.addEventHandler("onclick",this.Static08_onclick,this);
            this.Dataset2.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset2.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
            this.Dataset4.addEventHandler("oncolumnchanged",this.Dataset4_oncolumnchanged,this);
            this.Dataset6.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset6.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
            this.Dataset7.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset7.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
        };
        this.loadIncludeScript("Exe_Chap2_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
