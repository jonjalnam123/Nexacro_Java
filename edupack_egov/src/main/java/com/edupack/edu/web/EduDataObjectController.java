package com.edupack.edu.web;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.edupack.edu.service.EduTransactionService;
import com.edupack.edu.service.eduDataObjectService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import java.io.BufferedReader;

@RestController
public class EduDataObjectController {
		
	@RequestMapping(value="/eduRestAPI.json")	
	public @ResponseBody JSONObject  EduOpenAPISelect(@RequestBody Map<String, Object> searchMap) throws Exception   {
		
		String sDate = searchMap.get("date").toString();
		String sCity = searchMap.get("city").toString();
	       System.out.println("===============: " + sDate + " : " + sCity);
	       	
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List");
        String result = ""; //json 결과
        
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8")    + "=" + "bllLd675CalvF7WaqX9uMD630s9ZmArdjgRhioKNGLPGrsCrwezC8UlxKBfwgq4uovrfVqbiIbB%2FodWQZxOOEg%3D%3D"); 
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8")        + "=" + URLEncoder.encode("1", "UTF-8")); //페이지번호
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8")     + "=" + URLEncoder.encode("10", "UTF-8")); //한 페이지 결과 수
        urlBuilder.append("&" + URLEncoder.encode("type","UTF-8")          + "=" + URLEncoder.encode("json", "UTF-8")); //호출문서 형식
        urlBuilder.append("&" + URLEncoder.encode("create_date","UTF-8")   + "=" + URLEncoder.encode(sDate, "UTF-8")); //생성일시(포함하여 큰 데이터 조회)
        urlBuilder.append("&" + URLEncoder.encode("location_name","UTF-8") + "=" + URLEncoder.encode(sCity, "UTF-8")); //수신지역 이름
        URL url = new URL(urlBuilder.toString());
        
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        
        BufferedReader br;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
        	br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
        }
        else {
        	br = new BufferedReader(new InputStreamReader(conn.getErrorStream(), "UTF-8"));
        }
        result = br.readLine();
        System.out.println("result  : " + result);       
        
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
        
        System.out.println("jsonObject  : " + jsonObject);
        
        /* Json 포맷 
			{
				"DisasterMsg2":[
					{
						"head":[
							{
								"totalCount":4
							},
							{
								"numOfRows":"10",
								"pageNo":"1",
								"type":"JSON"
							},
							{
								"RESULT":{
											"resultCode":"INFO-0",
											"resultMsg":"NOMAL SERVICE"
										}
							}
						]
					},
					{
						"row":[
							{
								"create_date":"2023/01/05 13:51:59",
								"location_id":"140",
								"location_name":"서울특별시 강서구",
								"md101_sn":"188924",
								"msg":"[서울경찰청] 강서구에서 실종된...",
								"send_platform":"cbs"
							},
							{
								"create_date":"2023/01/05 12:05:27",
								"location_id":"140",
								"location_name":"서울특별시 강서구",
								"md101_sn":"188918",
								"msg":"[서울경찰청] 강서구에서 찾습니다",
								"send_platform":"cbs"
							}
						]
					}
				]
			}
  
        */
        /* Json 파싱 예시
        JSONArray dataKey = (JSONArray) jsonObject.get("DisasterMsg2");
        JSONObject dataRow = (JSONObject) dataKey.get(1);
        JSONArray dataInfo = (JSONArray) dataRow.get("row");
        
        for(int i=0; i<dataInfo.size(); i++) {
        	JSONObject jData = (JSONObject) dataInfo.get(i);

        	System.out.println("create_date : " + jData.get("create_date"));
        	System.out.println("location_id : " + jData.get("location_id"));
        	System.out.println("location_name : " + jData.get("location_name"));
        	System.out.println("md101_sn : " + jData.get("md101_sn"));
        	System.out.println("msg : " + jData.get("msg"));
        	System.out.println("send_platform : " + jData.get("send_platform"));            	
        }
        */        
		return jsonObject;        
    }
	
    @Resource(name = "eduTransactionService")    
    private EduTransactionService eduTransactionService;
	
    @RequestMapping(value = "eduDataObjectSelect.json")
	public @ResponseBody List<Map<String,Object>>  EduDataObjectSelect(@RequestBody Map<String, String> searchMap) throws Exception   {
    	
		List<Map<String,Object>> resultList = eduTransactionService.selectTransaction(searchMap) ;
    	
		return resultList;
	}
	
	
}