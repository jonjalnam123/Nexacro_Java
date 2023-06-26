<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %> 
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %><%@ page contentType = "text/xml; charset=UTF-8" %>
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


HttpPlatformRequest pReq = new HttpPlatformRequest(request);
//pReq.setStreamLogEnabled(true);
//pReq.setStreamLogDir("c:\\Temp\\Log");

pReq.receiveData();
//pReq.storeStreamLog();

PlatformData in_pData = pReq.getData();

VariableList in_varList = in_pData.getVariableList();
String nRecords = in_varList.getString("records");
String nRecordsOffset = in_varList.getString("recordsOffset");

System.out.print("nRecords=" + nRecords);
System.out.print("nRecordsOffset=" + nRecordsOffset);

int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
    /******* JDBC Connection *******/  
    Connection conn = null;
    Statement  stmt = null;
    ResultSet  rs   = null;
      
    try { 
        conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
      
        String SQL;
		SQL  = 	" select b.*   								\n" +  
			   	" 	 from									\n" +
			 	" 	   ( select @rw:=@rw+1 as rownum,		\n" + 
			 	" 		        a.* 						\n" +
			 	" 		   from	( select 	EMPL_ID,		\n" +
			 	"							FULL_NAME,		\n" +
			 	"							DEPT_CD,		\n" +
			 	"							POS_CD,			\n" +
				"		   					GENDER,			\n" +
				"		   					HIRE_DATE,		\n" +	
				"		   					MARRIED,		\n" +	
				"		   					SALARY,			\n" +
				"		   					MEMO			\n" +
			 	" 		     from TB_EMP 					\n" +
			 	" 		     order by EMPL_ID)a,					\n" +
				" 		     (select @rw:=0) as r 					\n" +
			 	" 		    ) b 						\n" +
			 	" 		    where rownum limit " + nRecords + " offset "+ nRecordsOffset  + "\n";
		
        rs = stmt.executeQuery(SQL);
		out_pData.addDataSet(RsToDs(rs,"out_emp"));		
		
		SQL = " SELECT count(*) as TOTAL_CNT  FROM TB_EMP";
        rs = stmt.executeQuery(SQL);
		out_pData.addDataSet(RsToDs(rs,"out_total"));		
        
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

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

pRes.sendData();
%>
