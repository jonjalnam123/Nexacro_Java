package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("seok2DrumAdminMapper")
public interface Seok2DrumAdminMapper {

	List<Map<String, Object>> selectSeokMemberList(String pFD, String pTD);

	List<Map<String, Object>> memberList();





	
	
}


