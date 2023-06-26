package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.edu.service.Seok2DrumMemberService;
import com.edupack.edu.service.mapper.Seok2DrumMemberMapper;
import com.nexacro.java.xapi.data.DataSet;

@Service("seok2DrumMemberService")
public class Seok2DrumMemberServiceImpl implements Seok2DrumMemberService {
	
	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	@Resource(name = "seok2DrumMemberMapper")
	private Seok2DrumMemberMapper seok2DrumMemberMapper;

	@Override
	public void saveMember(List<Map<String, Object>> saveList) {

		int nSize = saveList.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = saveList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.insertMember(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.updateMember(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.deleteMember(rowData);
			}

		}
	}

	@Override
	public int checkMemberID(String pMemberID) {

		return seok2DrumMemberMapper.checkMemberID(pMemberID);
	}

	@Override
	public int checkLoginIDPW(String pID, String pPW) {

		return seok2DrumMemberMapper.checkLoginIDPW(pID, pPW);
	}

	@Override
	public List<Map<String, Object>> selectMemberList(String pNAME, String pEMAIL) {

		return seok2DrumMemberMapper.selectGetFindId(pNAME, pEMAIL);
	}

	@Override
	public List<Map<String, Object>> selectPwFind(String pID, String pPHONE) {

		return seok2DrumMemberMapper.selectPwFind(pID, pPHONE);
	}

	@Override
	public List<Map<String, Object>> selectUser(String pID) {

		return seok2DrumMemberMapper.selectUser(pID);
	}

	@Override
	public List<Map<String, Object>> contactBoardList(Map<String, String> dsSearch) {

		return seok2DrumMemberMapper.contactBoardList(dsSearch);
	}

	@Override
	public List<Map<String, Object>> seok2DrumrePage(Map<String, String> dsSearch) {

		return seok2DrumMemberMapper.seok2DrumrePage(dsSearch);
	}

	@Override
	public List<Map<String, Object>> contactComBoardList(Map<String, String> dsSearch) {

		return seok2DrumMemberMapper.contactComBoardList(dsSearch);
	}

	@Override
	public List<Map<String, Object>> seok2DrumReComPage(Map<String, String> dsSearch) {

		return seok2DrumMemberMapper.seok2DrumReComPage(dsSearch);
	}

	@Override
	public void conBoardWrite(List<Map<String, Object>> conBoardWrite) {

		int nSize = conBoardWrite.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = conBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.conBoardDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = conBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.conBoardWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.conBoardUpdate(rowData);

			}

		}

	}

	@Override
	public void comBoardWrite(List<Map<String, Object>> comBoardWrite) {

		int nSize = comBoardWrite.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = comBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.comBoardDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = comBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.comBoardWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.comBoardUpdate(rowData);

			}

		}

	}

	@Override
	public void comBoardFileWrite(List<Map<String, Object>> comBoardWrite) {

		int nSize = comBoardWrite.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = comBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.comBoardFileDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = comBoardWrite.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.comBoardFileWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.comBoardFileUpdate(rowData);

			}

		}

	}

	@Override
	public List<Map<String, Object>> GetBoardKey() {

		return seok2DrumMemberMapper.GetBoardKey();
	}

	@Override
	public List<Map<String, Object>> boardDetailView(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.boardDetailView(dsSearch);
	}

	@Override
	public List<Map<String, Object>> boardFileList(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.boardFileList(dsSearch);
	}

	@Override
	public List<Map<String, Object>> conBoardDetailView(Map<String, String> dsSearch) {

		return seok2DrumMemberMapper.conBoardDetailView(dsSearch);
	}

	@Override
	public void roomInfoList(List<Map<String, Object>> roomInfoList) {

		int nSize = roomInfoList.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = roomInfoList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.roomInfoListDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = roomInfoList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.roomInfoListWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.roomInfoListUpdate(rowData);

			}

		}

	}

	@Override
	public List<Map<String, Object>> roomInfo(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.roomInfo(dsSearch);
	}

	@Override
	public List<Map<String, Object>> seok2DrumrRoomePage(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.seok2DrumrRoomePage(dsSearch);
	}

	@Override
	public List<Map<String, Object>> roomDetailView(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.roomDetailView(dsSearch);
	}

	@Override
	public void roomReserve(List<Map<String, Object>> roomReserve) {

		int nSize = roomReserve.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = roomReserve.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.roomReserveDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = roomReserve.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.roomReservetWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				log.debug("들러오니??===" + rowData);
				seok2DrumMemberMapper.roomReserveUpdate(rowData);

			}

		}

	}

	@Override
	public List<Map<String, Object>> selectReserveList(Map<String, String> dsSearch) {

		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.selectReserveList(dsSearch);
	}

	@Override
	public List<Map<String, Object>> selectReserveListPage(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.selectReserveListPage(dsSearch);
	}

	@Override
	public List<Map<String, Object>> selectAdminReserveList(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.selectAdminReserveList(dsSearch);
	}
	@Override
	public int paramDate(String paramDate, String paramTitle, String paramStatus) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.paramDate(paramDate, paramTitle,paramStatus);
	}

	@Override
	public void saveReply(List<Map<String, Object>> saveList) {
		int nSize = saveList.size();

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = saveList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.ReplyDelete(rowData);
			}

		}

		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = saveList.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) { // 입력 될 때
				seok2DrumMemberMapper.ReplytWrite(rowData);

			} else if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
				seok2DrumMemberMapper.ReplyUpdate(rowData);

			}

		}
	}

	@Override
	public List<Map<String, Object>> selectReply(String pNoticeSeq) {

		return seok2DrumMemberMapper.selectReply(pNoticeSeq);
	}
		
	@Override
	public void upDateHit(String paramHit) {

		seok2DrumMemberMapper.upDateHit(paramHit);
		
	}
	
	@Override
	public void comUpDateHit(String comUpDateHit) {
		
		seok2DrumMemberMapper.comUpDateHit(comUpDateHit);
		
	}
	
	@Override
	public void comReply(Map<String, Object> comReply) {
		String COMBOARD_NO = seok2DrumMemberMapper.selectBoardCommentKey(""+comReply.get("COMBOARD_NO"));
		String commnetParent = (String) comReply.get("REP_PARENT");
		comReply.put("REP_NO", commnetParent + COMBOARD_NO);
		seok2DrumMemberMapper.insertBoardComment(comReply);
	}
	
	@Override
	public List<Map<String, String>> selectComReply(int selectReply) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.selectComReply(selectReply);
	}
	
	@Override
	public void comDeleteReply(List<Map<String, Object>> comDeleteReply) {
		int nSize = comDeleteReply.size();
		
		for (int i = 0; i < nSize; i++) {
			Map<String, Object> rowData = comDeleteReply.get(i);

			if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) { // 삭제 될 때
				seok2DrumMemberMapper.comDeleteReply(rowData);
			}
		}
			
		for (int i = 0; i < nSize; i++) {
				Map<String, Object> rowData = comDeleteReply.get(i);

			 if ((int) rowData.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) { // 업데이트 될 때
					seok2DrumMemberMapper.comUpdateReply(rowData);

			}

		}

	
}
	
	@Override
	public List<Map<String, Object>> CalendarSelect(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.CalendarSelect(dsSearch);
	}
	
	@Override
	public List<Map<String, Object>> CalendarSelectAdmin(Map<String, String> dsSearch) {
		// TODO Auto-generated method stub
		return seok2DrumMemberMapper.CalendarSelectAdmin(dsSearch);
	}
	
};
