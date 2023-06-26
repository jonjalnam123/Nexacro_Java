<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %> //DB 정보 임포트
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>
<%@ include file="../connection_edu.jsp" %>
<%!
// ResultSet ==> Dataset
public DataSet RsToDs(ResultSet rs, String dsID) throws Exception
{
	int i;
	int iColCnt;
	String sColName;
	String sColType;;
	int ColType = 0; 
	int ColSize = 255; 
	
	DataSet ds = new DataSet(dsID);
	ResultSetMetaData rsmd = rs.getMetaData();

	iColCnt = rsmd.getColumnCount();
	for( i = 1 ; i <= iColCnt ; i++ )
	{
		sColName = rsmd.getColumnName(i).toUpperCase();		
		sColType = rsmd.getColumnTypeName(i);

		ColType = DataTypes.STRING;
		if(sColType.equals("INTEGER"))	ColType = DataTypes.INT;
		if(sColType.equals("DECIMAL"))	ColType = DataTypes.DECIMAL;
		
		ds.addColumn(sColName, ColType, ColSize);		
	}
	while(rs.next())
	{
		int row = ds.newRow();
		for( i = 1 ; i <= iColCnt ; i++ )
		{
			sColName = rsmd.getColumnName(i).toUpperCase();
			ds.set(row, sColName, rsGet(rs, sColName));
		}
	}

  return ds;
}

public String rsGet(ResultSet rs, String id) throws Exception
{
	if( rs.getString(id) == null ){
		return "";
	} 
	else {
		return rs.getString(id);
	}
}
%>
<%
// PlatformData 
PlatformData out_pData = new PlatformData();
String sDept = (request.getParameter("sDept") == null) ? "" : request.getParameter("sDept"); //GET 방식 받아옴
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

HttpPlatformRequest pReq = new HttpPlatformRequest(request);
//pReq.setStreamLogEnabled(true);
//pReq.setStreamLogDir("C:\\Temp\\Log");

pReq.receiveData();
//pReq.storeStreamLog();

PlatformData in_pData = pReq.getData(); //데이터 셋 정보 

VariableList in_varList = in_pData.getVariableList(); //post 로 넘긴 변수가 다 담김 
sDept =(in_varList.getString("paramDept") == null) ? sDept : in_varList.getString("paramDept"); //post 방식으로 값 받아옴 

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	
	try { 
		conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
	  
		/******* SQL ************/
		String SQL;
		SQL  = "SELECT COMBOARD_NO    \n" + 
			   "     , USERID  \n" +
			   "     , COMBOARD_TITLE    \n" +
			   "     , COMBOARD_CONTENT     \n" +
			   "     , COMBOARD_HIT     \n" +
			   "     , COMBOARD_WRITEDATE  \n" +
			   "  FROM tbl_seokcommuboard     \n" +
			   " WHERE 1=1        \n" ;
		
		//if(sDept != null && sDept.length() != 0 && !sDept.equals("undefined"))
		//{
		//	SQL += "AND DEPT_CD = '" + sDept + "'";
		//}
		SQL += " ORDER BY COMBOARD_NO";
		
		rs = stmt.executeQuery(SQL);
	  
		/**DataSet ds = new DataSet("out_emp");
		ds.addColumn("COMBOARD_NO" 	  ,DataTypes.INT ,(short)10 );
		ds.addColumn("USERID"  ,DataTypes.STRING  ,(short)50 );
		ds.addColumn("COMBOARD_TITLE"    ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("COMBOARD_CONTENT"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("COMBOARD_HIT"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("COMBOARD_WRITEDATE"  ,DataTypes.DATE    ,(short)10 );**
			
		while(rs.next())
		{
			int row = ds.newRow();
			ds.set(row ,"COMBOARD_NO"       ,rs.getString("COMBOARD_NO")  );
			ds.set(row ,"USERID"     ,rs.getString("USERID"));
			ds.set(row ,"COMBOARD_TITLE"       ,rs.getString("COMBOARD_TITLE")  );
			ds.set(row ,"COMBOARD_CONTENT"        ,rs.getString("COMBOARD_CONTENT")   );
			ds.set(row ,"COMBOARD_HIT"        ,rs.getString("COMBOARD_HIT")   );
			ds.set(row ,"COMBOARD_WRITEDATE"     ,rs.getString("COMBOARD_WRITEDATE"));
		}
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);**/
	
		out_pData.addDataSet(RsToDs(rs,"out_dsboard"));
		
		
		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";
		
	} catch (SQLException e) {
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}    
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);
varList.add("strAddVar" , "홍길동"); //varList.add(변수명, 값)



/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(strErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/

//HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, "utf-8");

pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
