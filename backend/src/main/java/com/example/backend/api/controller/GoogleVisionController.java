package com.example.backend.api.controller;

import com.example.backend.dto.CMRespDto;
import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
@RequestMapping(value = "/vision")
public class GoogleVisionController {

    @GetMapping("")
    public ResponseEntity<?> register() throws Exception {

        // Instantiates a client
        try (ImageAnnotatorClient vision = ImageAnnotatorClient.create()) {

            // The path to the image file to annotate
            //String fileName = "./resources/wakeupcat.jpg";
            String fileName = "C:\\Users\\sunny\\OneDrive\\바탕 화면\\hi\\backend\\src\\main\\java\\com\\example\\backend\\api\\controller\\1.jpg";

            // Reads the image file into memory
            Path path = Paths.get(fileName);
            byte[] data = Files.readAllBytes(path);
            ByteString imgBytes = ByteString.copyFrom(data);

            // Builds the image annotation request
            List<AnnotateImageRequest> requests = new ArrayList<>();
            Image img = Image.newBuilder().setContent(imgBytes).build();
            Feature feat = Feature.newBuilder().setType(Feature.Type.TEXT_DETECTION).build();
            AnnotateImageRequest request = AnnotateImageRequest.newBuilder()
                    .addFeatures(feat)
                    .setImage(img)
                    .build();
            requests.add(request);

            // Performs label detection on the image file
            BatchAnnotateImagesResponse response = vision.batchAnnotateImages(requests);
            List<AnnotateImageResponse> responses = response.getResponsesList();

            for (AnnotateImageResponse res : responses) {
                if (res.hasError()) {
                    System.out.printf("Error: %s\n", res.getError().getMessage());
                    return new ResponseEntity<>(new CMRespDto<>(-1, "ocr 검색 실패", null), HttpStatus.BAD_REQUEST);

                }

                for (EntityAnnotation annotation : res.getTextAnnotationsList()) {
                            System.out.println(annotation.getDescription());
                }
            }
        }

        return new ResponseEntity<>(new CMRespDto<>(1, "ocr 검색 완료", null), HttpStatus.OK);
    }

}
