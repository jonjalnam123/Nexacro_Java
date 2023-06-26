package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.edupack.edu.vo.Seok2DrumMemberVo;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("seok2DrumMemberMapper")
public interface Seok2DrumMemberMapper {

	void insertMember(Map<String, Object> rowData);

	void updateMember(Map<String, Object> rowData);

	void deleteMember(Map<String, Object> rowData);

	int checkMemberID(String pMemberID);

	int checkLoginIDPW(String pID, String pPW);

	List<Map<String, Object>> selectGetFindId(String pNAME, String pEMAIL);

	List<Map<String, Object>> selectPwFind(String pID, String pPHONE);

	List<Map<String, Object>> selectUser(String pID);

	List<Map<String, Object>> contactBoardList(Map<String, String> dsSearch);
	
	List<Map<String, Object>> seok2DrumrePage(Map<String, String> dsSearch);

	List<Map<String, Object>> contactComBoardList(Map<String, String> dsSearch);

	List<Map<String, Object>> seok2DrumReComPage(Map<String, String> dsSearch);

	void conBoardWrite(Map<String, Object> rowData);

	void conBoardUpdate(Map<String, Object> rowData);

	void conBoardDelete(Map<String, Object> rowData);

	void comBoardWrite(Map<String, Object> rowData);

	void comBoardUpdate(Map<String, Object> rowData);

	void comBoardDelete(Map<String, Object> rowData);

	List<Map<String, Object>> GetBoardKey();

	void comBoardFileDelete(Map<String, Object> rowData);

	void comBoardFileWrite(Map<String, Object> rowData);

	void comBoardFileUpdate(Map<String, Object> rowData);

	List<Map<String, Object>> boardDetailView(Map<String, String> dsSearch);

	List<Map<String, Object>> boardFileList(Map<String, String> dsSearch);

	List<Map<String, Object>> conBoardDetailView(Map<String, String> dsSearch);

	void roomInfoListDelete(Map<String, Object> rowData);

	void roomInfoListWrite(Map<String, Object> rowData);

	void roomInfoListUpdate(Map<String, Object> rowData);

	List<Map<String, Object>> roomInfo(Map<String, String> dsSearch);

	List<Map<String, Object>> seok2DrumrRoomePage(Map<String, String> dsSearch);

	List<Map<String, Object>> roomDetailView(Map<String, String> dsSearch);

	void roomReserveDelete(Map<String, Object> rowData);

	void roomReservetWrite(Map<String, Object> rowData);

	void roomReserveUpdate(Map<String, Object> rowData);

	List<Map<String, Object>> selectReserveList(Map<String, String> dsSearch);

	List<Map<String, Object>> selectReserveListPage(Map<String, String> dsSearch);

	List<Map<String, Object>> selectAdminReserveList(Map<String, String> dsSearch);

	int paramDate(String paramDate, String paramTitle, String paramStatus);

	void ReplyDelete(Map<String, Object> rowData);

	void ReplytWrite(Map<String, Object> rowData);

	void ReplyUpdate(Map<String, Object> rowData);

	List<Map<String, Object>> selectReply(String pNoticeSeq);

	void upDateHit(String paramHit);

	void comUpDateHit(String comUpDateHit);

	String selectBoardCommentKey(String string);

	void insertBoardComment(Map<String, Object> comReply);

	List<Map<String, String>> selectComReply(int selectReply);

	void comDeleteReply(Map<String, Object> rowData);

	List<Map<String, Object>> CalendarSelect(Map<String, String> dsSearch);

	List<Map<String, Object>> CalendarSelectAdmin(Map<String, String> dsSearch);

	void comUpdateReply(Map<String, Object> rowData);
	
	












	

	

}
