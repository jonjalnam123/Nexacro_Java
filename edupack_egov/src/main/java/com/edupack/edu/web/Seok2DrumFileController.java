package com.edupack.edu.web;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Seok2DrumFileController {

	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	private static final String SP = File.separator;
	private static final String sFilePath = "upload_file";
	private static String sUserPath = "";

	@RequestMapping(value = "nexa/uploadRoomFile.do")
	public NexacroResult uplaodFile(MultipartHttpServletRequest request) throws IOException {

		DataSet dsFile = createDataSet();

		String sUserDir = request.getParameter("userPath");
		if (sUserDir != null && !sUserDir.equals("")) {
			sUserPath = sUserDir;
		}

		uplaodFile(request, dsFile);

		NexacroResult result = new NexacroResult();

		result.addDataSet(dsFile);
		result.setErrorCode(0);
		result.setErrorMsg("File Upload Success!!!");
		return result;
	}

	private DataSet createDataSet() {
		DataSet ds = new DataSet("dsFile");
		ds.addColumn("FILE_ID", PlatformDataType.STRING);
		ds.addColumn("FILE_NAME", PlatformDataType.STRING);
		ds.addColumn("FILE_SIZE", PlatformDataType.INT);

		return ds;
	}

	private void uplaodFile(MultipartHttpServletRequest request, DataSet dsFile) throws IOException {
		String uploadPath = getFilePath();

		File fileDir = new File(uploadPath);
		if (!fileDir.exists()) {
			fileDir.mkdirs();
			fileDir.setWritable(true);
		}

		Iterator<String> fileName = request.getFileNames();
		while (fileName.hasNext()) {
			MultipartFile mFile = request.getFile(fileName.next());

			String sFileName = mFile.getOriginalFilename();
			String sNewFileName = sFileName;

			File upFile = new File(uploadPath + SP + sFileName);

			if (upFile.exists()) {

				Date curDate = new Date();
				SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMddHHmmssSSS");
				sNewFileName = simpleDate.format(curDate) + "_" + sFileName;
				upFile = new File(uploadPath + SP + sNewFileName);
			}

			mFile.transferTo(upFile);

			int nRow = dsFile.newRow();
			dsFile.set(nRow, "FILE_ID", sNewFileName);
			dsFile.set(nRow, "FILE_NAME", sFileName);
			dsFile.set(nRow, "FILE_SIZE", upFile.length());
			

		}
	}

	@Autowired
	private WebApplicationContext appContext;

	private String getFilePath() {
		String sRealPath = appContext.getServletContext().getRealPath("/");
		String sFullPath = sRealPath + sFilePath + SP + sUserPath;

		log.debug("==============================================");
		log.debug("File Path:" + sFullPath);
		log.debug("==============================================");

		return sFullPath;
	}

	@RequestMapping(value = "nexa/getFileRoomList.do")
	public NexacroResult getFileList(@ParamVariable(name = "userPath") String pUserPath) {

		sUserPath = pUserPath;
		String filePath = getFilePath();

		DataSet resultDs = createDataSet();

		File file = new File(filePath);
		File[] arrFile = file.listFiles();

		for (int i = 0; i < arrFile.length; i++) {
			int nRow = resultDs.newRow();
			resultDs.set(nRow, "FILE_ID", arrFile[i].getName());
			resultDs.set(nRow, "FILE_NAME", arrFile[i].getName());
			resultDs.set(nRow, "FILE_SIZE", arrFile[i].length());
		}

		NexacroResult result = new NexacroResult();
		result.addDataSet(resultDs);
		result.setErrorCode(0);
		result.setErrorMsg("File List Success!!!");
		return result;
	}
}
