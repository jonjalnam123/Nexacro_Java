package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.EduEmpService;
import com.edupack.edu.vo.EduEmpVO;
import com.edupack.edu.vo.EduSearchVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

/**
 * 
 * <pre>
 * @title   Education Controller
 *  -       
 * @package com.edupack.edu.web
 * <pre>
 * @author  Education
 * @since   2022. 04. 20.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 04. 20.		Education	최초작성
 */

@Controller
public class EduEmpController {

	private Logger log = LoggerFactory.getLogger(EduEmpController.class);
	
	@Resource(name = "eduEmpService")	
	private EduEmpService eduEmpService;


	
	/*
	 * Education 사원관리 데이터 조회 - VO 방식 
	 * 조회 조건을 dataset으로 전달 또는 Variable로 전달
	 * Variable 전달 값으로 조건처리
	 * 
	 * VO 방식은 현재 안딤 -- caemlcase 와 컬럼 명칭 매핑이 안되고 있음
	 */
    @RequestMapping(value = "/selectEmpVoList.do")
	public NexacroResult selectEmpVoList() {

		List<EduEmpVO> sampleList = eduEmpService.selectEmpVoList();

		NexacroResult result = new NexacroResult();
		result.addDataSet("out_ds", sampleList);

		return result;
	}

 
    
}
