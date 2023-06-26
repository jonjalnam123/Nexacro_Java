
package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.NexaEduService;
import com.edupack.edu.vo.NexaEduVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NexaEduController {


	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	@Resource(name = "nexaEduService")
	private NexaEduService nexaEduService;

	@RequestMapping(value = "nexa/selectEmpList.do")
	public NexacroResult selectEmpList() {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> resultData = nexaEduService.selectEmpList(); // 디비에 있는 정보 매퍼 쿼리통해서 조회 resultData에 저장

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsEmp", resultData);

		return result;
	}

	@RequestMapping(value = "nexa/selectEmpListParam1.do")
	public NexacroResult selectEmpListParam1(@ParamVariable(name = "paramDept") String pDept) { //paramDept 라는 이름으로 String pDept를 조회

		log.debug("==================="); 
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> resultData = nexaEduService.selectEmpListParam1(pDept); // selectEmpListParam1 메소드
																							// 만드는데 pDept 라는 변수명으로 만듬

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsEmp", resultData);

		return result;
	}
	
	@RequestMapping(value = "nexa/selectEmpListParam2.do")
	public NexacroResult selectEmpListParam1(@ParamVariable(name = "paramDept") String pDept,
											 @ParamVariable(name = "paramName") String pName) { //paramDeptm pNmae 으로 정보를 받는다

		NexaEduVo searchVo = new NexaEduVo();
		searchVo.setDept_cd(pDept);
		searchVo.setEmp_name(pName);
		
//		Map<String, String> searchMap = new HashMap<String, String>();
//		searchMap.put("dept_cd", pDept);
//		searchMap.put("emp_name", pName);

		List<Map<String, Object>> resultData = nexaEduService.selectEmpListParam2(searchVo); // selectEmpListParam1 메소드
																						// 만드는데 pDept 라는 변수명으로 만듬
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsEmp", resultData);

		return result;
	}
	

	@RequestMapping(value = "nexa/selectEmpListParamDs.do")
	public NexacroResult selectEmpListParamDs(@ParamDataSet(name = "paramDs") Map<String, String> searchMap) { 


		List<Map<String, Object>> resultData = nexaEduService.selectEmpListParamDs(searchMap);
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsEmp", resultData);

		return result;
	}
	
	
	@RequestMapping(value = "nexa/selectDeptPosList.do") 
	public NexacroResult selectDeptPosList() {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> resultDept = nexaEduService.selectDeptList();
		List<Map<String, Object>> resultPos = nexaEduService.selectPosList(); 

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsDept", resultDept);
		result.addDataSet("dsPos", resultPos);

		return result;
	}
	
	@RequestMapping(value="nexa/selectCodeList.do")
	public NexacroResult selectCodeList(@ParamVariable(name="paramCode") String pCode, Map<String,Object> searchMap) {
		
		log.debug(">>>>>>>>>>> " + pCode);
		String[] arrCode = pCode.split(",");
		
		searchMap.put("group_code", arrCode);
		log.debug(">>>>>>>>>>>3333333333 " + searchMap);
		
		List<Map<String,String>> resultData = nexaEduService.selectCodeList(searchMap);		
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCode", resultData);
		return result;
	}
	
	@RequestMapping(value="nexa/saveEmp.do")
	public NexacroResult saveEmp(@ParamDataSet(name="in_emp") List<Map<String, Object>> saveList) {
		
		nexaEduService.saveEmp(saveList);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value="nexa/checkEmpID.do")
	public NexacroResult checkEmpID(@ParamVariable(name="paramID")String pEmpID) {
		
		int nCnt = nexaEduService.checkEmpID(pEmpID); //파라미터를 스트링 값으로 전달
		
		NexacroResult result = new NexacroResult();
		result.addVariable("emp_cnt", nCnt);

		
		if(nCnt >0) {
			result.setErrorCode(100); //임의로 서버 코드 값 지정 가능
			result.setErrorMsg("등록된 아이디 입니다.");
		}else {
			result.setErrorCode(200);
			result.setErrorMsg("사용 가능한 아이디 입니다.");
		}
		
		return result;
	}
	
	
}
