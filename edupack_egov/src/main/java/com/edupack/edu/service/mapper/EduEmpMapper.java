package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.EduEmpVO;
import com.edupack.edu.vo.EduSearchVO;

import egovframework.rte.psl.dataaccess.mapper.Mapper;


/**
 * 
 * <pre>
 * @title   Education Mapper Interface
 *  -       
 * @package com.edupack.edu.service.impl.mybatis
 * <pre>
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

@Mapper("eduEmpMapper")
public interface EduEmpMapper {
	
	public List<EduEmpVO> selectEmpVoList();
	
}
