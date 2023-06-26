package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.NexaEduVo;

public interface NexaEduService {

	List<Map<String, Object>> selectEmpList();

	List<Map<String, Object>> selectEmpListParam1(String pDept);

	List<Map<String, Object>> selectEmpListParam2(NexaEduVo searchVo);

	List<Map<String, Object>> selectEmpListParamDs(Map<String, String> searchMap);

	List<Map<String, Object>> selectEmpListParamAll();

	List<Map<String, Object>> selectDeptList();

	List<Map<String, Object>> selectPosList();

	List<Map<String, String>> selectCodeList(Map<String, Object> searchMap);

	void saveEmp(List<Map<String, Object>> saveList);

	int checkEmpID(String pEmpID);
	

}
