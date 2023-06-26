package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.EduEmpService;
import com.edupack.edu.service.mapper.EduEmpMapper;
import com.edupack.edu.vo.EduEmpVO;
import com.edupack.edu.vo.EduSearchVO;
import com.edupack.edu.web.EduEmpController;
import com.nexacro.java.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <pre>
 * @title   Education ServiceImpl Class
 *  -       
 * @package com.edupack.edu.service.impl
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

@Service("eduEmpService")
public class EduEmpServiceImpl extends EgovAbstractServiceImpl implements EduEmpService {
	private Logger log = LoggerFactory.getLogger(EduEmpController.class);

	@Resource(name ="eduEmpMapper")
	EduEmpMapper eduEmpMapper;
	
	@Override
    public List<EduEmpVO> selectEmpVoList() {
        return eduEmpMapper.selectEmpVoList();
    }
		
}
