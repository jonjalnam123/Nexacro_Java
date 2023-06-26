package com.edupack.edu.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
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
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NexaEduFileController {

	private Logger log = LoggerFactory.getLogger(this.getClass()); // 로깅 객체 생성

	private static final String SP = File.separator;
	private static final String sFilePath = "upload_file";
	private static String sUserPath = "";

	@RequestMapping(value = "nexa/uploadFile.do")
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
		ds.addColumn("COMBOARD_NO", PlatformDataType.STRING);
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

	@RequestMapping(value = "nexa/getFileList.do")
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

	@RequestMapping(value = "nexa/deleteFile.do")
	public NexacroResult deleteFile(@ParamVariable(name = "fileid") String pFileId) {

		String filePath = getFilePath();

		File rmFile = new File(filePath + SP + pFileId);
		rmFile.delete();

		NexacroResult result = new NexacroResult();
		result.setErrorCode(0);
		result.setErrorMsg("File Delete Success!!!");
		result.addVariable("fvDeleteFileName", pFileId);
		return result;
	}

	@RequestMapping(value = "nexa/downloadFile.do")
	public NexacroFileResult downloadFile(HttpServletRequest request) throws IOException {
		String filePath = getFilePath();
		String sFileId = request.getParameter("downFileId");
		String sFileDs = request.getParameter("downFileDs");
		log.debug("파일아이디============" + sFileId );
		File f = null;
		if (sFileId != null && !sFileId.equals("")) {
			String arrFile[] = sFileId.split(",");
			if (arrFile.length > 1) {
				// 멀티 다운로드 - 압축 다운로드 구현
			}

			else {
				
				// 단건 다운로드
				String sRealFile = filePath + "nexa_edu" + SP + sFileId;
				if(filePath.indexOf("nexa_edu") >= 0)
				{
					sRealFile = filePath + SP + sFileId;
					log.debug("넥사에듀 경로가 하나 더 추가 되는가???==============" + sRealFile);
				}
				
				log.debug("단건 다운로드 파일======================"+ sRealFile);
				f = new File(sRealFile);
			}
		} else if (sFileDs != null && !sFileDs.equals("")) {

			sFileDs = URLDecoder.decode(sFileDs, PlatformType.DEFAULT_CHAR_SET);
			DataSet objDs = new DataSet("dsDown");
			objDs.loadXml(sFileDs);

			if (objDs.getRowCount() > 1) {
				// 압축
				Random rnd = new Random();
				String rndStr = String.valueOf(rnd.nextInt(999999999) + rnd.nextInt(999999999));
				f = getDownZipFile(objDs, filePath, "CompressZip" + rndStr);
				
			} else {

			}

			log.debug(sFileDs);
		}

		NexacroFileResult result = new NexacroFileResult(f);
		return result;
	}

	private File getDownZipFile(DataSet objDs, String filePath, String compressName) throws IOException {
		String dumDir = "dummy" + SP;

		String files[] = new String[objDs.getRowCount()];

		for (int i = 0; i < files.length; i++) {
			files[i] = URLDecoder.decode(objDs.getString(i, "FILE_ID"), PlatformType.DEFAULT_CHAR_SET);
		}

		File tempDir = new File(filePath + dumDir);
		if (tempDir.exists() == false) {
			boolean mkdirs = tempDir.mkdirs();
			tempDir.setWritable(true);
		}

		int size = 1024;
		byte[] buf = new byte[size];
		String outZipNm = filePath + dumDir + compressName + ".zip";

		File file = new File(outZipNm);
		FileInputStream fis = null;
		ZipArchiveOutputStream zos = null;
		BufferedInputStream bis = null;

		try {
			zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(outZipNm)));
			for (int i = 0; i < files.length; i++) {
				zos.setEncoding("UTF-8");
				fis = new FileInputStream(filePath + SP + files[i]);
				bis = new BufferedInputStream(fis, size);

				zos.putArchiveEntry(new ZipArchiveEntry(files[i]));

				int len;
				while ((len = bis.read(buf, 0, size)) != -1) {
					zos.write(buf, 0, len);
				}
				bis.close();
				fis.close();
				zos.closeArchiveEntry();
			}
			zos.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (zos != null) {
				zos.close();
			}
			if (fis != null) {
				fis.close();
			}
			if (bis != null) {
				bis.close();
			}
		}

		return file;
	}

}
