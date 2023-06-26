package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

public interface Seok2DrumAdminService {

	List<Map<String, Object>> selectSeokMemberList(String pFD, String pTD);


	List<Map<String, Object>> memberList();


}
