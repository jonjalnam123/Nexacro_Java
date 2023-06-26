package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.Seok2DrumAdminService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Seok2DrumAdminController {

	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	@Resource(name = "seok2DrumAdminService")
	private Seok2DrumAdminService seok2DrumAdminService;

	@RequestMapping(value = "nexa/seokMemberList.do")
	public NexacroResult seokMemberList(@ParamVariable(name = "sFromDate") String pFD,
										@ParamVariable(name = "sToDate") String pTD) {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> resultData = seok2DrumAdminService.selectSeokMemberList(pFD, pTD); // 디비에 있는 정보 매퍼 쿼리통해서 조회 resultData에 저장

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("gdsSeokMember", resultData);

		return result;
	}

	
	//넥사크로 단순 조회 메소드
	@RequestMapping(value = "nexa/MemberList.do")
	public NexacroResult MemberList() {

		List<Map<String, Object>> MemberList = seok2DrumAdminService.memberList();
		
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsMember", MemberList);
  
		return result;
	}

	


}
