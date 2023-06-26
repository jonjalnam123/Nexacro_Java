package com.edupack.edu.service;

import java.util.List;
import java.util.Map;

public interface Seok2DrumMemberService {

	void saveMember(List<Map<String, Object>> saveList);

	int checkMemberID(String pMemberID);

	int checkLoginIDPW(String pID, String pPW);

	List<Map<String, Object>> selectMemberList(String pNAME, String pEMAIL);

	List<Map<String, Object>> selectPwFind(String pID, String pPHONE);

	List<Map<String, Object>> selectUser(String pID);

	List<Map<String, Object>> contactBoardList(Map<String, String> dsSearch);

	List<Map<String, Object>> seok2DrumrePage(Map<String, String> dsSearch);

	List<Map<String, Object>> contactComBoardList(Map<String, String> dsSearch);

	List<Map<String, Object>> seok2DrumReComPage(Map<String, String> dsSearch);

	void conBoardWrite(List<Map<String, Object>> conBoardWrite);

	void comBoardWrite(List<Map<String, Object>> comBoardWrite);

	List<Map<String, Object>> GetBoardKey();

	void comBoardFileWrite(List<Map<String, Object>> comBoardFileWrite);

	List<Map<String, Object>> boardDetailView(Map<String, String> dsSearch);

	List<Map<String, Object>> boardFileList(Map<String, String> dsSearch);

	List<Map<String, Object>> conBoardDetailView(Map<String, String> dsSearch);

	void roomInfoList(List<Map<String, Object>> roomInfoList);

	List<Map<String, Object>> roomInfo(Map<String, String> dsSearch);

	List<Map<String, Object>> seok2DrumrRoomePage(Map<String, String> dsSearch);

	List<Map<String, Object>> roomDetailView(Map<String, String> dsSearch);

	void roomReserve(List<Map<String, Object>> roomReserve);

	int paramDate(String paramDate, String paramTitle, String paramStatus);
	
	List<Map<String, Object>> selectReserveList(Map<String, String> dsSearch);

	List<Map<String, Object>> selectReserveListPage(Map<String, String> dsSearch);

	List<Map<String, Object>> selectAdminReserveList(Map<String, String> dsSearch);

	void saveReply(List<Map<String, Object>> saveList);

	List<Map<String, Object>> selectReply(String pNoticeSeq);

	void upDateHit(String paramHit);

	void comUpDateHit(String comUpDateHit);

	void comReply(Map<String, Object> comReply);

	List<Map<String, String>> selectComReply(int selectReply);

	void comDeleteReply(List<Map<String, Object>> comDeleteReply);

	List<Map<String, Object>> CalendarSelect(Map<String, String> dsSearch);

	List<Map<String, Object>> CalendarSelectAdmin(Map<String, String> dsSearch);













	







	



	



	


	
}
