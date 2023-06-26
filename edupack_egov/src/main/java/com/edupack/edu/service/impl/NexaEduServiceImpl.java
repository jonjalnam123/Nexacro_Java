package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edupack.edu.service.NexaEduService;
import com.edupack.edu.service.mapper.NexaEduMapper;
import com.edupack.edu.vo.NexaEduVo;
import com.nexacro.java.xapi.data.DataSet;

@Service("nexaEduService")
public class NexaEduServiceImpl implements NexaEduService {

	@Resource(name = "nexaEduMapper")
	private NexaEduMapper nexaEduMapper;

	@Override
	public List<Map<String, Object>> selectEmpList() {

		return nexaEduMapper.selectEmpList();
	}

	@Override
	public List<Map<String, Object>> selectEmpListParam1(String pDept) {

		return nexaEduMapper.selectEmpListParam1(pDept); // pDept라는 파라미터를 selectEmpListParam1에 전달 시키겠다.
	}

	@Override
	public List<Map<String, Object>> selectEmpListParam2(NexaEduVo searchVo) {

		return nexaEduMapper.selectEmpListParam2(searchVo);
	}

	@Override
	public List<Map<String, Object>> selectEmpListParamDs(Map<String, String> searchMap) {

		return nexaEduMapper.selectEmpListParamDs(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectEmpListParamAll() {

		return nexaEduMapper.selectEmpListParamAll();
	}

	@Override
	public List<Map<String, Object>> selectDeptList() {
		// TODO Auto-generated method stub
		return nexaEduMapper.selectDeptList();
	}

	@Override
	public List<Map<String, Object>> selectPosList() {
		// TODO Auto-generated method stub
		return nexaEduMapper.selectPosList();
	}

	@Override
	public List<Map<String, String>> selectCodeList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return nexaEduMapper.selectCodeList(searchMap);
	}

	@Override
	public void saveEmp(List<Map<String, Object>> saveList) { // 저장 서비스로직

		int nSize = saveList.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = saveList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				nexaEduMapper.deleteEmp(rowData);
			}
		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = saveList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 저장 될 때

				nexaEduMapper.insertEmp(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때

				// 변경되기 전의 데이터 가져오기 -> 매퍼에 ORG_EMPL_ID로 변경
				Map orgData = (Map) rowData.get("DataSetSavedData");
				String orgEmpId = (String) orgData.get("EMPL_ID");
				rowData.put("ORG_EMPL_ID", orgEmpId);

				nexaEduMapper.updateEmp(rowData);

			}
		}

	}

	@Override
	public int checkEmpID(String pEmpID) {

		return nexaEduMapper.checkEmpID(pEmpID);
	}

}
