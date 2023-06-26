package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.Seok2DrumMemberService;
import com.edupack.edu.vo.Seok2DrumMemberVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Seok2DrumMemberController {

	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	//회원가입 서비스
	@Resource(name = "seok2DrumMemberService") 
	private Seok2DrumMemberService seok2DrumMemberService;

	@RequestMapping(value = "nexa/saveMember.do")
	public NexacroResult saveMember(@ParamDataSet(name = "inMember") List<Map<String, Object>> saveList) {

		seok2DrumMemberService.saveMember(saveList);

		NexacroResult result = new NexacroResult();
		return result;
	}
	
	
	//회원가입시 아이디 중복 체크 
	@RequestMapping(value = "checkMemberID.do")
	public NexacroResult checkMemberID(@ParamVariable(name = "paramID") String pMemberID) {

		int nCnt = seok2DrumMemberService.checkMemberID(pMemberID); // 파라미터를 스트링 값으로 전달

		NexacroResult result = new NexacroResult();
		result.addVariable("fnMemberCnt", nCnt);

		if (nCnt > 0) {
			result.setErrorCode(100); // 임의로 서버 코드 값 지정 가능
			result.setErrorMsg("등록된 아이디 입니다.");
		} else {
			result.setErrorCode(200);
			result.setErrorMsg("사용 가능한 아이디 입니다.");
		}

		return result;
	}
	
	//로그인시 아이디 비밀번호 체크 해서 로그인 해 주는 서비스
	@RequestMapping(value = "nexa/checkIdPw.do")
	public NexacroResult checkEmpID(@ParamVariable(name = "paramID") String pID,
									@ParamVariable(name = "paramPW") String pPW) {

		int lCnt = seok2DrumMemberService.checkLoginIDPW(pID, pPW); // 로그인 체크
		List<Map<String, Object>> resultData = seok2DrumMemberService.selectUser(pID); // 회원 정보 전달

		NexacroResult result = new NexacroResult();
		result.addVariable("fnLoginCnt", lCnt);
		result.addDataSet("dsMember", resultData);

		if (lCnt > 0) {
			result.setErrorCode(100); // 임의로 서버 코드 값 지정 가능
			result.setErrorMsg("로그인 성공.");
		} else {
			result.setErrorCode(200);
			result.setErrorMsg("로그인 불가.");
		}

		return result;
	}
	
	//아이디 찾기 서비스
	@RequestMapping(value = "nexa/IdFind.do")
	public NexacroResult IdFind(@ParamVariable(name = "pNAME") String pNAME,
			@ParamVariable(name = "pEMAIL") String pEMAIL) {

		List<Map<String, Object>> resultData = seok2DrumMemberService.selectMemberList(pNAME, pEMAIL);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsFindId", resultData);
		return result;
	}
	
	//비밀번호 찾기 서비스
	@RequestMapping(value = "nexa/PwFind.do")
	public NexacroResult PwFind(@ParamVariable(name = "pID") String pID,
			@ParamVariable(name = "pPHONE") String pPHONE) {

		List<Map<String, Object>> resultData = seok2DrumMemberService.selectPwFind(pID, pPHONE);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsFindPw", resultData);
		return result;
	}
	
	//
	@RequestMapping(value = "nexa/getUser.do")
	public NexacroResult getUser(@ParamVariable(name = "pID") String pID) {

		List<Map<String, Object>> resultData = seok2DrumMemberService.selectUser(pID);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsMember", resultData);
		return result;
	}
	
	//문의사항 리스트 조회 및 페이징
	@RequestMapping(value = "nexa/contactBoardList.do")
	public NexacroResult contactBoardList(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> resultData = seok2DrumMemberService.contactBoardList(dsSearch);
		List<Map<String, Object>> rePage = seok2DrumMemberService.seok2DrumrePage(dsSearch);

		result.addDataSet("dsContactBoard", resultData);
		result.addDataSet("dsPagingInfo", rePage);

		return result;
	}
	
	//자유게시판 리스트 조회 및 페이징
	@RequestMapping(value = "nexa/contactComBoardList.do")
	public NexacroResult contactComBoardList(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> resultData = seok2DrumMemberService.contactComBoardList(dsSearch);
		NexacroResult result = new NexacroResult(); // result 값 초기화

		List<Map<String, Object>> reComPage = seok2DrumMemberService.seok2DrumReComPage(dsSearch);

		result.addDataSet("dsComBoard", resultData);
		// result.addVariable("totalCount", totalComCnt);
		result.addDataSet("dsPagingInfo", reComPage);

		return result;
	}
	
	//문의사항 글 쓰기 서비스
	@RequestMapping(value = "nexa/ConBoardWrite.do")
	public NexacroResult ConBoardWrite(@ParamDataSet(name = "dsContactBoard") List<Map<String, Object>> conBoardWrite) {

		seok2DrumMemberService.conBoardWrite(conBoardWrite);

		NexacroResult result = new NexacroResult();
		return result;

	}

	//자유게시판 글 쓰기 서비스
	@RequestMapping(value = "nexa/ComBoardWrite.do")
	public NexacroResult ComBoardWrite(@ParamDataSet(name = "dsComBoard") List<Map<String, Object>> comBoardWrite,
									   @ParamDataSet(name = "dsFile") List<Map<String, Object>> comBoardFileWrite) {

		seok2DrumMemberService.comBoardWrite(comBoardWrite);
		seok2DrumMemberService.comBoardFileWrite(comBoardFileWrite);

		NexacroResult result = new NexacroResult();
		return result;
	}
	
	//자유게시판 글 쓰기 하면서 보드넘버 가져오기 서비스
	@RequestMapping(value = "nexa/GetBoardKey.do")
	public NexacroResult GetBoardKey() {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		List<Map<String, Object>> boardKey = seok2DrumMemberService.GetBoardKey();
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsBoardKey", boardKey);

		return result;

	}

	@RequestMapping(value = "nexa/boardDetailView.do")
	public NexacroResult boardDetailView(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch,
			@ParamVariable(name = "COMBOARD_NO") String comUpDateHit) {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		seok2DrumMemberService.comUpDateHit(comUpDateHit);
		List<Map<String, Object>> resultData = seok2DrumMemberService.boardDetailView(dsSearch);
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsComBoard", resultData);

		return result;
	}

	@RequestMapping(value = "nexa/boardDetailFileList.do")
	public NexacroResult boardDetailFileList(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch,
											@ParamVariable(name = "COMBOARD_NO") String comUpDateHit) {

		NexacroResult result = new NexacroResult(); // result 값 초기화
		List<Map<String, Object>> resultFile = seok2DrumMemberService.boardFileList(dsSearch);

		result.addDataSet("dsFile", resultFile);

		return result;
	}

	@RequestMapping(value = "nexa/conBoardDetailView.do")
	public NexacroResult conBoardDetailView(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch,
											@ParamVariable(name = "paramHit") String paramHit) {

		log.debug("===================");
		log.debug("여기까지 도착?");
		log.debug("===================");

		seok2DrumMemberService.upDateHit(paramHit);
		List<Map<String, Object>> resultData = seok2DrumMemberService.conBoardDetailView(dsSearch);

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsContactBoard", resultData);

		return result;
	}

	@RequestMapping(value = "nexa/roomInfoList.do")
	public NexacroResult roomInfoList(@ParamDataSet(name = "dsRoom") List<Map<String, Object>> roomInfoList) {

		seok2DrumMemberService.roomInfoList(roomInfoList);

		NexacroResult result = new NexacroResult();
		return result;
	}

	@RequestMapping(value = "nexa/roomInfo.do")
	public NexacroResult roomInfo(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> resultData = seok2DrumMemberService.roomInfo(dsSearch);
		List<Map<String, Object>> rePage = seok2DrumMemberService.seok2DrumrRoomePage(dsSearch);

		result.addDataSet("dsRoom", resultData);
		result.addDataSet("dsPagingInfo", rePage);

		return result;
	}

	@RequestMapping(value = "nexa/roomDetailView.do")
	public NexacroResult roomDetailView(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		log.debug("===================");
		log.debug("검색중??");
		log.debug("===================");

		List<Map<String, Object>> resultData = seok2DrumMemberService.roomDetailView(dsSearch);
		List<Map<String, Object>> resultCal = seok2DrumMemberService.CalendarSelect(dsSearch);
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsRoom", resultData);
		result.addDataSet("dsCalendar", resultCal);
		
		return result;
	}

	@RequestMapping(value = "nexa/roomReserveCheck.do")
	public NexacroResult roomReserve(@ParamDataSet(name = "dsRoomReserve") List<Map<String, Object>> roomReserve,
									 @ParamVariable(name = "paramDate") String paramDate, 
									 @ParamVariable(name = "paramTitle") String paramTitle,
									 @ParamVariable(name = "paramStatus") String paramStatus) {

		int DateCnt = seok2DrumMemberService.paramDate(paramDate, paramTitle, paramStatus);

		NexacroResult result = new NexacroResult();

		result.addVariable("fnDateCnt", DateCnt);

		if (DateCnt > 0) {
			result.setErrorCode(-100); // 임의로 서버 코드 값 지정 가능
			result.setErrorMsg("정하신 날짜에 다른 예약이 있습니다.");
		} else {
			seok2DrumMemberService.roomReserve(roomReserve);
		}

		return result;
	}

	@RequestMapping(value = "nexa/roomReserve.do")
	public NexacroResult roomReserve(@ParamDataSet(name = "dsRoomReserve") List<Map<String, Object>> roomReserve) {

		NexacroResult result = new NexacroResult();
		seok2DrumMemberService.roomReserve(roomReserve);

		return result;
	}

	@RequestMapping(value = "nexa/selectReserveList.do")
	public NexacroResult selectReserveList(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		log.debug("=====================");
		log.debug(dsSearch.toString());
		log.debug("=====================");
		List<Map<String, Object>> resultData = seok2DrumMemberService.selectReserveList(dsSearch);
		List<Map<String, Object>> rePage = seok2DrumMemberService.selectReserveListPage(dsSearch);

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsRoomReserve", resultData);
		result.addDataSet("dsPagingInfo", rePage);

		return result;
	}

	@RequestMapping(value = "nexa/ReserveMemberList.do")
	public NexacroResult ReserveMemberList(@ParamVariable(name = "ROOM_STATUS") String rStatus,
										   @ParamVariable(name = "NAME") String rName,
										   Map<String, String> dsSearch) {
		
		log.debug("이름 넘어 오나?===============" + rName);
		
		dsSearch.put("rStatus", rStatus);
		dsSearch.put("rName", rName);
		
		List<Map<String, Object>> resultData = seok2DrumMemberService.selectAdminReserveList(dsSearch); // 디비에 있는 정보 매퍼 쿼리통해서 조회

		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsRoomReserve", resultData);
		
		return result;
	}

	// 댓글저장
	@RequestMapping(value = "nexa/saveReply.do")
	public NexacroResult saveReply(@ParamDataSet(name = "dsReply") List<Map<String, Object>> saveList) {

		seok2DrumMemberService.saveReply(saveList);

		NexacroResult result = new NexacroResult();
		return result;

	}

	// 댓글조회
	@RequestMapping(value = "nexa/selectReply.do")
	public NexacroResult selectReply(@ParamVariable(name = "paramNoticeSeq") String pNoticeSeq) {

		List<Map<String, Object>> resultData = seok2DrumMemberService.selectReply(pNoticeSeq);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsReply", resultData);
		return result;
	}

	@RequestMapping(value = "nexa/comReply.do")
	public NexacroResult comReply(@ParamDataSet(name = "dsComRep") Map<String, Object> comReply) {

		NexacroResult result = new NexacroResult();
		seok2DrumMemberService.comReply(comReply);

		return result;
	}

	@RequestMapping(value = "nexa/selectComReply.do")
	public NexacroResult selectComReply(@ParamVariable(name = "COMBOARD_NO") int selectReply) {

		NexacroResult result = new NexacroResult();
		List<Map<String, String>> dsComRep = seok2DrumMemberService.selectComReply(selectReply);
		result.addDataSet("dsComRep", dsComRep);
		return result;
	}

	// 댓글저장
	@RequestMapping(value = "nexa/comDeleteReply.do")
	public NexacroResult comDeleteReply(@ParamDataSet(name = "dsComRep") List<Map<String, Object>> comDeleteReply) {

		seok2DrumMemberService.comDeleteReply(comDeleteReply);

		NexacroResult result = new NexacroResult();
		return result;

	}
	
	@RequestMapping(value = "nexa/roomReserveCheckAdmin.do")
	public NexacroResult roomReserveCheckAdmin(@ParamDataSet(name = "dsSearch") Map<String, String> dsSearch) {

		List<Map<String, Object>> resultCal = seok2DrumMemberService.CalendarSelectAdmin(dsSearch);
		NexacroResult result = new NexacroResult(); // result 값 초기화

		result.addDataSet("dsCalendar", resultCal);
		
		return result;
	}
	
	
	//자유게시판 글 쓰기 서비스
	@RequestMapping(value = "nexa/ComBoardWriteDelete.do")
	public NexacroResult ComBoardWriteDelete(@ParamDataSet(name = "dsComBoard") List<Map<String, Object>> comBoardWrite,
									   @ParamDataSet(name = "dsFile") List<Map<String, Object>> comBoardFileWrite,
									   @ParamDataSet(name = "dsComRep") List<Map<String, Object>> comDeleteReply) {

		seok2DrumMemberService.comBoardWrite(comBoardWrite);
		seok2DrumMemberService.comBoardFileWrite(comBoardFileWrite);
		seok2DrumMemberService.comDeleteReply(comDeleteReply);

		NexacroResult result = new NexacroResult();
		return result;  
	}  

	
};

