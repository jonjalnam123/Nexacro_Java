package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.EduEmpVO;
import com.edupack.edu.vo.EduSearchVO;

/**
 * 
 * <pre>
 * @title   Education Servlce Intreface
 *  -       
 * @package com.edupack.edu.service
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

public interface EduEmpService {

	
	//사원 조회 VO 방식
	List<EduEmpVO> selectEmpVoList();

	
}
