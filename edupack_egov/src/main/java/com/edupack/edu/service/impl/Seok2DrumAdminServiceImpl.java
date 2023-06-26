package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edupack.edu.service.Seok2DrumAdminService;
import com.edupack.edu.service.mapper.Seok2DrumAdminMapper;


@Service("seok2DrumAdminService")
public class Seok2DrumAdminServiceImpl implements Seok2DrumAdminService {
	
	@Resource(name = "seok2DrumAdminMapper")
	private Seok2DrumAdminMapper seok2DrumAdminMapper;

	@Override
	public List<Map<String, Object>> selectSeokMemberList(String pFD, String pTD) {

		return seok2DrumAdminMapper.selectSeokMemberList(pFD, pTD);
	}
	
	@Override
	public List<Map<String, Object>> memberList() {
	// TODO Auto-generated method stub
		return seok2DrumAdminMapper.memberList();
}
	

	







}
