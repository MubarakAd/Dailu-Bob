"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import {
  Button,
  Dropdown,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import assets from "@/assets";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Page = () => {
  const {
    isOpen: isCheckBtn,
    onOpen: onCheckBtn,
    onOpenChange: onCheckBtnChange,
  } = useDisclosure();

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };
  const dropDownOptions = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  return (
    <section>
      <CommonHeader title="오퍼월 등록하기 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items center gap-8">
          <div className="flex items-center gap-7">
            <p className="min-w-[120px] font-bold text-mainBlack">썸네일</p>
            <button className="py-3 px-4 flex flex-col gap-2 rounded-[10px] border-1 border-lightBorder">
              <Image
                src={assets.importImage}
                alt="An example image"
                width={15}
                height={10}
                priority
              />
              <p className="text-sm font-semibold text-grayLight">추가</p>
            </button>
          </div>
          <div className="py-4 px-7 bg-[#FFEDED] rounded-[5px]"></div>
          <div className="py-4 px-7 bg-[#FFEDED]"></div>
          <div className="py-4 px-7 bg-[#FFEDED]"></div>
        </div>

        <div className="flex items-center gap-16 mt-7">
          <p className="min-w-[82px] font-bold text-mainBlack">광고 제목</p>
          <DropDown
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            selectStyles="w-[150px]"
          />

          <InputWithLabel
            labelStyles={labelStyle}
            label="진행 기간"
            type="date"
            inputStyles="w-[320px]"
          />

          <InputNoLabel type="date" inputStyles="w-[320px]" />
        </div>
        <div className="flex items-center gap-16  mt-7">
          <p className="min-w-[82px] font-bold text-mainBlack">광고 제목</p>

          <InputNoLabel inputStyles="w-[510px]" />

          <div className="flex gap-5">
            <InputWithLabel
              label="정상 가격"
              labelStyles={labelStyle}
              inputStyles="w-[100px]"
            />

            <div className="">
              <InputWithLabel
                label="진행 가격"
                labelStyles={labelStyle}
                inputStyles="w-[60px]"
              />
            </div>
            <div>
              <InputNoLabel inputStyles="w-[60px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-7">
          <p className="min-w-[140px] font-bold text-mainBlack">광고 제목</p>
          <InputNoLabel inputStyles="w-[90px]" />
          <InputWithLabel
            label="총 참여인원"
            inputStyles="w-[90px]"
            labelStyles={labelStyle}
          />
          <DropDownWithLabel
            title="앱 내 노출"
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            titleStyles={labelStyle}
            selectStyles="w-[110px]"
          />
          <span>당첨자</span>
          <Button
            onClick={onCheckBtn}
            className="py-3 px-4 border bg-white border-[#DCDCDC]"
          >
            {" "}
          </Button>

          <InputWithLabel
            label="당첨 가격"
            labelStyles={labelStyle}
            inputStyles="w-[80px]"
          />
          <InputWithLabel
            label="응모권 회수"
            labelStyles={labelStyle}
            inputStyles="w-[80px]"
          />
        </div>

        <div className="w-full min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-mainBlack">
            유의사항 및 상세 안내
          </p>
          <div className="w-full mt-4">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-8">
        <Button className="py-3 px-8 bg-mainBlack text-white">등록</Button>
      </div>
      <Modal
        isOpen={isCheckBtn}
        placement="center"
        onOpenChange={onCheckBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-6 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-mainBlack font-bold text-3xl text-center">
                  당첨자 정보 확인
                </h3>

                <div className="flex items-center gap-8">
                  <p className="min-w-[63px text-[#868F9A] font-bold">이름</p>
                  <p className="text-[#868F9A] text-sm">홍길동</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="min-w-[63px text-[#868F9A] font-bold">
                    전화번호
                  </p>
                  <p className="text-[#868F9A] text-sm">010-1111-1111</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="min-w-[63px text-[#868F9A] font-bold">주소</p>
                  <p className="text-[#FF5E18] text-sm">미 입력 상태</p>
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-8 rounded-md bg-[#ECEDF1] font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onCheckBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-[#ECEDF1] font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onCheckBtnChange();
                    }}
                  >
                    확인
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Page;
